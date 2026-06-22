import Link from "next/link";
import { SectionHero } from "@/ui/SectionHero/SectionHero";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { GROUPS_DATA } from "@/lib/groupsData";
import styles from "./grupos.module.css";

// Static display properties to merge with detail data
const GROUP_META_MAP: Record<string, { category: string; metadata: string }> = {
  "campeones-del-flow": {
    category: "IDENTIDAD",
    metadata: "COORDINACIÓN EDITORIAL · 4 MIN LECTURA",
  },
  "buenas-vibras": {
    category: "ENCUENTROS",
    metadata: "COORDINACIÓN EDITORIAL · 3 MIN LECTURA",
  },
  "la-banda-colorida": {
    category: "EXPRESIÓN",
    metadata: "COORDINACIÓN EDITORIAL · 5 MIN LECTURA",
  },
  "quienes-somos": {
    category: "REFLEXIÓN",
    metadata: "COORDINACIÓN EDITORIAL · 6 MIN LECTURA",
  },
  "sin-etiquetas": {
    category: "COMUNIDAD",
    metadata: "COORDINACIÓN EDITORIAL · 4 MIN LECTURA",
  },
};

export default function GruposPage() {
  // Merge detail data with static layout properties
  const grupos = GROUPS_DATA.map((group) => {
    const meta = GROUP_META_MAP[group.slug] || {
      category: "GRUPO",
      metadata: "COORDINACIÓN EDITORIAL",
    };
    return {
      slug: group.slug,
      title: group.name,
      description: group.description,
      image: group.heroCollage[0] || "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1000&auto=format&fit=crop",
      category: meta.category,
      metadata: meta.metadata,
    };
  });

  return (
    <main>
      <SectionHero
        variant="orange"
        category="GRUPOS"
        subCategory="SECCIÓN"
        title="CONOCÉ NUESTROS GRUPOS"
        subtitle="Cinco maneras distintas de habitar el centro. Cada grupo tiene su ritmos, sus códigos y su forma de encontrarse."
        metadata="CENTRO DE DÍA · INTRES"
        icon={faUsers}
        backgroundImage="/images/covers/cover_grupos.jpeg"
      >
        <div className={styles.gruposList}>
          {grupos.map((grupo, index) => (
            <Link 
              key={grupo.title} 
              href={`/grupos/${grupo.slug}`}
              className={`${styles.grupoItem} ${index % 2 !== 0 ? styles.reverse : ""}`}
            >
              <div className={styles.imageContainer}>
                <img src={grupo.image} alt={grupo.title} className={styles.image} />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.content}>
                <span className={styles.itemCategory}>{grupo.category}</span>
                <h2 className={styles.itemTitle}>{grupo.title}</h2>
                <p className={styles.itemDescription}>{grupo.description}</p>
                <span className={styles.itemMetadata}>{grupo.metadata}</span>
              </div>
            </Link>
          ))}
        </div>
      </SectionHero>
    </main>
  );
}
