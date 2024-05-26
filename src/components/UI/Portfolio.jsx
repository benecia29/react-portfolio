import React, { useState } from "react";
import portfolios from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="-mb-[25px] -mt-[18px] sm:mt-[30px] sm:-mb-[10px] mx-auto">
            <h3 className="text-headingColor dark:text-offWhite text-[2rem] font-[700]">
              My Projects
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  className="rounded-[8px] h-[220px] lg:h-[210px] md:h-[160px] w-[400px] lg:w-[350px] md:w-[320px]"
                  src={portfolio.imgUrl}
                  alt=""
                />
              </figure>

              <div className="w-full h-full  bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={loadMoreHandler}
            className="text-white bg-primaryColor hover:bg-smallTextColor dark:hover:bg-headingColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
          >
            Load More
          </button>
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </section>
  );
};

export default Portfolio;