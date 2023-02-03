import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/cyclorama.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Matériau}
        position={[0.7, -0.5, -0.575]}
        scale={[1.4, 0.025, 1.15]}
      />
    </group>
  );
}

useGLTF.preload("/cyclorama.glb");