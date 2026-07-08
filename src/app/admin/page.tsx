"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faRunning, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "./admin.module.css";

import { User } from "@supabase/supabase-js";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        setUser(session.user);
        setLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>VERIFICANDO SESIÓN...</p>
      </div>
    );
  }

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>PANEL DE CONTROL</h1>
            <p style={{ fontFamily: "var(--font-text)", color: "var(--ink-mute)", fontSize: "0.9rem" }}>
              Conectado como: {user?.email}
            </p>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: "0.5rem" }} />
            CERRAR SESIÓN
          </button>
        </header>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <h2 className={styles.cardTitle}>AGENDA DE EVENTOS</h2>
            <p className={styles.cardDesc}>
              Cargá, modificá o eliminá los eventos del calendario mensual. Estos eventos se mostrarán en la grilla mensual interactiva.
            </p>
            <Link href="/admin/agenda" className={styles.cardLink}>
              ADMINISTRAR AGENDA
            </Link>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faRunning} />
            </div>
            <h2 className={styles.cardTitle}>ACTIVIDADES PRINCIPALES</h2>
            <p className={styles.cardDesc}>
              Creá y editá las propuestas que realizamos dentro y fuera del centro. Podrás cambiar las portadas, fechas, ubicaciones y contenido descriptivo.
            </p>
            <Link href="/admin/actividades" className={styles.cardLink}>
              ADMINISTRAR ACTIVIDADES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
