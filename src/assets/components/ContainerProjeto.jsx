import styles from './ContainerProject.module.css'

function ContainerProjeto({ projeto, onClose }) {
    if (!projeto) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.midia}>
                    {projeto.video ? (
                        <video
                            className={styles.video}
                            src={projeto.video}
                            controls
                            autoPlay
                            muted
                            loop
                        />
                    ) : (
                        <img className={styles.video} src={projeto.imagem} alt={projeto.nome} />
                    )}
                </div>

                <div className={styles.conteudo}>
                    <button className={styles.fechar} onClick={onClose} aria-label="Fechar">
                        ×
                    </button>

                    <h2>{projeto.nome}</h2>

                        <p className={styles.descricao}>{projeto.descricao}</p>

                    {
                        projeto.link &&
                        <p className={styles.linkProjeto}>
                            Veja você mesmo:{' '}
                            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                                {projeto.link}
                            </a>
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ContainerProjeto
