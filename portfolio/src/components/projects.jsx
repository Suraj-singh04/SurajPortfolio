"use client";

import { Github, ExternalLink, Code2, Database, Terminal, Server, Smartphone, Globe } from "lucide-react";
import { Theme } from "./theme";

const projects = [
    {
        title: "ShelfSense",
        description: "An intelligent inventory clearance system that dynamically identifies at-risk stock and ranks the best retailers to offload it — before it expires.",
        tags: ["Next.js", "PostgreSql", "Prisma", "Node.js", "Docker"],
        links: [
            { label: "GitHub", url: "https://github.com/Suraj-singh04/ShelfSense", icon: Github },
        ],
    },
    {
        title: "UpToDate",
        description: "A feature rich school ecosystem app that not only connects parents to teachers but helps to have a proper track of their child's progress.",
        tags: ["React Native", "Appwrite", "NativeWind", "Sentry", "LibreTranslate"],
        links: [
            { label: "GitHub", url: "https://github.com/Suraj-singh04/UpToDate", icon: Github },
        ],
    },
];

export function Projects() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-border hover:shadow-lg"
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 mt-auto">
                                {project.links.map((link, idx) => {
                                    const Icon = link.icon;
                                    return (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon className="w-4 h-4" />
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
