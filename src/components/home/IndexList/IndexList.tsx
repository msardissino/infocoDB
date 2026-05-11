import React from "react";
import styles from "./IndexList.module.css";
import Link from "next/link";

const indexItems = [
  { id: "01", category: "Grupos", title: "Los Campeones del Flow", href: "/grupos" },
  { id: "02", category: "Carta del equipo", title: "Empezamos a construir", href: "/voces" },
  { id: "03", category: "Voces", title: "Una entrevista con Julia", href: "/voces" },
  { id: "04", category: "Talleres", title: "Crónica del mural del patio", href: "/actividades" },
  { id: "05", category: "Familias", title: "Un café con las familias", href: "/voces" },
  { id: "06", category: "Agenda", title: "Lo que viene en mayo", href: "/agenda" },
  { id: "07", category: "Galería", title: "Abril en fotos", href: "/galeria" },
];

export const IndexList = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {indexItems.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <Link href={item.href} className={styles.link}>
              <span className={styles.id}>{item.id}</span>
              <div className={styles.content}>
                <span className={styles.category}>{item.category}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.title}>{item.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
