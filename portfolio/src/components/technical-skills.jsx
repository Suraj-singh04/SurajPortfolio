"use client";

import { Code2, Server, Database, Globe, Wrench, Terminal, BookOpen } from "lucide-react";
import { GlowCard } from "./spotlight-card";
import { Carter_One } from "next/font/google";
import { h1 } from "framer-motion/client";

const skillCategories = [
    {
        title: "Languages",
        icon: Code2,
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "C++", "Java"],
    },
    {
        title: "Backend",
        icon: Server,
        skills: ["Node.js", "Express.js", "Spring Boot", "Apache Kafka","gRPC","WebSockets", "REST APIs", "Google Cloud Platform"],
    },
    {
        title: "Frontend",
        icon: Globe,
        skills: ["React.js", "Next.js", "React Native", "Tailwind CSS","ShadCN UI"]  
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["PostgreSQL", "MongoDB", "NoSQL"],
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        skills: ["Git", "GitHub", "Docker", "Postman", "Cloudinary", "Razorpay", "Hibernate ORM"], // Merged 'Tools' and other
    },
];

export function TechnicalSkills() {
    return (
        <>
        <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto bg-muted/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">
                Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                        <GlowCard className="bg-card" key={index} height={250} width={300}>

                        <div key={index} className="transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                    key={skill}
                                    className="px-3 py-1.5 text-sm rounded-md bg-secondary border border-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        </GlowCard>
                    )})}
            </div>
        </section>
        </>
    );
}
