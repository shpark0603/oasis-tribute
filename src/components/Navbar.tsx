import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function Navbar() {
  const router = useRouter();

  const navMenus = useCallback(() => {
    const about = (
      <Link href="/about">
        <li className="flex items-center h-full px-2 text-sm transition duration-300 cursor-pointer md:px-5 hover:bg-white hover:text-black md:text-lg">
          <a>About</a>
        </li>
      </Link>
    );

    const discography = (
      <Link href="/discography">
        <li className="flex items-center h-full px-2 text-sm transition duration-300 cursor-pointer md:px-5 hover:bg-white hover:text-black md:text-lg">
          <a>Discography</a>
        </li>
      </Link>
    );

    switch (router.pathname) {
      case "/":
        return null;
      case "/about":
        return <ul className="flex h-full">{discography}</ul>;
      case "/discography":
        return <ul className="flex h-full">{about}</ul>;
      default:
        return (
          <ul className="flex h-full">
            {about}
            {discography}
          </ul>
        );
    }
  }, [router.pathname]);

  return (
    <header className="z-10 border-4 border-black md:border-8">
      <div className="bg-black border-4 border-white md:border-8">
        <div className="flex justify-between mx-auto text-white md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
          <Link href="/">
            <a className="flex items-center px-2 text-2xl md:py-2 md:px-5 md:text-4xl">
              oasis
            </a>
          </Link>
          <nav>{navMenus()}</nav>
        </div>
      </div>
    </header>
  );
}
