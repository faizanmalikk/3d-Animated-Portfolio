import { useEffect, useState } from "react";
import Image from "next/image";
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'


import { navLinks } from "../constants/data";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div
          className='flex items-center gap-2'
          onClick={() => {

            window.scrollTo(0, 0);
          }}>

          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Faizan &nbsp;
            <span className=''>
              {" "}
              | Portfolio
            </span>
          </p>

        </div>

        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-secondary hover:text-white duration-500 text-[18px] font-medium cursor-pointer underline-effect`}
              style={{

              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='md:hidden'>

          <div className="relative bg-[#804dee] w-[38px] h-[38px] rounded-full cursor-pointer" onClick={() => setToggle(!toggle)} >
              <Bars3BottomRightIcon
                className={`absolute top-0 p-[5px] left-0 w-full h-full text-white transition-all duration-1000 ease-in-out ${!toggle ? "" : "opacity-0"} `}
              />
              <XMarkIcon
                className={`absolute top-0 left-0 p-[5px]  w-full h-full text-white transition-all duration-1000 ease-in-out ${!toggle ? "opacity-0" : ""}`}
              />
          </div>

          {toggle && (
            <motion.div
              whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              initial='hidden'
              style={{ opacity: 0 }}
              className='p-6 black-gradient absolute top-[70px] right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'
            >

              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                      }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
