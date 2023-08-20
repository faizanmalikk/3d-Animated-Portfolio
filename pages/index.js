import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'


const Index = () => {
  return (
    <div>
      <div className='relative z-0 bg-primary max-w-[100vw] overflow-hidden'>
        <Head>
          <title>Portfolio</title>
          <meta
            name="description"
            content="I'm a skilled software developer with experience in TypeScript, JavaScript and Solidity, and expertise in frameworks like Next.js, Node.js, and hardhat."
          />
        </Head>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Index