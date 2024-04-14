import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      {/* ************footer top start************* */}
      <div className="container">
        <div className="sm:flex items-center justify-center md:gap-10">
          <div className="w-full sm:w-1/2" >
            <h2 className="sm:-mt-7 text-[26px] leading-10 text-white font-[600] mb-5 sm:mb-7 md:text-[2rem]">
              Looking for a dedicated employee to elevate your company's
              success?
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] sm:mt-4">
                <i className="ri-mail-line"></i>Hire me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0 text-justify">
              Passionate about data and business analytics and aspiring to lead as a Project Manager. Skilled in problem-solving, effective communication, data management and analysis. Ready to tackle new challenges and drive innovation.
            </p>

            {/* **********follow me and socials starts*********** */}
            <div className="flex items-center justify-center gap-4 flex-wrap md:gap-8 my-7">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow me:
              </span>

              <span className="w[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/benecia29"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>

              <span className="w[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/benecia-crasta/"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>

              <span className="w[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://instagram.com/the_food_addicts_101?igshid=YTQwZjQ0NmI0OA=="
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
            </div>
            {/* **********follow me and socials ends*********** */}
          </div>
        </div>
      </div>
      {/* ************footer top end************* */}

      {/* ************footer bottom start************* */}
      <div className="bg-[#1b1e29] py-3 mt-8">
        <div className="container">
          <div className="text-center py-3">
            {/* <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  B
                </span>

                <div className="loading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Benecia
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Personal
                  </p>
                </div>
              </div>
            </div> */}

            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year}. Developed by Benecia Crasta - All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ************footer bottom end************* */}
    </footer>
  );
};

export default Footer;
