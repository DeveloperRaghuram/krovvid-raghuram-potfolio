'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const VIOLET = '#8b5cf6'
const ELECTRIC = '#38bdf8'

function Orb({ animate }: { animate: boolean }) {
  const group = useRef<THREE.Group>(null)
  const shell = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!animate || !group.current || !shell.current) return
    shell.current.rotation.y += delta * 0.15
    shell.current.rotation.x += delta * 0.05
    const { x, y } = state.pointer
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.4, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.3, 0.05)
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.15, 12]} />
        <MeshDistortMaterial
          color={VIOLET}
          emissive="#3b1d8f"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.6}
          distort={animate ? 0.35 : 0.2}
          speed={animate ? 1.6 : 0}
        />
      </mesh>
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.75, 1]} />
        <meshBasicMaterial color={ELECTRIC} wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

function Particles({ animate }: { animate: boolean }) {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const count = 600
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.4 + Math.random() * 1.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (animate && ref.current) ref.current.rotation.y -= delta * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color={ELECTRIC} transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

export default function HeroScene({ reducedMotion }: { reducedMotion: boolean }) {
  const animate = !reducedMotion
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      frameloop={animate ? 'always' : 'demand'}
      aria-hidden="true"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={40} color={ELECTRIC} />
      <pointLight position={[-4, -2, 2]} intensity={30} color={VIOLET} />
      <Float speed={animate ? 1.4 : 0} rotationIntensity={animate ? 0.4 : 0} floatIntensity={animate ? 0.8 : 0}>
        <Orb animate={animate} />
      </Float>
      <Particles animate={animate} />
    </Canvas>
  )
}
