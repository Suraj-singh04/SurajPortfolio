import { GlowCard } from "../components/spotlight-card";

export function AboutMeComponents() {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-4 custom-cursor">
      <GlowCard height={"100px"}>
        <div className="">
          <h2 className="text-4xl font-bold mb-4 text-center">1624</h2>
          <p className="text-base text-center">Leetcode Rating</p>
        </div>
      </GlowCard>
      <GlowCard height={"100px"}>
        <div className="">
          <h2 className="text-4xl font-bold mb-4 text-center">2+</h2>
          <p className="text-base text-center">Key Projects</p>
        </div>
      </GlowCard>
      <GlowCard height={"100px"}>
        <div className="">
          <h2 className="text-4xl font-bold mb-4 text-center">8.15</h2>
          <p className="text-base text-center">CGPA</p>
        </div>
      </GlowCard>
      <GlowCard height={"100px"}>
        <div className="">
          <h2 className="text-4xl font-bold mb-4 text-center">300+</h2>
          <p className="text-base text-center">DSA Problems solved</p>
        </div>
      </GlowCard>
    </div>
  );
}
