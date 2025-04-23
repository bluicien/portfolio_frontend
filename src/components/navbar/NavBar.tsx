import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {

    return (
        <header className={styles.header}>
            <div className={styles.navIcon} >BL</div>

            <nav className={styles.navGroup} >
                <NavLink className={({isActive}) => isActive ? styles.active : styles.navItem} to={"/"} >Home</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.active : styles.navItem} to={"/projects"} >Projects</NavLink>
                <NavLink className={({isActive}) => isActive ? styles.active : styles.navItem} to={"/about-me"}  >About Me</NavLink>
            </nav>
        </header>
    )
}