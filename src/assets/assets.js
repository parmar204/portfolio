import htmlImg from "../assets/html.png"
import cssImg from "../assets/css.webp"
import jsImg from "../assets/javascript.webp"
import reactImg from "../assets/react.png"
import tailwindCssImg from "../assets/tailwindcss.png"
import nodeImg from "../assets/node.png"
import expressImg from "../assets/express.png"
import mysqlImg from "../assets/mysql.webp"
import mongoDbImg from "../assets/mongodb.png"
import gitImg from "../assets/git.png"
import githubImg from "../assets/github.png"
import vscodeImg from "../assets/vscode.png"
import chatconnectImg from "../assets/chatconnect.png"
import blogImg from "../assets/blog.svg"
import imagegenerationImg from "../assets/imageGeneration.svg"

export const portfolioData = {
    education: [
        {
            degree: "BSc IT",
            institution: "Mumbai University (MU)",
            details: "Overall CGPA: 9.25"
        },
        {
            degree: "HSC (Higher Secondary Certificate)",
            institution: "Maharashtra State Board",
            details: "Percentage: 46.66%"
        },
        {
            degree: "SSC (Secondary School Certificate)",
            institution: "Maharashtra State Board",
            details: "Percentage: 79.2%"
        }
    ],
    skills: {
        frontend: [
            {
                name: "HTML",
                icon: htmlImg
            },
            {
                name: "CSS",
                icon: cssImg
            },
            {
                name: "JavaScript",
                icon: jsImg
            },
            {
                name: "React.js",
                icon: reactImg
            },
            {
                name: "Tailwind CSS",
                icon: tailwindCssImg
            }
        ],
        backend: [
            {
                name: "Node.js",
                icon: nodeImg
            },
            {
                name: "Express.js",
                icon: expressImg
            },
            {
                name: "MySQL",
                icon: mysqlImg
            },
            {
                name: "MongoDB",
                icon: mongoDbImg
            }
        ],
        tools: [
            {
                name: "Git",
                icon: gitImg
            },
            {
                name: "GitHub",
                icon: githubImg
            },
            {
                name: "VS Code",
                icon: vscodeImg
            }
        ]
    },
    projects: [
        {
            name: "ChatConnect",
            description: "A real-time chat application.", 
            githubLink: "https://github.com/parmar204/ChatConnect", 
            image: chatconnectImg
        },
        {
            name: "AI Blog Website",
            description: "A blog platform integrated with AI features (e.g., content generation, summarization).", 
            githubLink: "https://github.com/parmar204/Blog", 
            image: blogImg
        },
        {
            name: "Text to Image Generation with AI",
            description: "An application that generates images from text descriptions using AI models.", 
            githubLink: "https://github.com/parmar204/ImageGenerator",
            image: imagegenerationImg
        }
    ],
}

 export const navlinks = [
    {
        name: "Home", href: "/"
    },
    {
        name: "Skills", href: "#skill"
    },
    {
        name: "Education", href: "#education"
    },
    {
        name: "Project", href: "#Project"
    }
]