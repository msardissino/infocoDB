"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SectionHero } from "@/ui/SectionHero/SectionHero";
import { 
  faUsers, 
  faLeaf, 
  faPencilAlt, 
  faMusic, 
  faUtensils,
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { supabase } from "@/lib/supabase/client";
import styles from "./actividades.module.css";

interface Activity {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  icon: string;
  image_url: string;
}

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const getIcon = (iconName: string): IconDefinition => {
  const iconMap: Record<string, IconDefinition> = {
    users: faUsers,
    leaf: faLeaf,
    pencil: faPencilAlt,
    music: faMusic,
    utensils: faUtensils
  };
  return iconMap[iconName] || faUsers;
};

export default function ActividadesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivities() {
      try {
        const { data, error } = await supabase
          .from("actividades")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setActivities(data || []);
      } catch (err) {
        console.error("Error al obtener actividades:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchActivities();
  }, []);

  return (
    <main>
      <SectionHero
        variant="dark"
        category="ACTIVIDADES"
        subCategory="SECCIÓN"
        title="Próximas actividades"
        subtitle="Propuestas abiertas y especiales que realizamos dentro y fuera del centro. Espacios para encontrarnos, aprender, expresarnos y disfrutar."
        backgroundImage="/bg-actividades.jpg"
      >
        <div className={styles.timelineContainer}>
          <div className={styles.headerAction}>
            <Link href="/agenda" className={styles.agendaButton}>
              VER AGENDA COMPLETA <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          {loading ? (
            <div style={{ display: "flex", justifyContent: "center", padding: "4rem 0" }}>
              <div style={{
                width: "40px",
                height: "40px",
                border: "3px solid var(--line)",
                borderTop: "3px solid var(--accent)",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              }}></div>
              <style jsx>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : activities.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "var(--bg-elevated)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-xl)",
              color: "var(--ink-mute)"
            }}>
              No hay próximas actividades programadas en este momento.
            </div>
          ) : (
            <div className={styles.timeline}>
              {activities.map((act) => (
                <Link 
                  key={act.slug} 
                  href={`/actividades/${act.slug}`}
                  className={styles.activityItem}
                >
                  <div className={styles.timelineMarker}>
                    <div className={styles.iconCircle}>
                      <FontAwesomeIcon icon={getIcon(act.icon)} />
                    </div>
                  </div>
                  
                  <div className={styles.card}>
                    <div className={styles.imageContainer}>
                      <img src={act.image_url} alt={act.title} className={styles.image} />
                      <div className={styles.imageOverlay}></div>
                    </div>
                    
                    <div className={styles.content}>
                      <span className={styles.itemCategory}>{act.category}</span>
                      <h2 className={styles.itemTitle}>{act.title}</h2>
                      <p className={styles.itemDescription}>{act.description}</p>
                      
                      <div className={styles.meta}>
                        <div className={styles.metaItem}>
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          <span>{act.date}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <FontAwesomeIcon icon={faClock} />
                          <span>{act.time}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          <span>{act.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </SectionHero>
    </main>
  );
}
