import { Experience, Project, Education, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Rahul Sonde",
  title: "Data Analytics & QA Engineer",
  email: "rahulsonde@gmail.com",
  phone: "9766859580",
  location: "Pune, Maharashtra, India",
  linkedin: "linkedin.com/in/rahulsonde",
  summary: "Analytical professional with 1.5 years of software testing experience and advanced training in business analytics. Proven ability to leverage data analytics tools including Python, SQL, Power BI, and R to extract actionable insights."
};

export const SKILLS: Skill[] = [
  { name: "Python", category: "code" },
  { name: "SQL", category: "code" },
  { name: "R", category: "code" },
  { name: "Power BI", category: "data" },
  { name: "Tableau", category: "data" },
  { name: "Excel (Advanced)", category: "data" },
  { name: "MySQL", category: "tool" },
  { name: "PostgreSQL", category: "tool" },
  { name: "ETL Processes", category: "data" },
  { name: "Predictive Analytics", category: "data" },
  { name: "A/B Testing", category: "data" },
  { name: "SDLC", category: "tool" },
  { name: "Agile/Scrum", category: "tool" },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Test Engineer",
    company: "GlobalStep",
    location: "Maharashtra, India",
    period: "July 2022 – Sept 2023",
    description: [
      "Executed comprehensive software testing procedures ensuring 99%+ accuracy in bug identification.",
      "Collaborated with cross-functional development teams to analyze requirements and implement QA protocols.",
      "Utilized SQL queries to validate data integrity across databases and verify backend functionality.",
      "Created detailed analytics dashboards to track defect metrics, improving team productivity.",
      "Reduced critical bugs by systematically identifying software vulnerabilities through root cause analysis."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "MBA in Business Analytics",
    school: "Neville Wadia Institute of Management Studies",
    year: "2023 – 2025",
    details: ["Specialized in advanced analytics, predictive modeling, data mining", "Coursework: Machine Learning, Database Management"]
  },
  {
    degree: "BBA in Computer Applications",
    school: "Christ University, Pune - Lavasa",
    year: "2019 – 2022",
    details: ["Strong foundation in programming, database systems, and business management"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Weather Forecast Dashboard",
    category: "Power BI",
    tech: ["Power BI", "Data Viz", "UX Design"],
    description: "Interactive weather dashboard prioritizing user experience with streamlined layout for forecasts and air quality monitoring."
  },
  {
    id: "proj-2",
    title: "End-to-End Analytics Pipeline",
    category: "Engineering",
    tech: ["Python", "SQL", "Automation"],
    description: "Automated data reporting solution reducing manual reporting time by 60% through efficient dataset processing."
  },
  {
    id: "proj-3",
    title: "Business Performance Monitors",
    category: "Business Intelligence",
    tech: ["Power BI", "Real-time Data"],
    description: "Interactive dashboards for business performance monitoring, enabling stakeholders to make real-time data-driven decisions."
  },
  {
    id: "proj-4",
    title: "Strategic Predictive Modeling",
    category: "Data Science",
    tech: ["R", "Statistical Analysis"],
    description: "Conducted statistical analysis using R to deliver actionable insights for business strategy optimization."
  }
];

export const CERTIFICATIONS = [
  { 
    name: "Data Analytics Certification", 
    image: "https://upskill.tutedude.com/certificate/TD-RAHU-DA-1413" // Replace with your image path
  },
  { 
    name: "The Complete SQL Bootcamp", 
    image: "https://www.udemy.com/certificate/UC-1dbe2c18-d4a3-4a41-aea1-c2eb790ada9d/" 
  },
  { 
    name: "The Complete Python Pro Bootcamp", 
    image: "https://www.udemy.com/certificate/UC-22b11295-07d3-4ff9-a166-6fa7fdc99602/" 
  },
  { 
    name: "SQL Fundamentals Masterclass", 
    image: "https://www.wscubetech.com/verify-certificate/WS2025M70898D5818734" 
  },
  { 
    name: "Data Analytics Foundation", 
    image: "https://www.coursera.org/account/accomplishments/certificate/CACNRD39FAFD" 
  },
  { 
    name: "Share Data Using Google Data Cloud Skill Badge", 
    image: "https://www.credly.com/badges/fe6d96ec-68b0-4818-8900-c1e44a6540dd/public_url" 
  },
  { 
    name: "Google Cloud - Command Line Skill Badge", 
    image: "https://www.credly.com/badges/0cc070e8-9b79-4989-b2ba-1039c5c5d7b7/public_url" 
  },
  { 
    name: "Streaming Analytics into BigQuery Skill Badge", 
    image: "https://www.credly.com/badges/2dbd66b0-2606-4bd1-be3e-e3a00ad8fc87/public_url" 
  }
];
