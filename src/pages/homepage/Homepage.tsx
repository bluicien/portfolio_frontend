import styles from './Homepage.module.css';
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

import { Suspense, useState } from 'react';
import { Link } from "react-router-dom";

import { Canvas } from "@react-three/fiber";
import Loader from '../../components/loader/Loader.tsx';
import Island from '../../models/Island.js';
import Sky from '../../models/Sky.tsx';
import Bird from '../../models/Bird.tsx';
import Plane from '../../models/Plane.tsx';

export default function Homepage() {


    return (

        <div className={styles.homepageContainer} >
            <section className={styles.contentContainer} >
                <div className={styles.intro} >
                    <h1>Hello! My name is <span className={styles.myName} >Brendon Luicien.</span></h1>
                    <h3>Welcome to my website. I am a Junior Fullstack Software Engineer based in New Zealand.</h3>
                    
                    <div className={styles.redirectLinks} >
                        <button className={styles.aboutmeBtn} >About Me</button>
                        <div className={styles.socialMediaBtnGroup} >
                            <Link className={styles.socialBtn} to="https://www.facebook.com/brendon.luicien" ><FaFacebook size="1rem" /></Link>
                            <Link className={styles.socialBtn} to="https://www.linkedin.com/in/bluicien-bl2" ><ImLinkedin size="1rem" /></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.noImage} >
                    NO IMAGE
                </div>
            </section>


            <section>
            </section>
            
        </div>
    )
}