import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Oasis</title>
      </Head>

      <main className="grid h-full grid-rows-2 md:grid-cols-2 md:grid-rows-none">
        <div>
          <Link href="/about">
            <a className="flex items-center justify-center h-full text-gray-800 transition duration-1000 bg-gray-200 hover:text-white hover:bg-gray-500">
              <h2 className="text-3xl md:text-5xl">About</h2>
            </a>
          </Link>
        </div>

        <div>
          <Link href="/discography">
            <a className="flex items-center justify-center h-full text-gray-200 transition duration-1000 bg-gray-800 hover:text-black hover:bg-gray-500">
              <h2 className="text-3xl md:text-5xl">Discography</h2>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
