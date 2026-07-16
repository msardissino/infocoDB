"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SectionHero } from "@/ui/SectionHero/SectionHero";
import { faCamera, faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./galeria.module.css";

interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/galeria/galeria.jpg", title: "Encuentro Grupal", category: "Encuentros" },
  { src: "/images/galeria/galeria2.jpg", title: "Taller Creativo", category: "Talleres" },
  { src: "/images/galeria/galeria3.jpg", title: "Momento de Esparcimiento", category: "Recreación" },
  { src: "/images/galeria/galeria4.jpg", title: "Actividad Artística", category: "Talleres" },
  { src: "/images/galeria/galeria5.jpg", title: "Paseo al Aire Libre", category: "Salidas" },
  { src: "/images/galeria/galeria6.jpg", title: "Expresión Corporal y Baile", category: "Talleres" },
  { src: "/images/galeria/galeria7.jpg", title: "Jornada de Integración", category: "Encuentros" },
  { src: "/images/galeria/galeria8.jpg", title: "Producción y Manualidades", category: "Arte" },
  { src: "/images/galeria/galeria9.jpg", title: "Almuerzo y Conversaciones", category: "Recreación" },
  { src: "/images/galeria/galeria10.jpg", title: "Trabajo en Equipo", category: "Talleres" },
  { src: "/images/galeria/galeria11.jpg", title: "Tarde de Juegos de Mesa", category: "Recreación" },
  { src: "/images/galeria/galeria12.jpg", title: "Cierre de Jornada", category: "Encuentros" },
];

export default function GaleriaPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Keyboard navigation: Left, Right and Escape keys
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
      } else if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const activeImage = activeIndex !== null ? GALLERY_IMAGES[activeIndex] : null;

  return (
    <main>
      <SectionHero
        variant="dark"
        category="GALERIA"
        subCategory="REGISTRO VISUAL"
        title="NUESTRA VIDA EN IMAGENES"
        subtitle="Un archivo de momentos, obras y encuentros capturados a traves del lente."
        metadata="CENTRO DE DIA · INTRES"
        icon={faCamera}
        backgroundImage="/images/covers/cover_galeria.jpeg"
        showOverlay={true}
      >
        <div className={styles.container}>
          <div className={styles.grid}>
            {GALLERY_IMAGES.map((img, index) => (
              <div 
                key={index} 
                className={styles.card} 
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveIndex(index);
                  }
                }}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src={img.src} 
                    alt={img.title} 
                    className={styles.image}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    priority={index < 6}
                    unoptimized
                  />
                  <div className={styles.stateLayer}></div>
                </div>
                <div className={styles.cardHeader}>
                  <span className={styles.badge}>{img.category}</span>
                  <h3 className={styles.cardTitle}>{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionHero>

      {/* Lightbox / Fullscreen Dialog */}
      {activeIndex !== null && activeImage && (
        <div 
          className={styles.scrim} 
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imagen"
        >
          {/* Close FAB */}
          <button 
            className={styles.closeBtn} 
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
            aria-label="Cerrar galería"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* Navigation - Prev */}
          <button 
            className={styles.navBtnLeft} 
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
            }}
            aria-label="Imagen anterior"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Dialog Container */}
          <div className={styles.dialogContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImageWrapper}>
              <Image 
                src={activeImage.src} 
                alt={activeImage.title} 
                className={styles.lightboxImage}
                fill
                sizes="(max-width: 1200px) 90vw, 1000px"
                priority
                unoptimized
              />
            </div>
            
            <div className={styles.lightboxFooter}>
              <div className={styles.lightboxMeta}>
                <span className={styles.lightboxCategory}>{activeImage.category}</span>
                <h4 className={styles.lightboxTitle}>{activeImage.title}</h4>
              </div>
              <div className={styles.counter}>
                {activeIndex + 1} / {GALLERY_IMAGES.length}
              </div>
            </div>
          </div>

          {/* Navigation - Next */}
          <button 
            className={styles.navBtnRight} 
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
            }}
            aria-label="Imagen siguiente"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </main>
  );
}
