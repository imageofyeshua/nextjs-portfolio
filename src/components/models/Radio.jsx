"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Radio(props) {
  const { nodes, materials } = useGLTF("/models/radio-transformed.glb");

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
      position={[-0.8, -1.2, 0]}
      scale={[1.5, 1.5, 1.5]}
      rotation={[0.15, -1.7, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_cover_2_low_Radio_0.geometry}
        material={materials.Radio}
        rotation={[-Math.PI / 2, 0, 0.206]}
        scale={14.209}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_small_low_Glass_0.geometry}
        material={materials.Glass}
        rotation={[-Math.PI / 2, 0, 0.206]}
        scale={14.209}
      />
    </group>
  );
}

useGLTF.preload("/models/radio-transformed.glb");
