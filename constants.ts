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
  "Data Analytics Certification",
  "The Complete SQL Bootcamp",
  "The Complete Python Pro Bootcamp",
  "SQL Fundamentals Masterclass",
  "Data Analytics Foundation"
];