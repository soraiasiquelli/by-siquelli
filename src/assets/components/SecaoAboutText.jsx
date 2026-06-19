import styles from "./SecaoAboutText.module.css"

function SecaoAboutText({ titulo, descricao }){
    return(
        <div className={styles.texto}>
            <h2>{titulo}</h2>
            <ul>
                {descricao.map((paragrafo, index) => (
                    <li key={index}>{paragrafo}</li>
                ))}
            </ul>
        </div>
    )
}

export default SecaoAboutText
