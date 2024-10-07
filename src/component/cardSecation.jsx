import React, { useState } from "react";

const CardSection = () => {
  // Sample data for cards
  const cards = [
    { id: 1, title: "Card 1", description: "This is card 1" },
    { id: 2, title: "Card 2", description: "This is card 2" },
    { id: 3, title: "Card 3", description: "This is card 3" },
    { id: 4, title: "Card 4", description: "This is card 4" },
    { id: 5, title: "Card 5", description: "This is card 5" },
    { id: 6, title: "Card 6", description: "This is card 6" },
    { id: 7, title: "Card 7", description: "This is card 7" },
  ];

  // Set the number of cards visible per frame
  const cardsPerFrame = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle moving to the next set of cards
  const handleNext = () => {
    if (currentIndex < cards.length - cardsPerFrame) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle moving to the previous set of cards
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg flex items-center">
        {/* Left Button */}
        {currentIndex > 0 && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handlePrev}
          >
            Previous
          </button>
        )}
        
        {/* Card Display */}
        <div className="flex overflow-hidden w-full mx-4">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerFrame)}%)`,
              width: `${(cards.length / cardsPerFrame) * 100}%`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-1/3 p-4 flex-shrink-0 bg-gray-200 rounded-lg mx-2 text-center"
              >
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Button */}
        {currentIndex < cards.length - cardsPerFrame && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CardSection;
