import styles from './Homepage.module.css';
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import profPic from '../../assets/images/myprofpic.png';

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Review from './components/Review';
import Loader from '../../components/loader/Loader';
import Earth from '../../models/Earth';

import { useEffect, useRef, useState, Suspense } from 'react';
import { Link } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Euler, Vector3 } from 'three';

export default function Homepage() {

    const SHOW_CONTACT_FORM: string = "form";
    const SHOW_REVIEW_FORM: string = "review";

    const [showMyInfo, setShowMyInfo] = useState<boolean>(false)
    const [showForm, setShowForm] = useState<string>(SHOW_CONTACT_FORM)
    const [isRotating, setIsRotating] = useState<boolean>(false);

    const aboutMeRef = useRef<HTMLInputElement>(null);

    

    const adjustIslandForScreenSize = (): [Vector3, Vector3, Euler] => {
        let screenScale: Vector3 | null = null;
        const screenPosition: Vector3 = new Vector3(0, -0.3, 4.4);
        const rotation: Euler = new Euler(0.1, 4.7, 0);

        if (window.innerWidth < 768) {
            screenScale = new Vector3(0.9, 0.9, 0.9);
        } else {
            screenScale = new Vector3(1, 1, 1);
        }

        return [screenScale, screenPosition, rotation];
    }

    const [earthScale, earthPosition, earthRotation] = adjustIslandForScreenSize();
    


    useEffect(() => {
        if(showMyInfo) {
            aboutMeRef.current?.scrollIntoView({behavior: 'smooth'})
        } 
    }, [showMyInfo])

    return (

        <div className={styles.homepageContainer} >
            <div className={styles.lightSource} />
            <section className={styles.contentContainer} >
                <div className={styles.intro} >
                    <h1>Hello! My name is <span className={styles.myName} >Brendon Luicien.</span></h1>
                    <h2>Welcome to my website. I am a Junior Fullstack Software Engineer based in New Zealand.</h2>
                    
                    <div className={styles.redirectLinks} >
                        <button className={styles.aboutmeBtn} onClick={() => setShowMyInfo(true)} >About Me</button>
                        <div className={styles.socialMediaBtnGroup} >
                            <Link className={styles.socialBtn} to="https://www.facebook.com/brendon.luicien" ><FaFacebook size="1rem" /></Link>
                            <Link className={styles.socialBtn} to="https://www.linkedin.com/in/bluicien-bl2" ><ImLinkedin size="1rem" /></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.profilePicContainer} >
                    <img className={styles.profilePic} src={profPic} alt="" />
                </div>
            </section>

            {showMyInfo && <AboutMe myRef={aboutMeRef} />}

            <section>
                <div>
                    <button onClick={() => setShowForm(SHOW_CONTACT_FORM)} >Contact Me</button>
                    <button onClick={() => setShowForm(SHOW_REVIEW_FORM)} >Review</button>
                </div>
                <div className={styles.formAndModel} >
                    {showForm === SHOW_CONTACT_FORM && <Contact />}
                    {showForm === SHOW_REVIEW_FORM && <Review />}

                    {/* 3D CANVAS */}
                    <div className={styles.canvasModel} >    
                        <Canvas 
                            className={`${styles.modelCanvas} ${isRotating ? styles.isRotating : styles.rotateHover}`} 
                            camera={{ near: 0.1, far: 1000 }}
                            >
                            <Suspense fallback={ <Loader /> } >
                                <ambientLight intensity={1.5} />
                                <hemisphereLight color={"#b1e1ff"} groundColor={"#000000"} intensity={1} />
                                <OrbitControls/>
                                <Environment preset='dawn' />
                                <Earth 
                                    position={earthPosition}
                                    scale={earthScale}
                                    rotation={earthRotation}
                                    isRotating={isRotating}
                                    setIsRotating={setIsRotating}
                                />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </section>
        </div>
    )
}