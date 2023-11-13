import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    material,
    nextjs,
    hardhat,
    ethereum,
    codezone,
    orion,
    zeema,
    bond,
    lingo,
    threejs,
    dank,
    paycat,
    grow
} from "../public/assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web3 Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "BlockChain Developer",
        icon: mobile,
    },
    // {
    //     title: "Content Creator",
    //     icon: creator,
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Material UI",
        icon: material,
    },
    {
        name: "Next Js",
        icon: nextjs,
    },
    {
        name: "Hardhat",
        icon: hardhat,
    },
    {
        name: "Ethereum",
        icon: ethereum,
    },

];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "CodeZone",
        icon: '/codezone.png',
        iconBg: "#383E56",
        date: "Aug 2022 - Feb 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Faizan proved me wrong.",
        name: "Micheal",
        designation: "CFO",
        company: "Acme Co",
        image: "/test1.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Faizan does.",
        name: "Usama Zakir",
        designation: "COO",
        company: "DEF Corp",
        image: "/test2.jpg",
    },
    {
        testimonial:
            "After Faizan optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Jackson",
        designation: "CTO",
        company: "456 Enterprises",
        image: "/test3.jpg",
    },
];

const projects = [
  
    {
        name: "Grow",
        description:
            "Seamlessly stake your coins to build a robust investment portfolio, empowering users with a simplified and efficient approach to wealth growth.",
        tags: [
            {
                name: "4eactjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "material-ui",
                color: "pink-text-gradient",
            },
            {
                name: "wagmi",
                color: "yellow",
            },
        ],
        image: grow,
        source_code_link: "https://grow-demo.netlify.app/",
    },
    {
        name: "PayCat",
        description:
            "PayCat is an innovative and decentralized e-commerce platform that combines the power of blockchain technology with an intuitive chat feature to revolutionize online shopping. ",
        tags: [
            {
                name: "vitejs",
                color: "blue-text-gradient",
            },
            {
                name: "MERN Stack",
                color: "green-text-gradient",
            },
            {
                name: "solidity",
                color: "pink-text-gradient",
            },
            {
                name: "AWS",
                color: "yellow",
            },
            {
                name: "Smart Contract",
                color: "red",
            },
        ],
        image: paycat,
        source_code_link: "https://crypto-wallett.netlify.app/",
    },
    {
        name: "Dank Frontend",
        description:
            "This project is a demonstration of my proficiency in building responsive and user-friendly interfaces, utilizing a modern tech stack and design principles.",
        tags: [
            {
                name: "vitejs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "swiperjs",
                color: "yellow",
            },
        ],
        image: dank,
        source_code_link: "https://dank-frontend.netlify.app",
    },
    {
        name: "Orion",
        description:
            "Orion is a visually stunning and interactive frontend project that showcases my skills. Explore the beautifully crafted interface that demonstrate my expertise in frontend technologies.",
        tags: [
            {
                name: "vitejs",
                color: "blue-text-gradient",
            },
            {
                name: "reactjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "syncfusion",
                color: "yellow",
            },
        ],
        image: orion,
        source_code_link: "https://orion-updated.netlify.app",
    },
    {
        name: "CodeZone",
        description:
            "Codezoone is an innovative full-stack web application that showcases my skills in end-to-end web development. From its intuitive user interface to its powerful backend functionality.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "material-ui",
                color: "pink-text-gradient",
            },
            {
                name: "nodejs",
                color: "yellow",
            },
            {
                name: "mongodb",
                color: "red",
            },
            {
                name: "rest-api",
                color: "indigo",
            },

        ],
        image: codezone,
        source_code_link: "https://codezoone.netlify.app",
    },
    {
        name: "Zemaa Entertainment",
        description:
            "Zemaa provides facility for 24/7 live streaming on youtube. With the help of the zemaa  plateform the user can do the live stream 24/7 for any number of days according to his plan.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "material-ui",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "yellow",
            },
            {
                name: "oracle-cloud",
                color: "red",
            },
            {
                name: "cloudinary",
                color: "indigo",
            },
        ],
        image: zeema,
        source_code_link: "https://zemas.live",
    },
    {
        name: "LingoTalker",
        description:
            "Lingo Talker is an educational plateform on this platform any teacher from any region of the world can register and can teach any student from any region of the world and can earn revenue.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "material-ui",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "yellow",
            },
            {
                name: "AWS",
                color: "red",
            },
        ],
        image: lingo,
        source_code_link: "https://app.lingotalker.com",
    },

];

export { services, technologies, experiences, testimonials, projects };