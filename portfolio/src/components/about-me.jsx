"use client";

import {
  GridPatternCard,
  GridPatternCardBody,
} from "./ui/card-with-grid-ellipsis-pattern";
import { AboutMeComponents } from "./about-me-components";

export function AboutMe() {
  return (
    <GridPatternCard>
      <GridPatternCardBody>
        <h3 className="text-5xl font-bold mb-12 text-foreground">About Me</h3>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-1/2">
            <p className="text-wrap text-lg text-foreground/60">
              I am a{" "}
              <span className="font-bold text-black dark:text-white">
                Backend Developer
              </span>{" "}
              with a strong foundation in building scalable server-side
              applications and secure APIs. Currently pursuing my B.Tech in
              Computer Science at Lovely Professional University, Punjab.
            </p>
            <p className="text-wrap text-lg text-foreground/60">
              My experience spans across developing scalable and real world
              applications with{" "}
              <span className="font-bold text-black dark:text-white">
                NextJs
              </span>{" "}
              and{" "}
              <span className="font-bold text-black dark:text-white">
                GenAI
              </span>
              , as well as building full-stack solutions using the{" "}
              <span className="font-bold text-black dark:text-white">MERN</span>{" "}
              stack. I am passionate about solving data-driven engineering
              problems and optimizing system performance.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <AboutMeComponents />
          </div>
        </div>
      </GridPatternCardBody>
    </GridPatternCard>
  );
}
