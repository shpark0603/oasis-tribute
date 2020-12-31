import { GetStaticProps } from "next";
import Image from "next/image";
import { Entry } from "contentful";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Album } from "../../types/Album";
import contentfulClient from "../../util/contentfulClient";

export const getStaticProps: GetStaticProps = async () => {
  const albums = await contentfulClient.getAlbums();
  return { props: { albums } };
};

interface Props {
  albums: Entry<Album>[];
}

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

const Discography: React.FC<Props> = ({ albums }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const length = albums.length;

  const next = () => {
    if (page < length - 1) {
      setPage((prevPage) => [prevPage[0] + 1, 1]);
      return;
    }

    setPage([0, 1]);
  };

  const prev = () => {
    if (page > 0) {
      setPage((prevPage) => [prevPage[0] - 1, -1]);
      return;
    }

    setPage([length - 1, -1]);
  };

  return (
    <motion.main
      variants={mainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex items-center justify-center h-full text-white bg-gray-800"
    >
      <div className="flex flex-col items-center justify-center">
        <Link href={`/discography/${albums[page].sys.id}`}>
          <a>
            <h3 className="h-16 text-2xl text-center md:text-5xl">
              {albums[page].fields.title}
            </h3>
          </a>
        </Link>
        <div className="flex items-center justify-center mt-5 md:mt-10">
          <button
            onClick={prev}
            className="mr-1 text-5xl cursor-pointer md:p-5"
          >
            <GoChevronLeft />
          </button>
          <Link href={`/discography/${albums[page].sys.id}`}>
            <a>
              <div className="relative w-52 h-52 md:w-96 md:h-96 lg:w-120 lg:h-120">
                <Image
                  src={`https:${albums[page].fields.cover.fields.file.url}`}
                  alt={albums[page].fields.title}
                  layout="fill"
                />
              </div>
            </a>
          </Link>
          <button
            onClick={next}
            className="ml-1 text-5xl cursor-pointer md:p-5"
          >
            <GoChevronRight />
          </button>
        </div>
      </div>
    </motion.main>
  );
};

export default Discography;
