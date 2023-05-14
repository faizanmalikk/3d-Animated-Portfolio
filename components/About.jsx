import { motion } from "framer-motion";

import { styles } from "../styles/style";
import { services } from "../constants/data";
import { fadeIn, textVariant } from "../utils/motion";
import { ServiceCard } from ".";
import SectionWrapper from "@/components/Hoc/SectionWrapper";


const About = () => {
  return (
    <div >
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Introduction</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[14px] md:text-[17px] max-w-3xl leading-[30px]'
      >
        I&apos;m a skilled software developer with experience in TypeScript, JavaScript and
        Solidity, and expertise in frameworks like Next.js, Node.js, and
        hardhat. I&apos;m a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>

  );
};

export default SectionWrapper(About, 'about')