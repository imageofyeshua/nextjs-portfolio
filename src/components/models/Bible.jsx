"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Bible(props) {
  const { nodes, materials } = useGLTF("/models/bible-transformed.glb");

  const modelRef = useRef();

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y =
      -1.0 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group
      {...props}
      ref={modelRef}
      dispose={null}
      position={[1.2, -1.2, 0]}
      scale={[0.03, 0.03, 0.03]}
      rotation={[0.45, 0.3, 0]}
    >
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials["01___Defaultdddfrrssdfff"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials["01___Defaultdsdddpfffd"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["10___Default"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials["01___Def"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["01___Defaultdsdddfffd"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials["01___Defd"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/bible-transformed.glb");
