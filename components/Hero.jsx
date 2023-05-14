import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import { styles } from "../styles/style";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`font-black text-white lg:text-[50px] md:flex gap-[10px] flex-wrap sm:text-[40px] text-[25px] lg:leading-[98px] mt-2`}>
            Hi, I&apos;m <span className='text-[#915EFF]'>
              <Typewriter
                options={{
                  strings: [
                    'Faizan',
                    'MERN Stack Developer',
                    'Next.js Enthusiast',
                    'Blockchain Developer',],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className={`text-[#dfd9ff] font-medium lg:text-[18px] sm:text-[16px] text-[14px] lg:leading-[30px] mt-2 md:mt-0`}>
            Building <b>immersive, feature-rich</b>  websites with<br className='sm:block hidden' /> seamless user experiences and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="pt-[25px] md:pt-0">
        <ComputersCanvas />
      </div>

      <div className='absolute bottom-16 md:bottom-4 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <div>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-[10px] h-[10px] rounded-full bg-secondary mb-1'
              />
            </div>
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;