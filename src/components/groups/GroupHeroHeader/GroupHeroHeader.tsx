import React from "react";
import Link from "next/link";
import { GroupDetail } from "@/types/group";
import { PolaroidPhoto } from "@/ui/PolaroidPhoto/PolaroidPhoto";
import { ScrapbookTape } from "@/ui/ScrapbookTape/ScrapbookTape";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCalendarAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import { GroupObjective } from "../GroupObjective/GroupObjective";
import styles from "./GroupHeroHeader.module.css";

interface GroupHeroHeaderProps {
  group: GroupDetail;
}

export const GroupHeroHeader: React.FC<GroupHeroHeaderProps> = ({ group }) => {
  return (
    <div className={styles.heroSection}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbLink}>INICIO</Link>
        <span className={styles.separator}>›</span>
        <Link href="/grupos" className={styles.breadcrumbLink}>GRUPOS</Link>
        <span className={styles.separator}>›</span>
        <span className={styles.activeBreadcrumb}>{group.name.toUpperCase()}</span>
      </nav>

      <div className={styles.mainGrid}>
        {/* Column 1: Left - Landscape Group Polaroid */}
        <div className={styles.polaroidContainerOuter}>
          {/* Decorative handdrawn star */}
          <span className={styles.decorStar}>★</span>
          
          <PolaroidPhoto 
            src={group.heroCollage[0]} // First image as main landscape group photo
            alt={group.name}
            aspectRatio="landscape"
            rotation={-3}
            width="100%"
            tape={true}
            tapeRotation={-8}
            tapeVariant="translucent"
          />

          {/* Decorative orange brush stroke at bottom left */}
          <div className={styles.orangeBrushStroke}></div>
          {/* Decorative handdrawn scribble at bottom right */}
          <div className={styles.decorScribble}></div>
        </div>

        {/* Column 2: Center - Title, Description, Metadata */}
        <div className={styles.infoContainer}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleRow}>
              <h1 className={styles.title}>{group.name}</h1>
              {/* 3 decorative handdrawn lines on the right of the title */}
              <div className={styles.decorTitleLines}>
                <span className={styles.line1}></span>
                <span className={styles.line2}></span>
                <span className={styles.line3}></span>
              </div>
            </div>
            <div className={styles.accentLine}></div>
          </div>
          
          <p className={styles.description}>{group.description}</p>
          
          <div className={styles.metaRow}>
            <div className={styles.metaBadge}>
              <FontAwesomeIcon icon={faUsers} className={styles.metaIcon} />
              <span>{group.memberCount} integrantes</span>
            </div>
            <div className={styles.metaBadge}>
              <FontAwesomeIcon icon={faCalendarAlt} className={styles.metaIcon} />
              <span>Desde {group.establishedYear}</span>
            </div>
          </div>
        </div>

        {/* Group Objective Card positioned as a direct sibling spanning columns 1 and 2 */}
        <div className={styles.objectiveWrapper}>
          <GroupObjective objective={group.objective} />
        </div>

        {/* Column 3: Right - Tutor Detail Section */}
        <div className={styles.tutorColumn}>
          <h2 className={styles.tutorSectionTitle}>TUTOR DEL GRUPO</h2>
          
          {/* Tutor profile row: Photo Left, Name Right */}
          <div className={styles.tutorProfileRow}>
            <div className={styles.tutorSquareAvatarWrapper}>
              <img 
                src={group.tutor.avatarUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"} 
                alt={group.tutor.name} 
                className={styles.tutorSquareAvatar} 
              />
            </div>
            <div className={styles.tutorProfileInfo}>
              <h3 className={styles.tutorName}>{group.tutor.name}</h3>
            </div>
          </div>
          
          {/* Bio description below the photo/name row, occupying full width */}
          <p className={styles.tutorBioBrief}>{group.tutor.bio}</p>
          
          {/* Quote Torn Paper Note */}
          <div className={styles.quoteTornPaper}>
            <div className={styles.quoteTornTape}>
              <ScrapbookTape variant="yellow" rotation={2} width="70px" height="18px" top="-9px" left="calc(50% - 35px)" />
            </div>
            <p className={styles.quoteText}>&quot;{group.tutor.quote}&quot;</p>
            <span className={styles.quoteHeart}>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>

          {/* Formation list */}
          <div className={styles.formationSection}>
            <h4 className={styles.formationTitle}>FORMACIÓN</h4>
            <ul className={styles.formationList}>
              {group.tutor.formation.map((item, idx) => (
                <li key={idx} className={styles.formationItem}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
