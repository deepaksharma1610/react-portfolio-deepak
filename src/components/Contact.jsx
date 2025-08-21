import React from 'react'
import { CONTACT } from "../constants"
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Contact() {
  return (
    <div id='contact' className='border-b border-neutral-900 pb-20'>
      {/* Heading */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'
      >
        Get in Touch
      </motion.h1>

      {/* Contact Details */}
      <div className='text-center tracking-tighter space-y-4'>
        {/* Name */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='text-lg'
        >
          <strong>Name:</strong> Deepak Sharma
        </motion.p>

        {/* Email */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <a
            href="mailto:tyagishreya827@gmail.com"
            className="flex items-center gap-2 text-lg hover:text-gray-400"
          >
            <MdEmail className="text-2xl" />
            deepaksharma1610@gmail.com
          </a>
        </motion.div>

        {/* Contact Number */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='text-lg'
        >
          <strong>Phone:</strong> {CONTACT.phoneNo}
        </motion.p>

        {/* Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='text-lg'
        >
          <strong>Address:</strong> {CONTACT.address}
        </motion.p>

        {/* GitHub */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className='pt-6 border-t border-neutral-800'
        >
          <a
            href="https://github.com/deepaksharma1610"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg hover:text-gray-400"
          >
            <FaGithub className="text-2xl" />
            github.com/deepaksharma1610
          </a>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className='pt-2'
        >
          <a
            href="https://www.linkedin.com/in/deepak-sharma-407647341/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg hover:text-gray-400"
          >
            <FaLinkedin className="text-2xl" />
            linkedin.com/in/deepaksharma
          </a>
        </motion.div>
      </div>
    </div>
  )
}




// import { CONTACT } from "../constants";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import { MdEmail } from 'react-icons/md'

// const Contact = () => {
//   return <div className="border-b border-neutral-900 pb-20">
//     <motion.h2
//       whileInView={{ opacity: 1, y: 0 }}
//       initial={{ opacity: 0, y: -100 }}
//       transition={{ duration: 0.5 }}
//       className="my-10 text-center text-4xl">Get in Touch</motion.h2>

//     <div className="text-center tracking-tighter">
//       <motion.p
//         whileInView={{ opacity: 1, x: 0 }}
//         initial={{ opacity: 0, x: -100 }}
//         transition={{ duration: 1 }}
//         className="my-4">{CONTACT.address}</motion.p>

//       <motion.p 
//       whileInView={{ opacity: 1, x: 0 }}
//       initial={{ opacity: 0, x: 100 }}
//       transition={{ duration: 1 }}
//       className="my-4">{CONTACT.phoneNo}</motion.p>
//       <a href="#" className="border-b">{CONTACT.email}</a>
//     </div>
//   </div>
// };

// export default Contact