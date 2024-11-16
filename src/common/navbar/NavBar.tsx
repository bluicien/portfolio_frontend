import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import reactImg from "../../assets/react.svg"

export default function NavBar() {

  return (
    <header className={styles.header}>
        <img  src={reactImg} alt="" />

        <nav className={styles.navGroup} >
              <NavLink className={styles.navItem} to={"/"} >Home</NavLink>
              <NavLink className={styles.navItem} to={"/projects"} >Projects</NavLink>
              <NavLink className={styles.navItem} to={"/about"}  >About Me</NavLink>
        </nav>
    </header>
  )
}