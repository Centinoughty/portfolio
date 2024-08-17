import { FaAngular, FaNode, FaReact, FaVuejs } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Framework() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <p className="font-diph font-bold text-4xl text-center text-[#037667] mt-16">
        Frameworks & Libraries
      </p>
      <div className="flex justify-center mt-16 mb-24" ref={ref}>
        <div className="flex gap-6 xs:gap-10">
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.3 }}
          >
            <FaReact size={50} />
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <FaNode size={50} />
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <FaAngular size={50} />
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <FaVuejs size={50} />
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <img src="/next-js.svg" className="h-[50px] w-[50px]" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
