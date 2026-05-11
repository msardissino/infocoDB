import React from "react";
import styles from "./NewsSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const newsItems = [
  {
    id: 1,
    title: "Terminamos el mural del patio",
    date: "28 ABR 2026",
    image: "https://images.unsplash.com/photo-1541411591963-95d11b8ca2ea?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Café con las familias",
    date: "24 ABR 2026",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mayo: mes de nuevos talleres",
    date: "22 ABR 2026",
    image: "https://images.unsplash.com/photo-1506784919140-10903348600d?q=80&w=1000&auto=format&fit=crop",
  },
];

export const NewsSection = () => {
  return (
    <section className={styles.newsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>ÚLTIMAS NOTICIAS</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.grid}>
        {newsItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} className={styles.image} />
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
        ))}
      </div>
    </section>
  );
};
