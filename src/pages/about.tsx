import { motion } from "framer-motion";

const mainVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: "-100vh",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <motion.div
      variants={mainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex items-center justify-center h-full bg-gray-200"
    >
      <h1>Oasis</h1>
    </motion.div>
  );
};

export default About;
