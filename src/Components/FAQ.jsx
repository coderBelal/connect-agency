import women from "../assets/faq/woman.png"
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            <div className="flex flex-col justify-between h-full">
              <div className="md:max-w-md block">
                <h2 className="mb-4 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                  Frequently Asked Questions
                </h2>
                <p className="mb-12 text-gray-600 font-medium leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor condimentum commodo.
                </p>
              </div>
              <div className="block">
                <div className="mb-7 flex flex-wrap">
                  {[{
                    question: "What happens if I go over my subscription limits?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, tempor condimentum commodo tincidunt sit dictumst. Eu placerat to a arcu at sem vitae eros, purus nonprofit organizations for all,"
                  }, {
                    question: "How does App help people in problems?",
                    answer: "Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus."
                  }, {
                    question: "Why are we so confident about future projects?",
                    answer: "Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus."
                  }].map((item, index) => (
                    <div className="w-full" key={index}>
                      <a
                        className="block border-b border-gray-300"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggle(index);
                        }}
                      >
                        <div className="flex flex-wrap justify-between py-7 -m-1.5">
                          <div className="flex-1 p-1.5">
                            <h3 className="text-lg font-bold font-heading leading-normal">
                              {item.question}
                            </h3>
                            <div
                              className={`overflow-hidden duration-500 ${openIndex === index ? 'h-auto' : 'h-0'}`}
                            >
                              <p className="mt-5 text-gray-600 font-medium leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                          <div className="w-auto p-1.5">
                            <div className={openIndex === index ? 'hidden' : ''}>
                              <svg
                                className="relative top-1.5"
                                fill="none"
                                height="18"
                                viewBox="0 0 18 18"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="9"
                                  cy="9"
                                  fill="#2563EB"
                                  r="9"
                                />
                                <path
                                  clipRule="evenodd"
                                  d="M9.00078 4.79999C9.33215 4.79999 9.60078 5.06862 9.60078 5.39999V8.39999H12.6008C12.9322 8.39999 13.2008 8.66862 13.2008 8.99999C13.2008 9.33136 12.9322 9.59999 12.6008 9.59999H9.60078V12.6C9.60078 12.9314 9.33215 13.2 9.00078 13.2C8.66941 13.2 8.40078 12.9314 8.40078 12.6V9.59999H5.40078C5.06941 9.59999 4.80078 9.33136 4.80078 8.99999C4.80078 8.66862 5.06941 8.39999 5.40078 8.39999L8.40078 8.39999V5.39999C8.40078 5.06862 8.66941 4.79999 9.00078 4.79999Z"
                                  fill="white"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div className={openIndex === index ? '' : 'hidden'}>
                              <svg
                                className="relative top-1.5"
                                fill="none"
                                height="18"
                                viewBox="0 0 18 18"
                                width="18"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="9"
                                  cy="9"
                                  fill="#2563EB"
                                  r="9"
                                />
                                <path
                                  clipRule="evenodd"
                                  d="M6 9.00002C6 8.66865 6.26863 8.40002 6.6 8.40002L11.4 8.40002C11.7314 8.40002 12 8.66865 12 9.00002C12 9.3314 11.7314 9.60002 11.4 9.60002L6.6 9.60002C6.26863 9.60002 6 9.3314 6 9.00002Z"
                                  fill="white"
                                  fillRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                <p className="font-medium text-gray-600">
                  <span>Still have any questions?</span>
                  <a
                    className="text-indigo-600 hover:text-indigo-700 font-semibold"
                    href="#"
                  >
                    Contact us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <img
              alt="FAQ illustration"
              className="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000"
              src= {women}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
