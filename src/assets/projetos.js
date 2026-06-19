import reactIcon from './icons/react.svg'
import nodeIcon from './icons/node.svg'

export const arrayProjetos = [
   {
    nome: "SpeedOrder",
    imagem: "/images/testeimg.png",
    video: "/videos/VideoAtendente.mp4",
    descricao: ` Projeto desenvolvido integralmente por mim ao longo de 2 anos, desde o planejamento até a implantação em produção. Atuei em todas as etapas do desenvolvimento, incluindo front-end, back-end, banco de dados, APIs REST e hospedagem da aplicação na plataforma Integrator utilizando Node.js e PM2.


     O SpeedOrder é uma plataforma voltada para restaurantes e pizzarias, permitindo que clientes realizem pedidos pelo celular, atendentes gerenciem as solicitações e administradores controlem as operações do estabelecimento.
    O sistema possui módulos para Cliente, Atendente, Administrador e Master, oferecendo uma gestão completa dos pedidos e do negócio. 

      Tecnologias utilizadas: React, Node.js, Express, MySQL, API REST, HTML, Canva e ferramentas de fluxograma para modelagem dos processos.
      
      Observação: O vídeo apresenta apenas parte do sistema. Por se tratar de um projeto com potencial de lançamento comercial, algumas informações, nomes e elementos visuais foram adaptados ou mantidos em sigilo. `,
    tecnologias: [reactIcon, nodeIcon]},

    
    {
        nome: "DevTasks - Gestão de Projetos",
        imagem: "/images/devtasks.jpg",
        video: "/videos/videodevtasks.mp4",
        descricao: ` Projeto desenvolvido durante minha fase de aprendizado em React, antes de avançar para tecnologias mais robustas utilizadas posteriormente no SpeedOrder.

         O DevTasks é uma aplicação para gerenciamento de projetos e tarefas, permitindo organizar atividades e acompanhar seu progresso de forma simples e intuitiva. 

         Durante o desenvolvimento, aprofundei meus conhecimentos em React, Hooks, React Router, consumo e manipulação de dados em JSON, além da integração com um backend utilizando Express. 

         Tecnologias utilizadas: React, JavaScript, Express, HTML e CSS. `

    },
    {
        nome: `Cloud Car - 
       E-commerce`,
        link: "https://cloudcar.vercel.app/",
        imagem: "/images/cloudcar.png",
        video: "",
        descricao: ` Projeto desenvolvido em grupo para a disciplina de Desenvolvimento em Nuvem do curso de Ciência da Computação da USCS, onde fui responsável pelo desenvolvimento do front-end utilizando React.

        O objetivo do projeto foi aplicar conceitos modernos de desenvolvimento web, arquitetura em nuvem e boas práticas de engenharia de software em um cenário real de e-commerce automotivo. 
        
        A plataforma permite a consulta de veículos e a simulação de compras, integrando front-end, back-end e banco de dados em uma aplicação completa. 
        Tecnologias utilizadas: React, Node.js, Express, MongoDB e conceitos de infraestrutura cloud. `

    }
];