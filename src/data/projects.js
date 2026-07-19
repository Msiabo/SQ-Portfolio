import assets from "../assets/assets";

const projects = [
  {
    id: 1,
    title: "Modern Portfolio",
    category: "Frontend",
    image: assets.portfolio,
    description:
      "A premium animated portfolio built with React, Tailwind CSS and Framer Motion.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
    github: "https://github.com/Msiabo/Modern-Portfolio",
    demo: "https://modern-portfolio-psi-three.vercel.app/",
    featured: true,
  },

  {
    id: 2,
    title: "P Masemola Foundation Website",
    category: "Frontend",
    image: assets.pmasemola,
    description:
      "A modern website for a non-profit organization built with React, Tailwind CSS and Framer Motion.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
    ],
    github: "https://github.com/Msiabo/P-Masemola",
    demo: "https://p-masemola-gep5.vercel.app/",
    featured: true,
  },

  {
    id: 3,
    title: "Bozza Job Portal",
    category: "Full Stack",
    image: assets.jobboard,
    description:
      "Complete recruitment platform with employer and job seeker portals.",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/Msiabo/Bozza",
    demo: "https://bozza-pl5q.vercel.app/",
    featured: true,
  },

  {
    id: 4,
    title: "Expense Management System",
    category: "Dashboard",
    image: assets.expense,
    description:
      "Expense management application with real-time tracking and analytics.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Chart.js",
    ],
    github: "https://github.com/Msiabo/Expense-Tracker",
    demo: "https://mern-expense-tracker-wheh.vercel.app/login",
    featured: false,
  },

  {
    id: 5,
    title: "Chat Website",
    category: "Full Stack",
    image: assets.chat,
    description:
      "Modern chat interface with real-time messaging and responsive design.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/Msiabo/React-Chat-App",
    demo: "https://react-chat-app-nqg6.vercel.app/login",
    featured: false,
  },

  {
    id: 6,
    title: "The Craftman Arts Website",
    category: "Frontend",
    image: assets.craftman,
    description:
      "Luxury furniture website showcasing products, services and completed projects.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Swiper",
    ],
    github: "https://github.com/Msiabo/The-Craftman-Arts",
    demo: "https://the-craftman-arts-xi.vercel.app/",
    featured: false,
  },

  {
    id: 7,
    title: "Spotify Clone",
    category: "frontend",
    image: assets.spotify,
    description:
      "Spotify-inspired music streaming application with playlist and playback features.",
    technologies: [
      "React",
      "REST API",
      "Tailwind CSS",
    ],
    github: "https://github.com/Msiabo/Spotify-Clone",
    demo: "https://spotify-clone-kappa-orcin.vercel.app/",
    featured: false,
  },

  {
    id: 8,
    title: "Interview Prep Website",
    category: "Full Stack",
    image:assets.interview,
    description:
      "Comprehensive interview preparation platform with practice questions and feedback.",
    technologies: [
      "React",
      "Chart.js",
      "InterviewBit API",

    ],
    github: "https://github.com/Msiabo/interview_buddy",
    demo: "https://interview-buddy-teal.vercel.app/sign-in",
    featured: false,
  },

  {
    id: 9,
    title: "Property Placement Website",
    category: "Full Stack",
    image: assets.home,
    description:
      "Online property placement platform with authentication, search and booking features.",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      
    ],
    github: "https://github.com/Msiabo/Elite-Homes",
    demo: "https://elite-homes-nu.vercel.app/",
    featured: true,
  },

  {
    id: 10,
    title: "Tshego's Nail Oasis Website",
    category: "Frontend",
    image: assets.tshego,
    description:
      "Modern nail salon website with online booking and service listings.",
    technologies: [
      "React",
      "Firebase",
      "Tailwind CSS",
    ],
    github: "https://github.com/Msiabo/Tshego",
    demo: "https://tshego-flax.vercel.app/",
    featured: false,
  },

];

export default projects;