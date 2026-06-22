import React from "react";
import { PolaroidMoment } from "@/types/group";
import { PolaroidPhoto } from "@/ui/PolaroidPhoto/PolaroidPhoto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import styles from "./MomentsGallery.module.css";

interface MomentsGalleryProps {
  moments: PolaroidMoment[];
  caption?: string;
}

export const MomentsGallery: React.FC<MomentsGalleryProps> = ({ moments }) => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <FontAwesomeIcon icon={faCamera} className={styles.cameraIcon} />
        <h3 className={styles.title}>ALGUNOS MOMENTOS JUNTOS</h3>
      </div>

      {/* Gallery row */}
      <div className={styles.galleryWrapper}>
        <div className={styles.galleryScroll}>
          {moments.map((moment, idx) => {
            // Alternate tape variants for variety
            const tapeVariants: Array<"translucent" | "orange" | "yellow" | "washi"> = [
              "washi", "translucent", "yellow", "orange"
            ];
            const tapeVariant = tapeVariants[idx % tapeVariants.length];
            const rotation = moment.rotation !== undefined ? moment.rotation : (idx % 2 === 0 ? -2 : 3);
            
            return (
              <div key={idx} className={styles.photoContainer}>
                <PolaroidPhoto
                  src={moment.imageUrl}
                  alt={moment.caption || `Momento ${idx + 1}`}
                  caption={moment.caption}
                  rotation={rotation}
                  width="180px"
                  tapeVariant={tapeVariant}
                  tapeRotation={idx % 2 === 0 ? -8 : 10}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

