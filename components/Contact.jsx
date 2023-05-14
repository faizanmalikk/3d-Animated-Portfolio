import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas, StarsCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { styles } from "@/styles/style";
import SectionWrapper from "./Hoc/SectionWrapper";

import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    e.target.reset();

    toast.success('Response submitted successfully!', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      transition: Zoom,
      progress: undefined,
      theme: "light",
      className: 'text-[18px] md:w-[400px] h-full mx-4 mt-4 rounded-md relative z-50',

    });


  };

  return (
    <div>
      <ToastContainer />
      <div
        className={`xl:mt-2 flex xl:grid xl:grid-cols-2 xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className='sm:text-[15px] text-[12px] text-secondary uppercase tracking-wider"'>Get in touch</p>
          <h3 className={`text-white font-black md:text-[40px] sm:text-[30px] text-[25px]`}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4 text-[14px]'>Your Name</span>
              <input
                type='text'
                name='name'
                required
                placeholder="What's your name?"
                className='bg-tertiary py-2 px-4 text-[14px] placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4 text-[14px]'>Your email</span>
              <input
                type='email'
                name='email'
                required
                placeholder="What's your email?"
                className='bg-tertiary py-2 px-4 text-[14px] placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4 text-[14px]'>Your Message</span>
              <textarea
                type='text'
                rows={3}
                multiple
                name='message'
                required
                placeholder="What you want to say?"
                className='bg-tertiary py-2 px-4 text-[14px] placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <div className="flex justify-end">
              <button
                type='submit'
                className='bg-tertiary py-3 px-8 rounded-xl text-[17px] hover:scale-105 duration-700 outline-none w-fit text-white font-bold shadow-md shadow-primary'
              >
                Send
              </button>
            </div>

          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
      {/* <StarsCanvas /> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");