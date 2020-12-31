import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Page not found :(</title>
      </Head>

      <div className="relative grid h-full grid-rows-2 bg-gray-200 md:grid-cols-2 md:grid-rows-none">
        <div className="flex flex-col items-center justify-center">
          <p className="z-10 mb-5 text-2xl md:mb-10 md:text-4xl">
            Page Not Found :(
          </p>
          <button
            onClick={() => router.back()}
            className="z-10 px-5 py-2 transition duration-300 border-4 border-black hover:bg-black hover:text-white"
          >
            Go Back
          </button>
        </div>

        <div className="self-end">
          <Image
            src="/images/oasis.png"
            alt="oasis"
            layout="responsive"
            width={750}
            height={464}
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
