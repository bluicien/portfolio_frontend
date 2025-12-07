import styles from './Homepage.module.css';
import { FaFacebook } from "react-icons/fa";
import { ImLinkedin, ImGithub } from "react-icons/im";

import profPic from '../../assets/images/myprofpic.png';

import Contact from './components/forms/Contact';
import Review from './components/forms/Review';

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ReviewFeed from './components/reviews/ReviewFeed';
import Modal from '../../components/modals/Modal';
import NotificationModal from '../../components/modals/NotificationModal';

interface ModalProps {
    modalType: string;
    message: string;
}

export default function Homepage() {

    const SHOW_CONTACT_FORM: string = "form";
    const SHOW_REVIEW_FORM: string = "review";

    const [showForm, setShowForm] = useState<string>(SHOW_CONTACT_FORM);
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const [ modalData, setShowModalData ] = useState<ModalProps>({ modalType: "", message: ""});

    const closeModal = () => {
        setShowModal(false);
    }

    const toggleModalOn = (data: ModalProps) => {
        setShowModalData(data);
        setShowModal(true);
    }

    useEffect(() => {
        scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    return (

        <div className={styles.homepageContainer} >
            <div className={styles.lightSource} />
            <section className={styles.contentContainer} >
                <div className={styles.intro} >
                    <h1>Hello! My name is <br/><span className={styles.myName} >Brendon Luicien.</span></h1>
                    <p>I am a Junior Fullstack Software Engineer crafting innovative digital solutions from beautiful New Zealand. Whether you're here to explore my projects or learn more about what drives me, welcome to my corner of the web!</p>
                    
                    <div className={styles.redirectLinks} >
                        <Link to={"/about-me"} ><button className={styles.aboutmeBtn} >About Me</button></Link>
                        <div className={styles.socialMediaBtnGroup} >
                            <Link className={styles.socialBtn} target='blank' to="https://www.facebook.com/brendon.luicien" ><FaFacebook size="2rem" /></Link>
                            <Link className={styles.socialBtn} target='blank' to="https://www.linkedin.com/in/bluicien-bl2" ><ImLinkedin size="2rem" /></Link>
                            <Link className={styles.socialBtn} target='blank' to="https://github.com/bluicien" ><ImGithub size="2rem" /></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.profilePicContainer} >
                    <img className={styles.profilePic} src={profPic} alt="" />
                </div>
            </section>

            <hr />
            <section className={styles.messagingSection} >
                <section className={styles.forms} >
                    <div className={styles.formSelectContainer} >
                        <button className={`${styles.formSelectBtn} ${showForm === SHOW_CONTACT_FORM ? styles.formSelectActive : ""}`} onClick={() => setShowForm(SHOW_CONTACT_FORM)} >Contact Me</button>
                        <button className={`${styles.formSelectBtn} ${showForm === SHOW_REVIEW_FORM ? styles.formSelectActive : ""}`} onClick={() => setShowForm(SHOW_REVIEW_FORM)} >Review</button>
                    </div>
                    <div className={styles.formAndModel} >
                        {showForm === SHOW_CONTACT_FORM && <Contact handleModalData={toggleModalOn} />}
                        {showForm === SHOW_REVIEW_FORM && <Review handleModalData={toggleModalOn} />}
                    </div>
                </section>

                <section className={styles.reviewFeed} >
                    <ReviewFeed />
                </section>
            </section>
            <Modal isOpen={showModal} onClose={closeModal} >
                <NotificationModal modalType={modalData.modalType} message={modalData.message} />
            </Modal>
        </div>
    )
}