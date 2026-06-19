import { useState } from 'react'
import styles from './Projects.module.css'
import Header from '../components/Header'
import CardProject from '../components/CardProject'
import ContainerProjeto from '../components/ContainerProjeto'
import { arrayProjetos } from '../projetos'

function Projects(){
    const [projetoSelecionado, setProjetoSelecionado] = useState(null)

    return(


            <main className={styles.mainProjetos}>
                <Header tituloSecao={"Projetos"}></Header>
                <div className={styles.secaoProjetos}>
                    {
                        arrayProjetos.map((projeto) => (
                            <CardProject
                                key={projeto.nome}
                                name={projeto.nome}
                                imagem={projeto.imagem}
                                tecnologias={projeto.tecnologias}
                                onVerMais={() => setProjetoSelecionado(projeto)}
                            />
                        ))
                    }
                </div>

                <ContainerProjeto
                    projeto={projetoSelecionado}
                    onClose={() => setProjetoSelecionado(null)}
                />
            </main>



    )
}

export default Projects