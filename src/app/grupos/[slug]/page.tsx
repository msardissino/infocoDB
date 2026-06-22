"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useGroup } from "@/hooks/useGroup";
import { GroupHeroHeader } from "@/components/groups/GroupHeroHeader/GroupHeroHeader";
import { TutorInterview } from "@/components/groups/TutorInterview/TutorInterview";
import { GroupMembers } from "@/components/groups/GroupMembers/GroupMembers";
import { StudentMessages } from "@/components/groups/StudentMessages/StudentMessages";
import { MomentsGallery } from "@/components/groups/MomentsGallery/MomentsGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./GroupDetail.module.css";

interface AccordionPanelProps {
  title: string;
  panelKey: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  className?: string;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({ 
  title, 
  isOpen, 
  onToggle, 
  children,
  className = "" 
}) => {
  return (
    <div className={`${styles.accordionPanel} ${className}`}>
      <button 
        className={styles.accordionHeader} 
        onClick={onToggle} 
        aria-expanded={isOpen}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className={styles.chevron} />
      </button>
      <div className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}>
        <div className={styles.accordionInner}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default function GroupDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const { group, loading, error } = useGroup(slug);

  // Accordion state for mobile view
  const [openPanels, setOpenPanels] = useState<Record<string, boolean>>({
    interview: true, // Default open interview
    objective: false,
    members: true, // Default open members list (matching wireframe)
    messages: false,
    moments: false,
  });

  const togglePanel = (panel: string) => {
    setOpenPanels(prev => ({
      ...prev,
      [panel]: !prev[panel]
    }));
  };

  if (loading) {
    return (
      <main className={styles.loadingContainer}>
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Cargando recuerdos y momentos...</p>
        </div>
      </main>
    );
  }

  if (error || !group) {
    return (
      <main className={styles.errorContainer}>
        <div className={styles.errorCard}>
          <h2 className={styles.errorTitle}>Grupo no encontrado</h2>
          <p className={styles.errorMessage}>No pudimos encontrar la información para el grupo seleccionado.</p>
          <Link href="/grupos" className={styles.errorLink}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.backIcon} />
            <span>VER TODOS LOS GRUPOS</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.detailPage}>
      <div className={styles.container}>
        {/* Hero header */}
        <GroupHeroHeader group={group} />

        {/* Sections layout with accordion behavior for mobile */}
        <div className={styles.sectionsContainer}>
          {/* Interview: Full width on desktop, collapsible on mobile */}
          <AccordionPanel 
            title="ENTREVISTA AL TUTOR"
            panelKey="interview"
            isOpen={openPanels.interview}
            onToggle={() => togglePanel("interview")}
            className={styles.interviewPanel}
          >
            <TutorInterview interview={group.interview} />
          </AccordionPanel>

          {/* Bottom: Members and Corkboard Messages */}
          <div className={styles.bottomSection}>
            <AccordionPanel 
              title="INTEGRANTES DEL GRUPO"
              panelKey="members"
              isOpen={openPanels.members}
              onToggle={() => togglePanel("members")}
              className={styles.membersPanel}
            >
              <GroupMembers members={group.members} />
            </AccordionPanel>

            <AccordionPanel 
              title="¿QUÉ LE QUIEREN DECIR LOS PIBES AL TUTOR?"
              panelKey="messages"
              isOpen={openPanels.messages}
              onToggle={() => togglePanel("messages")}
              className={styles.messagesPanel}
            >
              <StudentMessages messages={group.messages} />
            </AccordionPanel>
          </div>

          {/* Gallery Moments */}
          <div className={styles.gallerySection}>
            <AccordionPanel 
              title="ALGUNOS MOMENTOS JUNTOS"
              panelKey="moments"
              isOpen={openPanels.moments}
              onToggle={() => togglePanel("moments")}
              className={styles.momentsPanel}
            >
              <MomentsGallery moments={group.moments} caption={group.momentsCaption} />
            </AccordionPanel>
          </div>
        </div>

        {/* Sticky/Fixed bottom action for mobile */}
        <div className={styles.mobileStickyFooter}>
          <Link href="/grupos" className={styles.stickyBtn}>
            CONOCER OTROS GRUPOS
          </Link>
        </div>
      </div>
    </main>
  );
}
