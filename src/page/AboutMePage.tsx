import Button from "@/components/Button";
import DynamicContentCard from "@/components/DynamicCard";
import Lanyard from "@/components/Lanyard";
import Particles from "@/components/Particles";
import TextType from "@/components/TextType";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function AboutMePage() {
  return (
    <>
      <div className="relative w-screen h-screen ">
        <div className="absolute w-screen right-0 overflow-visible">
          <div className="mt absolute flex pl-36 flex-col h-screen justify-center text-left order-2 lg:order-1">
            <div className="h-20 lg:h-24">
              <h1 className="text-lg text-white font-bold leading-tight tracking-tight">
                About Me
              </h1>
            </div>

            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-4xl mb-8">
              Software engineering student with a strong focus on{" "}
              <span className="text-white font-semibold">
                system-oriented development
              </span>{" "}
              across <span className="text-white font-semibold">web</span> and{" "}
              <span className="text-white font-semibold">
                game applications
              </span>
              . My experience spans both{" "}
              <span className="text-white font-semibold">backend</span> and{" "}
              <span className="text-white font-semibold">frontend</span>{" "}
              development, where I build structured, maintainable systems that
              reflect real-world logic and constraints. I have worked on
              practical projects such as a campus inventory management system
              using <span className="text-white font-semibold">AdonisJS</span>,
              interactive web applications with{" "}
              <span className="text-white font-semibold">React</span>, and
              system-driven features that emphasize clean architecture, data
              integrity, and long-term maintainability.
            </p>

            <DynamicContentCard
              title="Judul Konten"
              description="Deskripsi konten Anda di sini"
              tags={["Tag1", "Tag2"]}
              link="#"
              variant="gradient"
              size="md"
            />
          </div>
          <div className="">
            <div className="mt-[14vh] absolute right-0 border-t-4 w-[40vw] border-[rgba(245,159,10,0.5)] mask-[linear-gradient(to_right,transparent,black_8%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%)]"></div>
            <div className="mt-[14vh] absolute w-screen right-[-25vw]">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
        <div className="absolute">
          <div></div>
        </div>
      </div>
      <div className="right-0 top-0 absolute w-full h-full pointer-events-none">
        <Particles
          particleColors={["#F59E0B", "#D97706"]}
          particleCount={75}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
    </>
  );
}
