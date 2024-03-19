import { useTexture } from "@react-three/drei";
import { memo, useRef, useState } from "react";
import { PlaneGeometry, Mesh, MeshBasicMaterial } from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { appliedForces } from "./helpers";

import image from "./test.jpg";
import image1 from "./img/2023_BOTTLES_BOOK2102 copie.webp";
import image2 from "./img/ATTIRE_THE_STUDIO_MBACH_ATTIRE_010_FRANKLIN_BLACK_028 copie.webp";
import image3 from "./img/GIAMBATTISTA_23FWPVCA5091-09VIS-6750_26 copie.webp";
import image4 from "./img/GIAMBATTISTA_A2TIDY-TA07-08 copie.webp";
import image5 from "./img/JPG_23-12-U-PA061B-J033_Front copie.webp";
import image6 from "./img/JPG_P220613151038_Fullbody_jpg_23 copie.webp";
import image7 from "./img/JPG_P220613151038_Fullbody_jpg_23 copie.webp";
import image8 from "./img/MELISSA_JPG_F-CS002-X033-22-side-tiff-1 copie.webp";
import image9 from "./img/Parfum_x_Y_Project-back-tiff-1 copie.webp";
import image10 from "./img/SHANGXIA_FR1223S007QUARTZ-Fullbody-tiff-1 copie.webp";

export const Photo = memo(({ x, y }) => {
  const ref = useRef(null);
  const { viewport } = useThree();

  const texture = useTexture(image);

  // Calculer les dimensions du plan en fonction de la taille de l'image
  const imageWidth = texture.image.width;
  const imageHeight = texture.image.height;
  const aspectRatio = imageWidth / imageHeight;
  const planeWidth = 2; // Largeur du plan (peut être ajustée selon vos besoins)
  const planeHeight = planeWidth / aspectRatio;

  // Utiliser PlaneGeometry avec les dimensions calculées
  const geometry = new PlaneGeometry(planeWidth, planeHeight);

  const [t, setT] = useState(0);
  const direction = useRef();

  useFrame(({ mouse }) => {
    if (!ref.current) {
      return;
    }
    if (!direction.current) {
      direction.current = x > (viewport.width * mouse.x) / 2 ? -1 : 1;
    }

    ref.current.position.add(appliedForces(t, direction.current));

    setT(t + 1);
  });

  return (
    <mesh ref={ref} position={[x, y, 0]} geometry={geometry}>
      <meshBasicMaterial map={texture} />
    </mesh>
  );
});
