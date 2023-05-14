import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles/style";
import { experiences } from "../constants/data";
import { textVariant } from "../utils/motion";
import Image from "next/image";
import SectionWrapper from "./Hoc/SectionWrapper";



const Experience = () => {
  return (
    <>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>

      <div className='mt-12 md:mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#1d1836",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #232631" }}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <div className='w-[60%] h-[60%] object-contain'
                  >
                    <Image
                      src={experience.icon}
                      alt={experience.company_name}
                      fill
                    />
                  </div>
                </div>
              }
            >
              <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                  className='text-secondary text-[16px] font-semibold'
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");