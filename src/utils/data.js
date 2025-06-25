export const headlines = [
    "Hi, I'm Rafael.",
    "Software Engineer",
    "I create, build, and innovate software solutions.",
];

// Principais habilidades organizadas por categorias
export const skills = [
    // Linguagens de Programação
    {name: "C#", color: "#0078D7", category: "languages"},
    {name: "TypeScript", color: "#0078D7", category: "languages"},
    {name: "JavaScript", color: "#0078D7", category: "languages"},
    {name: "Python", color: "#0078D7", category: "languages"},
    {name: "Node.js", color: "#0078D7", category: "languages"},
    
    // Frameworks & Frontend
    {name: "ASP.NET Core", color: "#DD1B16", category: "frameworks"},
    {name: "ASP.NET MVC", color: "#DD1B16", category: "frameworks"},
    {name: "ASP.NET Web API", color: "#DD1B16", category: "frameworks"},
    {name: "Entity Framework", color: "#DD1B16", category: "frameworks"},
    {name: "Blazor", color: "#DD1B16", category: "frameworks"},
    {name: "Razor", color: "#DD1B16", category: "frameworks"},
    {name: "EF Migrations", color: "#DD1B16", category: "frameworks"},
    {name: "Express.js", color: "#DD1B16", category: "frameworks"},
    {name: "Angular", color: "#DD1B16", category: "frameworks"},
    {name: "Vue.js", color: "#DD1B16", category: "frameworks"},
    {name: "React", color: "#DD1B16", category: "frameworks"},
    
    // Bancos de Dados
    {name: "SQL Server", color: "#47A248", category: "database"},
    {name: "PostgreSQL", color: "#47A248", category: "database"},
    {name: "MySQL", color: "#47A248", category: "database"},
    {name: "SQLite", color: "#47A248", category: "database"},
    {name: "RDS", color: "#47A248", category: "database"},
    {name: "MongoDB", color: "#47A248", category: "database"},
    {name: "RavenDB", color: "#47A248", category: "database"},
    {name: "Redis", color: "#47A248", category: "database"},
    {name: "RabbitMQ", color: "#47A248", category: "database"},
    {name: "IBM MQ", color: "#47A248", category: "database"},
    {name: "MassTransit", color: "#47A248", category: "database"},
    {name: "Azure Service Bus", color: "#47A248", category: "database"},
    
    // Cloud & DevOps
    {name: "AWS", color: "#FF9900", category: "cloud"},
    {name: "Azure", color: "#FF9900", category: "cloud"},
    {name: "EC2", color: "#FF9900", category: "cloud"},
    {name: "ECS", color: "#FF9900", category: "cloud"},
    {name: "S3", color: "#FF9900", category: "cloud"},
    {name: "CloudFront", color: "#FF9900", category: "cloud"},
    {name: "CodeDeploy", color: "#FF9900", category: "cloud"},
    {name: "CloudWatch", color: "#FF9900", category: "cloud"},
    {name: "Load Balancing", color: "#FF9900", category: "cloud"},
    {name: "Docker", color: "#FF9900", category: "cloud"},
    {name: "Kubernetes", color: "#FF9900", category: "cloud"},
    {name: "Azure DevOps", color: "#FF9900", category: "cloud"},
    {name: "GitHub Actions", color: "#FF9900", category: "cloud"},
    {name: "CI/CD", color: "#FF9900", category: "cloud"},
    
    // Testes
    {name: "xUnit", color: "#800080", category: "testing"},
    {name: "NUnit", color: "#800080", category: "testing"},
    {name: "Jest", color: "#800080", category: "testing"},
    {name: "SpecFlow", color: "#800080", category: "testing"},
    {name: "Moq", color: "#800080", category: "testing"},
    {name: "Coverlet", color: "#800080", category: "testing"},
    {name: "TDD", color: "#800080", category: "testing"},
    {name: "BDD", color: "#800080", category: "testing"},
    
    // Arquitetura & Padrões
    {name: "Clean Architecture", color: "#F7DF1E", category: "architecture"},
    {name: "SOLID", color: "#F7DF1E", category: "architecture"},
    {name: "DRY", color: "#F7DF1E", category: "architecture"},
    {name: "KISS", color: "#F7DF1E", category: "architecture"},
    {name: "DDD", color: "#F7DF1E", category: "architecture"},
    {name: "CQRS", color: "#F7DF1E", category: "architecture"},
    {name: "Repository Pattern", color: "#F7DF1E", category: "architecture"},
    {name: "Unit of Work", color: "#F7DF1E", category: "architecture"},
    {name: "Factory Pattern", color: "#F7DF1E", category: "architecture"},
    {name: "Strategy Pattern", color: "#F7DF1E", category: "architecture"},
    {name: "Decorator Pattern", color: "#F7DF1E", category: "architecture"},
    {name: "Mediator Pattern", color: "#F7DF1E", category: "architecture"},
    {name: "Dependency Injection", color: "#F7DF1E", category: "architecture"},
    {name: "API Gateway", color: "#F7DF1E", category: "architecture"},
    
    // Ferramentas, Integrações & Metodologias
    {name: "Visual Studio", color: "#5C2D91", category: "tools"},
    {name: "Visual Studio Code", color: "#5C2D91", category: "tools"},
    {name: "JetBrains Tools", color: "#5C2D91", category: "tools"},
    {name: "Git", color: "#5C2D91", category: "tools"},
    {name: "SonarQube", color: "#5C2D91", category: "tools"},
    {name: "REST APIs", color: "#5C2D91", category: "tools"},
    {name: "Webhooks", color: "#5C2D91", category: "tools"},
    {name: "JWT", color: "#5C2D91", category: "tools"},
    {name: "OAuth2", color: "#5C2D91", category: "tools"},
    {name: "Power BI", color: "#5C2D91", category: "tools"},
    {name: "Agile", color: "#5C2D91", category: "tools"},
    {name: "Scrum", color: "#5C2D91", category: "tools"},
    {name: "Kanban", color: "#5C2D91", category: "tools"},
];

// Categorias para filtros - Super simplificadas
export const skillCategories = [
    { id: "all", name: "Todas", color: "#6366F1" },
    { id: "languages", name: "Linguagens", color: "#0078D7" },
    { id: "frameworks", name: "Frameworks", color: "#DD1B16" },
    { id: "database", name: "Banco de Dados", color: "#47A248" },
    { id: "cloud", name: "Cloud & DevOps", color: "#FF9900" },
    { id: "testing", name: "Testes", color: "#800080" },
    { id: "architecture", name: "Arquitetura", color: "#F7DF1E" },
    { id: "tools", name: "Ferramentas & Conhecimentos", color: "#5C2D91" },
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
