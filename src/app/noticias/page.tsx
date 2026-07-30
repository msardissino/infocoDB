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
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { supabase } from "@/lib/supabase/client";
import styles from "./noticias.module.css";

interface NewsItem {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  icon: string;
  image_url: string;
  additional_images?: string[];
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

export default function NoticiasPage() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
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
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <main>
      <SectionHero
        variant="dark"
        category="NOTICIAS"
        subCategory="SECCIÓN"
        title="Noticias y Novedades"
        subtitle="Crónicas, relatos y toda la información de las actividades y momentos que compartimos dentro y fuera del centro."
        backgroundImage="/bg-actividades.jpg"
      >
        <div className={styles.timelineContainer}>

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
          ) : newsList.length === 0 ? (
            <div style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "var(--bg-elevated)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-xl)",
              color: "var(--ink-mute)"
            }}>
              No hay noticias publicadas en este momento.
            </div>
          ) : (
            <div className={styles.timeline}>
              {newsList.map((item) => (
                <Link 
                  key={item.slug} 
                  href={`/noticias/${item.slug}`}
                  className={styles.activityItem}
                >
                  <div className={styles.timelineMarker}>
                    <div className={styles.iconCircle}>
                      <FontAwesomeIcon icon={getIcon(item.icon)} />
                    </div>
                  </div>
                  
                  <div className={styles.card}>
                    <div className={styles.imageContainer}>
                      <img src={item.image_url} alt={item.title} className={styles.image} />
                      <div className={styles.imageOverlay}></div>
                    </div>
                    
                    <div className={styles.content}>
                      <span className={styles.itemCategory}>{item.category}</span>
                      <h2 className={styles.itemTitle}>{item.title}</h2>
                      <p className={styles.itemDescription}>{item.description}</p>
                      
                      <div className={styles.meta}>
                        <div className={styles.metaItem}>
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          <span>{item.date?.toUpperCase()}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <FontAwesomeIcon icon={faClock} />
                          <span>{item.time}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          <span>{item.location}</span>
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
