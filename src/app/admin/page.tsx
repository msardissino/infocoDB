"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarAlt, 
  faNewspaper, 
  faSignOutAlt, 
  faEdit, 
  faTrash 
} from "@fortawesome/free-solid-svg-icons";
import { User } from "@supabase/supabase-js";
import styles from "./admin.module.css";

// Interface definitions
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

interface NewsItem {
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

const AGENDA_CATEGORIES = [
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

const NEWS_ICONS = [
  { value: "newspaper", label: "Noticia / Diario (newspaper)" },
  { value: "users", label: "Gente / Grupo (users)" },
  { value: "leaf", label: "Naturaleza / Aire Libre (leaf)" },
  { value: "pencil", label: "Creatividad / Taller (pencil)" },
  { value: "music", label: "Música / Salida (music)" },
  { value: "utensils", label: "Cocina / Comida (utensils)" }
];

export default function AdminDashboard() {
  const router = useRouter();
  const [authLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  
  // Navigation State: 'agenda' or 'noticias'
  const [activeTab, setActiveTab] = useState<"agenda" | "noticias">("agenda");

  // General Notification messages
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // --------------------------------------------------
  // 📅 TAB 1: AGENDA STATE & HANDLERS
  // --------------------------------------------------
  const [events, setEvents] = useState<AgendaEvent[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [agendaSearch, setAgendaSearch] = useState("");
  const [agendaCategoryFilter, setAgendaCategoryFilter] = useState("all");
  
  // Agenda Form States
  const [agTitle, setAgTitle] = useState("");
  const [agDescription, setAgDescription] = useState("");
  const [agDate, setAgDate] = useState("");
  const [agTime, setAgTime] = useState("");
  const [agLocation, setAgLocation] = useState("");
  const [agCategory, setAgCategory] = useState("taller");
  const [agGroupSlug, setAgGroupSlug] = useState("");
  const [agEditingId, setAgEditingId] = useState<string | null>(null);

  // --------------------------------------------------
  // 📰 TAB 2: NOTICIAS STATE & HANDLERS
  // --------------------------------------------------
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsSearch, setNewsSearch] = useState("");
  const [newsCategoryFilter, setNewsCategoryFilter] = useState("all");

  // News Form States
  const [noTitle, setNoTitle] = useState("");
  const [noSlug, setNoSlug] = useState("");
  const [noCategory, setNoCategory] = useState("DENTRO DEL CENTRO");
  const [noDescription, setNoDescription] = useState("");
  const [noDate, setNoDate] = useState("");
  const [noTime, setNoTime] = useState("");
  const [noLocation, setNoLocation] = useState("");
  const [noIcon, setNoIcon] = useState("newspaper");
  const [noImageUrl, setNoImageUrl] = useState("");
  const [noContentMarkdown, setNoContentMarkdown] = useState("");
  const [noEditingId, setNoEditingId] = useState<string | null>(null);

  // --------------------------------------------------
  // 🔒 AUTH CHECK & DATA LOADING
  // --------------------------------------------------
  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setUser(session.user);
        setAuthLoading(false);
        fetchEvents();
        fetchNews();
      }
    }
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  // Fetch Agenda Events
  const fetchEvents = async () => {
    setEventsLoading(true);
    try {
      const { data, error } = await supabase
        .from("agenda")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (err) {
      console.error("Error al obtener eventos:", err);
    } finally {
      setEventsLoading(false);
    }
  };

  // Fetch News
  const fetchNews = async () => {
    setNewsLoading(true);
    try {
      const { data, error } = await supabase
        .from("noticias")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setNewsList(data || []);
    } catch (err) {
      console.error("Error al obtener noticias:", err);
    } finally {
      setNewsLoading(false);
    }
  };

  // --------------------------------------------------
  // 📅 TAB 1: AGENDA LOGIC
  // --------------------------------------------------
  const clearAgendaForm = () => {
    setAgTitle("");
    setAgDescription("");
    setAgDate("");
    setAgTime("");
    setAgLocation("");
    setAgCategory("taller");
    setAgGroupSlug("");
    setAgEditingId(null);
  };

  const handleAgendaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setSubmitting(true);

    const payload = {
      title: agTitle,
      description: agDescription || null,
      date: agDate,
      time: agTime || null,
      location: agLocation || null,
      category: agCategory,
      group_slug: agGroupSlug || null
    };

    try {
      if (agEditingId) {
        const { error } = await supabase
          .from("agenda")
          .update(payload)
          .eq("id", agEditingId);

        if (error) throw error;
        setSuccessMsg("¡Evento de la agenda actualizado correctamente!");
      } else {
        const { error } = await supabase
          .from("agenda")
          .insert([payload]);

        if (error) throw error;
        setSuccessMsg("¡Evento de la agenda creado correctamente!");
      }
      clearAgendaForm();
      fetchEvents();
    } catch (err: unknown) {
      console.error("Error al guardar evento:", err);
      const message = err instanceof Error ? err.message : "Error al guardar el evento.";
      setErrorMsg(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAgendaEditClick = (event: AgendaEvent) => {
    setAgEditingId(event.id);
    setAgTitle(event.title);
    setAgDescription(event.description || "");
    setAgDate(event.date);
    setAgTime(event.time || "");
    setAgLocation(event.location || "");
    setAgCategory(event.category);
    setAgGroupSlug(event.group_slug || "");
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleAgendaDeleteClick = async (id: string, name: string) => {
    if (!confirm(`¿Estás seguro de que deseas eliminar el evento "${name}"?`)) {
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
      if (agEditingId === id) {
        clearAgendaForm();
      }
    } catch (err: unknown) {
      console.error("Error al eliminar evento:", err);
      const message = err instanceof Error ? err.message : "Error al eliminar el evento.";
      setErrorMsg(message);
    }
  };

  // Filtered Agenda events based on Search and Dropdown
  const filteredEvents = useMemo(() => {
    return events.filter(ev => {
      const matchesSearch = ev.title.toLowerCase().includes(agendaSearch.toLowerCase()) ||
                            (ev.description && ev.description.toLowerCase().includes(agendaSearch.toLowerCase()));
      const matchesCategory = agendaCategoryFilter === "all" || ev.category === agendaCategoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [events, agendaSearch, agendaCategoryFilter]);

  // Preview date block helper
  const previewDateInfo = useMemo(() => {
    if (!agDate) return { dayNum: "00", dayName: "DIA" };
    try {
      const [year, month, day] = agDate.split("-").map(Number);
      const dateObj = new Date(year, month - 1, day);
      const dayName = dateObj.toLocaleDateString("es-AR", { weekday: "short" }).toUpperCase().replace(".", "");
      return {
        dayNum: String(day).padStart(2, "0"),
        dayName: dayName
      };
    } catch {
      return { dayNum: "00", dayName: "DIA" };
    }
  }, [agDate]);

  // --------------------------------------------------
  // 📰 TAB 2: NOTICIAS LOGIC
  // --------------------------------------------------
  const handleNewsTitleChange = (val: string) => {
    setNoTitle(val);
    if (!noEditingId) {
      const generatedSlug = val
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setNoSlug(generatedSlug);
    }
  };

  const clearNewsForm = () => {
    setNoTitle("");
    setNoSlug("");
    setNoCategory("DENTRO DEL CENTRO");
    setNoDescription("");
    setNoDate("");
    setNoTime("");
    setNoLocation("");
    setNoIcon("newspaper");
    setNoImageUrl("");
    setNoContentMarkdown("");
    setNoEditingId(null);
  };

  const handleNewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setSubmitting(true);

    const payload = {
      title: noTitle,
      slug: noSlug,
      category: noCategory,
      description: noDescription,
      date: noDate,
      time: noTime,
      location: noLocation,
      icon: noIcon,
      image_url: noImageUrl,
      content_markdown: noContentMarkdown || null
    };

    try {
      if (noEditingId) {
        const { error } = await supabase
          .from("noticias")
          .update(payload)
          .eq("id", noEditingId);

        if (error) throw error;
        setSuccessMsg("¡Noticia actualizada correctamente!");
      } else {
        const { error } = await supabase
          .from("noticias")
          .insert([payload]);

        if (error) throw error;
        setSuccessMsg("¡Noticia creada correctamente!");
      }
      clearNewsForm();
      fetchNews();
    } catch (err: unknown) {
      console.error("Error al guardar noticia:", err);
      const message = err instanceof Error ? err.message : "Error al guardar la noticia.";
      setErrorMsg(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleNewsEditClick = (item: NewsItem) => {
    setNoEditingId(item.id);
    setNoTitle(item.title);
    setNoSlug(item.slug);
    setNoCategory(item.category);
    setNoDescription(item.description);
    setNoDate(item.date);
    setNoTime(item.time);
    setNoLocation(item.location);
    setNoIcon(item.icon);
    setNoImageUrl(item.image_url);
    setNoContentMarkdown(item.content_markdown || "");
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleNewsDeleteClick = async (id: string, name: string) => {
    if (!confirm(`¿Estás seguro de que deseas eliminar la noticia "${name}"?`)) {
      return;
    }
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const { error } = await supabase
        .from("noticias")
        .delete()
        .eq("id", id);

      if (error) throw error;
      setSuccessMsg("¡Noticia eliminada correctamente!");
      fetchNews();
      if (noEditingId === id) {
        clearNewsForm();
      }
    } catch (err: unknown) {
      console.error("Error al eliminar noticia:", err);
      const message = err instanceof Error ? err.message : "Error al eliminar la noticia.";
      setErrorMsg(message);
    }
  };

  // Filtered News based on Search and Dropdown
  const filteredNews = useMemo(() => {
    return newsList.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(newsSearch.toLowerCase()) ||
                            item.description.toLowerCase().includes(newsSearch.toLowerCase());
      const matchesCategory = newsCategoryFilter === "all" || item.category === newsCategoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [newsList, newsSearch, newsCategoryFilter]);

  if (authLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>VERIFICANDO SESIÓN...</p>
      </div>
    );
  }

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        {/* Main Admin Header */}
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>ADMINISTRACIÓN GENERAL</h1>
            <p style={{ fontFamily: "var(--font-text)", color: "var(--ink-mute)", fontSize: "0.9rem", marginTop: "0.25rem" }}>
              Conectado como: {user?.email}
            </p>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            CERRAR SESIÓN
          </button>
        </header>

        {/* Tab Navigation Menu */}
        <div className={styles.adminTabs}>
          <button 
            className={`${styles.tabBtn} ${activeTab === "agenda" ? styles.active : ""}`}
            onClick={() => { setActiveTab("agenda"); setErrorMsg(""); setSuccessMsg(""); }}
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            GESTIONAR AGENDA
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === "noticias" ? styles.active : ""}`}
            onClick={() => { setActiveTab("noticias"); setErrorMsg(""); setSuccessMsg(""); }}
          >
            <FontAwesomeIcon icon={faNewspaper} />
            GESTIONAR NOTICIAS
          </button>
        </div>

        {/* Form status messages */}
        {errorMsg && <div className={styles.errorAlert}>{errorMsg}</div>}
        {successMsg && <div className={styles.successAlert}>{successMsg}</div>}

        {/* -------------------------------------------------- */}
        {/* 📅 TAB 1: WORKSPACE AGENDA */}
        {/* -------------------------------------------------- */}
        {activeTab === "agenda" && (
          <div className={styles.workspace}>
            {/* Form & Preview Column */}
            <div>
              <div className={styles.formCard}>
                <h2 className={styles.sectionTitle}>
                  {agEditingId ? "EDITAR EVENTO AGENDA" : "NUEVO EVENTO AGENDA"}
                </h2>

                <form onSubmit={handleAgendaSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>TÍTULO DEL EVENTO *</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={agTitle}
                      onChange={(e) => setAgTitle(e.target.value)}
                      placeholder="Ej: Salida recreativa"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>FECHA *</label>
                    <input
                      type="date"
                      className={styles.input}
                      value={agDate}
                      onChange={(e) => setAgDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>HORA (OPCIONAL)</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={agTime}
                      onChange={(e) => setAgTime(e.target.value)}
                      placeholder="Ej: 16:00 HS"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>UBICACIÓN (OPCIONAL)</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={agLocation}
                      onChange={(e) => setAgLocation(e.target.value)}
                      placeholder="Ej: Parque Centenario"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>CATEGORÍA *</label>
                    <select
                      className={styles.select}
                      value={agCategory}
                      onChange={(e) => setAgCategory(e.target.value)}
                      required
                    >
                      {AGENDA_CATEGORIES.map((cat) => (
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
                      value={agGroupSlug}
                      onChange={(e) => setAgGroupSlug(e.target.value)}
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
                      value={agDescription}
                      onChange={(e) => setAgDescription(e.target.value)}
                      placeholder="Detalle de qué trata el evento..."
                    />
                  </div>

                  <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.submitBtn} disabled={submitting}>
                      {submitting ? "GUARDANDO..." : agEditingId ? "ACTUALIZAR" : "CREAR"}
                    </button>
                    {agEditingId && (
                      <button type="button" className={styles.cancelBtn} onClick={clearAgendaForm}>
                        CANCELAR
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* LIVE PREVIEW WIDGET */}
              <div className={styles.previewSection}>
                <span className={styles.previewLabel}>VISTA PREVIA EN TIEMPO REAL (M3):</span>
                <div style={{
                  padding: "1.5rem",
                  border: "1px solid var(--line)",
                  borderRadius: "20px",
                  background: "var(--paper)",
                  display: "flex",
                  gap: "1.25rem",
                  boxShadow: "var(--elevation-1)"
                }}>
                  {/* Left Date Stamp */}
                  <div style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "var(--cream)",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid var(--line-solid)",
                    flexShrink: 0
                  }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: "700", color: "var(--ink)", lineHeight: 1 }}>
                      {previewDateInfo.dayNum}
                    </span>
                    <span style={{ fontFamily: "var(--font-text)", fontSize: "0.7rem", fontWeight: "800", color: "var(--ink-mute)", marginTop: "0.1rem" }}>
                      {previewDateInfo.dayName}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className={`${styles.categoryTag} ${styles[agCategory]}`} style={{ fontSize: "0.7rem" }}>
                        {agCategory.toUpperCase()}
                      </span>
                      {agGroupSlug && (
                        <span style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--brand-blue)", backgroundColor: "rgba(0,80,181,0.06)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                          {agGroupSlug.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--ink)", margin: 0 }}>
                      {agTitle || "Título del Evento"}
                    </h3>
                    <div style={{ display: "flex", gap: "1rem", fontSize: "0.8rem", color: "var(--ink-mute)" }}>
                      {agTime && <div>🕒 {agTime}</div>}
                      {agLocation && <div>📍 {agLocation}</div>}
                    </div>
                    {agDescription && (
                      <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: 1.4 }}>
                        {agDescription}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* List & Filtering Column */}
            <div className={styles.listContainer}>
              <div className={styles.searchBar}>
                <input
                  type="text"
                  className={styles.searchInput}
                  value={agendaSearch}
                  onChange={(e) => setAgendaSearch(e.target.value)}
                  placeholder="Buscar evento por título o descripción..."
                />
                <select
                  className={styles.filterSelect}
                  value={agendaCategoryFilter}
                  onChange={(e) => setAgendaCategoryFilter(e.target.value)}
                >
                  <option value="all">Todas las categorías</option>
                  {AGENDA_CATEGORIES.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              {eventsLoading ? (
                <div className={styles.loadingContainer} style={{ minHeight: "200px" }}>
                  <div className={styles.spinner}></div>
                  <p style={{ fontFamily: "var(--font-text)", color: "var(--ink-mute)" }}>Cargando eventos...</p>
                </div>
              ) : filteredEvents.length === 0 ? (
                <div className={styles.emptyState}>No se encontraron eventos cargados.</div>
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
                      {filteredEvents.map((ev) => (
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
                                onClick={() => handleAgendaEditClick(ev)}
                                className={styles.editBtn}
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                              <button
                                onClick={() => handleAgendaDeleteClick(ev.id, ev.title)}
                                className={styles.deleteBtn}
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
        )}

        {/* -------------------------------------------------- */}
        {/* 📰 TAB 2: WORKSPACE NOTICIAS */}
        {/* -------------------------------------------------- */}
        {activeTab === "noticias" && (
          <div className={styles.workspace}>
            {/* Form & Preview Column */}
            <div>
              <div className={styles.formCard}>
                <h2 className={styles.sectionTitle}>
                  {noEditingId ? "EDITAR NOTICIA" : "NUEVA NOTICIA"}
                </h2>

                <form onSubmit={handleNewsSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>TÍTULO *</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={noTitle}
                      onChange={(e) => handleNewsTitleChange(e.target.value)}
                      placeholder="Ej: Gran torneo de fútbol"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>SLUG (URL) *</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={noSlug}
                      onChange={(e) => setNoSlug(e.target.value)}
                      placeholder="Ej: gran-torneo-futbol"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>CATEGORÍA *</label>
                    <select
                      className={styles.select}
                      value={noCategory}
                      onChange={(e) => setNoCategory(e.target.value)}
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
                      value={noDate}
                      onChange={(e) => setNoDate(e.target.value)}
                      placeholder="Ej: SÁB 24 DE MAYO"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>HORA *</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={noTime}
                      onChange={(e) => setNoTime(e.target.value)}
                      placeholder="Ej: 15:00 HS"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>UBICACIÓN *</label>
                    <input
                      type="text"
                      className={styles.input}
                      value={noLocation}
                      onChange={(e) => setNoLocation(e.target.value)}
                      placeholder="Ej: SALÓN PRINCIPAL"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>ÍCONO *</label>
                    <select
                      className={styles.select}
                      value={noIcon}
                      onChange={(e) => setNoIcon(e.target.value)}
                      required
                    >
                      {NEWS_ICONS.map((ic) => (
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
                      value={noImageUrl}
                      onChange={(e) => setNoImageUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/photo-..."
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>DESCRIPCIÓN BREVE *</label>
                    <textarea
                      className={styles.textarea}
                      value={noDescription}
                      onChange={(e) => setNoDescription(e.target.value)}
                      placeholder="Breve resumen de la noticia..."
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>CONTENIDO DETALLADO (MARKDOWN, OPCIONAL)</label>
                    <textarea
                      className={styles.textarea}
                      style={{ minHeight: "100px" }}
                      value={noContentMarkdown}
                      onChange={(e) => setNoContentMarkdown(e.target.value)}
                      placeholder="Texto completo de la noticia (Markdown)..."
                    />
                  </div>

                  <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.submitBtn} disabled={submitting}>
                      {submitting ? "GUARDANDO..." : noEditingId ? "ACTUALIZAR" : "CREAR"}
                    </button>
                    {noEditingId && (
                      <button type="button" className={styles.cancelBtn} onClick={clearNewsForm}>
                        CANCELAR
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* LIVE PREVIEW WIDGET */}
              <div className={styles.previewSection}>
                <span className={styles.previewLabel}>VISTA PREVIA EN TIEMPO REAL (TARJETA):</span>
                <div style={{
                  border: "1px solid var(--line)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "var(--paper)",
                  boxShadow: "var(--elevation-1)"
                }}>
                  {noImageUrl && (
                    <div style={{ height: "160px", width: "100%", position: "relative" }}>
                      <img src={noImageUrl} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  )}
                  <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <span className={`${styles.categoryTag} ${noCategory.includes("DENTRO") ? styles.dentro : styles.fuera}`} style={{ fontSize: "0.7rem" }}>
                      {noCategory}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", color: "var(--ink)", margin: 0 }}>
                      {noTitle || "Título de la Noticia"}
                    </h3>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: 1.4 }}>
                      {noDescription || "Descripción corta de la novedad."}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", fontSize: "0.75rem", color: "var(--ink-mute)", borderTop: "1px solid var(--line)", paddingTop: "0.6rem", marginTop: "0.4rem" }}>
                      {noDate && <div>📅 {noDate}</div>}
                      {noTime && <div>🕒 {noTime}</div>}
                      {noLocation && <div>📍 {noLocation}</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* List & Filtering Column */}
            <div className={styles.listContainer}>
              <div className={styles.searchBar}>
                <input
                  type="text"
                  className={styles.searchInput}
                  value={newsSearch}
                  onChange={(e) => setNewsSearch(e.target.value)}
                  placeholder="Buscar noticia por título o descripción..."
                />
                <select
                  className={styles.filterSelect}
                  value={newsCategoryFilter}
                  onChange={(e) => setNewsCategoryFilter(e.target.value)}
                >
                  <option value="all">Todas las categorías</option>
                  <option value="DENTRO DEL CENTRO">DENTRO DEL CENTRO</option>
                  <option value="FUERA DEL CENTRO">FUERA DEL CENTRO</option>
                </select>
              </div>

              {newsLoading ? (
                <div className={styles.loadingContainer} style={{ minHeight: "200px" }}>
                  <div className={styles.spinner}></div>
                  <p style={{ fontFamily: "var(--font-text)", color: "var(--ink-mute)" }}>Cargando noticias...</p>
                </div>
              ) : filteredNews.length === 0 ? (
                <div className={styles.emptyState}>No se encontraron noticias cargadas.</div>
              ) : (
                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Noticia</th>
                        <th>Categoría</th>
                        <th>Fecha/Hora</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredNews.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className={styles.activityRow}>
                              {item.image_url && (
                                <img src={item.image_url} alt={item.title} className={styles.thumbnail} />
                              )}
                              <div>
                                <strong>{item.title}</strong>
                                <div style={{ fontSize: "0.8rem", color: "var(--ink-mute)" }}>
                                  /{item.slug}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`${styles.categoryTag} ${item.category.includes("DENTRO") ? styles.dentro : styles.fuera}`}>
                              {item.category}
                            </span>
                          </td>
                          <td>
                            <div>{item.date}</div>
                            <div style={{ fontSize: "0.85rem", color: "var(--ink-mute)" }}>{item.time}</div>
                          </td>
                          <td>
                            <div className={styles.actions}>
                              <button
                                onClick={() => handleNewsEditClick(item)}
                                className={styles.editBtn}
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                              <button
                                onClick={() => handleNewsDeleteClick(item.id, item.title)}
                                className={styles.deleteBtn}
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
        )}
      </div>
    </div>
  );
}
