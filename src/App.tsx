import "./App.css";
import HeroPage from "./page/HeroPage";
import Particles from "./components/Particles";
import { Element } from "react-scroll";
import FloatingNavbar from "./components/FloatingNavbar";
import AboutMePage from "./page/AboutMePage";
import SkillsPage from "./page/SkillsPage";
import ProjectsPage from "./page/ProjectsPage";
import ExperiencePage from "./page/ExperiencePage";
import EducationPage from "./page/EducationPage";
import ContactPage from "./page/ContactPage";
function App() {
  const navItems = [
    {
      name: "home",
      placeholder: "Home",
      content: <HeroPage />,
    },
    {
      name: "about",
      placeholder: "About Me",
      content: <AboutMePage />,
    },
    {
      name: "skills",
      placeholder: "Skills",
      content: <SkillsPage />,
    },
    {
      name: "project",
      placeholder: "Projects",
      content: <ProjectsPage />,
    },
    {
      name: "experience",
      placeholder: "Experience",
      content: <ExperiencePage />,
    },
    {
      name: "education",
      placeholder: "Education",
      content: <EducationPage />,
    },
    {
      name: "contact",
      placeholder: "Contact",
      content: <ContactPage />,
    },
  ];

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <div className="right-0 top-0 fixed w-full h-full">
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
      <FloatingNavbar navItems={navItems} />

      <main className="w-full">
        {navItems.map((i) => (
          <div key={i.name} className="relative">
            <Element key={i.name} name={i.name}>
              {i.content}
            </Element>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
