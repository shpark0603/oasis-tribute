import Navbar from "../components/Navbar";
import "../globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="flex flex-col h-screen min-h-screen">
      <Navbar />
      <div className="h-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
