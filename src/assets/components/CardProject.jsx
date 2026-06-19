import styles from './CardProject.module.css'

function CardProject({name, imagem, tecnologias, onVerMais}){
    return(
        <div className={styles.cardWrapper}>

            <div className={styles.cardProject} style={{ backgroundImage: `url(${imagem})` }}>
                <p>{name}</p>
                <br />
            

            </div>
            <div className={styles.infoProject} onClick={onVerMais}>

                    Ver Mais

            </div>

        </div>
    )
}

export default CardProject