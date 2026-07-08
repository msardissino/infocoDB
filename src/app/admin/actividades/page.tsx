"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./actividadesAdmin.module.css";

interface Activity {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  icon: string;
  image_url: string;
  content_markdown: string | null;
}

const ICONS = [
  { value: "users", label: "Gente / Grupo (users)" },
  { value: "leaf", label: "Naturaleza / Aire Libre (leaf)" },
  { value: "pencil", label: "Creatividad / Taller (pencil)" },
  { value: "music", label: "Música / Salida (music)" },
  { value: "utensils", label: "Cocina / Comida (utensils)" }
];

export default function ActividadesAdminPage() {
  const router = useRouter();
  const [authLoading, setAuthLoading] = useState(true);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [listLoading, setListLoading] = useState(true);

  // Form states
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("DENTRO DEL CENTRO");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [icon, setIcon] = useState("users");
  const [imageUrl, setImageUrl] = useState("");
  const [contentMarkdown, setContentMarkdown] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingId) {
      const generatedSlug = val
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setSlug(generatedSlug);
    }
  };

  // Check auth
  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setAuthLoading(false);
        fetchActivities();
      }
    }
    checkAuth();
  }, [router]);

  const fetchActivities = async () => {
    setListLoading(true);
    try {
      const { data, error } = await supabase
        .from("actividades")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setActivities(data || []);
    } catch (err: unknown) {
      console.error("Error al obtener actividades:", err);
      setErrorMsg("No se pudieron cargar las actividades principales.");
    } finally {
      setListLoading(false);
    }
  };

  const clearForm = () => {
    setTitle("");
    setSlug("");
    setCategory("DENTRO DEL CENTRO");
    setDescription("");
    setDate("");
    setTime("");
    setLocation("");
    setIcon("users");
    setImageUrl("");
    setContentMarkdown("");
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setSubmitting(true);

    const payload = {
      title,
      slug,
      category,
      description,
      date,
      time,
      location,
      icon,
      image_url: imageUrl,
      content_markdown: contentMarkdown || null
    };

    try {
      if (editingId) {
        // Update
        const { error } = await supabase
          .from("actividades")
          .update(payload)
          .eq("id", editingId);

        if (error) throw error;
        setSuccessMsg("¡Actividad actualizada correctamente!");
      } else {
        // Create
        const { error } = await supabase
          .from("actividades")
          .insert([payload]);

        if (error) throw error;
        setSuccessMsg("¡Actividad creada correctamente!");
      }
      clearForm();
      fetchActivities();
    } catch (err: unknown) {
      console.error("Error al guardar actividad:", err);
      const message = err instanceof Error ? err.message : "Ocurrió un error al guardar la actividad.";
      setErrorMsg(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditClick = (act: Activity) => {
    setEditingId(act.id);
    setTitle(act.title);
    setSlug(act.slug);
    setCategory(act.category);
    setDescription(act.description);
    setDate(act.date);
    setTime(act.time);
    setLocation(act.location);
    setIcon(act.icon);
    setImageUrl(act.image_url);
    setContentMarkdown(act.content_markdown || "");
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleDeleteClick = async (id: string, name: string) => {
    if (!confirm(`¿Estás seguro de que querés eliminar la actividad "${name}"?`)) {
      return;
    }

    setErrorMsg("");
    setSuccessMsg("");

    try {
      const { error } = await supabase
        .from("actividades")
        .delete()
        .eq("id", id);

      if (error) throw error;
      setSuccessMsg("¡Actividad eliminada correctamente!");
      fetchActivities();
      if (editingId === id) {
        clearForm();
      }
    } catch (err: unknown) {
      console.error("Error al eliminar actividad:", err);
      const message = err instanceof Error ? err.message : "Error al eliminar la actividad.";
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
          <h1 className={styles.title}>ADMINISTRAR ACTIVIDADES</h1>
        </div>

        <div className={styles.grid}>
          {/* Form Card */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              {editingId ? "EDITAR ACTIVIDAD" : "NUEVA ACTIVIDAD"}
            </h2>

            {errorMsg && <div className={styles.errorAlert}>{errorMsg}</div>}
            {successMsg && <div className={styles.successAlert}>{successMsg}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>TÍTULO *</label>
                <input
                  type="text"
                  className={styles.input}
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Ej: Cine + Charla"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>SLUG (URL) *</label>
                <input
                  type="text"
                  className={styles.input}
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="Ej: cine-charla"
                  required
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
                  <option value="DENTRO DEL CENTRO">DENTRO DEL CENTRO</option>
                  <option value="FUERA DEL CENTRO">FUERA DEL CENTRO</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>FECHA *</label>
                <input
                  type="text"
                  className={styles.input}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Ej: SÁB 24 DE MAYO"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>HORA *</label>
                <input
                  type="text"
                  className={styles.input}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="Ej: 15:00 HS"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>UBICACIÓN *</label>
                <input
                  type="text"
                  className={styles.input}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej: SALÓN PRINCIPAL"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>ÍCONO *</label>
                <select
                  className={styles.select}
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  required
                >
                  {ICONS.map((ic) => (
                    <option key={ic.value} value={ic.value}>
                      {ic.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>URL DE LA IMAGEN *</label>
                <input
                  type="url"
                  className={styles.input}
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>DESCRIPCIÓN BREVE *</label>
                <textarea
                  className={styles.textarea}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Breve resumen de la actividad..."
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>CONTENIDO DETALLADO (MARKDOWN, OPCIONAL)</label>
                <textarea
                  className={styles.textarea}
                  style={{ minHeight: "120px" }}
                  value={contentMarkdown}
                  onChange={(e) => setContentMarkdown(e.target.value)}
                  placeholder="Texto completo que aparecerá en la página de detalle..."
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
              ACTIVIDADES REGISTRADAS
            </h2>

            {listLoading ? (
              <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p style={{ fontFamily: "var(--font-text)", color: "var(--ink-mute)" }}>
                  Cargando actividades...
                </p>
              </div>
            ) : activities.length === 0 ? (
              <div className={styles.emptyState}>
                Aún no hay actividades principales registradas. ¡Cargá la primera a la izquierda!
              </div>
            ) : (
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Actividad</th>
                      <th>Categoría</th>
                      <th>Fecha/Hora</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((act) => (
                      <tr key={act.id}>
                        <td>
                          <div className={styles.activityRow}>
                            {act.image_url && (
                              <img src={act.image_url} alt={act.title} className={styles.thumbnail} />
                            )}
                            <div>
                              <strong>{act.title}</strong>
                              <div style={{ fontSize: "0.8rem", color: "var(--ink-mute)" }}>
                                /{act.slug}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`${styles.categoryTag} ${act.category.includes("DENTRO") ? styles.dentro : styles.fuera}`}>
                            {act.category}
                          </span>
                        </td>
                        <td>
                          <div>{act.date}</div>
                          <div style={{ fontSize: "0.85rem", color: "var(--ink-mute)" }}>{act.time}</div>
                        </td>
                        <td>
                          <div className={styles.actions}>
                            <button
                              onClick={() => handleEditClick(act)}
                              className={styles.editBtn}
                              title="Editar"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                              onClick={() => handleDeleteClick(act.id, act.title)}
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
