import React from "react";
import { Typewriter } from "react-simple-typewriter";
import openquote from "../../assets/images/Quote Leftopen.png";
import closequote from "../../assets/images/Get Quoteclose.png";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-2">
        {" "}
        {/*parent*/}
<<<<<<< HEAD
        <div className="md:flex items-center justify-between sm:flex-col lg:flex-row">
          {/* ***********hero left content********** */}
          <div className="lg:w-[50%] md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor dark:text-darkText font-[600] text-[16px]
              mt-6 md:mx-[130px] lg:mx-0 md:mt-7 lg:mt-5"
=======
        <div className="md:flex items-center justify-between md:flex-col lg:flex-row">
        {/* <div className="md:flex items-center justify-between sm:flex-col md:flex-row"> */}
          {/* ***********hero left content********** */}
          <div className="md:w-full md:px-24 lg:px-0 md:basis-1/2">
          {/* <div className="sm:w-[50%] md:basis-1/2"> */}
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor dark:text-darkText font-[600] text-[16px] 
              mt-6 md:pl-[50px]"
>>>>>>> a91af23670dd2ab90d59206d7e4884469cad010c
            >
              Hello, welcome
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
<<<<<<< HEAD
              className="text-headingColor dark:text-darkText font-[800] text-[1.8rem] lg:text-[40px] md:text-[40px] leading-[35px] lg:leading-[46px] mt-5 md:mx-[130px] lg:mx-0 lg:mt-4"
=======
              className="text-headingColor dark:text-darkText font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 md:pl-[50px]"
>>>>>>> a91af23670dd2ab90d59206d7e4884469cad010c
            >
              I'm Benecia Crasta <br /> Aspiring{" "}
              <span>
                <Typewriter
                  words={[
                    "Web Developer.",
                    "Project Manager.",
                    "UI/UX Designer.",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex flex-col items-center gap-2 mt-6 md:my-12 lg:md:my-6"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-delay="200"
<<<<<<< HEAD
                className="flex flex-row items-center gap-9 my-3 md:gap-[70px] lg:gap-12"
=======
                className="flex flex-row items-center gap-9 my-3 md:gap-[70px]"
>>>>>>> a91af23670dd2ab90d59206d7e4884469cad010c
              >
                <a href="#contact">
                  <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-2 rounded-[8px]">
                    <i className="ri-mail-line"></i>Hire me
                  </button>
                </a>
                <a
                  href="#profile"
                  className="text-smallTextColor dark:text-darkText font-[600] text-[16px] border-b border-solid border-smallTextColor dark:border-darkText"
                >
                  See profile
                </a>
              </div>

              <p
                data-aos="fade-up"
                data-aos-duration="1800"
<<<<<<< HEAD
                className="sm:flex gap-2 text-headingColor dark:text-darkText mt-4 font-[500] leading-7 text-justify lg:pr-10 md:mx-[50px] lg:mx-0"
=======
                className="sm:flex gap-2 text-headingColor dark:text-darkText mt-4 font-[500] leading-7 text-justify sm:pr-10 md:-mx-[85px]"
>>>>>>> a91af23670dd2ab90d59206d7e4884469cad010c
              >
                As a 3rd-year Computer Science student, I'm passionate about web
                development. My focus on creating user-friendly and visually
                appealing designs drives my work. Adaptable to new technologies,
                I aim to blend technical expertise with leadership skills as a
                future Project Manager, ready to tackle new challenges.
              </p>

              <div className="flex items-center gap-9 mt-6">
                <span className="text-smallTextColor dark:text-darkText text-[15px] font-[600]">
                  Follow me
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/benecia-crasta/"
                    className="text-smallTextColor dark:text-darkText text-[18px] font-[600]"
                  >
                    <i className="ri-linkedin-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/benecia29"
                    className="text-smallTextColor dark:text-darkText text-[18px] font-[600]"
                  >
                    <i className="ri-github-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://instagram.com/the_food_addicts_101?igshid=YTQwZjQ0NmI0OA=="
                    className="text-smallTextColor dark:text-darkText text-[18px] font-[600]"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* ***********hero left end********** */}

          {/* ***********hero right content starts********** */}
          <div
            data-aos="fade-left"
            data-aos-duration="1800"
            data-aos-delay="200"
            className="sm:basis-[55%] mt-[30px] lg:-mt-[25px] md:-mt-[30px]"
          >
            <img
              src={openquote}
              className="sm:mb-0 sm:pb-[30px] sm:h-[115px] h-[50px] "
              alt=""
            />
            <p className="sm:pb-[15px] pt-[20px] sm:pt-0 text-primaryColor font-bold sm:text-[35px] text-[25px] text-center ">
              When we strive to become
              <br />
              better than we are, <br />
              everything around us becomes <br />
              better too.
            </p>
            <img
              className="sm:ml-[520px] ml-[300px] sm:h-[80px] h-[50px] "
              src={closequote}
              alt=""
            />
            <p className="text-primaryColor font-bold sm:text-[25px] text-[20px] italic sm:ml-[330px] sm:mt-2 ml-[170px]">
              - Paulo Coelho
            </p>
          </div>
          {/* ***********hero right content ends********** */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
