import React, { useState } from "react";
import { GroupMember } from "@/types/group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faHeart, 
  faMusic, 
  faSmile, 
  faSun, 
  faCoffee, 
  faLeaf, 
  faBolt, 
  faPlus, 
  faMinus 
} from "@fortawesome/free-solid-svg-icons";
import styles from "./GroupMembers.module.css";

interface GroupMembersProps {
  members: GroupMember[];
}

export const GroupMembers: React.FC<GroupMembersProps> = ({ members }) => {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [expandedMemberIndex, setExpandedMemberIndex] = useState<number | null>(null);

  // Helper to resolve FontAwesome icon based on data
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case "star": return faStar;
      case "heart": return faHeart;
      case "music": return faMusic;
      case "smile": return faSmile;
      case "sun": return faSun;
      case "coffee": return faCoffee;
      case "leaf": return faLeaf;
      case "bolt": return faBolt;
      default: return faStar;
    }
  };

  const handleToggleMemberMobile = (idx: number) => {
    setExpandedMemberIndex(expandedMemberIndex === idx ? null : idx);
  };

  // On mobile, show only first 3 unless expanded
  const visibleMembersMobile = showAllMobile ? members : members.slice(0, 3);

  return (
    <div className={styles.container}>
      <h3 className={styles.sectionTitle}>INTEGRANTES DEL GRUPO</h3>

      <div className={styles.desktopGrid}>
        {members.map((member, idx) => (
          <div key={idx} className={styles.memberCard}>
            <div className={styles.avatarWrapper}>
              <img 
                src={member.avatarUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150"} 
                alt={member.name} 
                className={styles.avatar} 
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.nameBadge}>
                <span className={styles.memberName}>{member.name}</span>
                {member.icon && (
                  <FontAwesomeIcon icon={getIcon(member.icon)} className={styles.memberIcon} />
                )}
              </div>
              <ul className={styles.detailsList}>
                {member.details.map((detail, dIdx) => (
                  <li key={dIdx} className={styles.detailItem}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>


      {/* Mobile Stack with accordion behavior */}
      <div className={styles.mobileStack}>
        {visibleMembersMobile.map((member, idx) => {
          const isExpanded = expandedMemberIndex === idx;
          
          return (
            <div key={idx} className={styles.mobileMemberCard}>
              <div 
                className={styles.mobileHeader} 
                onClick={() => handleToggleMemberMobile(idx)}
              >
                <div className={styles.mobileLeft}>
                  <img 
                    src={member.avatarUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150"} 
                    alt={member.name} 
                    className={styles.mobileAvatar} 
                  />
                  <div className={styles.mobileNameBadge}>
                    <span className={styles.memberName}>{member.name}</span>
                    {member.icon && (
                      <FontAwesomeIcon icon={getIcon(member.icon)} className={styles.memberIcon} />
                    )}
                  </div>
                </div>
                <button className={styles.mobileExpandBtn} aria-label="Ver intereses">
                  <FontAwesomeIcon icon={isExpanded ? faMinus : faPlus} />
                </button>
              </div>
              
              {/* Collapsible details for mobile */}
              <div className={`${styles.mobileDetails} ${isExpanded ? styles.expanded : ""}`}>
                <ul className={styles.detailsList}>
                  {member.details.map((detail, dIdx) => (
                    <li key={dIdx} className={styles.detailItem}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}

        {/* View all toggle button for mobile */}
        {members.length > 3 && (
          <button 
            className={styles.viewAllBtn} 
            onClick={() => setShowAllMobile(!showAllMobile)}
          >
            {showAllMobile ? "VER MENOS" : `VER A TODOS (${members.length})`}
          </button>
        )}
      </div>
    </div>
  );
};
