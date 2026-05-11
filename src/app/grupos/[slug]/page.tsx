"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Breadcrumb } from "@/ui/Breadcrumb/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHammer } from "@fortawesome/free-solid-svg-icons";
import styles from "./GroupDetail.module.css";

export default function GroupDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Format slug for display (e.g., "campeones-del-flow" -> "CAMPEONES DEL FLOW")
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
              { label: "GRUPOS", path: "/grupos" },
              { label: displayName }
            ]} 
          />
        </div>

        <section className={styles.constructionView}>
          <div className={styles.iconCircle}>
            <FontAwesomeIcon icon={faHammer} />
          </div>
          <h1 className={styles.title}>{displayName}</h1>
          <p className={styles.status}>SECCIÓN EN CONSTRUCCIÓN</p>
          <p className={styles.message}>
            Estamos trabajando para traerte todo el contenido sobre este grupo. 
            Pronto podrás conocer su historia, sus integrantes y sus producciones.
          </p>
          <Link href="/grupos" className={styles.returnLink}>
            VER OTROS GRUPOS
          </Link>
        </section>
      </div>
    </main>
  );
}
