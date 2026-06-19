import { SiJavascript, SiPython, SiMysql, SiMongodb, SiWordpress } from "react-icons/si"
import { DiJava } from "react-icons/di"
import reactIcon from "../icons/react.svg"
import gitLogo from "../icons/github.svg"
import styles from "./BarraSkills.module.css"

function BarraSkills(){
    return(
        <div className={styles.container}>
            <div className={styles.barra}>
                <img src={reactIcon} alt="React" className={styles.icone} />
                <SiJavascript className={styles.icone} title="JavaScript" />
                <DiJava className={styles.icone} title="Java" />
                <SiPython className={styles.icone} title="Python" />
                <span className={styles.titulo}>Minhas Skills</span>
                <SiMysql className={styles.icone} title="MySQL" />
                <SiMongodb className={styles.icone} title="MongoDB" />
                <img src={gitLogo} alt="GitHub" className={styles.icone} />
                <SiWordpress className={styles.icone} title="WordPress" />
            </div>
        </div>
    )
}

export default BarraSkills
