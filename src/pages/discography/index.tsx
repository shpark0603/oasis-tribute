import { GetStaticProps } from "next";
import Image from "next/image";
import { createClient, Entry, Asset, EntryFields } from "contentful";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useState } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries({ content_type: "album" });

  return {
    props: {
      albums: data.items,
    },
  };
};

interface Album {
  title: EntryFields.Text;
  description: EntryFields.RichText;
  cover: Asset;
  releasedAt: EntryFields.Date;
  worldWideSales: EntryFields.Integer;
  length: EntryFields.Text;
}

interface Props {
  albums: Entry<Album>[];
}

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
    <main className="flex items-center justify-center h-full text-white bg-gray-800">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-2xl text-center md:text-5xl">
          {albums[page].fields.title}
        </h3>
        <div className="flex items-center justify-center mt-5 md:mt-10">
          <button
            onClick={prev}
            className="mr-1 text-5xl cursor-pointer md:p-5"
          >
            <GoChevronLeft />
          </button>
          <div className="relative w-52 h-52 md:w-96 md:h-96 lg:w-120 lg:h-120">
            <Image
              src={`https:${albums[page].fields.cover.fields.file.url}`}
              alt={albums[page].fields.title}
              layout="fill"
            />
          </div>
          <button
            onClick={next}
            className="ml-1 text-5xl cursor-pointer md:p-5"
          >
            <GoChevronRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Discography;
