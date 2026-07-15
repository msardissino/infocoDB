"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NewsSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "@/lib/supabase/client";

interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  image_url: string;
}

export const NewsSection = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const { data, error } = await supabase
          .from("noticias")
          .select("id, slug, title, date, image_url")
          .order("created_at", { ascending: false })
          .limit(2);

        if (error) throw error;
        setNewsItems(data || []);
      } catch (err) {
        console.error("Error fetching news for home:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className={styles.newsSection}>
        <div className={styles.header}>
          <h2 className={styles.title}>ÚLTIMAS NOTICIAS</h2>
          <div className={styles.underline}></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", padding: "4rem 0" }}>
          <div style={{
            width: "35px",
            height: "35px",
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
      </section>
    );
  }

  if (newsItems.length === 0) {
    return null;
  }

  return (
    <section className={styles.newsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>ÚLTIMAS NOTICIAS</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.grid}>
        {newsItems.map((item) => (
          <Link key={item.id} href={`/noticias/${item.slug}`} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={item.image_url} alt={item.title} className={styles.image} width={400} height={250} unoptimized />
              </div>
              <div className={styles.content}>
                <div className={styles.textContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={styles.date}>{item.date}</span>
                </div>
                <div className={styles.arrowIcon}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
