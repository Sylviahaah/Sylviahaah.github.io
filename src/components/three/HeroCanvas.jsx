import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import ErrorBoundary from '../ui/ErrorBoundary';

// Spinning star field
function Stars({ count = 3000 }) {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(count * 3), { radius: 2.5 });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 18;
            ref.current.rotation.y -= delta / 24;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#8B5CF6"
                    size={0.004}
                    sizeAttenuation
                    depthWrite={false}
                    opacity={0.7}
                />
            </Points>
        </group>
    );
}

// Fallback canvas — just a gradient background
function CanvasFallback() {
    return (
        <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 60% 40%, #EDE9FE 0%, #F8FAFC 60%, #FFFFFF 100%)',
        }} />
    );
}

export default function HeroCanvas() {
    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <ErrorBoundary fallback={<CanvasFallback />}>
                <Suspense fallback={<CanvasFallback />}>
                    <Canvas
                        camera={{ position: [0, 0, 1], fov: 75 }}
                        style={{ background: 'radial-gradient(ellipse at 60% 40%, #EDE9FE 0%, #F8FAFC 60%, #FFFFFF 100%)' }}
                    >
                        <Stars />
                    </Canvas>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}
