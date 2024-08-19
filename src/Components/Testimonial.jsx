import React, { useRef } from 'react';
import './scrollbar.css'; // Import custom CSS for the scrollbar

const Testimonial = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: "Albert Flores",
      role: "CEO of Coca Soft",
      text: "Impressed doesn’t cover it! Our project went from good to outstanding. This design team understands perfection.",
      rating: 5,
      image: "https://via.placeholder.com/48",
    },
    {
        name: "Albert Flores",
        role: "CEO of Coca Soft",
        text: "Impressed doesn’t cover it! Our project went from good to outstanding. This design team understands perfection.",
        rating: 5,
        image: "https://via.placeholder.com/48",
      },
      {
        name: "Albert Flores",
        role: "CEO of Coca Soft",
        text: "Impressed doesn’t cover it! Our project went from good to outstanding. This design team understands perfection.",
        rating: 5,
        image: "https://via.placeholder.com/48",
      },
      {
        name: "Albert Flores",
        role: "CEO of Coca Soft",
        text: "Impressed doesn’t cover it! Our project went from good to outstanding. This design team understands perfection.",
        rating: 5,
        image: "https://via.placeholder.com/48",
      },
      {
        name: "Albert Flores",
        role: "CEO of Coca Soft",
        text: "Impressed doesn’t cover it! Our project went from good to outstanding. This design team understands perfection.",
        rating: 5,
        image: "https://via.placeholder.com/48",
      },
      {
        name: "Albert Flores",
        role: "CEO of Coca Soft",
        text: "Impressed doesn’t cover it! Our project went from good to outstanding. This design team understands perfection.",
        rating: 5,
        image: "https://via.placeholder.com/48",
      },
      {
        name: "Albert Flores",
        role: "CEO of Coca Soft",
        text: "Impressed doesn’t cover it! Our project went from good to outstanding. This design team understands perfection.",
        rating: 5,
        image: "https://via.placeholder.com/48",
      },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-24 mx-auto text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">TESTIMONIALS</span>
          <h1 className="font-heading text-4xl xs:text-6xl font-bold text-gray-900 mb-6">
            <span>Customer said about</span>
            <span className="font-serif italic">Connect Agency</span>
          </h1>
        </div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl">
          {/* Scroll Left Button */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-full z-10"
            onClick={scrollLeft}
          >
            &lt;
          </button>

          {/* Testimonials Container */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-scroll scrollbar-hide p-4"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-lg w-80 flex-shrink-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.text}</p>
                <div className="mt-4 flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.374 4.223a1 1 0 00.95.69h4.438c.969 0 1.372 1.24.588 1.81l-3.594 2.616a1 1 0 00-.364 1.118l1.374 4.223c.3.921-.755 1.688-1.538 1.118l-3.594-2.616a1 1 0 00-1.175 0l-3.594 2.616c-.783.57-1.838-.197-1.538-1.118l1.374-4.223a1 1 0 00-.364-1.118L2.097 9.65c-.783-.57-.38-1.81.588-1.81h4.438a1 1 0 00.95-.69l1.374-4.223z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Right Button */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-full z-10"
            onClick={scrollRight}
          >
            &gt;
          </button>
        </div>
      </div>
      </div>
      
     
    </>
  );
};

export default Testimonial;