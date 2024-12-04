import styles from './Homepage.module.css';
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import AboutMe from './components/AboutMe';
import profPic from '../../assets/images/myprofpic.png';

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import Contact from './components/Contact';

export default function Homepage() {

    const [showMyInfo, setShowMyInfo] = useState(false)
    const aboutMeRef = useRef<HTMLInputElement>(null);

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

            <Contact />
        </div>
    )
}