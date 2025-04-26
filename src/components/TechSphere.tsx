import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import { Mesh } from 'three'

interface MorphingSphereProps {
  scale: number
  color: string
  roughness: number
  metalness: number
  distort: number
  speed: number
}

function MorphingSphere({ scale, color, roughness, metalness, distort, speed }: MorphingSphereProps) {
  const sphereRef = useRef<Mesh>(null)
  const [isDragging, setIsDragging] = useState(false)
  const momentumRef = useRef({ x: 0, y: 0 })
  const lastPositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleGlobalPointerUp = () => {
      setIsDragging(false)
    }

    const handleGlobalPointerMove = (e: PointerEvent) => {
      if (isDragging && sphereRef.current) {
        const deltaX = (e.clientX - lastPositionRef.current.x) * 0.002
        const deltaY = (e.clientY - lastPositionRef.current.y) * 0.002
        
        sphereRef.current.rotation.y += deltaX
        sphereRef.current.rotation.x += deltaY
        
        momentumRef.current = { x: deltaX, y: deltaY }
        lastPositionRef.current = { x: e.clientX, y: e.clientY }
      }
    }

    window.addEventListener('pointerup', handleGlobalPointerUp)
    window.addEventListener('pointermove', handleGlobalPointerMove)
    return () => {
      window.removeEventListener('pointerup', handleGlobalPointerUp)
      window.removeEventListener('pointermove', handleGlobalPointerMove)
    }
  }, [isDragging])

  useFrame(() => {
    if (sphereRef.current) {
      if (!isDragging) {
        // Apply momentum when not dragging
        sphereRef.current.rotation.x += momentumRef.current.y * 0.002
        sphereRef.current.rotation.y += momentumRef.current.x * 0.002
        // Gradually reduce momentum
        momentumRef.current.x *= 0.98
        momentumRef.current.y *= 0.98
      }
    }
  })

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    setIsDragging(true)
    lastPositionRef.current = { x: e.clientX, y: e.clientY }
    momentumRef.current = { x: 0, y: 0 }
  }

  return (
    <Sphere
      ref={sphereRef}
      args={[1, 100, 100]}
      scale={scale}
      onPointerDown={handlePointerDown}
    >
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed}
        roughness={roughness}
        metalness={metalness}
        envMapIntensity={1}
      />
    </Sphere>
  )
}

const TechSphere = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <color attach="background" args={['#1a1a1a']} />
        <ambientLight intensity={3.5} />
        <directionalLight position={[4, 2, 2]} intensity={0.25} />
        <directionalLight position={[-4, -2, 2]} intensity={0.25} />
        <directionalLight position={[3, -3, -2]} intensity={0.2} />
        <directionalLight position={[-3, 3, -2]} intensity={0.2} />
        <directionalLight position={[0, -5, 3]} intensity={0.2} />
        <MorphingSphere
          scale={2.8}
          color="#4a6fa1"
          roughness={0.7}
          metalness={0.3}
          distort={0.6}
          speed={1.5}
        />
      </Canvas>
    </div>
  )
}

export default TechSphere 