import Head from "next/head";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const mainVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const linkVariants: Variants = {
  initial: {
    y: "100vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.6,
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
        variants={mainVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid h-full grid-rows-2 md:grid-cols-2 md:grid-rows-none"
      >
        <motion.div variants={linkVariants}>
          <Link href="/about">
            <a className="flex items-center justify-center h-full text-gray-800 transition duration-1000 bg-gray-200 hover:text-white hover:bg-gray-500">
              <h2 className="text-3xl md:text-5xl">About</h2>
            </a>
          </Link>
        </motion.div>

        <motion.div variants={linkVariants}>
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
