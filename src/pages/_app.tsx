import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import "../globals.css";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <div className="flex flex-col h-screen min-h-screen overflow-hidden bg-black">
      <Navbar />
      <div className="h-full">
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MyApp;
