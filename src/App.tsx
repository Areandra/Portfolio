import "./App.css";
import HeroPage from "./page/HeroPage";
import Particles from "./components/Particles";
import { Link, Element } from "react-scroll";
function App() {
  const navItems = [
    {
      name: "heropage",
      placeholder: "Hero",
      content: <HeroPage />,
    },
    {
      name: "heropage2",
      placeholder: "Hero1",
      content: <HeroPage />,
    },
  ];
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      {/* Background */}
      <div className="right-0 top-0 fixed w-full h-full bg-black">
        <Particles
          particleColors={["#F59E0B", "#D97706"]}
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6">
        <ul className="flex items-center gap-1 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-2 py-2 shadow-lg">
          {navItems.map((i) => (
            <li key={i.name}>
              <Link
                to={i.name}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="text-white bg-white/10"
                className="cursor-pointer px-4 py-2 text-sm font-medium text-white/70 rounded-xl transition-all hover:text-white hover:bg-white/10"
              >
                {i.placeholder}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <main className="w-full">
        {navItems.map((i) => (
          <Element key={i.name} name={i.name}>
            {i.content}
          </Element>
        ))}
      </main>
    </div>
  );
}

export default App;
