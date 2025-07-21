import projectData from "./data";
import styles from "./Project.module.css";
import codeBlock from "../../assets/images/codeBlock.png"
import { useEffect } from "react";

export default function Projects(): React.JSX.Element {

    useEffect(() => {
        scrollTo({top: 0, behavior: 'smooth'});
    })


    return (
        <section className={styles.projectsPage} >
            <h1 className={styles.pageTitle} >My Projects</h1>
            <div className={styles.projectsContainer} >
                {projectData.map(project => (
                    <div key={project.id} className={styles.projectCard} >
                        <h2 className={styles.projectTitle} >{project.name}</h2>
                        <p className={styles.projectDescription} >{project.description}</p>
                        <img className={styles.projectImg} src={project.imgUrl ? project.imgUrl : codeBlock} alt={`Thumbnail for ${project.name}.`} />
                        <a href={project?.repoUrl} className={styles.linkToRepo} target="_blank" >View in GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    )
}
