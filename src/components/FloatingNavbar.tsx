import { Link } from "react-scroll";
import { motion } from "framer-motion";

interface NavItem {
  name: string;
  placeholder: string;
}

export default function FloatingNavbar({ navItems }: { navItems: NavItem[] }) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.name}
            smooth
            spy
            duration={500}
            activeClass="nav-active"
            className="relative cursor-pointer select-none text-xl font-medium text-gray-400 transition-all duration-300 hover:text-white group"
          >
            <span className="relative">
              {item.placeholder}
              <div className="absolute -bottom-1 rounded-md left-0 w-0 h-0.75 bg-linear-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full nav-underline" />
            </span>
          </Link>
        ))}
      </div>

      <style>{`
        .nav-active {
          color: oklch(82.8% 0.189 84.429);
          font-weight: bold;
        }
        .nav-active .nav-underline {
          width: 100%;
        }
      `}</style>
    </motion.nav>
  );
}