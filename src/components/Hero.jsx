import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/deepakProfile.png";
import profilePic from "../assets/deepakProfilePic.jpeg";
// import profilePic from "../assets/deepakProfilePic1.jpeg";

import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 sm:pb-12 text-4xl sm:text-5xl md:text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-center lg:text-left"
            >
              Deepak Sharma
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl tracking-tight text-transparent text-center lg:text-left"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 sm:py-6 font-light tracking-tighter text-base sm:text-lg md:text-xl text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <motion.img
            className="rounded-2xl w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem] object-cover"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Deepak Sharma"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero