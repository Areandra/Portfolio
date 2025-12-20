// import Button from "@/components/Button";
import DynamicContentCard from "@/components/DynamicCard";
import Lanyard from "@/components/Lanyard";
import Particles from "@/components/Particles";

export default function AboutMePage() {
  return (
    <div className="relative w-full min-h-screen xl:h-screen overflow-hidden py-20 xl:py-0">
      <div className="text-center xl:text-left flex flex-col xl:flex-row w-full h-full">
        <div className="w-full xl:w-7/12 flex flex-col justify-center px-6 md:px-12 xl:pl-24 xl:pr-8 z-10">
          <div className="mb-6">
            <span className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold leading-tight tracking-tight">
              About Me
            </span>
          </div>

          <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 text-justify">
            Software engineering student with a strong focus on{" "}
            <span className="text-white font-semibold">
              system-oriented development
            </span>{" "}
            across <span className="text-white font-semibold">web</span> and{" "}
            <span className="text-white font-semibold">game applications</span>.
            My experience spans both{" "}
            <span className="text-white font-semibold">backend</span> and{" "}
            <span className="text-white font-semibold">frontend</span>{" "}
            development, where I build structured, maintainable systems that
            reflect real-world logic and constraints. I have worked on practical
            projects such as a campus inventory management system using{" "}
            <span className="text-white font-semibold">AdonisJS</span>,
            interactive web applications with{" "}
            <span className="text-white font-semibold">React</span>, and
            system-driven features that emphasize clean architecture, data
            integrity, and long-term maintainability.
          </p>

          <div className="w-full max-w-4xl">
            <DynamicContentCard
              title="Judul Konten"
              description="Deskripsi konten Anda di sini"
              tags={["Tag1", "Tag2"]}
              link="#"
              variant="gradient"
              size="md"
            />
          </div>
        </div>

        <div className="hidden w-5/12 xl:h-auto mt-40 relative overflow-hidden xl:flex items-start justify-center">
          <div className="absolute left-0 w-full h-1/4 xl:h-1/3 border-t-4 border-[rgba(245,159,10,0.5)] mask-[linear-gradient(to_right,transparent,black_8%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%)] xl:mask-[linear-gradient(to_right,transparent,black_18%)] xl:[-webkit-mask-image:linear-gradient(to_right,transparent,black_18%)]"></div>

          <div className="w-full h-full flex items-center justify-center">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
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
    </div>
  );
}
