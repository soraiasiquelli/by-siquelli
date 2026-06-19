import styles from "./TopicoAbout.module.css"

function TopicoAbout({ name, ativo, onMouseEnter }){
    return(
        <div className={styles.item} onMouseEnter={onMouseEnter}>
            <button className={`${styles.botao} ${ativo ? styles.botaoAtivo : ''}`}>{name}</button>
        </div>
    )
}

export default TopicoAbout