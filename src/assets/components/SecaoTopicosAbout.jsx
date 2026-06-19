import TopicoAbout from "./TopicoAbout"
import styles from "./SecaoTopicosAbout.module.css"

function SecaoTopicosAbout({ topicos, ativo, onHoverTopico }){
    return(
        <div className={styles.lista}>
            {topicos.map((topico, index) => (
                <TopicoAbout
                    key={topico.name}
                    name={topico.name}
                    ativo={index === ativo}
                    onMouseEnter={() => onHoverTopico(index)}
                />
            ))}
        </div>
    )
}

export default SecaoTopicosAbout