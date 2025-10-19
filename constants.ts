import type { ProfileData, Experience, Project, SkillCategory, Award, Certification, LeetCodeStats, Testimonial } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "Shaikh Mohammad Mujammil",
  title: "Data Scientist | ML Engineer | LLM & Agentic AI Specialist",
  summary: "Experienced Data Scientist and Machine Learning Engineer specialized in NLP, Large Language Models (LLMs), and Agentic AI. Proficient in building intelligent systems, agentic workflows, and advanced NLP applications. Skilled in Python, cloud deployment (AWS, GCP), and data-driven decision-making.",
  contact: {
    email: "shaikhmujammil131@gmail.com",
    phone: "+91-9409654182",
    linkedin: "https://www.linkedin.com/in/mujammil-shaikh/",
    github: "https://github.com/mujammil-shaikh",
    portfolio: "https://mujammil-shaikh.github.io/",
    leetcode: "https://leetcode.com/u/shaikhmujammil131/"
  }
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "Junior Data Scientist",
    company: "XByte Technolab",
    location: "Ahmedabad, Gujarat",
    period: "Sept 2025 – Present",
    description: [
      "Driving GenAI, ML/DL, and Agentic AI R&D, delivering 2 commercial AI projects and 5+ client PoCs across multimodal and intelligent agent workflows.",
      "Enhanced decision-making with Power BI dashboards, supporting cross-functional teams and analytics needs.",
      "Built scalable image classification (zero-shot, VLM) and fashion segmentation for 3D AR/VR, improving efficiency by 30% in client solutions."
    ]
  },
  {
    role: "LLM Trainer and Specialist",
    company: "Outlier AI",
    location: "Remote",
    period: "Nov 2024 – July 2025",
    description: [
      "Achieved a 30% increase in LLM response quality through refined prompt engineering and evaluation.",
      "Partnered closely with cross-functional teams to address model limitations, improving technical assignment relevance and accuracy.",
      "Contributed to model reliability by developing robust assessment tools for quality control."
    ]
  },
  {
    role: "Data Analyst",
    company: "Code Unnati Edunet",
    location: "Ahmedabad, Gujarat",
    period: "Jan 2024 – June 2024",
    description: [
      "Executed comprehensive data analysis using Python, deriving actionable insights that guided strategic decision-making.",
      "Improved data handling by 25%, boosting workflow efficiency and reducing processing time by 15%.",
      "Partnered with stakeholders to streamline processes, boosting productivity and aligning objectives."
    ]
  },
  {
    role: "Data Scientist Internship Trainee",
    company: "Pantech Solution",
    location: "Online",
    period: "May 2023 – Nov 2023",
    description: [
      "Achieved 92% accuracy in sentiment analysis and predictive modelling for enhanced customer insights.",
      "Built deep learning models for applications like Covid-19 detection and face mask recognition.",
      "Leveraged Tableau and Power BI for data visualization, supporting effective storytelling and insight sharing."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
    {
    title: "Anonymized Client: 3D Fashion AR/VR Pipeline",
    description: "Developed an image segmentation model for fashion items to support 3D rendering for AR/VR applications. Created a bespoke dataset and processing pipeline.",
    tags: ["Computer Vision", "Deep Learning", "PyTorch", "AR/VR"],
    anonymized: true
  },
  {
    title: "Anonymized Client: VLM-based Image Classifier",
    description: "Built a multi-criteria image classification system using a Vision Language Model (VLM) for a dating platform. Implemented a complex validation pipeline using CLIP and YOLO.",
    tags: ["VLM", "CLIP", "YOLO", "Multimodal AI", "Data Pipeline"],
    anonymized: true
  },
  {
    title: "Anonymized Client: Generative Image Model",
    description: "Created an image generation model to produce realistic couple photos for a dating app, using individual male and female photos as input.",
    tags: ["Generative AI", "GANs", "Stable Diffusion", "PyTorch"],
    anonymized: true
  },
  {
    title: "Anonymized Client: Competitive Analysis Dashboard",
    description: "Designed and implemented Power BI dashboards for competitive analysis of jewelry products, tracking KPIs, volume, and price indexing.",
    tags: ["Power BI", "Data Visualization", "Business Intelligence"],
    anonymized: true
  },
  {
    title: "Anonymized Client: Retail Product Mapping",
    description: "Engineered a high-accuracy product mapping system to match over 30k products from one major retailer to a catalog of 400k products from another.",
    tags: ["Data Matching", "NLP", "Python", "ETL"],
    anonymized: true
  },
  {
    title: "Agentic SDLC Workflow with LangGraph",
    description: "Developed an award-winning, comprehensive, agentic workflow for managing Software Development Lifecycle (SDLC) processes using LangGraph.",
    tags: ["Agentic AI", "LangGraph", "LLM", "Automation"],
    github: "https://github.com/mujammil-shaikh"
  },
  {
    title: "Travel Agent Automation with CrewAI",
    description: "Designed an intelligent, multi-agent travel recommendation system leveraging CrewAI for dynamic decision-making and customer interaction.",
    tags: ["Agentic AI", "CrewAI", "Multi-Agent Systems"],
    github: "https://github.com/mujammil-shaikh"
  },
  {
    title: "Company Knowledge Base via Web Scraping",
    description: "Created a robust web scraping system to compile comprehensive summaries and knowledge bases from websites for human and agentic system use.",
    tags: ["Web Scraping", "BeautifulSoup", "NLP", "RAG"],
    github: "https://github.com/mujammil-shaikh"
  },
  {
    title: "Sentiment Analysis Model",
    description: "Developed a BERT-based model with 92% accuracy for multilingual feedback analysis.",
    tags: ["NLP", "BERT", "Hugging Face", "TensorFlow"],
    github: "https://github.com/mujammil-shaikh"
  },
  {
    title: "Disease Detection Model",
    description: "Deployed an 88%-accurate deep learning model for medical diagnostics, hosted on Hugging Face.",
    tags: ["Deep Learning", "CNN", "Hugging Face", "Gradio"],
    github: "https://github.com/mujammil-shaikh"
  },
  {
    title: "Interactive Power BI Dashboards",
    description: "Built five interactive Power BI dashboards for sales and operational analysis, reducing analysis time by 40%.",
    tags: ["Power BI", "Data Visualization", "DAX"],
  },
  {
    title: "Personal Portfolio Website",
    description: "Created a personal portfolio website, achieving a 60% increase in organic traffic through SEO optimization.",
    tags: ["React", "JavaScript", "HTML/CSS", "SEO"],
    github: "https://github.com/mujammil-shaikh/mujammil-shaikh.github.io",
    live: "https://mujammil-shaikh.github.io/"
  },
  {
    title: "Amazon Sales Data Analysis",
    description: "Analyzed Amazon sales data to uncover trends, supporting data-driven decisions and increasing revenue prediction accuracy by 15%.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "https://github.com/mujammil-shaikh",
  },
  {
    title: "Assistive Vision for the Visually Impaired",
    description: "Built an NLP-based tool using Text-to-Speech (TTS) to describe surroundings, enhancing accessibility for visually impaired users.",
    tags: ["NLP", "TTS", "Computer Vision", "Python"],
    github: "https://github.com/mujammil-shaikh",
  },
  {
    title: "CI/CD & Cloud Deployment Automation",
    description: "Built beginner-level automation pipelines using GitHub Actions for CI/CD, deploying applications on both AWS and Google Cloud platforms.",
    tags: ["CI/CD", "GitHub Actions", "AWS", "GCP", "DevOps"],
    github: "https://github.com/mujammil-shaikh",
  },
  {
    title: "Anonymized Client: Real-time Analytics Platform",
    description: "Developed a real-time data ingestion and visualization pipeline using Elasticsearch and Kibana for 7 platforms, tracking KPIs, price, and volume.",
    tags: ["Elasticsearch", "Kibana", "Data Pipeline", "Real-time"],
    anonymized: true,
  },
  {
    title: "Anonymized Client: QSR Product Matching",
    description: "Led a project to map products between major Quick Service Restaurants (Burger King, McDonald's, Wendy's) with high accuracy using NLP and similarity scoring.",
    tags: ["NLP", "Data Matching", "Similarity", "Python"],
    anonymized: true,
  },
  {
    title: "RAG-based Q&A Chatbot",
    description: "Developed a Question-Answering chatbot using Retrieval-Augmented Generation (RAG) with LangChain to provide answers from a custom knowledge base.",
    tags: ["RAG", "LangChain", "LLM", "Chatbot"],
    github: "https://github.com/mujammil-shaikh",
  },
  {
    title: "Sales Forecasting with Time Series",
    description: "Implemented a time-series forecasting model using ARIMA to predict future sales data, achieving an 8% improvement in forecast accuracy.",
    tags: ["Time Series", "ARIMA", "Scikit-learn", "Python"],
    github: "https://github.com/mujammil-shaikh",
  },
  {
    title: "Abstractive Text Summarization",
    description: "Built and fine-tuned a Transformer-based model for abstractive text summarization on long articles, using the Hugging Face ecosystem.",
    tags: ["NLP", "Transformers", "Hugging Face", "PyTorch"],
    github: "https://github.com/mujammil-shaikh",
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Data Science & AI",
    skills: ["NLP", "Machine Learning", "Deep Learning", "Agentic AI", "RAG", "Prompt Engineering", "Computer Vision"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["LangChain", "LangGraph", "CrewAI", "Hugging Face", "TensorFlow", "PyTorch", "spaCy", "NLTK", "Scikit-learn"]
  },
  {
    title: "Programming & Databases",
    skills: ["Python", "JavaScript", "SQL", "C", "R", "Elasticsearch"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (Lambda, SageMaker, Bedrock)", "GCP (Vertex AI)", "GitHub Actions", "Docker"]
  },
  {
    title: "Visualization & Tools",
    skills: ["Power BI", "Tableau", "Kibana", "Matplotlib", "Seaborn", "Excel", "Jupyter"]
  }
];

export const AWARDS_DATA: Award[] = [
  {
    title: "First Runner-Up, Agentic AI & GenAI Hackathon (2025)",
    issuer: "Hackathon Committee",
    description: "Awarded for developing a comprehensive agentic SDLC workflow using LangGraph and advanced NLP techniques."
  },
  {
    title: "First Runner-Up, GTU Code Unnati Innovation Marathon 2023-24",
    issuer: "Gujarat Technological University",
    description: "Recognized for innovative technology solutions among 750+ teams."
  },
  {
    title: "Top 4 in AWS DeepRacer (Gujarat)",
    issuer: "Amazon Web Services",
    description: "Demonstrated excellence in reinforcement learning and autonomous driving simulations."
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
    { title: "Machine Learning & Data Analysis", issuer: "FreeCodeCamp" },
    { title: "Programming Languages (Python, PHP, Java, SQL)", issuer: "SoloLearn" },
    { title: "AI Foundations & Fundamentals", issuer: "IBM" },
    { title: "Data Science in Python", issuer: "DataCamp" },
    { title: "Agentic AI & Generative AI with Cloud (AWS, GCP)", issuer: "Krishnaik Academic" }
];

export const LEETCODE_DATA: LeetCodeStats = {
    solved: "111/3716 Solved",
    acceptance: "87.05% Acceptance",
    easy: "59/907 Easy",
    medium: "52/1933 Medium",
    hard: "0/876 Hard"
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "Mujammil's expertise in Agentic AI and his ability to quickly prototype complex workflows was a game-changer for our project. His contributions were invaluable.",
    name: "A. K. Singh",
    title: "Senior AI Architect, XByte Technolab"
  },
  {
    quote: "Working with Mujammil was a pleasure. He has a deep understanding of LLMs and a knack for explaining complex concepts clearly. He significantly improved our model evaluation process.",
    name: "Dr. Elena V.",
    title: "Lead ML Researcher, Outlier AI"
  },
  {
    quote: "His passion for data science is infectious. Mujammil consistently delivered high-quality analysis and visualizations that provided critical insights for our team.",
    name: "Rohan Desai",
    title: "Project Mentor, Code Unnati Edunet"
  }
];

export const PORTFOLIO_CONTEXT = `
# Shaikh Mohammad Mujammil's Professional Portfolio

## Summary
- **Name**: ${PROFILE_DATA.name}
- **Title**: ${PROFILE_DATA.title}
- **Bio**: ${PROFILE_DATA.summary}
- **Contact**: Email: ${PROFILE_DATA.contact.email}, Phone: ${PROFILE_DATA.contact.phone}, LinkedIn: ${PROFILE_DATA.contact.linkedin}, GitHub: ${PROFILE_DATA.contact.github}

---

## Work Experience

${EXPERIENCE_DATA.map(exp => `
### ${exp.role} at ${exp.company}
- **Period**: ${exp.period}
- **Location**: ${exp.location}
- **Key Responsibilities & Achievements**:
${exp.description.map(d => `  - ${d}`).join('\n')}
`).join('\n---\n')}

---

## Projects

${PROJECTS_DATA.map(proj => `
### ${proj.title} ${proj.anonymized ? '(Anonymized Client Project)' : ''}
- **Description**: ${proj.description}
- **Technologies Used**: ${proj.tags.join(', ')}
${proj.github ? `- **GitHub**: ${proj.github}`: ''}
${proj.live ? `- **Live Demo**: ${proj.live}`: ''}
`).join('\n')}

---

## Technical Skills

${SKILLS_DATA.map(cat => `
### ${cat.title}
- ${cat.skills.join(', ')}
`).join('\n')}

---

## Awards & Recognition

${AWARDS_DATA.map(award => `
- **${award.title}**
  - **Issuer**: ${award.issuer}
  - **Description**: ${award.description}
`).join('\n')}

---

## Certifications

${CERTIFICATIONS_DATA.map(cert => `- **${cert.title}** from ${cert.issuer}`).join('\n')}

---

## LeetCode Statistics
- **Solved**: ${LEETCODE_DATA.solved}
- **Acceptance Rate**: ${LEETCODE_DATA.acceptance}
- **Difficulty Breakdown**: Easy: ${LEETCODE_DATA.easy}, Medium: ${LEETCODE_DATA.medium}, Hard: ${LEETCODE_DATA.hard}

---

## Testimonials

${TESTIMONIALS_DATA.map(t => `
> "${t.quote}"
> **- ${t.name}, ${t.title}**
`).join('\n')}
`;
