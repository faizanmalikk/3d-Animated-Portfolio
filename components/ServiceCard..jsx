import Image from 'next/image'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import Tilt from 'react-parallax-tilt';


const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <div
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div

                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <Image
                        src={icon}
                        alt='web-development'
                        width={64}
                        height={64}
                        className="object-contain"
                    />

                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </div>
        </Tilt>

    )
}

export default ServiceCard
