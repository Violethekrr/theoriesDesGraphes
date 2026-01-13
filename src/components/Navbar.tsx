import { Sun, Moon, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { Link, useLocation } from "react-router-dom"; // ✅ Import useLocation

export default function Navbar() {
  const [button, setButton] = useState<boolean>(false);
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation(); // ✅ récupère l’URL actuelle

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Fonction utilitaire pour gérer la classe active
  const linkClass = (path: string) =>
    `relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:transition-all after:duration-500 ${
      location.pathname === path
        ? `${isDark ?  'after:w-full after:bg-[#6D63F2]': 'after:w-full after:bg-teal-700' }` // lien actif → souligné
        : `${isDark ? `after:w-0 hover:after:w-full after:bg-[#6D63F2]`: `after:w-0 hover:after:w-full after:bg-teal-700`} ` // lien normal → effet au hover
    }`;

  return (
    <div>
      {/* Navbar desktop */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className={`z-20 hidden fixed w-full px-[10%] sm:flex gap-10 border-b border-t justify-center p-3 font-medium ${
          isDark
            ? "text-white bg-[#0F172B] border-t-[#6D63F2] border-b-[#6D63F2]"
            : "text-[#0F172B] border-b-[#0F172B] border-t-[#0F172B] bg-linear-to-br from-[#F8F8FA]   to-cyan-50"
        } ${scrolled ? "shadow-md shadow-gray-700" : "bg-none"}`}
      >
        <div className="flex gap-10 justify-center items-center">
          <Link to="/" className={linkClass("/")}>Accueil</Link>
          <Link to="/fondations" className={linkClass("/fondations")}>Fondations</Link>
          <Link to="/typologies" className={linkClass("/typologies")}>Typologies</Link>
          <Link to="/proprietes" className={linkClass("/proprietes")}>Propriétés et Théorèmes</Link>
          <Link to="/algorithmique" className={linkClass("/algorithmique")}>Algorithmique</Link>
          <Link to="/applications" className={linkClass("/applications")}>Applications</Link>
          <Link to="/Interaction" className={linkClass("/Interaction")}>Interaction</Link>
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
      </motion.div>

      {/* Navbar mobile */}
      <div
        onClick={() => setButton(!button)}
        className={`z-20 sm:hidden ${!isDark ? "text-[#0F172B]" : "text-[#6D63F2]"}`}
      >
        <Menu className="w-8 h-8" />
      </div>

      {button && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className={`z-40 absolute flex flex-col sm:hidden gap-3 p-5 font-medium ${
            !isDark
              ? "bg-white text-[#0F172B]"
              : "bg-[#0F172B] text-white"
          }`}
        >
          <Link to="/" className={linkClass("/")}>Accueil</Link>
          <Link to="/fondations" className={linkClass("/fondations")}>Fondations</Link>
          <Link to="/typologies" className={linkClass("/typologies")}>Typologies</Link>
          <Link to="/proprietes" className={linkClass("/proprietes")}>Propriétés et Théorèmes</Link>
           <Link to="/algorithmique" className={linkClass("/algorithmique")}>Algorithmique</Link>
          <Link to="/applications" className={linkClass("/applications")}>Applications</Link>
          <Link to="/Interaction" className={linkClass("/Interaction")}>Interaction</Link>

          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded flex justify-center items-center ${
              isDark ? "bg-gray-700" : "bg-gray-200 text-[#0F172B] text-center"
            }`}
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </motion.div>
      )}
    </div>
  );
}
