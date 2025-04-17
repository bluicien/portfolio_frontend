import projectData from "./data";
import styles from "./Project.module.css";

export default function Projects(): React.JSX.Element {

    return (
        <section className={styles.projectsPage} >
            <h1 className={styles.pageTitle} >My Projects :</h1>
            <div className={styles.projectsContainer} >
                {projectData.map(project => (
                    <div key={project.id} className={styles.projectCard} >
                        <h2 className={styles.projectTitle} >{project.name}</h2>
                        <p className={styles.projectDescription} >{project.description}</p>
                        <img className={!project.imgUrl ? styles.noImage : ""} src={project.imgUrl} alt={`Thumbnail for ${project.name}.`} />
                        <a href={project?.repoUrl} target="_blank" >View in GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    )
}
