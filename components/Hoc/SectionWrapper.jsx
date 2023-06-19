import { staggerContainer } from '@/utils/motion'
import { motion } from 'framer-motion'

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className=' max-w-[1420px] mx-auto sm:px-16 px-6 py-6 md:py-9 relative z-0'
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>
                <Component />

            </motion.section>
        )
    }


export default SectionWrapper