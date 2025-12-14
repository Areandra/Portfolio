import profile from "@/assets/profile.png";
import Button from "@/components/Button";
import Particles from "@/components/Particles";
import TextType from "@/components/TextType";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function HeroPage() {
  return (
    <>
      <div className="relative w-screen h-screen flex flex-row-reverse">
        <div className="flex pl-36 flex-1 flex-col justify-center text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            <span className="text-xs text-white/70 tracking-wide font-medium">
              AVAILABLE FOR INTERNSHIP
            </span>
          </div>

          <div className="h-20 lg:h-24 mb-2">
            <TextType
              className="text-5xl lg:text-7xl text-white font-bold leading-tight tracking-tight"
              text={["Hi, I'm Ariel.", "Fullstack Dev.", "Tech Enthusiast."]}
              typingSpeed={100}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
            Software Engineering student specializing in building robust
            backends with{" "}
            <span className="text-white font-semibold">AdonisJS</span> and
            dynamic interfaces with{" "}
            <span className="text-white font-semibold">React</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button>
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">Contact Me</Button>
          </div>

          <div className="mt-12 pt-8 flex gap-6 text-gray-500">
            <a href="https://github.com/Areandra">
              <Github className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ariel-4899312a0/">
              <Linkedin className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
        <div className="flex flex-1 h-full justify-end">
          <img
            src={profile}
            className=" mx-auto contrast-[1.1] grayscale-5 mask-[linear-gradient(to_top,transparent,black_8%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_8%)]"
            alt=""
          />
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
