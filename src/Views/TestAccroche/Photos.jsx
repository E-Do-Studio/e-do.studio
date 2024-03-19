import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import { Photo } from "./Photo";
import { updatedPositions } from "./helpers";

export const Photos = () => {
  const [photos, updatePhotos] = useState([
    {
      x: 0,
      y: 0,
      index: 0,
    },
  ]);

  const { viewport } = useThree();

  useFrame(({ mouse }) => {
    const x = (viewport.width * mouse.x) / 2;
    const y = (viewport.height * mouse.y) / 2;

    const updatedPhotos = updatedPositions(photos, { x, y });
    updatePhotos(updatedPhotos);
  });

  return (
    <>
      {photos.map((photo, i) => (
        <Photo
          key={`photo${photo.index}`}
          index={photo.index}
          x={photo.x}
          y={photo.y}
        />
      ))}
    </>
  );
};
