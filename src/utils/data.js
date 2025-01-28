export const headlines = [
    "Hi, I'm Rafael.",
    "Software Engineer",
    "I create, build, and innovate software solutions.",
];

// Principais habilidades organizadas por categorias
export const skills = [
    // Back-end
    {name: ".NET (C#, EF, ASP.NET)", color: "#0078D7"},
    {name: "TypeScript", color: "#0078D7"},
    {name: "Node.js", color: "#0078D7"},
    {name: "Express", color: "#0078D7"},
    {name: "Docker", color: "#7acf58"}, // Verde
    {name: "Azure", color: "#7acf58"}, // Verde
    {name: "AWS", color: "#7acf58"}, // Verde
    {name: "SQL Server", color: "#5d4087"}, // Roxo
    {name: "PostgreSQL", color: "#5d4087"}, // Roxo
    {name: "MongoDB", color: "#5d4087"}, // Roxo
    {name: "SQLite", color: "#5d4087"}, // Roxo
    {name: "Redis", color: "#4682B4"}, // Azul Escuro
    {name: "RabbitMQ", color: "#4682B4"}, // Azul Escuro
    {name: "Clean Architecture", color: "#F7DF1E"}, // Amarelo
    {name: "CQRS", color: "#F7DF1E"}, // Amarelo
    {name: "Repository Pattern", color: "#F7DF1E"}, // Amarelo
    {name: "API Gateway", color: "#F7DF1E"},
    {name: "State Management", color: "#F7DF1E"},
    {name: "Dependency Injection", color: "#F7DF1E"},
    {name: "Angular", color: "#DD1B16"},
    {name: "Vue.js", color: "#DD1B16"},
    {name: "xUnit", color: "#800080"}, // Roxo
    {name: "NUnit", color: "#800080"}, // Roxo
    {name: "Jest", color: "#800080"}, // Roxo
    {name: "SpecFlow", color: "#9370DB"}, // Roxo Claro
    {name: "Jasmine", color: "#9370DB"}, // Roxo Claro

    {name: "IBM MQ", color: "#4682B4"}, // Azul
    {name: "MassTransit", color: "#4682B4"}, // Azul
    {name: "CI/CD", color: "#00CED1"}, // Azul Claro
    {name: "Agile (Scrum, Kanban)", color: "#FF6347"}, // Laranja Escuro
];

export const projects = [
    {
        title: "Cumes Brasil",
        image: "/assets/images/cumes.png",
        linkGithub: "https://github.com/rafael-ventura/cumes-brasil",
        linkOnline: "https://www.cumesbrasil.com.br",
        description: "PWA para escaladores do Rio de Janeiro, permitindo criar coleções, marcar escaladas e visualizar croquis.",
        techStack: ["Vue.js", "Tailwind CSS", "Firebase", "Node.js"],
    },
    {
        title: "Spotify Timeline",
        image: "/assets/images/spotify.png",
        linkGithub: "https://github.com/rafael-ventura/spotify-timeline",
        linkOnline: "https://spotify.rafael-ventura.dev.br",
        description: "Visualize seu histórico do Spotify, crie playlists e gere imagens para compartilhar.",
        techStack: ["Vue.js", "Spotify API", "Node.js"],
    },
    {
        title: "Vue Pokedex",
        image: "/assets/images/pokedex.png",
        linkGithub: "https://github.com/rafael-ventura/vue-pokedex",
        linkOnline: "https://pokedex.rafael-ventura.dev.br",
        description: "Uma pokedex estilizada com a primeira geração de pokémons, feita com Vue.js.",
        techStack: ["Vue.js", "PokéAPI", "CSS"],
    },
    {
        title: "Vai Bandeijar?",
        image: "/assets/images/vai-bandeijar.png",
        linkGithub: "https://github.com/rafael-ventura/vai-bandeijar",
        linkOnline: "https://vai-bandeijar.rafael-ventura.dev.br",
        description: "App para disponibilizar o cardápio semanal da Unirio via web, Telegram e email.",
        techStack: ["Angular", "TypeScript", "Node.js", "Pipeline CI/CD"],
    },
];
