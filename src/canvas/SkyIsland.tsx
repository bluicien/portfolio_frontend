import styles from './SkyIsland.module.css';
import Loader from '../components/loader/Loader.tsx';
import Island from '../models/Island.tsx';
import Sky from '../models/Sky.tsx';
import Bird from '../models/Bird.tsx';
import Plane from '../models/Plane.tsx';

import { Suspense, useState } from 'react';
import { Canvas } from "@react-three/fiber";

export default function SkyIsland() {

    const [ isRotating, setIsRotating ] = useState(false)
    const [ currentStage, setCurrentStage ] = useState(1)
    
    const adjustIslandForScreenSize = () => {
        let screenScale = null
        const screenPosition = [0, -6.5, -43];
        const rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [ screenScale, screenPosition, rotation ];
    }

    const adjustPlaneForScreenSize = () => {
        let planeScale, planePosition;

        if (window.innerWidth < 768) {
            planeScale = [1.5, 1.5, 1.5];
            planePosition = [0, -1.5, 0]; 
        } else {
            planeScale = [3, 3, 3];
            planePosition = [0, -4, -4];
        }

        return [ planeScale, planePosition ];
    }

    const [ islandScale, islandPosition, islandRotation ] = adjustIslandForScreenSize();
    const [ planeScale, planePosition ] = adjustPlaneForScreenSize();

    return (
        <Canvas 
        className={`${styles.canvas} ${isRotating ? styles.cursorGrabbing : styles.cursorGrab}`}
        camera={{ near: 0.1, far: 1000 }}
        >
            <Suspense fallback={ <Loader /> } >
                <directionalLight position={[1, 1, 1]} intensity={2} />
                <ambientLight intensity={0.5} />
                <pointLight />
                <spotLight />
                <hemisphereLight color="#b1e1ff" groundColor="#000000" intensity={1} />
                
                <Bird />
                <Plane
                    isRotating={isRotating}
                    planeScale={planeScale}
                    planePosition={planePosition}
                    rotation={[0, 20, 0]}
                />
                <Sky 
                    isRotating={isRotating}
                />
                <Island 
                    position={islandPosition}
                    scale={islandScale}
                    rotation={islandRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                />
            </Suspense>
        </Canvas>
    )
}
