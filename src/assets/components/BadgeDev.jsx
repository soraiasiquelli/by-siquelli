import styles from "./BadgeDev.module.css"

function BadgeDev(){
    return(
        <div className={styles.badge}>
            <span className={styles.linha1}>Dev</span>
            <span className={styles.linha2}>&lt;Since 2021/&gt;</span>
        </div>
    )
}

export default BadgeDev
