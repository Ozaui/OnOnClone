import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import icon1 from "../assets/features/icon_01.png";
import icon2 from "../assets/features/icon_02.png";
import icon3 from "../assets/features/icon_03.png";
import icon4 from "../assets/features/icon_04.png";
import icon5 from "../assets/features/icon_05.png";

const Card: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-5 font-bold">
      <div
        data-aos="hop"
        data-aos-delay="0"
        className="p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="flex items-center">
          <div className="p-2 rounded-lg bg-[#eceae3]">
            <img src={icon1} alt="" />
          </div>

          <div className="flex items-center">
            <div className="w-8 border-t-2 border-dashed border-gray-400"></div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-300 text-sm font-semibold shadow-md">
              1
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
          EŞSİZ AROMA
        </h2>
      </div>

      <div
        data-aos="hop"
        data-aos-delay="100"
        className="p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="flex items-center">
          <div className="p-2 bg-[#eceae3] rounded-lg">
            <img src={icon2} alt="" />
          </div>

          <div className="flex items-center">
            <div className="w-8 border-t-2 border-dashed border-gray-400"></div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-300 text-sm font-semibold shadow-md">
              2
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
          YÜKSEK KALİTE
        </h2>
      </div>

      <div
        data-aos="hop"
        data-aos-delay="200"
        className="p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="flex items-center">
          <div className="p-2 bg-[#eceae3] rounded-lg">
            <img src={icon3} alt="" />
          </div>

          <div className="flex items-center">
            <div className="w-8 border-t-2 border-dashed border-gray-400"></div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-300 text-sm font-semibold shadow-md">
              3
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
          TAZE ÇEKİRDEKLER
        </h2>
      </div>

      <div
        data-aos="hop"
        data-aos-delay="300"
        className="p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="flex items-center">
          <div className="p-2 bg-[#eceae3] rounded-lg">
            <img src={icon5} alt="" />
          </div>

          <div className="flex items-center">
            <div className="w-8 border-t-2 border-dashed border-gray-400"></div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-300 text-sm font-semibold shadow-md">
              4
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
          UYGUN KAVURMA
        </h2>
      </div>

      <div
        data-aos="hop"
        data-aos-delay="400"
        className="p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="flex items-center">
          <div className="p-2 bg-[#eceae3] rounded-lg">
            <img src={icon4} alt="" />
          </div>

          <div className="flex items-center">
            <div className="w-8 border-t-2 border-dashed border-gray-400"></div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-300 text-sm font-semibold shadow-md">
              5
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
          GENİŞ ÜRÜN YELPAZESİ
        </h2>
      </div>

      <div
        data-aos="hop"
        data-aos-delay="500"
        className="p-6 bg-white rounded-xl shadow-lg"
      >
        <div className="flex items-center">
          <div className="p-2 bg-[#eceae3] rounded-lg">
            <img src={icon5} alt="" />
          </div>

          <div className="flex items-center">
            <div className="w-8 border-t-2 border-dashed border-gray-400"></div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-300 text-sm font-semibold shadow-md">
              6
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
          TAMAMEN ORGANİK
        </h2>
      </div>
    </div>
  );
};

export default Card;
