import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  placeholder: string;
}

export default function FloatingNavbar({ navItems }: { navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [showUnderline, setShowUnderline] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) return;
    setShowUnderline(false);
    const t = setTimeout(() => setShowUnderline(true), 250);
    return () => clearTimeout(t);
  }, [activePage]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-screen md:w-fit md:left-1/2 md:-translate-x-1/2 md:top-6 m-auto z-50"
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-10 rounded-full backdrop-blur px-10 py-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.name}
            smooth
            spy
            onSetActive={() => {
              if (window.innerWidth >= 768) return;
              setActivePage(item.name);
            }}
            duration={500}
            activeClass="nav-active"
            className="relative cursor-pointer text-xl font-medium text-gray-400 transition hover:text-white group"
          >
            <span className="relative">
              {item.placeholder}
              <span className="absolute -bottom-1 left-0 h-0.75 w-0 rounded bg-linear-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full nav-underline" />
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div
          className={`${
            showUnderline ? "nav-active" : ""
          } absolute left-0 p-6 cursor-pointer text-xl font-medium text-gray-400 transition hover:text-white group`}
        >
          <span className="relative">
            {navItems.find((i: NavItem) => i.name === activePage)
              ?.placeholder || "Home"}
            <span
              className={`absolute -bottom-1 left-0 h-0.75 w-0 rounded bg-linear-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full ${
                showUnderline ? "nav-underline" : ""
              }`}
            />
          </span>{" "}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="absolute z-2 right-0 flex items-center justify-center rounded-full p-6 text-white"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: open ? 1 : 0,
              y: open ? 0 : -10,
            }}
            transition={{ duration: 0.25 }}
            className={`w-screen h-screen fixed inset-0 flex justify-center text-center bg-black/70 backdrop-blur px-6 pt-18 ${
              open ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <div className="flex flex-col gap-4 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.name}
                  smooth
                  duration={500}
                  spy
                  onClick={() => setOpen(false)}
                  activeClass="nav-active"
                  className="relative cursor-pointer text-xl font-medium text-gray-400 transition hover:text-white group"
                >
                  <span className="relative">
                    {item.placeholder}
                    <span className="absolute -bottom-1 left-0 h-0.75 w-0 rounded bg-linear-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full nav-underline" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .nav-active {
          color: oklch(82.8% 0.189 84.429);
          font-weight: 600;
        }
        .nav-active .nav-underline {
          width: 100%;
        }
      `}</style>
    </motion.nav>
  );
}
