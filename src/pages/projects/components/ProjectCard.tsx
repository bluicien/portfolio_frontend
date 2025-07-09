import styles from "./ProjectCard.module.css";

interface Project {
    id: string;
    name: string;
    description: string | null
    imgUrl: string | null;
    repoUrl: string | null;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div key={project.id} className={styles.projectCard} >
        <h2 className={styles.projectTitle} >{project.name}</h2>
        <p className={styles.projectDescription} >{project.description}</p>
        <img className={!project.imgUrl ? styles.noImage : ""} src={project.imgUrl ?? ""} alt={`Thumbnail for ${project.name}.`} />
        <a href={project?.repoUrl ?? ""} target="_blank" >View in GitHub</a>
    </div>
  )
}

export default ProjectCard