import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./Hoc/SectionWrapper";
import { testimonials } from "@/constants/data";
import { styles } from "@/styles/style";
import Image from "next/image";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  image,
}) => (

  <div className="hover:scale-95 duration-700">
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-5 rounded-3xl '
    >
      <p className='text-white font-black text-[48px]'>&quot;</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[15px] font-sans md:text-[17px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>

          </div>
          <Image
            src={image}
            alt={`feedback_by-${name}`}
            height={40}
            width={40}
            className=' rounded-full '
          />
        </div>
      </div>
    </motion.div>
  </div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-8 bg-black-100 rounded-[20px] `}>
      <div
        className={`bg-tertiary rounded-2xl md:min-h-[200px] px-4 md:px-7 pt-7`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={` md-mt-20 pb-2 md:pb-7 px-4 md:px-7  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");