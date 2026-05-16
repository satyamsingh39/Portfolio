import { 
  FaGithub, FaLinkedin, FaCode, FaRobot, FaDatabase, FaLayerGroup, FaGraduationCap, FaAward, FaExternalLinkAlt, FaBrain, FaServer, FaCogs, FaMobileAlt, FaCloud, FaSearch
} from 'react-icons/fa';
import { SiLeetcode, SiStreamlit, SiTailwindcss, SiMongodb, SiFirebase, SiTensorflow, SiOpenai, SiLangchain, SiPython, SiCplusplus, SiJavascript, SiReact, SiNodedotjs, SiExpress } from 'react-icons/si';

export const personalInfo = {
  name: "Satyam Singh",
  fullName: "Satyam Singh",
  title: "AI & Full Stack Developer",
  tagline: "I BUILD AI-POWERED DIGITAL EXPERIENCES",
  subheading: "Building intelligent systems, scalable web applications, and AI-powered solutions.",
  about: "Computer Science Engineering student specializing in Data Science & Engineering. Passionate about building real-world scalable applications and intelligent systems with a strong problem-solving mindset.",
  email: "satyamsinghsv39@gmail.com",
  phone: "+91 9065086415",
  resumeUrl: "https://drive.google.com/file/d/1efFRe8u1IsdPMQkYw876udSYc2PN9AUe/view?usp=drive_link",
  socials: [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/satyamsingh39" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/satyam-singh-850283281/" },
    { name: "LeetCode", icon: SiLeetcode, url: "https://leetcode.com/u/satyamsinghsv39/" },
  ],
  stats: [
    { label: "DSA Problems", value: "360+", icon: FaCode },
    { label: "SIH 2024", value: "Finalist", icon: FaAward },
    { label: "Major Projects", value: "4+", icon: FaLayerGroup },
    { label: "LeetCode Rating", value: "1400+", icon: SiLeetcode },
  ]
};

export const techStrip = [
  { name: "React", icon: SiReact },
  { name: "Python", icon: SiPython },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "LangChain", icon: SiLangchain },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Firebase", icon: SiFirebase },
  { name: "OpenAI", icon: SiOpenai },
];

export const services = [
  {
    title: "AI Development",
    description: "Building intelligent models and custom machine learning solutions for complex data problems.",
    icon: FaBrain,
  },
  {
    title: "Full Stack Development",
    description: "Developing scalable, high-performance web applications using the MERN stack.",
    icon: FaLayerGroup,
  },
  {
    title: "GenAI Solutions",
    description: "Leveraging LLMs and Generative AI to automate workflows and create smarter interfaces.",
    icon: SiOpenai,
  },
  {
    title: "Chatbot Integration",
    description: "Seamlessly integrating intelligent AI chatbots to enhance user engagement and support.",
    icon: FaRobot,
  },
  {
    title: "API Development",
    description: "Designing robust and secure RESTful APIs to power modern digital ecosystems.",
    icon: FaServer,
  },
  {
    title: "Database Solutions",
    description: "Architecting efficient and scalable database structures for high-volume data handling.",
    icon: FaDatabase,
  },
];

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: FaCode },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
    ]
  },
  {
    category: "AI & ML",
    items: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: FaRobot },
      { name: "XGBoost", icon: FaRobot },
      { name: "Deep Learning", icon: FaRobot },
    ]
  },
  {
    category: "GenAI",
    items: [
      { name: "LangChain", icon: SiLangchain },
      { name: "OpenAI API", icon: SiOpenai },
      { name: "Gemini AI", icon: SiOpenai },
      { name: "Vector DB", icon: FaDatabase },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ]
  },
  {
    category: "Tools & Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL", icon: FaDatabase },
      { name: "Firebase", icon: SiFirebase },
      { name: "Git", icon: FaGithub },
      { name: "Streamlit", icon: SiStreamlit },
    ]
  }
];

export const projects = [
  {
    title: "Multi-PDF Research Assistant",
    description: "RAG-based AI document Q&A system with semantic search and source attribution.",
    tech: ["Python", "LangChain", "FAISS", "Gemini", "Streamlit"],
    github: "#",
    demo: "#",
    image: "/src/assets/images/project-pdf.png"
  },
  {
    title: "ServiceMatch",
    description: "A comprehensive hospitality hiring platform with role-based authentication and AI chatbot support.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    github: "#",
    demo: "#",
    image: "/src/assets/images/project-servicematch.png"
  },
  {
    title: "AirSenseAI",
    description: "Advanced AQI prediction system using machine learning with PCA analysis.",
    tech: ["Python", "XGBoost", "Scikit-learn", "PCA"],
    github: "#",
    demo: "#",
    image: "/src/assets/images/project-airsense.png"
  },
  {
    title: "Cheetah vs Hyena Classifier",
    description: "Deep learning image classification model achieving 94% accuracy.",
    tech: ["TensorFlow", "CNN", "Python", "Augmentation"],
    github: "#",
    demo: "#",
    image: "/src/assets/images/project-classifier.png"
  }
];

export const achievements = [
  {
    title: "Smart India Hackathon 2024 Finalist",
    description: "National level finalist for building innovative technical solutions.",
    icon: FaAward,
    date: "2024"
  },
  {
    title: "360+ DSA Problems Solved",
    description: "Extensive problem solving across platforms like LeetCode and GFG.",
    icon: FaCode,
    date: "Ongoing"
  },
  {
    title: "1400+ LeetCode Rating",
    description: "Consistent performance in competitive programming contests.",
    icon: SiLeetcode,
    date: "2024"
  },
  {
    title: "Professional Certifications",
    description: "Cisco Python Essentials, Power BI Fundamentals.",
    icon: FaGraduationCap,
    date: "2023-2024"
  }
];
