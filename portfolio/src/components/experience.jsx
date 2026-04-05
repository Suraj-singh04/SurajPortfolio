"use client";

import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Project Trainee Intern",
    company: "Safety Circle India, Chandigarh (on-site)",
    period: "Mar, 2026 – April, 2026",
    description: [
      "Delivered trainings to the coorporate employees on various topics related to health and safety, including fire safety, first aid, and workplace ergonomics.",
      "Conducted safety audits and inspections to identify potential hazards and recommend corrective actions, resulting in a safer work environment.",
      "Assisted in the development and implementation of safety policies and procedures, ensuring compliance with local regulations and industry standards.",
      "Collaborated with cross-functional teams to promote a culture of safety awareness and continuous improvement within the organization.",
    ],
  },
  {
    title: "Tech Intern (NextJs Developer)",
    company: "Qyuki Digital Media, Mumbai (remote)",
    period: "Dec 2025 - Feb 2026",
    description: [
      "Developed and maintained a scalable web application frontend using Next.js and TypeScript, improving performance and user experience.",
      "Collaborated with backend developers to integrate RESTful APIs, ensuring seamless data flow between frontend and backend.",
      "Worked closely with UI/UX designers to implement responsive designs, enhancing the application's accessibility across devices.",
      "Participated in code reviews and contributed to improving code quality and maintainability.",
    ],
  },
];

export function Experience() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
        Experience
      </h2>
      <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold text-foreground">
                {exp.title}
              </h3>
              <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-6 text-primary font-medium">
              <div className="p-1 rounded bg-primary/10">
                <Briefcase className="w-4 h-4" />
              </div>
              {exp.company}
            </div>

            <ul className="list-disc list-outside ml-4 space-y-3 text-muted-foreground marker:text-primary/50">
              {exp.description.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
