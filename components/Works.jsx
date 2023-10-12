import React from "react";

import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles/style";
import { projects } from "../constants/data";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import { github } from "@/public/assets";
import SectionWrapper from "./Hoc/SectionWrapper";
import { EyeIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-[20px] rounded-2xl w-full h-full'
      >
        <div className='relative w-full h-[230px]'>
          <Image
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
            fill
          />

          <div className='absolute inset-0 flex justify-end m-[8px]'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-[35px] h-[35px] rounded-full flex justify-center items-center cursor-pointer hover:scale-110 duration-700'
            >

              <EyeIcon className='h-[22px] w-[22px]'/>

            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} text-indigo-400`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p
          className='mt-3 text-[14px] md:text-[17px] text-secondary max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className='mt-11  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");