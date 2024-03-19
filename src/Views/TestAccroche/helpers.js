import { Vector2, Vector3 } from "three";

let t = 1;
const splicedIndexes = [];

export const updatedPositions = (
  photos,
  mousePosition,
  distance = 1.5,
  maxphotosCount = 10
) => {
  const d = new Vector2(mousePosition.x, mousePosition.y).distanceTo(
    new Vector2(photos.at(-1)?.x, photos.at(-1)?.y)
  );

  if (d > distance && photos.length < maxphotosCount + 2) {
    t++;

    return [
      ...photos,
      {
        ...mousePosition,
        index: t,
      },
    ];
  }

  return photos.length > maxphotosCount
    ? photos.splice(1)
    : photos.map((plane) => ({ ...plane }));
};

export const appliedForces = (t, dir) => {
  return new Vector3(0, 1 - t, 10).multiplyScalar(0.0005);
};
