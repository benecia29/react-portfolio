import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Experience = () => {
  return (
    <section id="services" className="pb-11 pt-5 sm:pt-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-headingColor dark:text-offWhite font-[700] text-[2.4rem] sm:mb-5 mb-0">
            My Internship Experience
          </h2>
        </div>

        <div className="flex flex-col justify-center sm:py-3">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* **********vertical line running thru the middle********* */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 dark:bg-lightGrey h-full left-1/2 transform-translate-x-1/2"></div>

              {/* ***********left card creative producer*********** */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className=" bg-white dark:bg-black p-4 rounded shadow group hover:bg-primaryColor dark:hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-1 group-hover:text-white dark:group-hover:text-white group-hover:font-[600] dark:group-hover:font-[600] text-xl">
                          Creative Producer
                        </h3>

                        <p className="text-[15px] text-smallTextColor dark:text-lightGrey group-hover:text-white dark:group-hover:text-white group-hover:font-[500] dark:group-hover:font-[500] leading-6 text-justify">
                          (Jan 2022 - Feb 2022) <br />
                          Creating content, shooting and editing videos for
                          promotional purposes of various brands.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-[#f0edff] dark:border-lightGrey border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <a href="#birthday" className="text-[#E7E3FC] text-xl">
                      <i class="ri-vidicon-line"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* ***********right card hr intern*********** */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className=" bg-white dark:bg-black p-4 rounded shadow group hover:bg-primaryColor dark:hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-1 group-hover:text-white dark:group-hover:text-white group-hover:font-[600] dark:group-hover:font-[600] text-xl">
                          Human Resources Intern
                        </h3>

                        <p className="text-[15px] text-smallTextColor dark:text-lightGrey group-hover:text-white dark:group-hover:text-white group-hover:font-[500] dark:group-hover:font-[500] leading-6 text-justify">
                          (Jun 2022 - Sep 2022) <br />
                          Interviewing interns applying in various other
                          departments of the company. Calling and updating the
                          spreadsheets.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-[#f0edff] dark:border-lightGrey border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <a href="#birthday" className="text-[#E7E3FC] text-xl">
                      <i class="ri-user-2-line"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* ***********left card frontend dev*********** */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className=" bg-white dark:bg-black p-4 rounded shadow group hover:bg-primaryColor dark:hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-1 group-hover:text-white dark:group-hover:text-white group-hover:font-[600] dark:group-hover:font-[600] text-xl">
                          Frontend Developer
                        </h3>

                        <p className="text-[15px] text-smallTextColor dark:text-lightGrey group-hover:text-white dark:group-hover:text-white group-hover:font-[500] dark:group-hover:font-[500] leading-6 text-justify">
                          (May 2023 - Jun 2023) <br /> The technologies used are
                          JavaScript, PHP, jQuery, BootStrap, HTML5, CSS.
                          Uploading files on FTP server using FileZilla.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-[#f0edff] dark:border-lightGrey border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ***********right card web dev*********** */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className=" bg-white dark:bg-black p-4 rounded shadow group hover:bg-primaryColor dark:hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-1 group-hover:text-white dark:group-hover:text-white group-hover:font-[600] dark:group-hover:font-[600] text-xl">
                          Web Developer
                        </h3>

                        <p className="text-[15px] text-smallTextColor dark:text-lightGrey group-hover:text-white dark:group-hover:text-white group-hover:font-[500] dark:group-hover:font-[500] leading-6 text-justify">
                          (Aug 2023) <br />I was given 3 tasks as a part of this
                          internship program and I implemented it using Next.js,
                          Python, HTML & CSS. I’ve received a certificate as
                          well as a Letter Of Recommendation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-[#f0edff] dark:border-lightGrey border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* ***********left card presales tech associate*********** */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className=" bg-white dark:bg-black p-4 rounded shadow group hover:bg-primaryColor dark:hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-1 group-hover:text-white dark:group-hover:text-white group-hover:font-[600] dark:group-hover:font-[600] text-xl">
                          Presales Technical Associate
                        </h3>

                        <p className="text-[15px] text-smallTextColor dark:text-lightGrey group-hover:text-white dark:group-hover:text-white group-hover:font-[500] dark:group-hover:font-[500] leading-6 text-justify">
                          (Sep 2023 - Nov 2023) <br />
                          Connecting with potential clients, understanding their
                          unique needs, and offering tailored digital marketing
                          services to fuel their business success.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-[#f0edff] dark:border-lightGrey border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <a href="#birthday" className="text-[#E7E3FC] text-xl">
                      <i class="ri-slideshow-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
