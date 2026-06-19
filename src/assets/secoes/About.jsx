import { useState } from 'react'
import styles from './About.module.css'
import SecaoTopicosAbout from '../components/SecaoTopicosAbout'
import SecaoAboutText from '../components/SecaoAboutText'
import BadgeDev from '../components/BadgeDev'
import BarraSkills from '../components/BarraSkills'
import Header from '../components/Header'

const topicos = [
    {
        name: "Santander",
        titulo: "Estágiaria em Dados e Desenvolvimento de Plataformas",
        descricao: [
            "Desenvolvo aplicações utilizando Power Apps, Power Automate, Python e SQL, com foco em automação e eficiência operacional.",
            <>As soluções desenvolvidas são utilizadas pelo time comercial em <strong>diversas regiões do Brasil,</strong> apoiando processos e tomada de decisão, e contribuíram para uma <strong>redução de 52% no volume de e-mails recebidos pela equipe.</strong></>
        ]
    },
    {
        name: "UX4YOU",
        titulo: "Analista de SEO e Desenvolvimento WEB",
        descricao: ["Atuei no desenvolvimento de sites e landing pages em WordPress, aplicando estratégias de SEO para melhorar o posicionamento orgânico. Durante esse período, aprofundei meus conhecimentos em design, experiência do usuário (UX), performance de sites e otimização para conversão."]
    },
    {
        name: "USCS - Ciência da Computação",
        titulo: "Minha Formação",
        descricao: ["Graduanda em Ciência da Computação, com conhecimentos em desenvolvimento de software, bancos de dados e Inteligência Artificial. Tenho especial interesse em estudar e aplicar tecnologias de IA no desenvolvimento de sistemas e aplicações. Pretendo continuar minha formação por meio de uma pós-graduação na área de desenvolvimento de software."]
    },
    {
        name: "Senai - Desenvolvimento de Sistemas",
        titulo: "O Início",
        descricao: ["Concluí o curso Técnico em Desenvolvimento de Sistemas pelo SENAI em 2022, onde construí uma sólida base em programação, bancos de dados, desenvolvimento web e boas práticas de engenharia de software. Logo após a formação, iniciei minha graduação em Ciência da Computação"]
    },
]

function About(){
    const [ativo, setAtivo] = useState(0)
    const topicoAtivo = topicos[ativo]

    return(
        <main className={styles.mainAbout}>
            <BadgeDev />
            <Header tituloSecao="Sobre Mim"> </Header>

        <div className={styles.columns}>
            <div className={styles.column}>
                <SecaoTopicosAbout topicos={topicos} ativo={ativo} onHoverTopico={setAtivo} />
            </div>
            <div className={styles.column}>
                <SecaoAboutText titulo={topicoAtivo.titulo} descricao={topicoAtivo.descricao} />
            </div>
        </div>

        <BarraSkills />

        </main>
    )
}

export default About