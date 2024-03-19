import { Canvas } from "@react-three/fiber";
import { Photos } from "./Photos";

export default function Scene() {
  return (
    <Canvas dpr={[1, 3]} style={{ width: "100vw", height: "100vh" }}>
      {/* <color attach="background" args={["black"]} /> */}
      <Photos />
    </Canvas>
  );
}
