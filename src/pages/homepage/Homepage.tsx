import styles from './Homepage.module.css';
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import profPic from '../../assets/images/myprofpic.png';

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Review from './components/Review';

import { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";

export default function Homepage() {

    const SHOW_CONTACT_FORM: string = "form";
    const SHOW_REVIEW_FORM: string = "review";

    const [showMyInfo, setShowMyInfo] = useState<boolean>(false)
    const [showForm, setShowForm] = useState<string>(SHOW_CONTACT_FORM)

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
                    <h1>Hello! My name is <br/><span className={styles.myName} >Brendon Luicien.</span></h1>
                    <p>I am a Junior Fullstack Software Engineer crafting innovative digital solutions from beautiful New Zealand. Whether you're here to explore my projects or learn more about what drives me, welcome to my corner of the web!</p>
                    
                    <div className={styles.redirectLinks} >
                        <button className={styles.aboutmeBtn} onClick={() => setShowMyInfo(true)} >About Me</button>
                        <div className={styles.socialMediaBtnGroup} >
                            <Link className={styles.socialBtn} to="https://www.facebook.com/brendon.luicien" ><FaFacebook size="2rem" /></Link>
                            <Link className={styles.socialBtn} to="https://www.linkedin.com/in/bluicien-bl2" ><ImLinkedin size="2rem" /></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.profilePicContainer} >
                    <img className={styles.profilePic} src={profPic} alt="" />
                </div>
            </section>

            {showMyInfo && <AboutMe myRef={aboutMeRef} />}

            <section>
                <div className={styles.formSelectContainer} >
                    <button className={`${styles.formSelectBtn} ${showForm === SHOW_CONTACT_FORM ? styles.formSelectActive : ""}`} onClick={() => setShowForm(SHOW_CONTACT_FORM)} >Contact Me</button>
                    <button className={`${styles.formSelectBtn} ${showForm === SHOW_REVIEW_FORM ? styles.formSelectActive : ""}`} onClick={() => setShowForm(SHOW_REVIEW_FORM)} >Review</button>
                </div>
                <div className={styles.formAndModel} >
                    {showForm === SHOW_CONTACT_FORM && <Contact />}
                    {showForm === SHOW_REVIEW_FORM && <Review />}
                </div>
            </section>
        </div>
    )
}