"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./agendaAdmin.module.css";

interface AgendaEvent {
  id: string;
  title: string;
  description: string | null;
  date: string;
  time: string | null;
  location: string | null;
  category: string;
  group_slug: string | null;
}

const CATEGORIES = [
  { value: "taller", label: "Taller" },
  { value: "salida", label: "Salida" },
  { value: "evento", label: "Evento" },
  { value: "feriado", label: "Feriado / Sin Actividad" }
];

const GROUPS = [
  { value: "campeones-del-flow", label: "Campeones del Flow" },
  { value: "buenas-vibras", label: "Buenas Vibras" },
  { value: "corazones-en-equipo", label: "Corazones en Equipo" },
  { value: "la-banda-colorida", label: "La Banda Colorida" },
  { value: "quienes-somos", label: "¿Quiénes somos?" }
];

export default function AgendaAdminPage() {
  const router = useRouter();
  const [authLoading, setAuthLoading] = useState(true);
  const [events, setEvents] = useState<AgendaEvent[]>([]);
  const [listLoading, setListLoading] = useState(true);

  // Form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("taller");
  const [groupSlug, setGroupSlug] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Check auth
  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setAuthLoading(false);
        fetchEvents();
      }
    }
    checkAuth();
  }, [router]);

  const fetchEvents = async () => {
    setListLoading(true);
    try {
      const { data, error } = await supabase
        .from("agenda")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (err: unknown) {
      console.error("Error al obtener eventos:", err);
      setErrorMsg("No se pudieron cargar los eventos de la agenda.");
    } finally {
      setListLoading(false);
    }
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
    setLocation("");
    setCategory("taller");
    setGroupSlug("");
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setSubmitting(true);

    const payload = {
      title,
      description: description || null,
      date,
      time: time || null,
      location: location || null,
      category,
      group_slug: groupSlug || null
    };

    try {
      if (editingId) {
        // Update
        const { error } = await supabase
          .from("agenda")
          .update(payload)
          .eq("id", editingId);

        if (error) throw error;
        setSuccessMsg("¡Evento actualizado correctamente!");
      } else {
        // Create
        const { error } = await supabase
          .from("agenda")
          .insert([payload]);

        if (error) throw error;
        setSuccessMsg("¡Evento creado correctamente!");
      }
      clearForm();
      fetchEvents();
    } catch (err: unknown) {
      console.error("Error al guardar evento:", err);
      const message = err instanceof Error ? err.message : "Ocurrió un error al guardar el evento.";
      setErrorMsg(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditClick = (event: AgendaEvent) => {
    setEditingId(event.id);
    setTitle(event.title);
    setDescription(event.description || "");
    setDate(event.date);
    setTime(event.time || "");
    setLocation(event.location || "");
    setCategory(event.category);
    setGroupSlug(event.group_slug || "");
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleDeleteClick = async (id: string, name: string) => {
    if (!confirm(`¿Estás seguro de que querés eliminar el evento "${name}"?`)) {
      return;
    }

    setErrorMsg("");
    setSuccessMsg("");

    try {
      const { error } = await supabase
        .from("agenda")
        .delete()
        .eq("id", id);

      if (error) throw error;
      setSuccessMsg("¡Evento eliminado correctamente!");
      fetchEvents();
      if (editingId === id) {
        clearForm();
      }
    } catch (err: unknown) {
      console.error("Error al eliminar evento:", err);
      const message = err instanceof Error ? err.message : "Error al eliminar el evento.";
      setErrorMsg(message);
    }
  };

  const handleCancelEdit = () => {
    clearForm();
    setErrorMsg("");
    setSuccessMsg("");
  };

  if (authLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p style={{ fontFamily: "var(--font-display)", color: "var(--ink-mute)", letterSpacing: "0.05em" }}>
          VERIFICANDO ACCESO...
        </p>
      </div>
    );
  }

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <div className={styles.topNav}>
          <Link href="/admin" className={styles.backBtn}>
            <FontAwesomeIcon icon={faArrowLeft} />
            PANEL
          </Link>
          <h1 className={styles.title}>ADMINISTRAR AGENDA</h1>
        </div>

        <div className={styles.grid}>
          {/* Form Card */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              {editingId ? "EDITAR EVENTO" : "NUEVO EVENTO"}
            </h2>

            {errorMsg && <div className={styles.errorAlert}>{errorMsg}</div>}
            {successMsg && <div className={styles.successAlert}>{successMsg}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>TÍTULO DEL EVENTO *</label>
                <input
                  type="text"
                  className={styles.input}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ej: Salida recreativa"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>FECHA *</label>
                <input
                  type="date"
                  className={styles.input}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>HORA (OPCIONAL)</label>
                <input
                  type="text"
                  className={styles.input}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Ej: 16:00 HS"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>UBICACIÓN (OPCIONAL)</label>
                <input
                  type="text"
                  className={styles.input}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej: Parque Centenario"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>CATEGORÍA *</label>
                <select
                  className={styles.select}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>GRUPO COORDINADOR (OPCIONAL)</label>
                <select
                  className={styles.select}
                  value={groupSlug}
                  onChange={(e) => setGroupSlug(e.target.value)}
                >
                  <option value="">Ninguno / General</option>
                  {GROUPS.map((group) => (
                    <option key={group.value} value={group.value}>
                      {group.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>DESCRIPCIÓN (OPCIONAL)</label>
                <textarea
                  className={styles.textarea}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detalle sobre de qué trata la actividad..."
                />
              </div>

              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitBtn} disabled={submitting}>
                  {submitting ? "GUARDANDO..." : editingId ? "ACTUALIZAR" : "CREAR"}
                </button>
                {editingId && (
                  <button type="button" className={styles.cancelBtn} onClick={handleCancelEdit}>
                    CANCELAR
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* List Card */}
          <div>
            <h2 className={styles.cardTitle} style={{ borderBottom: "none", marginBottom: "1rem" }}>
              EVENTOS REGISTRADOS
            </h2>

            {listLoading ? (
              <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p style={{ fontFamily: "var(--font-text)", color: "var(--ink-mute)" }}>
                  Cargando eventos...
                </p>
              </div>
            ) : events.length === 0 ? (
              <div className={styles.emptyState}>
                Aún no hay eventos registrados en la agenda. ¡Cargá el primero a la izquierda!
              </div>
            ) : (
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Evento</th>
                      <th>Categoría</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((ev) => (
                      <tr key={ev.id}>
                        <td style={{ whiteSpace: "nowrap" }}>
                          {ev.date.split("-").reverse().join("/")}
                        </td>
                        <td>
                          <strong>{ev.title}</strong>
                          {ev.time && <div style={{ fontSize: "0.85rem", color: "var(--ink-mute)" }}>{ev.time}</div>}
                        </td>
                        <td>
                          <span className={`${styles.categoryTag} ${styles[ev.category]}`}>
                            {ev.category}
                          </span>
                        </td>
                        <td>
                          <div className={styles.actions}>
                            <button
                              onClick={() => handleEditClick(ev)}
                              className={styles.editBtn}
                              title="Editar"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                              onClick={() => handleDeleteClick(ev.id, ev.title)}
                              className={styles.deleteBtn}
                              title="Eliminar"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
