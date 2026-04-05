"use client";

import { Award } from "lucide-react";
import { GlowCard } from "./spotlight-card";

// Placeholder data since none was provided in the prompt
// Using a generic structure that can be easily updated
const certifications = [
  {
    name: "Java Masterclass from Zero to Hero in Java",
    issuer: "Udemy",
    date: "2025",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6332e31f-55b1-4ffc-91d5-284cd648e204.pdf",
  },
  {
    name: "JavaScript from zero to mastery",
    issuer: "Udemy",
    date: "2024",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6332e31f-55b1-4ffc-91d5-284cd648e204.pdf",
  },
  {
    name: "Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "2024",
    link: "https://www.coursera.org/account/accomplishments/verify/323AK38KI3WH",
  },
];

export function Certifications() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto bg-muted/20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <GlowCard height={180} width={300}>
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl transition-colors"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} • {cert.date}
                </p>
                <p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Certificate
                  </a>
                </p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
