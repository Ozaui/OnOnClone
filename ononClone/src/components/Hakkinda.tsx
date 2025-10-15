import React from "react";
import { FaCoffee } from "react-icons/fa";
import home from "../assets/home.png";

const Hakkinda: React.FC = () => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="mx-5 xl:mx-60 mt-5">
        <div className="flex items-center">
          <FaCoffee color="#c7a17a" size={20} />
          <h3 className="ml-2">ONON HAKKINDA</h3>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5">
          <div className="w-full md:w-1/2 px-2">
            <h1 className="text-4xl font-bold mt-5">ON NUMARA KENTİN </h1>
            <h1 className="text-4xl font-bold">ON NUMARA KAHVESİ</h1>
            <p className="my-5">
              Balıkesir’in kalbinde, damaklarda iz bırakan lezzetli kahveler
              sunan bir mekân: On On Kafe. Şehrimizin ruhunu yansıtan, sıcacık
              atmosferi ve özenle hazırlanmış kahve çeşitleriyle, kendine has
              bir kahve deneyimi sunuyoruz. On Numara Kafe, Balıkesir’in her
              köşesinden gelen misafirlerimizin buluşma noktası olarak, sadece
              bir kafe değil, aynı zamanda lezzet dolu anılar biriktirdikleri
              bir mekân.
            </p>
            <h3 className="font-bold my-5">
              Lezzetimizde Sırrımız: Özen ve Kalite
            </h3>
            <p className="my-5">
              On On Kafe olarak her bir kahveyi taze çekirdeklerden, yüksek
              kalite standartlarına uygun olarak hazırlıyoruz. Her fincanın
              içinde, emeği ve kahveye olan sevgimizi bulacaksınız. İster klasik
              espresso, ister lezzetli bir latte veya aromalı seçeneklerle
              hazırlanmış özel kahvelerimiz olsun, damak tadınıza hitap edecek
              bir içecek her zaman menümüzde yer alır. Yerel Bir Değer, Global
              Bir Tat Balıkesir’in yerel havasını yansıtırken, kahve kültüründe
              evrensel bir kaliteyi de hedefliyoruz. Misafirlerimize sadece bir
              içecek sunmuyor, aynı zamanda kendilerini özel hissedecekleri bir
              deneyim yaşatıyoruz. On Numara Kent’in On Numara Kahvesi, kentin
              ritmini yansıtan bir sıcaklık ve misafirperverlikle her yudumda
              sizi karşılıyor.
            </p>
            <h3>Her Ziyarette Yenilenen Bir Deneyim</h3>
            <p className="my-5">
              On On Kafe, sadece kahve içmek için değil; dostlarla buluşmak,
              günün yorgunluğunu atmak ve rahat bir ortamda keyifli vakit
              geçirmek için de mükemmel bir mekân. Misafirlerimize sunduğumuz
              rahat ortam, onları evlerinde gibi hissettirmeyi amaçlıyor.
            </p>
            <p className="my-5">
              Balıkesir’in On Numara Kahvesi’ni tadın; burada her yudumda hem
              lezzeti hem de şehrin enerjisini hissedeceksiniz.
            </p>
            <button className="hidden sm:block mr-4 px-6 py-2.5 border rounded border-[#c7a17a] hover:border-black bg-[#c7a17a] text-white text-sm lg:text-lg font-bold hover:bg-black duration-300">
              MENÜ
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={home} alt="coffe" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hakkinda;
