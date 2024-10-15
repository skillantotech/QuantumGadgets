import React, { useState } from "react";
import earbud from "../assets/Category-Section/earbud-c.webp";
import speaker from "../assets/Category-Section/speaker.png";
import mobile from "../assets/Category-Section/mobile-c.png";
import tablet from "../assets/Category-Section/tab-c.png";
import headphone from "../assets/Category-Section/headphone-c.png";
import laptop from "../assets/Category-Section/lappy-c.png";
import desktop from "../assets/Category-Section/desktop-c.png";
import powerbank from "../assets/Category-Section/powerbank-c.png";

export default function Example() {
  let cards = [
    {
      image: mobile,
      category: "Mobile",
    },
    {
      image: laptop,
      category: "Laptop",
    },
    {
      image: tablet,
      category: "Tablet",
    },
    {
      image: mobile,
      category: "Mobile",
    },
    {
      image: headphone,
      category: "Headphone",
    },
    {
      image: earbud,
      category: "Earbuds",
    },
    {
      image: speaker,
      category: "Speaker",
    },
    {
      image: powerbank,
      category: "PowerBank",
    },

    {
      image: desktop,
      category: "Desktop",
    },
    {
      image: mobile,
      category: "Mobile",
    },
  ];

  // Set the number of cards visible per frame
  const cardsPerFrame = 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle moving to the next set of cards
  const handleNext = () => {
    if (currentIndex < cards.length - cardsPerFrame) {
      setCurrentIndex(currentIndex + cardsPerFrame);
    }
  };

  // Handle moving to the previous set of cards
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerFrame);
    }
  };

  return (
    <div className="flex items-center justify-center  ">
      <div className="flex items-center w-4/5 mx-auto    ">
        {/* Left Button */}
        {currentIndex > 0 && (
          <button
            className=" px-2 py-1 lg:px-4 lg:py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handlePrev}
          >
            &#8249;
          </button>
        )}

        {/* Card Display */}
        <div className="flex w-full mx-4 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / cardsPerFrame) * 10}%)`,
              width: `${(cards.length / cardsPerFrame) * 100}%`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 p-1 md:p-3 lg:p-4 mx-1 lg:mx-2 text-center  rounded-lg"
              >
                <div className=" bg-gray-400 w-16 md:w-20 lg:w-24 rounded-full overflow-hidden ">
                  <img src={card.image} alt="photo" />
                </div>
                <p className="text-gray-700">{card.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        {currentIndex < cards.length - cardsPerFrame && (
          <button
            className="px-2 py-1 lg:px-4 lg:py-2  text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handleNext}
          >
            &#8250;
          </button>
        )}
      </div>
    </div>
  );
}
