import React from "react";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants/data";
import SectionWrapper from "./Hoc/SectionWrapper";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center'>
      {technologies.map((technology) => (
        <div className='w-20 sm:w-28 h-20 sm:h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");