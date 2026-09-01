"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { SectionHero } from "@/ui/SectionHero/SectionHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarDay, 
  faTimes,
  faClock,
  faMapMarkerAlt,
  faUsers,
  faArrowRight,
  faSearchPlus,
  faImage
} from "@fortawesome/free-solid-svg-icons";
import { supabase } from "@/lib/supabase/client";
import { formatRichText } from "@/lib/formatText";
import styles from "./agenda.module.css";

interface AgendaEvent {
  id: string;
  title: string;
  description: string | null;
  date: string; // YYYY-MM-DD
  time: string | null;
  location: string | null;
  category: string;
  group_slug: string | null;
  image_url?: string | null;
}

const MONTHS = [
  "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
  "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

const CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "taller", label: "Talleres" },
  { id: "salida", label: "Salidas" },
  { id: "evento", label: "Eventos" },
  { id: "feriado", label: "Feriados / Sin Actividad" }
];

export default function AgendaPage() {
  const today = useMemo(() => new Date(), []);
  const [selectedTabDate, setSelectedTabDate] = useState<Date>(new Date(today.getFullYear(), today.getMonth(), 1));
  const [events, setEvents] = useState<AgendaEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<AgendaEvent | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  // Category filter
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const currentYear = selectedTabDate.getFullYear();
  const currentMonth = selectedTabDate.getMonth();

  // Generate the 3 tabs dynamically: Previous, Current, Next month
  const tabMonths = useMemo(() => {
    const prev = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const curr = new Date(today.getFullYear(), today.getMonth(), 1);
    const next = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    return [
      { date: prev, subLabel: "MES PASADO", name: MONTHS[prev.getMonth()] },
      { date: curr, subLabel: "MES ACTUAL", name: MONTHS[curr.getMonth()] },
      { date: next, subLabel: "MES SIGUIENTE", name: MONTHS[next.getMonth()] }
    ];
  }, [today]);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    const firstDay = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-01`;
    const lastDayVal = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDay = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(lastDayVal).padStart(2, "0")}`;

    try {
      const { data, error } = await supabase
        .from("agenda")
        .select("*")
        .gte("date", firstDay)
        .lte("date", lastDay)
        .order("date", { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (err) {
      console.error("Error al obtener eventos de la agenda:", err);
    } finally {
      setLoading(false);
    }
  }, [currentYear, currentMonth]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  // Lock scroll on background when modal or lightbox is open
  useEffect(() => {
    if (selectedEvent || lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent, lightboxImage]);

  // Keyboard accessibility: Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImage) {
          setLightboxImage(null);
        } else if (selectedEvent) {
          setSelectedEvent(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, selectedEvent]);

  // Filter events based on active category filter
  const filteredEvents = useMemo(() => {
    if (activeFilter === "all") return events;
    return events.filter(ev => ev.category === activeFilter);
  }, [events, activeFilter]);

  // Helper to parse dates into Day Number and Weekday Name
  const getDayInfo = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);
    const dayName = dateObj.toLocaleDateString("es-AR", { weekday: "short" }).toUpperCase().replace(".", "");
    return {
      dayNum: String(day).padStart(2, "0"),
      dayName: dayName
    };
  };

  const getGroupName = (slug: string | null) => {
    if (!slug) return "";
    const groupMap: Record<string, string> = {
      "campeones-del-flow": "Campeones del Flow",
      "buenas-vibras": "Buenas Vibras",
      "corazones-en-equipo": "Corazones en Equipo",
      "la-banda-colorida": "La Banda Colorida",
      "quienes-somos": "¿Quiénes somos?"
    };
    return groupMap[slug] || slug;
  };

  const getCategoryLabel = (catId: string) => {
    const match = CATEGORIES.find(c => c.id === catId);
    return match ? match.label : catId;
  };

  return (
    <main>
      <SectionHero
        variant="dark"
        category="AGENDA"
        subCategory="REVISTA INFORMATIVA"
        title="LO QUE VIENE: EVENTOS Y AGENDA"
        subtitle="Mantenete al tanto de los próximos talleres, salidas y fechas especiales."
        metadata={`EDICIÓN ${MONTHS[today.getMonth()]} ${today.getFullYear()}`}
        icon={faCalendarDay}
        backgroundImage="/images/covers/cover_agenda.jpeg"
      >
        <div className={styles.container}>

          {/* Monthly Navigation Tabs */}
          <div className={styles.magazineTabs} role="tablist" aria-label="Seleccionar mes de la agenda">
            {tabMonths.map((tab, index) => {
              const isActive = currentMonth === tab.date.getMonth() && currentYear === tab.date.getFullYear();
              return (
                <button
                  key={index}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedTabDate(tab.date)}
                  className={`${styles.monthTab} ${isActive ? styles.active : ""}`}
                >
                  <span>{tab.name}</span>
                  <span className={styles.monthLabel}>{tab.subLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Category Filter Chips */}
          <div className={styles.filterBar} role="group" aria-label="Filtrar por categoría">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                aria-pressed={activeFilter === cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`${styles.filterChip} ${activeFilter === cat.id ? styles.active : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Magazine List Feed */}
          {loading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <p style={{ fontFamily: "var(--font-display)", color: "var(--ink-mute)", letterSpacing: "0.05em" }}>
                CARGANDO AGENDA...
              </p>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className={styles.emptyState}>
              No hay eventos programados para este mes en la categoría seleccionada.
            </div>
          ) : (
            <div className={styles.eventsList}>
              {filteredEvents.map((ev) => {
                const { dayNum, dayName } = getDayInfo(ev.date);
                return (
                  <div key={ev.id} className={styles.eventCard}>
                    {/* Left Date Block */}
                    <div className={styles.dateStamp}>
                      <span className={styles.dateNumber}>{dayNum}</span>
                      <span className={styles.dateDayName}>{dayName}</span>
                    </div>

                    {/* Middle Details */}
                    <div className={styles.eventContent}>
                      <div className={styles.headerRow}>
                        <span className={`${styles.categoryTag} ${styles[ev.category]}`}>
                          {getCategoryLabel(ev.category)}
                        </span>
                        {ev.group_slug && (
                          <span className={styles.groupBadge}>
                            {getGroupName(ev.group_slug)}
                          </span>
                        )}
                      </div>

                      <h2 className={styles.eventTitle}>{ev.title}</h2>

                      <div className={styles.metaRow}>
                        {ev.time && (
                          <div className={styles.metaItem}>
                            <FontAwesomeIcon icon={faClock} />
                            <span>{ev.time}</span>
                          </div>
                        )}
                        {ev.location && (
                          <div className={styles.metaItem}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>{ev.location}</span>
                          </div>
                        )}
                      </div>

                      {ev.description && (
                        <div className={styles.shortDesc}>
                          {ev.description.length > 140 
                            ? `${ev.description.substring(0, 137)}...` 
                            : ev.description}
                        </div>
                      )}

                      <div className={styles.actionRow}>
                        <button 
                          className={styles.readMoreBtn}
                          onClick={() => setSelectedEvent(ev)}
                          aria-label={`Ver más detalles de ${ev.title}`}
                        >
                          VER DETALLES <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </div>

                    {/* Optional Card Thumbnail */}
                    {ev.image_url && (
                      <div 
                        className={styles.cardThumbnailWrapper}
                        onClick={() => setSelectedEvent(ev)}
                        title="Ver flyer y detalles del evento"
                      >
                        <img 
                          src={ev.image_url} 
                          alt={`Flyer de ${ev.title}`} 
                          className={styles.cardThumbnail}
                          loading="lazy"
                        />
                        <div className={styles.thumbnailOverlay}>
                          <FontAwesomeIcon icon={faImage} />
                          <span>FLYER</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </SectionHero>

      {/* Modal Detail Overlay */}
      {selectedEvent && (
        <div className={styles.modalOverlay} onClick={() => setSelectedEvent(null)}>
          <div 
            className={`${styles.modalContent} ${selectedEvent.image_url ? styles.modalWithFlyer : ""}`} 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalTitleWrapper}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span className={`${styles.categoryTag} ${styles[selectedEvent.category]}`}>
                    {getCategoryLabel(selectedEvent.category)}
                  </span>
                  {selectedEvent.group_slug && (
                    <span className={styles.groupBadge}>
                      {getGroupName(selectedEvent.group_slug)}
                    </span>
                  )}
                </div>
                <h3 id="modal-title" className={styles.modalTitle}>{selectedEvent.title}</h3>
              </div>
              <button 
                className={styles.closeBtn} 
                onClick={() => setSelectedEvent(null)}
                aria-label="Cerrar modal"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            {/* Modal Body: Two Columns if flyer exists */}
            <div className={`${styles.modalBody} ${selectedEvent.image_url ? styles.modalBodySplit : ""}`}>
              
              {/* Left Column: Flyer Showcase */}
              {selectedEvent.image_url && (
                <div className={styles.flyerCol}>
                  <div 
                    className={styles.flyerContainer}
                    onClick={() => setLightboxImage(selectedEvent.image_url!)}
                    title="Hacé clic para ver el flyer en pantalla completa"
                  >
                    <img 
                      src={selectedEvent.image_url} 
                      alt={`Flyer de ${selectedEvent.title}`} 
                      className={styles.flyerImage}
                    />
                    <div className={styles.flyerZoomBadge}>
                      <FontAwesomeIcon icon={faSearchPlus} />
                      <span>AMPLIAR FLYER</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Right Column: Info & Formatted Description */}
              <div className={styles.infoCol}>
                <div className={styles.modalMetaList}>
                  <div className={styles.modalMetaItem}>
                    <FontAwesomeIcon icon={faCalendarDay} />
                    <span>
                      {(() => {
                        const parts = selectedEvent.date.split("-");
                        if (parts.length !== 3) return selectedEvent.date;
                        return `${parts[2]}/${parts[1]}/${parts[0].substring(2)}`;
                      })()}
                    </span>
                  </div>
                  {selectedEvent.time && (
                    <div className={styles.modalMetaItem}>
                      <FontAwesomeIcon icon={faClock} />
                      <span>{selectedEvent.time}</span>
                    </div>
                  )}
                  {selectedEvent.location && (
                    <div className={styles.modalMetaItem}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>{selectedEvent.location}</span>
                    </div>
                  )}
                  {selectedEvent.group_slug && (
                    <div className={styles.modalMetaItem}>
                      <FontAwesomeIcon icon={faUsers} />
                      <span>{getGroupName(selectedEvent.group_slug)}</span>
                    </div>
                  )}
                </div>

                {selectedEvent.description && (
                  <div className={styles.eventDescription}>
                    {formatRichText(selectedEvent.description)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Fullscreen Overlay */}
      {lightboxImage && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxImage(null)}>
          <div className={styles.lightboxContainer} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.lightboxCloseBtn}
              onClick={() => setLightboxImage(null)}
              aria-label="Cerrar vista completa"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img 
              src={lightboxImage} 
              alt="Flyer ampliado en pantalla completa" 
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </main>
  );
}
