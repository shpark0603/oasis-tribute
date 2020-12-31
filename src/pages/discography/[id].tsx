import { motion } from "framer-motion";
import { GetStaticPaths, GetStaticProps } from "next";

import { Album } from "../../types/Album";
import contentfulClient from "../../util/contentfulClient";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id as string;
  const album = await contentfulClient.getAlbum(id);

  return { props: { album } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const albums = await contentfulClient.getAlbums();
  const paths = albums.map((album) => ({ params: { id: album.sys.id } }));

  return { paths, fallback: false };
};

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

interface Props {
  album: Album;
}

const DiscographyDetail: React.FC<Props> = ({ album }) => {
  console.dir(album);

  return (
    <motion.div
      variants={mainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>{album.title}</h2>
    </motion.div>
  );
};

export default DiscographyDetail;
