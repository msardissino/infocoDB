"use client";

import React, { useEffect, useState, useCallback } from "react";
import { SectionHero } from "@/ui/SectionHero/SectionHero";
import { Breadcrumb } from "@/ui/Breadcrumb/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCalendarDay, 
  faChevronLeft, 
  faChevronRight, 
  faTimes,
  faClock,
  faMapMarkerAlt,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { supabase } from "@/lib/supabase/client";
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
}

const MONTHS = [
  "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
  "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

const WEEKDAYS = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

const CATEGORIES = [
  { id: "taller", label: "Talleres" },
  { id: "salida", label: "Salidas" },
  { id: "evento", label: "Eventos" },
  { id: "feriado", label: "Feriados / Sin Actividad" }
];

export default function AgendaPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // Default to May 2026 as in original pages
  const [events, setEvents] = useState<AgendaEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<AgendaEvent | null>(null);
  
  // Category filters state (all active by default)
  const [activeFilters, setActiveFilters] = useState<string[]>(["taller", "salida", "evento", "feriado"]);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    // Start of month: YYYY-MM-01
    // End of month: YYYY-MM-lastDay
    const firstDay = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-01`;
    const lastDayVal = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDay = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(lastDayVal).padStart(2, "0")}`;

    try {
      const { data, error } = await supabase
        .from("agenda")
        .select("*")
        .gte("date", firstDay)
        .lte("date", lastDay);

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

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const toggleFilter = (catId: string) => {
    if (activeFilters.includes(catId)) {
      // Don't allow empty filters, keep at least one or toggle off
      if (activeFilters.length > 1) {
        setActiveFilters(activeFilters.filter(f => f !== catId));
      } else {
        // If it's the last one, toggle all back on
        setActiveFilters(["taller", "salida", "evento", "feriado"]);
      }
    } else {
      setActiveFilters([...activeFilters, catId]);
    }
  };

  // Calendar calculations
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Get day of week for 1st of month (0 = Monday, 6 = Sunday)
  const getStartingDay = () => {
    const day = new Date(currentYear, currentMonth, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };
  
  const startingDay = getStartingDay();
  
  // Days in previous month
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  // Generate grid cells
  const gridCells = [];

  // Prefix cells (days of previous month)
  for (let i = startingDay - 1; i >= 0; i--) {
    gridCells.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      dateString: `${currentMonth === 0 ? currentYear - 1 : currentYear}-${String(currentMonth === 0 ? 12 : currentMonth).padStart(2, "0")}-${String(prevMonthDays - i).padStart(2, "0")}`
    });
  }

  // Current month cells
  for (let i = 1; i <= daysInMonth; i++) {
    gridCells.push({
      day: i,
      isCurrentMonth: true,
      dateString: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`
    });
  }

  // Suffix cells (days of next month to complete row grid)
  const totalCellsSoFar = gridCells.length;
  const remainingCells = totalCellsSoFar % 7 === 0 ? 0 : 7 - (totalCellsSoFar % 7);
  for (let i = 1; i <= remainingCells; i++) {
    gridCells.push({
      day: i,
      isCurrentMonth: false,
      dateString: `${currentMonth === 11 ? currentYear + 1 : currentYear}-${String(currentMonth === 11 ? 1 : currentMonth + 2).padStart(2, "0")}-${String(i).padStart(2, "0")}`
    });
  }

  // Helper to check if dateString is today
  const isToday = (dateString: string) => {
    const today = new Date();
    const compareStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    return dateString === compareStr;
  };

  // Group name helper
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

  return (
    <main>
      <SectionHero
        variant="dark"
        category="AGENDA"
        subCategory="SECCIÓN"
        title="LO QUE VIENE: ACTIVIDADES Y EVENTOS"
        subtitle="Mantenete al tanto de los próximos talleres, salidas y fechas especiales."
        metadata={`AÑO ${currentYear}`}
        icon={faCalendarDay}
        backgroundImage="/images/covers/cover_agenda.jpeg"
      >
        <div className={styles.container}>
          <Breadcrumb items={[{ label: "AGENDA" }]} />

          <div className={styles.calendarWrapper}>
            {/* Header controls */}
            <div className={styles.controlsHeader}>
              <div className={styles.monthSelector}>
                <button onClick={handlePrevMonth} className={styles.navBtn} title="Mes anterior">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h2 className={styles.monthTitle}>
                  {MONTHS[currentMonth]} {currentYear}
                </h2>
                <button onClick={handleNextMonth} className={styles.navBtn} title="Mes siguiente">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>

              {/* Filters */}
              <div className={styles.filtersBar}>
                <span className={styles.filterLabel}>FILTRAR:</span>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => toggleFilter(cat.id)}
                    className={`${styles.filterBtn} ${activeFilters.includes(cat.id) ? styles.active : ""} ${styles[cat.id]}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Weekdays Header */}
            <div className={styles.calendarGrid}>
              {WEEKDAYS.map((day) => (
                <div key={day} className={styles.weekdayHeader}>
                  {day}
                </div>
              ))}
            </div>

            {/* Grid days */}
            {loading ? (
              <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p style={{ fontFamily: "var(--font-display)", color: "var(--ink-mute)", letterSpacing: "0.05em" }}>
                  CARGANDO CALENDARIO...
                </p>
              </div>
            ) : (
              <div className={styles.calendarGrid}>
                {gridCells.map((cell, idx) => {
                  // Find events for this specific date and filter them
                  const dayEvents = events
                    .filter((ev) => ev.date === cell.dateString)
                    .filter((ev) => activeFilters.includes(ev.category));

                  return (
                    <div
                      key={idx}
                      className={`${styles.dayCell} ${!cell.isCurrentMonth ? styles.otherMonth : ""} ${isToday(cell.dateString) ? styles.today : ""}`}
                    >
                      <div className={styles.dayHeader}>
                        <span className={styles.dayNumber}>{cell.day}</span>
                      </div>
                      <div className={styles.eventsList}>
                        {dayEvents.map((ev) => (
                          <div
                            key={ev.id}
                            className={`${styles.eventBadge} ${styles[ev.category]}`}
                            onClick={() => setSelectedEvent(ev)}
                            title={ev.title}
                          >
                            {ev.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </SectionHero>

      {/* Modal Detail Overlay */}
      {selectedEvent && (
        <div className={styles.modalOverlay} onClick={() => setSelectedEvent(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={`${styles.modalHeader} ${styles[selectedEvent.category]}`}>
              <h3 className={styles.modalTitle}>{selectedEvent.title}</h3>
              <button className={styles.closeBtn} onClick={() => setSelectedEvent(null)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.eventMetaList}>
                <div className={styles.metaItem}>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  <span>
                    {selectedEvent.date.split("-").reverse().join("/")}
                  </span>
                </div>
                {selectedEvent.time && (
                  <div className={styles.metaItem}>
                    <FontAwesomeIcon icon={faClock} />
                    <span>{selectedEvent.time}</span>
                  </div>
                )}
                {selectedEvent.location && (
                  <div className={styles.metaItem}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{selectedEvent.location}</span>
                  </div>
                )}
                {selectedEvent.group_slug && (
                  <div className={styles.metaItem}>
                    <FontAwesomeIcon icon={faUsers} />
                    <span className={styles.groupTag}>
                      {getGroupName(selectedEvent.group_slug)}
                    </span>
                  </div>
                )}
              </div>

              {selectedEvent.description && (
                <div className={styles.eventDescription}>
                  {selectedEvent.description}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
