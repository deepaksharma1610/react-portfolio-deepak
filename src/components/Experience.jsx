import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-8 md:pb-12 lg:pb-16">
            <div className="my-20 text-center">
                <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="text-4xl font-semibold">Experience</motion.h1>
            </div>
            <div className="flex flex-col gap-8">
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-2 flex flex-wrap lg:justify-center">
                        <motion.h6 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="w-full lg:w-1/4 text-sm font-semibold text-neutral-400">
                            I’m a Frontend Developer with 1 year of professional experience building responsive, user-friendly web applications using HTML, CSS, JavaScript, and modern frameworks like React.js. I focus on writing clean, maintainable code and creating seamless user experiences with attention to detail in design and performance.

                            Over the past year, I’ve worked on multiple real-world projects involving API integration, state management, component-based architecture, and responsive layouts. I'm comfortable working in team environments, collaborating with designers and backend developers, and using tools like Git, Figma, and VS Code.
                        </motion.h6>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;



// import { EXPERIENCES } from "../constants"
// import { motion } from "framer-motion";

// const Experience = () => {
//     return <div className="border-b border-neutral-900 pb-4">
//         <motion.h2
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.5 }}
//             className="my-20 text-center text-4xl">Experience</motion.h2>
//         <div>
//             {EXPERIENCES.map((experience, index) => (
//                 <div
//                     key={index} className="mb-8 flex flex-wrap lg:justify-center">
//                     <motion.div
//                         whileInView={{ opacity: 1, x: 0 }}
//                         initial={{ opacity: 0, x: -100 }}
//                         transition={{ duration: 1 }}
//                         className="w-full lg:w-1/4">
//                         <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
//                     </motion.div>
//                     <motion.div
//                         whileInView={{ opacity: 1, x: 0 }}
//                         initial={{ opacity: 0, x: 100 }}
//                         transition={{ duration: 1 }}
//                         className="w-full max-w-xl lg:w-3/4 ">
//                         <h6 className="mb-2 font-semibold ">{experience.role} -
//                             <span className="text-sm text-purple-100">{experience.company}</span>
//                         </h6>
//                         <p className="mb-4 text-neutral-400">{experience.description}</p>
//                         {experience.technologies.map((tech, index) => (
//                             <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
//                         ))}
//                     </motion.div>
//                 </div>
//             ))}
//         </div>
//     </div>
// }

// export default Experience