import React, { useRef } from "react";
import CategoryCards from "./CategoryCards";


export default function Category() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -100,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll-wrapper relative flex items-center">
      <button className="scroll-btn left  " onClick={scrollLeft}>
        &#8249; {/* Left arrow */}
      </button>
     
       <div className="overflow-x-auto  w-4/5 mx-auto my-1 md:my-2 lg:my-5 flex hide-scrollbar" ref={scrollContainerRef}>
       <CategoryCards/>
       </div>
      
      <button className="scroll-btn right  " onClick={scrollRight}>
        &#8250; {/* Right arrow */}
      </button>
    </div>
  );
}
