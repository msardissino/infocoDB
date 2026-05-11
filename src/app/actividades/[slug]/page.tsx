"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Breadcrumb } from "@/ui/Breadcrumb/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHammer } from "@fortawesome/free-solid-svg-icons";
import styles from "./ActivityDetail.module.css";

export default function ActivityDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Format slug for display
  const displayName = slug.replace(/-/g, " ").toUpperCase();

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
              { label: displayName }
            ]} 
          />
        </div>

        <section className={styles.constructionView}>
          <div className={styles.iconCircle}>
            <FontAwesomeIcon icon={faHammer} />
          </div>
          <h1 className={styles.title}>{displayName}</h1>
          <p className={styles.status}>ACTIVIDAD EN CONSTRUCCIÓN</p>
          <p className={styles.message}>
            Estamos preparando todos los detalles de esta actividad. 
            Pronto podrás ver más fotos, videos y el registro de lo que compartimos.
          </p>
          <Link href="/actividades" className={styles.returnLink}>
            VER OTRAS ACTIVIDADES
          </Link>
        </section>
      </div>
    </main>
  );
}
