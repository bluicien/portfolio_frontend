import styles from './AboutMe.module.css';
import { html, css, javascript, express, github, nextjs, nodejs, react, redux, typescript, mysql, postgresql, csharp, netcore } from '../../../assets/icons/index.ts';
import { RefObject } from 'react';

interface AboutMeProps {
    myRef: RefObject<HTMLElementTagNameMap['section']>;
}

export default function AboutMe ({ myRef }: AboutMeProps): JSX.Element {

    console.log(myRef);

    type SkillItem = {
        name: string,
        icon: string
    }

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
    ];

    return (
        <section className={styles.aboutMeSection} ref={myRef} >
            <article>
                <h2>introduction</h2>
                <p>I am a dedicated technology enthusiast, currently focused on transitioning into a career in IT
                    where I can use my skills to help solve real life issues for individuals and businesses. 
                    Through self-study and targeted coursework, I am proactively acquiring the necessary skills and 
                    knowledge for an entry-level position. My ambition and unwavering passion for learning drive me 
                    to excel and contribute effectively to the information technology industry.
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
                    <h4>COMPUTER DYNAMICS LTD</h4>
                    <p>I began my career as a Warehouse Store Person and have since transitioned into a role in Customer Service 
                        and Quality Assurance (QA). In my previous position overseeing returns, I ensured that returned goods met 
                        sellable standards. Additionally, I have experience in training employees and developing Standard Operating 
                        Procedures (SOPs). My strong problem-solving skills and aptitude for technology have made me a key resource 
                        for navigating company software to resolve order discrepancies and errors effectively.
                    </p>
                </div>
            </article>
            <article>
                <h2>education</h2>
                <div className={styles.educationListing} >
                    <h5>2012 - 2015</h5>
                    <h4>Bachelor of Engineering (Hons) - <span className={styles.courseProvider} >Auckland University of Technology (AUT)</span></h4>
                    <ul>
                        <li>
                            Mastered the fundamentals of mechanical and electrical engineering, advanced engineering mathematics, and C++ programming.
                        </li>
                        <li>Utilized CAD software to develop functional models.</li>
                        <li>Collaborated on a team project to design a customized cement truck, tailored to meet specific client requirements.</li>
                    </ul>
                </div>
                <div className={styles.educationListing} >
                    <h5>2023</h5>
                    <h4>IBM Full Stack Software Developer Certificate - <span className={styles.courseProvider} >Coursera</span></h4>
                    <ul>
                        <li>Completed 10 fundamental courses, a project, and a final assessment demonstrating full-stack development competencies.</li>
                        <li>
                            Developed web applications using frameworks such as Node.js, React, Flask, and Django, along with technologies 
                            including Git, Docker, and IBM Cloud.
                        </li>
                    </ul>
                </div>
                <div className={styles.educationListing} >
                    <h5>2023</h5>
                    <h4>Google IT Support Certificate - <span className={styles.courseProvider} >Coursera</span></h4>
                    <ul>
                        <li>
                            Acquired comprehensive knowledge through a 5-course certificate covering technical support, networking, 
                            operating systems, system administration, and IT security.
                        </li>
                        <li>Developed a strong understanding of best practices and industry standards.</li>
                    </ul>
                </div>
                <div className={styles.educationListing} >
                    <h5>2023 - Present</h5>
                    <h4>Full Stack Engineer - <span className={styles.courseProvider} >Codecademy</span></h4>
                    <ul>
                        <li>
                            Gained advanced knowledge and practical experience in full-stack software engineering, building on foundations 
                            from the IBM Full Stack course.
                        </li>
                        <li>Developed projects including a React web app interfacing with the Spotify API and a Reddit clone website.</li>
                        <li>
                            Currently working on a full-stack e-commerce website using Next.js for frontend, Express.js for backend, and 
                            PostgreSQL for database management.
                            </li>
                    </ul>
                </div>
                <div className={styles.educationListing} >
                    <h5>2024 - Present</h5>
                    <h4>Diploma in Software Engineering - <span className={styles.courseProvider} >Mission Ready HQ</span></h4>
                    <ul>
                        <li>Enhanced my knowledge of the fundamentals of web development and industry best practices.</li>
                        <li>Learned collaborative development skills working on a team project using Github</li>
                    </ul>
                </div>
            </article>
            <article>
                <h2>hobbies and interests</h2>
                <p>
                    In my free time, I enjoy gardening and working out to maintain both mental and physical well-being. I also have a passion for 
                    playing video games, reading comics, and watching anime. Through my hobbies, I have become proficient in reading and speaking Japanese. 
                    Recently, I discovered a new passion for IT, which has motivated me to pursue a career in software and cloud engineering.
                </p>
            </article>
        </section>
    )
  }



// ============ FOR VARIABLE FUNCTION COMPONENTS ========= //
// import React, { RefObject } from 'react';

// interface AboutMeProps {
//     myRef: RefObject<HTMLElementTagNameMap['section']>;
// }

// const AboutMe: React.FC<AboutMeProps> = ({ myRef }) => {
//     return (
//     <section ref={myRef}>
//         {/* Your component content here */}
//     </section>
//     );
// }

// export default AboutMe;
