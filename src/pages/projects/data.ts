export type Project = {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    repoUrl: string
}

const projects: Array<Project> = [
    {
        id: 1,
        name: "Personal Profile",
        description: "Responsive portfolio website with list of projects I've worked on, details information about myself and a chat bot to ask questions about myself.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/portfolio_frontend"
    },
    {
        id: 2,
        name: "TradeMe Redesign",
        description: "Redesigned TradeMe's auction UI and flow to enhance clarity, reduce friction and implemented MongoDB transactions to eliminate race conditions.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/TradeMe-Redesign"
    },
    {
        id: 3,
        name: "Seeding Tool & AI-Powered Search",
        description: "Engineered a CLI seeding tool with dual interactions using classic CLI commands and modern menu options. Also integrated an AI powered keyword search with NLP capabilities.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/cli-seeder-ai-search.git"
    },
    {
        id: 4,
        name: "School E-Learning Platform",
        description: "Collaborated in a development team to build a cross-school online learning platform for students to work on projects and teachers to mark and grade results.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/e-school-learning.git"
    },
    {
        id: 5,
        name: "AI Insurance Consultant",
        description: "Chatbot powered by Gemini AI. It enables the user to get personalized car insurance recommendations.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/AI-insurance-consultant.git"
    },
    {
        id: 6,
        name: "AI Interview Chat Bot",
        description: "Chatbot powered by Gemini AI. It enables the user to type any job profession of choice to simulate a job interview.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/AI-practice-job-interview.git"
    },
    {
        id: 6,
        name: "E-Commerce App Prototype",
        description: "Mock fullstack online retail store built with Next.js frontend and Express.js + PostgreSQL backend. Redis for session storage.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/E-Commerce-App"
    },
    {
        id: 7,
        name: "Reddit Clone App",
        description: "Clone App of Reddit built with React + Redux",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/redditapp"
    },
    {
        id: 8,
        name: "Jammming",
        description: "A 3rd party webapp that allows user to authenticate with spotify, browse songs and build playlists directly to their spotify account.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/jammming.git"
    },
    
];

export default projects;