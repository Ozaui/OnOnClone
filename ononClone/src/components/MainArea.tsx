import { useEffect, useState } from "react";
import cups1 from "../assets/cups1.png";
import cups2 from "../assets/cups2.png";
import background from "../assets/background.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const MainArea: React.FC = () => {
  const [page, setPage] = useState(0);
  const [resetTimer, setResetTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev === 1 ? 0 : 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [resetTimer]);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? 1 : 0));
    setResetTimer((prev) => prev + 1);
  };

  const handleNext = () => {
    setPage((prev) => (prev === 1 ? 0 : 1));
    setResetTimer((prev) => prev + 1);
  };

  const currentImage = page === 0 ? cups1 : cups2;

  return (
    <div className="mt-25 h-[825px] mx-5 rounded-xl relative flex flex-col items-center justify-center overflow-hidden">
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute top-5 right-5 z-20 flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="bg-white/80 hover:bg-[#c7a17a] text-black p-2 rounded-full shadow-md duration-300"
        >
          <FaArrowLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="bg-white/80 hover:bg-[#c7a17a] text-black p-2 rounded-full shadow-md duration-300"
        >
          <FaArrowRight size={18} />
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center p-5 w-full">
        <img
          key={page}
          src={currentImage}
          alt="ONON Bardak"
          className="mt-5 w-100 lg:hidden hop"
        />

        <div className="flex flex-col lg:hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full px-5 gap-8">
            <div className="md:w-1/2 flex flex-col items-start hop">
              <h1 className="font-bold text-left text-3xl mt-4">
                ONON'U KEŞFETME ZAMANI
              </h1>
              <p className="my-5 text-left text-md">
                Her gün taze olarak hazırladığımız zengin içerikli ürünlerimizi
                keşfetmek için sizi OnOn'a bekliyoruz.
              </p>
              <a className="px-6 py-2.5 border rounded border-[#c7a17a] bg-[#c7a17a] text-white text-sm font-bold hover:border-black hover:bg-black duration-300 mt-2 cursor-pointer">
                MENÜ
              </a>

              <div className="md:hidden flex flex-row items-center gap-6 my-5">
                <h1 className="font-bold flex flex-col text-center">
                  <span className="text-[#c7a17a] text-3xl">100%</span>
                  <p className="text-lg">ORGANİK</p>
                </h1>
                <h1 className="font-bold flex flex-col text-center">
                  <span className="text-[#c7a17a] text-3xl">100%</span>
                  <p className="text-lg">HİJYEN</p>
                </h1>
                <h1 className="font-bold flex flex-col text-center">
                  <span className="text-[#c7a17a] text-3xl">100%</span>
                  <p className="text-lg">KALİTE</p>
                </h1>
              </div>

              <div className="flex my-5 gap-4 hopX">
                <a
                  href=""
                  className="bg-gray-200 p-2 hover:bg-[#c7a17a] duration-300"
                >
                  <FaFacebookF color="grey" />
                </a>
                <a
                  href=""
                  className="bg-gray-200 p-2 hover:bg-[#c7a17a] duration-300"
                >
                  <FaTwitter color="gray" />
                </a>
                <a
                  href=""
                  className="bg-gray-200 p-2 hover:bg-[#c7a17a] duration-300"
                >
                  <FaInstagram color="gray" />
                </a>
                <a
                  href=""
                  className="bg-gray-200 p-2 hover:bg-[#c7a17a] duration-300"
                >
                  <FaYoutube color="gray" />
                </a>
              </div>
            </div>

            <div className="hidden md:flex md:w-1/2 md:flex-col items-end mt-8">
              <h1 className="font-bold flex flex-col text-right">
                <span className="text-[#c7a17a] text-4xl">100%</span>
                <p className="text-2xl">ORGANİK</p>
              </h1>
              <h1 className="font-bold flex flex-col text-right">
                <span className="text-[#c7a17a] text-4xl">100%</span>
                <p className="text-2xl">HİJYEN</p>
              </h1>
              <h1 className="font-bold flex flex-col text-right">
                <span className="text-[#c7a17a] text-4xl">100%</span>
                <p className="text-2xl">KALİTE</p>
              </h1>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center w-full">
          <div className="flex-1 flex flex-col items-start hop max-w-md">
            <h1 className="font-bold text-left text-7xl">
              ONON'U KEŞFETME ZAMANI
            </h1>
            <p className="my-5 text-left text-lg">
              Her gün taze olarak hazırladığımız zengin içerikli ürünlerimizi
              keşfetmek için sizi OnOn'a bekliyoruz.
            </p>
            <a className="px-6 py-2.5 border rounded border-[#c7a17a] bg-[#c7a17a] text-white text-lg font-bold hover:border-black hover:bg-black duration-300 mt-2 cursor-pointer">
              MENÜ
            </a>

            <div className="flex my-5 gap-4 hopX">
              <a
                href=""
                className="bg-gray-200 p-2 hover:bg-[#c7a17a] duration-300"
              >
                <FaFacebookF color="grey" />
              </a>
              <a
                href=""
                className="bg-gray-200 p-2 hover:bg-[#c7a17a] duration-300"
              >
                <FaTwitter color="gray" />
              </a>
              <a
                href=""
                className="bg-gray-200 p-2 hover:bg-[#c7a17a] duration-300"
              >
                <FaInstagram color="gray" />
              </a>
              <a
                href=""
                className="bg-gray-200 p-2 hover:bg-[#c7a17a] duration-300"
              >
                <FaYoutube color="gray" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center justify-center px-4">
            <img
              key={page}
              src={currentImage}
              alt="ONON Bardak"
              className="w-200px xl:w-250px hop"
            />
          </div>

          <div className="flex-1 flex flex-col items-end justify-center max-w-md">
            <div className="flex flex-col gap-4">
              <h1 className="font-oswald font-bold flex flex-col text-right">
                <span className="text-[#c7a17a] text-4xl">100%</span>
                <p className="text-2xl">ORGANİK</p>
              </h1>
              <h1 className="font-bold flex flex-col text-right">
                <span className="text-[#c7a17a] text-4xl">100%</span>
                <p className="text-2xl">HİJYEN</p>
              </h1>
              <h1 className="font-bold flex flex-col text-right">
                <span className="text-[#c7a17a] text-4xl">100%</span>
                <p className="text-2xl">KALİTE</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainArea;
