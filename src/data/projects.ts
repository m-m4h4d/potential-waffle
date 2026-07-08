export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "Vectra Studio Website",
    description: "3D Parallax effect using three.js and canvas API.",
    image: "/assets/project1.png",
    tags: ["GitHub", "Open Source", "Three.js", "Canvas", "JavaScript"],
    github: "https://github.com/m-m4h4d/vectra",
    demo: "https://vectra-five-red.vercel.app/"
  },
  {
    title: "SpendWise - Expense Tracker",
    description: "Hunarmand Punjab Cross-Platform Flutter App Development Final Project",
    image: "/assets/project6.png",
    tags: ["Flutter", "GitHub", "Firebase", "Cross-Platform"],
    github: "https://github.com/m-m4h4d/mahad_expense_tracker",
    demo: "https://spendwise-eight-weld.vercel.app/"
  },
  {
    title: "Nust Policy Copilot",
    description: "A strictly grounded RAG assistant for NUST University handbooks. Get instant answers about Attendance, Grading, Fees, and Hostels with zero hallucinations.",
    image: "/assets/project2.png",
    tags: ["LLM RAG", "Gemini API", "Langchain", "Streamlit", "Next.js", "Python"],
    github: "https://github.com/m-m4h4d/nust-policy-copilot",
    demo: "https://nust-policy-copilot.vercel.app"
  },
  {
    title: "Turing Machine Emulator",
    description: "Our goal was to bridge this gap by creating an interactive emulator that visually demonstrates TM-based arithmetic (Addition, Subtraction, Multiplication) step-by-step.",
    image: "/assets/project3.png",
    tags: ["GitHub", "Open Source", "Python", "Streamlit", "Tkinter", "Turing Machine", "Simulation"],
    github: "https://github.com/m-m4h4d/turing_emulator",
    demo: "https://turing-emulator.vercel.app"
  },
  {
    title: "Best Talk",
    description: "Welcome to Best Talk! This application empowers users' learning journeys with the best tutors. Our online tutors offer personalized, one-on-one learning to help you improve your grades, build your confidence, and achieve your academic goals.",
    image: "/assets/project4.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "GitHub"],
    github: "https://github.com/m-m4h4d/b-talk",
    demo: "https://b-talk.vercel.app"
  },
  {
    title: "Microbial Chemoresistance Knowledgebase (MiCK)",
    description: "MiCK is a comprehensive knowledge base that houses ~1.6 million microbial gene sequences associated with chemoresistance in multiple cancers. These sequences encompass 29 different gene types linked to chemoresistance and drug metabolism, meticulously curated from recent literature and databases.",
    image: "/assets/project5.png",
    tags: ["React", "D3.js", "Express", "MongoDB", "GitHub"],
    github: "https://github.com/m-m4h4d/my-app",
    demo: "https://my-app-khaki-theta.vercel.app"
  },
  {
    title: "Presence+",
    description: "Presence+ automates the classroom experience using Bluetooth Low Energy (BLE). No more manual call-outs, no more forgotten logs. Just seamless, secure, and smart attendance.",
    image: "/assets/project7.png",
    tags: ["Flutter", "Bluetooth", "GitHub", "Firebase", "Android", "iOS", "Cross-Platform"],
    github: "https://github.com/m-m4h4d/bluetooth_attendance",
    demo: "https://presenceplus-phi.vercel.app"
  },
  {
    title: "Mahad | Full Stack Developer",
    description: "Personal Portfolio Website.",
    image: "/assets/project8.png",
    tags: ["React", "Tailwind CSS", "Next.js", "TypeScript", "GitHub", "Vercel", "Open Source"],
    github: "https://github.com/m-m4h4d/potential-waffle",
    demo: "https://m-mahad-profile.vercel.app/"
  },
  {
    title: "TaskPulse",
    description: "TaskPulse is a comprehensive task management application built with Flutter, designed to help individuals organize their daily tasks efficiently. It features a modern, responsive UI, task categorization, priority levels, and local data persistence. Made by Muhammad Mahad.",
    image: "/assets/project9.png",
    tags: ["Flutter", "Dart", "GitHub", "Vercel", "Open Source"],
    github: "https://github.com/m-m4h4d/mahad-task-manager",
    demo: "https://taskpulse-rho.vercel.app/"
  },
  {
    title: "BazaarFlow",
    description: "BazaarFlow is a modern E-commerce platform that integrates elegant design with powerful specifications, offering unparalleled performance, dark mode capabilities, and an intuitive user flow for all your shopping needs.",
    image: "/assets/project10.png",
    tags: ["Flutter", "Dart", "GitHub", "Vercel", "Open Source"],
    github: "https://github.com/m-m4h4d/bazaarflow",
    demo: "https://bazaarflow.vercel.app/"
  },
  {
    title: "EduPulse",
    description: "EduPulse is a stunning, cross-platform learning management application. Seamlessly switch between your mobile device and the web without missing a beat.",
    image: "/assets/project11.png",
    tags: ["Flutter", "Dart", "GitHub", "Vercel", "Open Source"],
    github: "https://github.com/m-m4h4d/edupulse",
    demo: "https://edupulse-phi-jet.vercel.app/"
  },
  {
    title: "ServixPro",
    description: "ServixPro is a cross-platform Service Marketplace application where customers can discover and book service providers for home and corporate needs.",
    image: "/assets/project12.png",
    tags: ["Flutter", "Dart", "GitHub", "Vercel", "Open Source"],
    github: "https://github.com/m-m4h4d/servixpro",
    demo: "https://servixpro.vercel.app/"
  }
];
