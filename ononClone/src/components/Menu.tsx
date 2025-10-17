import React from "react";
import peopleOnTheCafe from "../assets/peopleOnTheCafe.jpg";
import cupOfCoffee from "../assets/cupOfCoffee.jpg";

const Menu: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <img src={peopleOnTheCafe} alt="people on the cafe" />
        <img src={cupOfCoffee} alt="cup of coffee" className="rounded-br-4xl" />
      </div>
    </div>
  );
};

export default Menu;
