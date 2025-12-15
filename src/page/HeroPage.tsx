import profile from "@/assets/profile.png";
import Button from "@/components/Button";
import Particles from "@/components/Particles";
import TextType from "@/components/TextType";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function HeroPage() {
  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-black/90">
        <div className="flex w-full lg:w-1/2 flex-col justify-center order-1 px-6 pt-32 pb-10 lg:pt-0 lg:pb-0 lg:pl-24 lg:pr-0 z-10 text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            <span className="text-xs text-white/70 tracking-wide font-medium">
              AVAILABLE FOR INTERNSHIP
            </span>
          </div>

          <div className="mb-4 w-full">
            <TextType
              className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold leading-tight tracking-tight"
              text={["Hi, I'm Ariel.", "Fullstack Dev.", "Tech Enthusiast."]}
              typingSpeed={100}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-md lg:max-w-lg mb-8">
            Software Engineering student specializing in building robust
            backends with{" "}
            <span className="text-white font-semibold">AdonisJS</span> and
            dynamic interfaces with{" "}
            <span className="text-white font-semibold">React</span>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
            <Button>
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">Contact Me</Button>
          </div>

          <div className="mt-8 lg:mt-12 lg:pt-8 flex gap-6 text-gray-500 justify-center lg:justify-start w-full">
            <a
              href="https://github.com/Areandra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ariel-4899312a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            </a>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 h-[50vh] lg:h-screen justify-end items-end order-2 lg:order-2 relative">
          <img
            src={profile}
            className="w-full h-full object-cover object-center lg:object-right contrast-[1.1] grayscale-0 mask-[linear-gradient(to_top,transparent,black_8%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_8%)]"
            alt="Profile of Ariel"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent lg:hidden pointer-events-none"></div>
        </div>
      </div>

      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
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
