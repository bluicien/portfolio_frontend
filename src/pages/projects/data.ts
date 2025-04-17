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
        name: "Jammming",
        description: "3rd party webapp that allows user to authenticate with spotify and search songs and build playlists directly to their spotify account.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/jammming.git"
    },
    {
        id: 2,
        name: "Reddit Clone App",
        description: "Clone App of Reddit built with React + Redux",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/redditapp"
    },
    {
        id: 3,
        name: "E-Commerce App",
        description: "Mock fullstack online retail store built with Next.js frontend and Express.js + PostgreSQL backend. Redis for session storage.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/E-Commerce-App"
    },
    {
        id: 4,
        name: "AI Interview Chat Bot",
        description: "Chatbot powered by Gemini AI. It enables the user to type any job profession of choice to simulate a job interview.",
        imgUrl: "",
        repoUrl: "https://github.com/bluicien/ai-job-interview-chatbot"
    }
];

export default projects;