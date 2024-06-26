import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="overflow-auto w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40 ">
      <div className="w-11/12 md:max-w-[600px] md:w-full absolute lg:top-[75%] md:top-[53%] lg:left-[27%] md:left-[12%] left-4 top-[55%] z-20 bg-white dark:bg-black rounded-[8px] transform-translate-x-1/2 -translate-y-1/2 p-5 ">
        <div>
          <figure>
            <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5 dark:text-darkText">
            {portfolio.title}
          </h2>

          <p className="text-[15px] leading-7 text-smallTextColor dark:text-lightGrey">
            {portfolio.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] trxt-[700] dark:text-offWhite">
              Skills:
            </h4>

            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 dark:bg-darkGrey dark:text-lightGrey"
              >
                {item}
              </span>
            ))}
          </div>

          <a href={portfolio.siteUrl}>
            <button className="bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
              Project URL
            </button>
          </a>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer dark:bg-black dark:text-offWhite"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
