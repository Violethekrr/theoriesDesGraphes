import {useLocation} from 'react-router-dom';
import { useTheme } from "../Context/ThemeContext"
import Nav from './Navbar';
import { useEffect, useState } from 'react';

interface Pros {
    children : React.ReactNode;
}
export default function Layout({ children } : Pros) {
 const { isDark } = useTheme();
    const location = useLocation();
    //La liste des routes où la Navbar et le Footer ne doivent pas apparaître
    const routesNav = ['/Contact'];
    //Verifier si la route actuelle est dans la list
    const hiddenNav = routesNav.includes(location.pathname);
     const [scrolled,setScrolled]= useState<boolean>(false)
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <div className={` ${isDark? 'text-white ' : 'text-[#0F172B]   '}  ${
      isDark 
        ? 'bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950' 
        : 'bg-linear-to-br from-[#F8F8FA]   to-cyan-50'
    } `}>
      <div className={`sm:flex sm:flex-col-reverse fixed z-50 w-full text-center ${
            scrolled ? 'shadow-md shadow-gray-700 backdrop-blur-2xl' : 'bg-none' }`}>
        {!hiddenNav && <Nav/>}
        <header className={`px-5 flex flex-col justify-center item-center sm:py-10`}>
          <h1 className={`text-2xl md:text-3xl xl:text-4xl font-medium pb-2`}>Théorie des Graphes</h1>
          <p className="text-sm xl:text-base sm:mx-[20%]">
          Bienvenue dans notre application de démonstration. 
          Explorez les fondations, les structures, les propriétés et les algorithmes 
          des graphes à travers des visualisations interactives et des explications pédagogiques.
          </p>
       </header>
        
      </div>
      
        
        <main className={`pt-20 sm:pt-50 overflow-x-hidden ${isDark? 'text-white ' : 'text-[#0F172B]  bg-linear-to-br from-[#F8F8FA]   '}`}>{children}</main>
  
    </div>
  )
}