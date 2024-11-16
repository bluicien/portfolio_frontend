import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import reactImg from "../../assets/react.svg"

export default function NavBar() {

  return (
    <header className={styles.header}>
        <img  src={reactImg} alt="" />

        <nav className={styles.navGroup} >
            <NavLink to={"/"} className={styles.navItem} >Home</NavLink>
            <NavLink to={"/projects"} className={styles.navItem} >Projects</NavLink>
            <NavLink to={"/about"} className={styles.navItem} >About Me</NavLink>
        </nav>
    </header>
  )
}
