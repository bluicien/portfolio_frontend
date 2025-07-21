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
    })


    return (
        <section className={styles.aboutMeSection} >
            <h1 className={styles.pageTitle} >About Me</h1>
            <article>
                <h2>introduction</h2>
                <p>
                    Enthusiastic IT professional transitioning into software development with a solid foundation 
                    in full-stack technologies. Leveraging self-study, certifications, and hands-on projects to 
                    deliver value in an entry-level developer role. I am passionate about coding, problem
                    solving, and innovative tech solutions. 
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
                    <h5>2024 - Present</h5>
                    <h4>Diploma in Software Engineering - <span className={styles.courseProvider} >Mission Ready HQ</span></h4>
                    <ul>
                        <li>Collaborated in a team using GitHub and Jira to develop full stack web applications</li>
                        <li>Developed AI solutions to meet client requirement and enhance UX</li>
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
