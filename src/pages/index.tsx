import Head from "next/head";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const aboutVariants: Variants = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const discographyVariants: Variants = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "100vw",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <>
      <Head>
        <title>Oasis</title>
      </Head>

      <motion.main
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid h-full grid-rows-2 md:grid-cols-2 md:grid-rows-none"
      >
        <motion.div variants={aboutVariants}>
          <Link href="/about">
            <a className="flex items-center justify-center h-full text-gray-800 transition duration-1000 bg-gray-200 hover:text-white hover:bg-gray-500">
              <h2 className="text-3xl md:text-5xl">About</h2>
            </a>
          </Link>
        </motion.div>

        <motion.div variants={discographyVariants}>
          <Link href="/discography">
            <a className="flex items-center justify-center h-full text-gray-200 transition duration-1000 bg-gray-800 hover:text-black hover:bg-gray-500">
              <h2 className="text-3xl md:text-5xl">Discography</h2>
            </a>
          </Link>
        </motion.div>
      </motion.main>
    </>
  );
};

export default Home;
