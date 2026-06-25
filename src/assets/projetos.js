import reactIcon from './icons/react.svg'
import nodeIcon from './icons/node.svg'

export const arrayProjetos = [
   {
    nome: "SpeedOrder",
    imagem: "/images/speedorder.png",
    video: "/videos/VideoAtendente.mp4",
    descricao: ` Projeto desenvolvido integralmente por mim ao longo de 2 anos, desde o planejamento até a implantação em produção. Atuei em todas as etapas do desenvolvimento, incluindo front-end, back-end, banco de dados, APIs REST e hospedagem da aplicação na plataforma Integrator utilizando Node.js e PM2.


     O SpeedOrder é uma plataforma voltada para restaurantes e pizzarias, permitindo que clientes realizem pedidos pelo celular, atendentes gerenciem as solicitações e administradores controlem as operações do estabelecimento.
    O sistema possui módulos para Cliente, Atendente, Administrador e Master, oferecendo uma gestão completa dos pedidos e do negócio. 

      Tecnologias utilizadas: React, Node.js, Express, MySQL, API REST, HTML, Canva e ferramentas de fluxograma para modelagem dos processos.
      
      Observação: O vídeo apresenta apenas parte do sistema. Por se tratar de um projeto com potencial de lançamento comercial, algumas informações, nomes e elementos visuais foram adaptados ou mantidos em sigilo. `,
    tecnologias: [reactIcon, nodeIcon]},

    
    {
        nome: "GelaBem AI",
        imagem: "/images/gelabemimagem.png",
        video: "/videos/gelabem.mp4",
        descricao: ` Gelabem AI é uma aplicação inteligente de gerenciamento de estoque doméstico que utiliza inteligência artificial para facilitar o controle de alimentos e produtos armazenados. O sistema permite que o usuário cadastre itens manualmente ou através de fotos, onde a IA identifica automaticamente o produto e ajuda a organizar informações como nome, categoria e quantidade.

    O projeto também inclui suporte para diferentes unidades de medida (como kg, g, litros, mL e unidades), tornando o controle mais preciso e flexível. Além disso, o Gelabem AI pode sugerir receitas com base nos itens disponíveis no estoque, ajudando o usuário a aproveitar melhor os alimentos e reduzir desperdícios.

    Desenvolvido como um MVP (produto mínimo viável), o objetivo do Gelabem AI é evoluir para uma solução mais avançada no futuro, com automações e integração com dispositivos inteligentes, como geladeiras conectadas, transformando-se em um verdadeiro sistema de “geladeira inteligente.

         Tecnologias utilizadas: Angular 17, Express, Sequelize, Node.js`

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