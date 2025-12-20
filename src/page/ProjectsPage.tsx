import FlowingMenu from "@/components/FlowingMenu";
import Particles from "@/components/Particles";
import {
  GivenTechCard,
  SistemManajemenRestoranPOSAndQROrderingCard,
} from "@/widget/ProjectsContentCard";

export default function ProjectsPage() {
  const menuItems = [
    {
      link: "GivenTech",
      text: "GivenTech",
      hoverContent: <GivenTechCard />,
    },
    {
      link: "POSQR",
      text: "Sistem Manajemen Restoran POS & QR Ordering",
      hoverContent: <SistemManajemenRestoranPOSAndQROrderingCard />,
    },
    {
      link: "GivenTechs",
      text: "GivenTech",
      hoverContent: <GivenTechCard />,
    },
    {
      link: "POSQRs",
      text: "Sistem Manajemen Restoran POS & QR Ordering",
      hoverContent: <SistemManajemenRestoranPOSAndQROrderingCard />,
    },
  ];

  return (
    <>
      <div className="relative w-screen min-h-screen flex flex-row-reverse">
        <FlowingMenu items={menuItems} />
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
