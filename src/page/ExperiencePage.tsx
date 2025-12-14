import Particles from "@/components/Particles";

export default function ExperiencePage() {
  return (
    <>
      <div className="relative w-screen h-screen flex flex-row-reverse">
        
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
