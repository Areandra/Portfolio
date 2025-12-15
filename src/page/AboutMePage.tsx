import Button from "@/components/Button";
import DynamicContentCard from "@/components/DynamicCard";
import Lanyard from "@/components/Lanyard";
import Particles from "@/components/Particles";
import TextType from "@/components/TextType";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function AboutMePage() {
  return (
    // Gunakan min-h-screen agar semua konten dimuat
    <div className="relative w-full min-h-screen overflow-hidden py-20 lg:py-24">
      
      {/* Container Utama: Menggunakan Flexbox untuk mengatur Teks dan Lanyard */}
      <div className="flex flex-col xl:flex-row w-full h-full">
        
        {/* --- Bagian KIRI: Teks & Kartu (Konten Utama) --- */}
        <div className="w-full xl:w-7/12 flex flex-col justify-center px-6 md:px-12 xl:pl-24 xl:pr-8 z-10">
          
          {/* Judul */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl text-white font-bold leading-tight tracking-tight">
              About Me
            </h1>
          </div>

          {/* Deskripsi */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl mb-12">
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

          {/* Dynamic Content Card */}
          {/* Card dibuat full-width di mobile, kemudian dibatasi di desktop */}
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
        
        {/* --- Bagian KANAN: Lanyard/3D (Visualizer) --- */}
        {/*
          - xl:w-5/12: Memakan sisa ruang di desktop
          - h-[50vh] xl:h-auto: Menetapkan tinggi di mobile/tablet agar Lanyard tidak memanjang tak terbatas
        */}
        <div className="w-full xl:w-5/12 h-[50vh] sm:h-[60vh] xl:h-auto mt-16 xl:mt-0 relative overflow-hidden flex items-start justify-center">
          
          {/* Garis Dekoratif (Diletakkan secara relatif di dalam container) */}
          <div className="absolute top-0 left-0 w-full h-1/4 xl:h-1/3 border-t-4 border-[rgba(245,159,10,0.5)] mask-[linear-gradient(to_right,transparent,black_8%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%)] xl:mask-[linear-gradient(to_left,transparent,black_8%)] xl:[-webkit-mask-image:linear-gradient(to_left,transparent,black_8%)]"></div>

          {/* Lanyard Component (Mengisi container Lanyard) */}
          <div className="w-full h-full flex items-center justify-center">
             <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
      
      {/* Particles Background - Dibiarkan absolute/fixed */}
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