import React from "react";
import Link from "next/link";
import styles from "./CategoryNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUsers, 
  faPaintBrush, 
  faMicrophone, 
  faCamera, 
  faCalendarAlt 
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { name: "Grupos", path: "/grupos", icon: faUsers },
  { name: "Actividades", path: "/actividades", icon: faPaintBrush },
  { name: "Voces", path: "/voces", icon: faMicrophone },
  { name: "Galería", path: "/galeria", icon: faCamera },
  { name: "Agenda", path: "/agenda", icon: faCalendarAlt },
];

export const CategoryNav = () => {
  return (
    <nav className={styles.categoryNav}>
      <div className={styles.container}>
        {categories.map((cat) => (
          <Link key={cat.name} href={cat.path} className={styles.categoryItem}>
            <div className={styles.iconCircle}>
              <FontAwesomeIcon icon={cat.icon} />
            </div>
            <span className={styles.label}>{cat.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
