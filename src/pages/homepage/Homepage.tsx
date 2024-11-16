import { FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

import styles from './Homepage.module.css';
import { Link } from "react-router-dom";

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