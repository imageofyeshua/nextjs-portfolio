"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Grapes(props) {
  const { nodes, materials } = useGLTF("/models/grapes-transformed.glb");

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });

  return (
    <group
      {...props}
      ref={modelRef}
      dispose={null}
      position={[0.2, 0.2, 0]}
      scale={[0.2, 0.25, 0.2]}
      rotation={[0.15, -1.7, 0]}
    >
      <mesh
        geometry={nodes["Material_002-material"].geometry}
        material={materials.Material_002}
        position={[0.512, 2.732, -0.808]}
        rotation={[-1.051, 0.559, 0.681]}
        scale={0.342}
      />
      <mesh
        geometry={nodes["Material_001-material"].geometry}
        material={materials.Material_001}
        position={[0.016, 0.877, -1.292]}
        rotation={[-1.472, -0.029, -0.14]}
        scale={[0.947, 0.758, 0.949]}
      />
      <mesh
        geometry={nodes["Material-material"].geometry}
        material={materials.Material}
        position={[0.46, 1.871, -1.733]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.844}
      />
    </group>
  );
}

useGLTF.preload("/models/grapes-transformed.glb");
