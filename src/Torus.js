import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AsciiRenderer } from '@react-three/drei'

function TorusMesh() {
  const ref = useRef()
  const viewport = useThree((state) => state.viewport)
  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 8
    ref.current.rotation.y += delta / 16
  })
  const scale = Math.min(viewport.width, viewport.height) / 5
  return (
    <mesh scale={scale} ref={ref} rotation={[-Math.PI / 4, -Math.PI / 4, 0]}>
      <torusGeometry args={[1.8, 0.15, 128, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

export default function Torus({ color }) {
  const canvasProps = {
    background: 'black',
    spotLight: { position: [4, 4, 4], angle: 2, penumbra: 1, intensity: 40, decay: 1 },
    pointLight: { position: [-4, -4, -4], distance: 10, intensity: 20, decay: 1 },
  }
  return (
    <div className="w-full h-full fixed top-0 left-0 pointer-events-none select-none -z-10">
      <Canvas>
        <color attach="background" args={[canvasProps.background]} />
        <spotLight {...canvasProps.spotLight} />
        <pointLight {...canvasProps.pointLight} />
        <TorusMesh />
        <AsciiRenderer fgColor={color} bgColor="transparent" resolution={0.2} />
      </Canvas>
    </div>
  );
}
