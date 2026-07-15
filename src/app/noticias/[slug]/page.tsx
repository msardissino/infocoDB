"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowLeft, 
  faCalendarAlt, 
  faClock, 
  faMapMarkerAlt, 
  faTags 
} from "@fortawesome/free-solid-svg-icons";
import { supabase } from "@/lib/supabase/client";
import styles from "./NewsDetail.module.css";

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

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      if (!slug) return;
      try {
        const { data, error } = await supabase
          .from("noticias")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) {
          console.error("Error al obtener la noticia:", error);
          setNews(null);
        } else {
          setNews(data);
        }
      } catch (err) {
        console.error("Error inesperado:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.detailPage}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p style={{ fontFamily: "var(--font-display)", color: "var(--ink-mute)", letterSpacing: "0.05em" }}>
            CARGANDO DETALLES DE LA NOTICIA...
          </p>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className={styles.detailPage}>
        <div className={styles.container}>
          <div className={styles.errorView}>
            <h1 className={styles.errorTitle}>NOTICIA NO ENCONTRADA</h1>
            <p style={{ fontFamily: "var(--font-text)", color: "var(--ink-soft)" }}>
              No pudimos encontrar la noticia con la dirección &quot;/{slug}&quot;. Tal vez fue eliminada o la dirección es incorrecta.
            </p>
            <Link href="/noticias" className={styles.returnLink}>
              VOLVER A NOTICIAS
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
        </div>

        <div className={styles.layoutGrid}>
          {/* Main Content Column */}
          <div className={styles.mainContent}>
            {news.image_url && (
              <div className={styles.imageContainer}>
                <img src={news.image_url} alt={news.title} className={styles.image} />
              </div>
            )}

            <span className={styles.categoryTag}>{news.category}</span>
            
            <h1 className={styles.title}>{news.title}</h1>
            
            <p className={styles.description}>{news.description}</p>
            
            <div className={styles.detailBody}>
              {news.content_markdown ? (
                news.content_markdown.split("\n").map((paragraph, index) => {
                  if (!paragraph.trim()) return null;
                  return <p key={index}>{paragraph}</p>;
                })
              ) : (
                <p>
                  Te invitamos a conocer esta noticia y novedad de nuestra comunidad. Recordá consultar la fecha, horario y punto de encuentro/referencia en la tarjeta de detalles a la derecha. ¡Gracias por informarte con nosotros!
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
                  <div className={styles.metaValue}>{news.date}</div>
                </div>
              </div>

              <div className={styles.metaItem}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div>
                  <div className={styles.metaLabel}>HORA</div>
                  <div className={styles.metaValue}>{news.time}</div>
                </div>
              </div>

              <div className={styles.metaItem}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <div className={styles.metaLabel}>UBICACIÓN</div>
                  <div className={styles.metaValue}>{news.location}</div>
                </div>
              </div>

              <div className={styles.metaItem}>
                <div className={styles.iconWrapper}>
                  <FontAwesomeIcon icon={faTags} />
                </div>
                <div>
                  <div className={styles.metaLabel}>CATEGORÍA</div>
                  <div className={styles.metaValue}>{news.category}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
