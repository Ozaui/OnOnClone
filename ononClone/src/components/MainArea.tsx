import { useState } from "react";
import cups1 from "../assets/cups1.png";
import background from "../assets/background.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const MainArea: React.FC = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="mt-25 mx-5 rounded-xl relative flex flex-col items-center justify-center overflow-hidden">
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center text-center p-5 w-full">
        <img
          src={cups1}
          alt="ONON Bardak"
          className="mt-5 w-100 lg:w-150px hop"
        />
        <div className="flex items-start justify-between w-full px-5">
          <div className="flex-shrink-0 w-70 flex flex-col items-start hop">
            <h1 className="font-bold text-left text-4xl mt-4">
              ONON'U KEŞFETME ZAMANI
            </h1>
            <p className="my-5 text-left text-md lg:text-lg">
              Hergün taze olarka hazırladığımız zengin içerikli ürünlerimizi
              keşfetmek için sizi OnOn'a bekliyoruz
            </p>
            <a className="px-6 py-2.5 border rounded border-[#c7a17a] bg-[#c7a17a] text-white text-sm lg:text-lg font-bold hover:border-black hover:bg-black duration-300 mt-2">
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

          <div className="flex-shrink-0 w-70 text-right">
            <h1>e impedit a molestiae.</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainArea;
