import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

export const Hero3D = () => {
    const sphereRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
        sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    });

    return (
        <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
                color="#4f46e5"
                transparent
                opacity={0.8}
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0}
                metalness={0.8}
            />
        </Sphere>
    );
};
