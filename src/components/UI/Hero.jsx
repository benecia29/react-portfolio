import React from "react";
// import heroImg from "../../assets/images/hero.svg";
// import CountUp from "react-countup";
import openquote from "../../assets/images/Quote Leftopen.png";
import closequote from "../../assets/images/Get Quoteclose.png";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-2">
        {" "}
        {/*parent*/}
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ***********hero left content********** */}
          <div className="sm:w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px] "
            >
              Hello, welcome
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Benecia Crasta <br />
              Aspiring web developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex flex-col items-center gap-2 mt-7"
            >
              <div
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-delay="200"
                className="flex flex-row items-center gap-6 mt-7 space-x-9"
              >
                <a href="#contact">
                  <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                    <i className="ri-mail-line"></i>Hire me
                  </button>
                </a>
                <a
                  href="#portfolio"
                  className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                >
                  See portfolio
                </a>
              </div>
              <p
                data-aos="fade-up"
                data-aos-duration="1800"
                className="sm:flex gap-2 text-headingColor mt-12 font-[500] leading-7 sm:pl-14 sm:pr-10"
              >
                <span>
                  <i className="ri-apps-2-line"></i>
                </span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur quam laboriosam provident corrupti! Sed minima quod
                natus itaque adipisci vitae.
              </p>

              <div className="flex items-center gap-9 mt-14">
                <span className="text-smallTextColor text-[15px] font-[600]">
                  Follow me
                </span>
                <span>
                  <a
                    href="#linkedin"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i className="ri-linkedin-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="#github"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i className="ri-github-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="#facebook"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i className="ri-facebook-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="#instagram"
                    className="text-smallTextColor text-[18px] font-[600]"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* ***********hero left end********** */}

          {/* ***********hero right content********** */}
          <div className="sm:basis-2/3 mt-[50px] sm:mt-0">
            <img src={openquote} className="sm:pb-[30px] sm:h-[115px] h-[50px]" alt="" />
            <p className="sm:pb-[30px] text-primaryColor font-bold sm:text-[35px] text-[25px] text-center my-2">
              When we strive to become <br />
              better than we are, everything around us becomes better too.
            </p>
            <img className="sm:ml-[557px] ml-[255px] sm:h-[80px] h-[50px]" src={closequote} alt="" />
            <p className="text-primaryColor font-bold text-[25px] italic sm:ml-[350px] mt-7 ml-[170px]">
              - Paulo Coelho
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
