import styles from './AboutMe.module.css';
import { html, css, javascript, express, github, nextjs, nodejs, react, redux, typescript, mysql, postgresql, csharp, netcore, mongodb } from '../../assets/icons/index.ts';
import { useEffect } from 'react';

type SkillItem = {
    name: string,
    icon: string
}

export default function AboutMe(): JSX.Element {    

    const skillIcons: SkillItem[] = [
        { name: 'html', icon: html },
        { name: 'css', icon: css },
        { name: 'javascript', icon: javascript },
        { name: 'express', icon: express },
        { name: 'github', icon: github },
        { name: 'nextjs', icon: nextjs },
        { name: 'nodejs', icon: nodejs },
        { name: 'react', icon: react },
        { name: 'redux', icon: redux },
        { name: 'typescript', icon: typescript },
        { name: 'mysql', icon: mysql },
        { name: 'postgresql', icon: postgresql },
        { name: 'c#', icon: csharp },
        { name: '.net core', icon: netcore },
        { name: 'mongodb', icon: mongodb },
    ];

    useEffect(() => {
        scrollTo({top: 0, behavior: 'smooth'});
    }, [])


    return (
        <section className={styles.aboutMeSection} >
            <h1 className={styles.pageTitle} >About Me</h1>
            <article>
                <h2>introduction</h2>
                <p>
                    Software Developer with three years of hands-on experience in full-stack 
                    development, including a recent internship building a scalable SaaS platform from 
                    the ground up. Skilled in modern web technologies, cloud-native architectures, and 
                    collaborative development. I am passionate about solving real-world problems 
                    through clean code, innovation, and continuous learning. 
                </p>
            </article>
            <hr />
            <article>
                <h2>tech stack</h2>
                <ul className={styles.skillGrid} >
                    {skillIcons.map((skill, index) => (
                        <li key={index} className={styles.skillListItem} >
                            <img className={styles.skillIcon} src={skill.icon} alt="" />
                            <h4 className={styles.skillName} >{skill.name}</h4>
                        </li>
                        ))}
                </ul>
            </article>
            <article>
                <h2>work history</h2>
                <div className={styles.workListing}>
                    <h5>2025</h5>
                    <h4>Software Engineer Intern - <span className={styles.courseProvider}>velis ltd</span></h4>
                    <ul>
                        <li>Collaborating in a lean, cross-functional team to architect and deliver a scalable multi-service SaaS platform</li>
                        <li>Designed and implemented secure database schema optimized for modular service integration</li>
                        <li>Built robust authentication flows using OAuth2, including token lifecycle management and permission scoping</li>
                        <li>Architected multi-tenant infrastructure with a security-first approach, enabling isolated service orchestration</li>
                        <li>Contributed to product decisions by translating technical constraints into stakeholder-friendly insights</li>
                        <li>Authored documentations for handover and future developer onboarding</li>
                    </ul>
                </div>
                <div className={styles.workListing}>
                    <h5>2021 - Present</h5>
                    <h4>Customer & Operations Support - <span className={styles.courseProvider}>computer dynamics ltd</span></h4>
                    <ul>
                        <li>Oversaw product returns and quality checks, reducing customer complaints and ensuring sellable standards</li>
                        <li>Resolved order discrepancies via internal software and streamlined inventory workflows for accurate, timely dispatch</li>
                        <li>Provided phone-based technical support, troubleshooting client issues to maintain high satisfaction</li>
                        <li>Authored and maintained SOPs to standardize processes and accelerate new-hire training</li>
                    </ul>
                </div>
            </article>
            <article>
                <h2>education</h2>
                <div className={styles.educationListing} >
                    <h5>2024 - 2025</h5>
                    <h4>Diploma in Software Engineering - <span className={styles.courseProvider} >Mission Ready HQ</span></h4>
                    <ul>
                        <li>Collaborated in a team using GitHub and Jira to develop full stack web applications</li>
                        <li>Developed AI solutions to meet client requirement and enhance UX</li>
                        <li>Worked in a lean Agile team and developed a working SaaS solution for my internship</li>
                    </ul>
                </div>

                <div className={styles.educationListing} >
                    <h5>2023 - Present</h5>
                    <h4>Full Stack Engineer - <span className={styles.courseProvider} >Codecademy</span></h4>
                    <ul>
                        <li>Worked on projects: React web app, Reddit clone, Full-stack e-commerce website using Next.js, Express.js, PostgreSQL. </li>
                    </ul>
                </div>

                <div className={styles.educationListing} >
                    <h5>2023</h5>
                    <h4>Google IT Support Certificate - <span className={styles.courseProvider} >Coursera</span></h4>
                    <ul>
                        <li>Covered technical support, networking, operating systems, system administration, IT security.</li>
                    </ul>
                </div>
                <div className={styles.educationListing} >
                    <h5>2023</h5>
                    <h4>IBM Full Stack Software Developer Certificate - <span className={styles.courseProvider} >Coursera</span></h4>
                    <ul>
                        <li>Developed web applications using NodeJS, React, Flask, and Django</li>
                    </ul>
                </div>
                <div className={styles.educationListing} >
                    <h5>2012 - 2015</h5>
                    <h4>Bachelor of Engineering (Hons) - <span className={styles.courseProvider} >Auckland University of Technology (AUT)</span></h4>
                    <ul>
                        <li>I specialized in Mechanical Engineering and learned some Electrical Foundations</li>
                        <li>Developed functional models using CAD software</li>
                        <li>Collaborated with a team to engineer a customized cement truck to meet client needs</li>
                    </ul>
                </div>
            </article>
            <article>
                <h2>hobbies and interests</h2>
                <ul>
                    <li>Gym & bodybuilding</li>
                    <li>Gardening & DIY</li>
                    <li>Game development</li>
                    <li>Video games, anime and comics</li>
                </ul>
            </article>
            <article>
                <h2>languages</h2>
                <ul>
                    <li>English (Native)</li>
                    <li>Japanese (Conversational)</li>
                </ul>
            </article>
        </section>
    )
}
