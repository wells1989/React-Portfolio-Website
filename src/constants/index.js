import {
    mobile,
    backend,
    creator,

    // work exp
    meta,
    cambridge,
    codcademy,
    udemy,
    rsc,

    // technologies
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    bootstrap,
    Mocha,
    postgreSQL,
    python,
    sql,
    vscode,
    github,

    // projects
    todoList,
    bankserver,
    nodeJS,
    nodeandexpressJS,
    bookingui,
    blog,
    socialmedia,
    homepageHTML,
    components,
    reduxalbums,
    UFC,
    slotmachine,
    SQL1,
    SQL2,
    SQL3,
  
    web, 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front End Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
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
      name: "git",
      icon: git,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "Mocha",
      icon: Mocha,
    },
    {
      name: "postgreSQL",
      icon: postgreSQL,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "vsCode",
      icon: vscode,
    }
  ];
  
  const experiences = [
    {
      title: "React with Redux 2023 Course",
      company_name: "Udemy",
      icon: udemy,
      iconBg: "#383E56",
      date: "October - November 2023",
      points: [
        "Covering fundamental and advanced React concepts and state management techniques using Redux.",
        "Developing reusable React components for future projects.",
        "Final project used a range of state management libraries including Async Thunks and RTK to manage advanced state with a functioning API.",
      ],
    },
    {
      title: "HTML and CSS in Depth Course",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "September - October 2023",
      points: [
        "Developing more advanced knowledge of HTML5 and CSS3 with advanced elements.",
        "Developing mini projects utilising more complex methods, including a final web page under timed conditions.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other trainees.",
      ],
    },
    {
      title: "Full Stack Engineer Course",
      company_name: "Codcademy",
      icon: codcademy,
      iconBg: "#383E56",
      date: "Jan -July 2023",
      points: [
        "Covering both Front and Back end technologies, focusing on React + JavaScript for Front end, and NodeJS / PostgresSql for the Back end.",
        "Covering a range of practical areas of web development, including Git project management, client and server-side testing, and web security fundamentals.",
        "Creating a range of projects, including React applications, numerous fully responsive back-end NodeJS servers, and several Full Stack projects using the MERN stack to create RESTful APIs",
        "Additionally I completed a course on data algorithms and structures, which further solidified my knowledge of programming fundamentals"
      ],
    },
    {
      title: "NON-Tech based: English Teacher",
      company_name: "Cambridge School",
      icon: cambridge,
      iconBg: "#E6DEDD",
      date: "October 2019 - June 2023",
      points: [
        "Teaching over 100 students each year in 8-9 different classes of varying levels, using my versatility and creativeness to ensure engaging, dynamic classes.",
        "Utilizing multimedia technology in online classes to help students produce dynamic group projects.",
        "	This position taught me how to work independently, as I solely prepared and organized multiple classes / levels through a comprehensive English curriculum ranging from levels A1-C1.",
      ],
    },

    {
      title: "NON-Tech based: Customer Service Financial Advisor",
      company_name: "RSC New Homes",
      icon: rsc,
      iconBg: "#E6DEDD",
      date: "March 2013 - January 2017",
      points: [
        "Helping create and implement a database of thousands of clients with functions in place to aid effective teamwork.",
        "I was responsible for analyzing and compiling weekly sales reports to our business-partners throughout the UK.",
        "	This position required a strong team-orientated mindset, as I worked closely with a team of up to 10 people in a challenging, past-paced environment. It taught me the importance of team cohesion and clear, concise communication within a team.",
        "The role also involved managing 100s of applications simultaneously, which required me to take a proactive, efficient approach to client communication to keep everyone up to speed and satisfied.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
      "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
      "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];

  const projectColors = {
    react: "text-purple-400",
    redux: "text-purple-700",
    css: "text-pink-600",
    html: "text-orange-600",
    nodejs: "text-green-700",
    sql: "text-teal-500",
    postgreSQL: "text-teal-700",
    mongoDB: "text-blue-700",
    python: "text-yellow-600",
    nextjs: "text-blue-400",
    expressjs: "text-indigo-600",
    javascript: "text-orange-300"
  }
  
  const projects = [
    {
      name: "React-Redux Photo Albums",
      description:
        "Mini-project, using React-Redux for advanced state management.",
      tags: [
        {
          name: "React",
          color: projectColors.react
        },
        {
          name: "Redux",
          color: projectColors.redux,
        },
        {
          name: "JavaScript",
          color: projectColors.javascript,
        },
        {
          name: "CSS",
          color: projectColors.css,
        },
        {
          name: "HTML",
          color: projectColors.html,
        },
      ],
      image: reduxalbums,
      source_code_link: "https://github.com/wells1989/Photo-Albums-React-Redux",
    },
    {
      name: "Components React Project",
      description:
        "React based project, building reusable components for future applications.",
      tags: [
        {
          name: "React",
          color: projectColors.react
        },
        {
          name: "JavaScript",
          color: projectColors.javascript,
        },
        {
          name: "CSS",
          color: projectColors.css,
        },
        {
          name: "HTML",
          color: projectColors.html,
        },
      ],
      image: components,
      source_code_link: "https://github.com/wells1989/Components-React-Project",
    },
    {
      name: "HTML Homepage",
      description:
        "Basic HTML / CSS Homepage under timed conditions.",
      tags: [
        {
          name: "css",
          color: projectColors.css,
        },
        {
          name: "HTML",
          color: projectColors.html,
        },
      ],
      image: homepageHTML,
      source_code_link: "https://github.com/wells1989/HTML-CSS-Basic-Homepage",
    },
    {
      name: "Full Stack Social Media App",
      description:
        "Fully functional API server and UI for social media web app.",
      tags: [
        {
          name: "nodeJS",
          color: projectColors.nodejs
        },
        {
          name: "React",
          color: projectColors.react
        },
        {
          name: "Redux",
          color: projectColors.redux,
        },
        {
          name: "JavaScript",
          color: projectColors.javascript,
        },
        {
          name: "NextJS",
          color: projectColors.nextjs,
        },
        {
          name: "expressJS",
          color: projectColors.expressjs,
        },
        {
          name: "MongoDB",
          color: projectColors.mongoDB,
        },
        {
          name: "CSS",
          color: projectColors.css,
        },
        {
          name: "HTML",
          color: projectColors.html,
        },
      ],
      image: socialmedia,
      source_code_link: "https://github.com/wells1989/Full-Stack-Social-Media-App",
    },
    {
      name: "Full Stack Blog",
      description:
        "Fully functional API server and UI for blog website.",
      tags: [
        {
          name: "nodeJS",
          color: projectColors.nodejs
        },
        {
          name: "React",
          color: projectColors.react
        },
        {
          name: "JavaScript",
          color: projectColors.javascript,
        },
        {
          name: "expressJS",
          color: projectColors.expressjs,
        },
        {
          name: "MongoDB",
          color: projectColors.mongoDB,
        },
        {
          name: "CSS",
          color: projectColors.css,
        },
        {
          name: "HTML",
          color: projectColors.html,
        },
      ],
      image: blog,
      source_code_link: "https://github.com/wells1989/Full-stack-blog",
    },
    {
      name: "Back end Booking Clone",
      description:
        "Advanced Backend server using ExpressJS and MongoDB.",
      tags: [
        {
          name: "nodeJS",
          color: projectColors.nodejs
        },
        {
          name: "JavaScript",
          color: projectColors.javascript,
        },
        {
          name: "React",
          color: projectColors.react
        },
        {
          name: "NextJS",
          color: projectColors.nextjs,
        },
        {
          name: "expressJS",
          color: projectColors.expressjs,
        },
        {
          name: "MongoDB",
          color: projectColors.mongoDB,
        },
      ],
      image: bookingui,
      source_code_link: "https://github.com/wells1989/Back-End-Booking-Clone",
    },
    {
      name: "Back end E-commerce API",
      description:
        "Backend server using ExpressJS and MongoDB.",
      tags: [
        {
          name: "nodeJS",
          color: projectColors.nodejs
        },
        {
          name: "NextJS",
          color: projectColors.nextjs,
        },
        {
          name: "JavaScript",
          color: projectColors.javascript,
        },
        {
          name: "expressJS",
          color: projectColors.expressjs,
        },
        {
          name: "MongoDB",
          color: projectColors.mongoDB,
        },
      ],
      image: nodeandexpressJS,
      source_code_link: "https://github.com/wells1989/Back-End-E-Commerce-API",
    },
    {
      name: "Web navigator",
      description:
        "Mini project on web navigation using NodeJS.",
      tags: [
        {
          name: "nodeJS",
          color: projectColors.nodejs
        },
        {
          name: "JavaScript",
          color: projectColors.javascript,
        },
      ],
      image: nodeJS,
      source_code_link: "https://github.com/wells1989/Web-Navigator-Mini-project",
    },
    {
      name: "Backend Bank server",
      description:
        "Web security focused back end server, using express-validator / prepared statements / path traversal protection / csrf middleware.",
      tags: [
        {
          name: "nodeJS",
          color: projectColors.nodejs
        },
        {
          name: "JavaScript",
          color: projectColors.javascript,
        },
      ],
      image: bankserver,
      source_code_link: "https://github.com/wells1989/Back-End-Bank-Server",
    },
    {
      name: "Todo List",
      description:
        "Full stack to do list application.",
      tags: [
        {
          name: "JavaScript",
          color: projectColors.javascript,
        },
        {
          name: "SQL",
          color: projectColors.sql,
        },
      ],
      image: todoList,
      source_code_link: "https://github.com/wells1989/Full-Stack-to-do-list",
    },
    {
      name: "Furniture store database",
      description:
        "Creating a SQL database.",
      tags: [
        {
          name: "sql",
          color: projectColors.sql,
        },
      ],
      image: SQL3,
      source_code_link: "https://github.com/wells1989/SQL-furniture-store-database-mini-project",
    },   
    {
      name: "School database",
      description:
        "Creating a SQL mini-database.",
      tags: [
        {
          name: "sql",
          color: projectColors.sql,
        },
      ],
      image: SQL2,
      source_code_link: "https://github.com/wells1989/SQL-School-database-mini-project",
    },  
    {
      name: "Restaurant database",
      description:
        "Creating a SQL database.",
      tags: [
        {
          name: "sql",
          color: projectColors.sql,
        },
      ],
      image: SQL1,
      source_code_link: "https://github.com/wells1989/SQL-Restaurant-menu-mini-project",
    },  
    {
      name: "Slot machine mini-project",
      description:
        "Practice project using Python",
      tags: [
        {
          name: "python",
          color: projectColors.python,
        },
      ],
      image: slotmachine,
      source_code_link: "https://github.com/wells1989/Slot-Machine-mini-project",
    },  
    {
      name: "Ufc mini-game",
      description:
        "Practice project using Python",
      tags: [
        {
          name: "python",
          color: projectColors.python,
        },
      ],
      image: UFC,
      source_code_link: "https://github.com/wells1989/UFC_Minigame-mini-project",
    },  
  ];
  
  export { services, technologies, experiences, testimonials, projects };