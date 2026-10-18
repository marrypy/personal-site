export type ExperienceItem = {
    role: string
    org: string
    dates: string
    bullets: string[]
    tech?: string[]
  }
  
  export type ProjectItem = {
    name: string
    description: string
    tech: string[]
    links?: { label: string; href: string }[]
  }
  
  export type AwardItem = {
    title: string
    org?: string
    year?: string
    details?: string
  }
  
  export const profile = {
    name: "Marry Kassa",
    tagline: "Software Engineer",
    bio:
      "Currently a sophomre at Yale studying Computer Science, as well as a Software Developer for various organizations, all while working on my own startup.",
    location: "Detroit, MI",
    email: "marry.kassa@yale.edu",
    links: [
      { label: "GitHub", href: "https://github.com/marrypy" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/marry-kassa/" },
      { label: "Socials", href: "https://beacons.ai/marrypyy" },
    ]
  }
  
  export const skills = {
    categories: [
      {
        label: "Languages",
        items: ["Python", "JavaScript", "TypeScript", "Java", "HTML", "CSS", "C++", "C", "Swift", "Dart", "Racket", "SQL"]
      },
      {
        label: "Frameworks",
        items: ["React", "React Native", "Node.js", "Next.js", "TensorFlow", "PyTorch", "Flutter"]
      },
      {
        label: "Tools",
        items: ["Git", "Linux", "AWS", "OpenCV", "Visual Studio", "XCode", "PyCharm", "Jupyter Notebook", "WordPress", "WiX", "Figma", "Excel"]
      }
    ]
  }
  
  export const experience: ExperienceItem[] = [
    {
      role: "Founder & CEO",
      org: "Isoso Inc.",
      dates: "Oct 2026 — Present",
      tech: ["React", "Git"],
      bullets: [
        "Built and launched an accessibility-focused developer CLI, reaching 1000+ downloads in the first week by publishing an npm package that helps developers identify web accessibility issues",
        "Developed a monetizable B2B accessibility platform by building a developer CLI and team dashboard, integrating Supabase for backend infrastructure and Stripe for payments"
      ]
    },
    {
      role: "Data Analyst",
      org: "Yale University: Shuttle Services",
      dates: "June 2026 — Aug 2026",
      tech: ["Excel"],
      bullets: [
        "Collected and analyzed data to improve shuttle service efficiency and customer satisfaction.",
        "Developed a dashboard to visualize shuttle service data and track key metrics."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      org: "Amazon",
      dates: "June 2026 — Aug 2026",
      tech: ["TypeScript", "Python", "AWS"],
      bullets: [
        "Orchestrating automation pipeline for regional backtesting in the Multichannel Fulfillment Center (MCCF) department, cutting down backtest processing time by over 83%."
      ]
    },
    {
      role: "Software Developer",
      org: "Yale Univerity: IT Department",
      dates: "Sep 2025 — Present",
      tech: ["React", "Python", "Gemini API"],
      bullets: [
        "Deployed Yale University exploration app prototype to connect over 6000 undergraduate students with resources, utilizing Google Gemini API for chatbot and data integration."
      ]
    },
    {
        role: "Program Mentor",
        org: "Yale Computer Society",
        dates: "September 2025 — December 2025",
        tech: ["React", "Vite", "HTML", "CSS", "Node.js", "Next.js"],
        bullets: [
          "Taught a group of students fullstack development weekly."
        ]
      },
      {
        role: "Machine Learning Researcher",
        org: "Pioneer Research Institute",
        dates: "June 2024 — September 2024",
        tech: ["Python", "Tensorflow", "JSON", "PyCharm"],
        bullets: [
          "Programmed star detection algorithm.",
          "Wrote 16-page research paper, ranking top 10%."
        ]
      },
      {
        role: "Web Developer Intern",
        org: "The Next IT Girl",
        dates: "February 2024 — August 2025",
        tech: ["HTML", "CSS", "WordPress"],
        bullets: [
          "Managed website for nonprofit.",
          "Founded the Youth Advisory Committee."
        ]
      },
      {
        role: "Webmaster",
        org: "Shadow Your Future",
        dates: "January 2024 — May 2025",
        tech: ["HTML", "CSS", "WiX"],
        bullets: [
          "Produced website from scratch for nonprofit."
        ]
      }
  ]
  
  export const projects: ProjectItem[] = [
    {
      name: "LoRA Optimization",
      description:
        "End-to-end pipeline in Python for improving LLM reliability and accuracy using LoRA fine-tuning, structured data engineering, and benchmark-based evaluation from training.",
      tech: ["Python", "JSON"],
      links: [
        { label: "Repository", href: "https://github.com/marrypy/LoRA-Optimization" }
      ]
    },
    {
      name: "Stock Market Prediction Game",
      description:
        "A simplified Python-based machine learning system that predicts whether a stock's price will go up or down the next trading day, then uses that prediction to power a C++ prediction market game.",
      tech: ["Python", "C++", "C", "CMake"],
      links: [
        { label: "Repository", href: "https://github.com/marrypy/Stock-Market-Prediction-Game" }
      ]
    },
    {
      name: "Star Detection Algorithm",
      description:
        "A novel approach to star detection in noisy astronomical images. Consists of a CNN model that distinguishes celestial objects based on Hough Circle Transform.",
      tech: ["Python", "OpenCV", "Tensorflow"],
      links: [
        { label: "Repository", href: "https://github.com/marrypy/Star-Detection-Algorithm" }
      ]
    }
  ]
  
  export const awards: AwardItem[] = [
    { title: "Y-Combinator Startup School", org: "Y-Combinator", year: "2026" },
    { title: "Amazon Future Engineer Scholarship Recipient", org: "Amazon", year: "2025" },
    { title: "Jane Street NCWIT Visit Program", org: "Jane Street", year: "2025" },
    { title: "NCWIT AiC National Winner (Top 1%)", org: "NCWIT", year: "2025" },
    { title: "NCWIT AiC National Honorable Mention (Top 10%)", org: "NCWIT", year: "2024" }
  ]
  
