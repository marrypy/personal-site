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
    tagline: "CS @ Yale • Software Developer",
    bio:
      "Currently a freshman at Yale studying Computer Science, as well as a Software Developer for various organizations.",
    location: "Detroit, MI • New Haven, CT",
    email: "marry.kassa@yale.edu",
    links: [
      { label: "GitHub", href: "https://github.com/marrypy" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/marry-kassa/" },
    ]
  }
  
  export const skills = {
    categories: [
      {
        label: "Languages",
        items: ["Python", "JavaScript", "TypeScript", "Java", "HTML", "CSS", "C++", "Swift", "Dart", "Racket"]
      },
      {
        label: "Frameworks",
        items: ["React", "React Native", "Node.js", "Next.js", "TensorFlow", "PyTorch", "Flutter"]
      },
      {
        label: "Tools",
        items: ["Git", "Linux", "OpenCV", "Visual Studio", "XCode", "PyCharm", "Jupyter Notebook", "WordPress", "WiX", "Figma"]
      }
    ]
  }
  
  export const experience: ExperienceItem[] = [
    {
        role: "Software Development Engineer Intern",
        org: "Amazon",
        dates: "Incoming May 2025",
        bullets: [
          "Amazon Team Assignment TBD."
        ]
      },
      {
        role: "Web Developer Intern",
        org: "Yale College ASL Department",
        dates: "November 2025 — Present",
        tech: ["HTML", "CSS", "Javascript", "WordPress"],
        bullets: [
          "Creating ASL history archive website."
        ]
      },
      {
      role: "Software Developer",
      org: "Yale College IT",
      dates: "September 2025 — Present",
      tech: ["React", "Python", "Gemini API"],
      bullets: [
        "Developing Yale Xplore, an app meant to connect Yale undergrads with academic opportunities."
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
      name: "Star Detection Algorithm",
      description:
        "A novel approach to star detection in noisy astronomical images. Consists of a CNN model that distinguishes celestial objects based on Hough Circle Transform.",
      tech: ["Python", "OpenCV", "Tensorflow"],
      links: [
        { label: "Repository", href: "https://github.com/marsjpeg/Star-Detection-Algorithm" }
      ]
    },
      {
        name: "ProjectKepler",
        description:
          "A discord bot that teaches users different astronomy facts. Imports more than a dozen REST APIs, mostly from NASA, that provide up to date facts in embedded replies.",
        tech: ["Python", "JSON"],
        links: [
          { label: "Repository", href: "https://github.com/marsjpeg/ProjectKepler" }
        ]
      }
  ]
  
  export const awards: AwardItem[] = [
    { title: "Amazon Future Engineer Scholarship Recipient", org: "Amazon", year: "2025" },
    { title: "NCWIT AiC National Winner (Top 1%)", org: "NCWIT", year: "2025" },
    { title: "NCWIT AiC National Honorable Mention (Top 10%)", org: "NCWIT", year: "2024" }
  ]
  