"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Breadcrumb } from "@/ui/Breadcrumb/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowLeft, 
  faCalendarAlt, 
  faClock, 
  faMapMarkerAlt, 
  faTags 
} from "@fortawesome/free-solid-svg-icons";
import { supabase } from "@/lib/supabase/client";
import styles from "./ActivityDetail.module.css";

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

export default function ActivityDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivity() {
      if (!slug) return;
      try {
        const { data, error } = await supabase
          .from("actividades")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) {
          console.error("Error al obtener la actividad:", error);
          setActivity(null);
        } else {
          setActivity(data);
        }
      } catch (err) {
        console.error("Error inesperado:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchActivity();
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.detailPage}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p style={{ fontFamily: "var(--font-display)", color: "var(--ink-mute)", letterSpacing: "0.05em" }}>
            CARGANDO DETALLES DE LA ACTIVIDAD...
          </p>
        </div>
      </div>
    );
  }

  if (!activity) {
    return (
      <div className={styles.detailPage}>
        <div className={styles.container}>
          <div className={styles.errorView}>
            <h1 className={styles.errorTitle}>ACTIVIDAD NO ENCONTRADA</h1>
            <p style={{ fontFamily: "var(--font-text)", color: "var(--ink-soft)" }}>
              No pudimos encontrar la actividad con la dirección &quot;/{slug}&quot;. Tal vez fue eliminada o la dirección es incorrecta.
            </p>
            <Link href="/actividades" className={styles.returnLink}>
              VOLVER A ACTIVIDADES
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className={styles.detailPage}>
      <div className={styles.container}>
        <div className={styles.topNav}>
          <button onClick={() => router.back()} className={styles.backButton}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>VOLVER</span>
          </button>
          <Breadcrumb 
            items={[
              { label: "ACTIVIDADES", path: "/actividades" },
              { label: activity.title.toUpperCase() }
            ]} 
          />
        </div>

        <div className={styles.layoutGrid}>
          {/* Main Content Column */}
          <div className={styles.mainContent}>
            {activity.image_url && (
              <div className={styles.imageContainer}>
                <img src={activity.image_url} alt={activity.title} className={styles.image} />
              </div>
            )}

            <span className={styles.categoryTag}>{activity.category}</span>
            
            <h1 className={styles.title}>{activity.title}</h1>
            
            <p className={styles.description}>{activity.description}</p>
            
            <div className={styles.detailBody}>
              {activity.content_markdown ? (
                activity.content_markdown.split("\n").map((paragraph, index) => {
                  if (!paragraph.trim()) return null;
                  return <p key={index}>{paragraph}</p>;
                })
              ) : (
                <p>
                  Te invitamos a participar de este encuentro grupal. Recordá consultar la fecha, horario y punto de encuentro en la tarjeta de detalles a la derecha. ¡Te esperamos!
                </p>
              )}
            </div>
          </div>

          {/* Sidebar Info Column */}
          <div className={styles.sidebarCard}>
            <h2 className={styles.sidebarTitle}>DETALLES</h2>
            
            <div className={styles.metaList}>
              <div className={styles.metaItem}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <div>
                  <div className={styles.metaLabel}>FECHA</div>
                  <div className={styles.metaValue}>{activity.date}</div>
                </div>
              </div>

              <div className={styles.metaItem}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div>
                  <div className={styles.metaLabel}>HORA</div>
                  <div className={styles.metaValue}>{activity.time}</div>
                </div>
              </div>

              <div className={styles.metaItem}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <div className={styles.metaLabel}>UBICACIÓN</div>
                  <div className={styles.metaValue}>{activity.location}</div>
                </div>
              </div>

              <div className={styles.metaItem}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faTags} />
                </div>
                <div>
                  <div className={styles.metaLabel}>TIPO DE ACTIVIDAD</div>
                  <div className={styles.metaValue}>{activity.category}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
