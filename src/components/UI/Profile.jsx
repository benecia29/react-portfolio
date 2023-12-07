import React from "react";
import profilePic from "../../assets/images/benecia.jpg";
import star from "../../assets/images/star.png";
import rightArrow from "../../assets/images/right-arrow.png";
import resume from "../../assets/resume.pdf";
import Slider from "./Slider";

const Profile = () => {
  return (
    <section id="profile" className="sm:pb-9 pb-2 pt-0">
      <div className="container">
        <div className="text-center">
          <h2 className="text-headingColor dark:text-offWhite font-[700] text-[2rem] sm:mb-[200px]">
            Personal Details & Qualifications
          </h2>
        </div>
        <div className="sm:flex items-center justify-around sm:-mt-[170px]">
          {/* ***********profile card starts*************** */}
          <main className="sm:w-[380px] my-5 mt-[130px] h-[90%] mx-3 sm:mx-1 rounded-2xl sticky shadow-2xl bg-white dark:bg-black">
            <div className="absolute sm:-mt-[130px] -mt-[120px] sm:left-[84px] left-[63px]">
              <img
                src={profilePic}
                className="shadow-xl sm:w-[230px] w-[200px] sm:h-[230px] h-[200px] drop-shadow-xl rounded-[20px] left-[15%] sm:-ml-[8px] "
                alt=""
              />
            </div>

            <div className="sm:mt-2 pt-[105px] sm:pt-[143px] sm:pb-0 space-y-2">
              <h3 className="text-center font-bold text-xl text-smallTextColor dark:text-white font-[Poppins] sm:leading-7 top-[100px] text-[29px] sm:text-[30px] sm:-mt-[25px]">
                Benecia Crasta
              </h3>
            </div>

            {/* *************social media starts********** */}
            <div className="flex items-center gap-9 my-[25px] justify-center">
              <div className="flex items-center gap-2  font-[600] shadow bg-offWhite dark:bg-darkGrey dark:text-offWhite py-2 px-4 rounded-xl max-h-[40px] hover:bg-primaryColor dark:hover:bg-primaryColor hover:text-white ease-in duration-300">
                <a href="https://www.linkedin.com/in/benecia-crasta/">
                  <i className="ri-linkedin-line"></i>
                </a>
              </div>

              <div className="flex items-center gap-2  font-[600] shadow bg-offWhite dark:bg-darkGrey dark:text-offWhite py-2 px-4 rounded-xl max-h-[40px] hover:bg-primaryColor dark:hover:bg-primaryColor hover:text-white ease-in duration-300">
                <a href="https://github.com/benecia29">
                  <i className="ri-github-line"></i>
                </a>
              </div>

              <div className="flex items-center gap-2  font-[600] shadow bg-offWhite dark:bg-darkGrey dark:text-offWhite py-2 px-4 rounded-xl max-h-[40px] hover:bg-primaryColor dark:hover:bg-primaryColor hover:text-white ease-in duration-300">
                <a href="https://instagram.com/the_food_addicts_101?igshid=YTQwZjQ0NmI0OA==">
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>
            {/* *************social media ends********** */}

            {/* *******personal details starts******** */}
            <div className="container w-9/12 mx-auto py-3 space-y-3 bg-offWhite dark:bg-darkGrey p-5 rounded-lg">
              {/* ********phone********* */}
              <div className="flex gap-3 sm:gap-5">
                <div className="flex items-center gap-2 mt-[6px] font-[600] shadow-xl bg-white dark:bg-black dark:text-offWhite dark:hover:bg-primaryColor dark:hover:text-white px-3 rounded-xl max-h-[40px] hover:bg-primaryColor  hover:text-white ease-in duration-300">
                  <a href="#github">
                    <i class="ri-cellphone-line"></i>
                  </a>
                </div>

                <div>
                  <span className="text-smallTextColor dark:text-lightGrey text-[12px] sm:text-[14px]">
                    Phone
                  </span>
                  <h4 className="text-[16px] sm:text-[18px] text-smallTextColor dark:text-white mt-0 leading-6">
                    +91 9987327610
                  </h4>
                </div>
              </div>
              <hr className="text-white dark:text-lightGrey" />

              {/* ********location********* */}
              <div className="flex gap-3 sm:gap-5">
                <div className="mt-[17px] sm:mt-[5px] flex items-center gap-2  font-[600] shadow-xl bg-white px-3 sm:py-3 rounded-xl max-h-[40px] hover:bg-primaryColor hover:text-white ease-in duration-300 dark:bg-black dark:text-offWhite dark:hover:bg-primaryColor dark:hover:text-white">
                  <a href="#location">
                    <i class="ri-map-pin-line"></i>
                  </a>
                </div>

                <div>
                  <span className="text-smallTextColor dark:text-lightGrey text-[12px] sm:text-[14px]">
                    Location
                  </span>
                  <h4 className="text-[16px] sm:text-[18px] text-smallTextColor dark:text-white mt-0 leading-6">
                    Mumbai, Maharashtra
                  </h4>
                </div>
              </div>
              <hr className="text-white dark:text-lightGrey" />

              {/* ********email********* */}
              <div className="gap-3 sm:gap-5 flex">
                <div className="mt-[17px] sm:mt-[15px] flex items-center gap-2  font-[600] shadow-xl bg-white px-3 sm:py-3 rounded-xl max-h-[40px] hover:bg-primaryColor hover:text-white ease-in duration-300 dark:bg-black dark:text-offWhite dark:hover:bg-primaryColor dark:hover:text-white">
                  <a href="#email">
                    <i class="ri-mail-line"></i>
                  </a>
                </div>

                <div>
                  <span className="text-smallTextColor dark:text-lightGrey text-[12px] sm:text-[14px]">
                    Email
                  </span>

                  <h4 className="text-[16px] sm:text-[18px] text-smallTextColor dark:text-white mt-0 leading-6">
                    crastabenecia9@gmail <br />
                    .com
                  </h4>
                </div>
              </div>
              <hr className="text-white dark:text-lightGrey" />

              {/* ********birthday********* */}
              <div className="gap-3 sm:gap-5 flex">
                <div className="mt-[5px] flex items-center gap-2  font-[600] shadow-xl bg-white px-3 rounded-xl max-h-[40px] hover:bg-primaryColor hover:text-white ease-in duration-300 dark:bg-black dark:text-offWhite dark:hover:bg-primaryColor dark:hover:text-white">
                  <a href="#birthday">
                    <i class="ri-calendar-2-line"></i>
                  </a>
                </div>

                <div>
                  <span className="text-smallTextColor dark:text-lightGrey text-[12px] sm:text-[14px]">
                    Birthday
                  </span>
                  <h4 className="text-[16px] sm:text-[18px] text-smallTextColor dark:text-white mt-0 leading-6">
                    29 August, 2003
                  </h4>
                </div>
              </div>
            </div>
            {/* *******personal details ends******** */}

            <button className="px-4 py-2 my-6 ml-[95px] sm:ml-[122px] font-semibold text-sm text-center  bg-smallTextColor text-white hover:bg-headingColor dark:hover:bg-[#244c7f] rounded-full shadow-sm">
              <a href={resume} download>
                <span className="mx-2 inline">Download CV</span>
              </a>
            </button>
          </main>
          {/* ***********profile card ends*************** */}

          {/* ***********right content starts*************** */}
          <div className="my-5 mt-[50px] sm:mt-[135px] h-[90%] mx-3 sm:mx-1 rounded-2xl sticky shadow-2xl bg-white dark:bg-black px-3 py-3 sm:px-5 sm:py-7">
            <div className="flex gap-2 items-center">
              <frame className="h-10 w-8 sm:h-6 sm:w-7 bg-transparent">
                <img src={star} alt="" className="h-[20px] w-[30px] sm:h-[22px]"/>
              </frame>
              <h2 className="px-2 py-2 text-smallTextColor dark:text-lightGrey font-[600] text-[18px] sm:text-[21px]">
                Class Representative for 3 consecutive years.
              </h2>
            </div>

            <div className="flex gap-2 items-center">
              <frame className="h-5 w-7 sm:h-6 sm:w-7 bg-transparent">
                <img src={star} alt="" className="h-[20px] w-[22px] sm:h-[22px] sm:w-[27px]"/>
              </frame>
              <h2 className="px-2 py-2 text-smallTextColor dark:text-lightGrey font-[600] text-[18px] sm:text-[21px] -ml-[6px] sm:ml-0">
                Student Manager at DLLE.
              </h2>
            </div>

            <div className="flex gap-2 items-center">
              <frame className="h-10 w-8 sm:h-6 sm:w-7 bg-transparent">
                <img src={star} alt="" className="h-[20px] w-[30px] sm:h-[22px] sm:w-[28px]"/>
              </frame>
              <h2 className="px-2 py-2 text-smallTextColor dark:text-lightGrey font-[600] text-[18px] sm:text-[21px]">
                Assistant Contingent Leader at Bhavan's College.
              </h2>
            </div>

            <div className="flex gap-2 items-center">
              <frame className="-mt-[48px] sm:-mt-[1px] w-10 sm:h-6 sm:w-7 bg-transparent">
                <img src={star} alt="" className="h-[20px] w-[30px] sm:h-[22px] sm:w-[29px]"/>
              </frame>
              <h2 className="px-2 py-2 text-smallTextColor dark:text-lightGrey font-[600] text-[18px] sm:text-[21px]">
                Social media manager{" "}
                <a
                  href="https://instagram.com/bhavans.cultural?igshid=YTQwZjQ0NmI0OA=="
                  className="text-[#2d6195] dark:text-darkText"
                >
                  @bhavans.cultural
                </a>{" "}
                on Instagram.
              </h2>
            </div>

            {/* **************top skills*************** */}
            <h1 className="font-[Poppins] text-headingColor dark:text-white font-[800] text-[26px] mt-6 mb-2">
              Top Skills
            </h1>

            <div className="sm:flex items-center justify-around">
              <div>
                <ul>
                  <li className="flex gap-4 px-2 py-2 text-smallTextColor dark:text-lightGrey font-[600] text-[18px]">
                    <img src={rightArrow} alt="" className="h-[20px] w-[25px] mt-1" />
                    Interpersonal skills
                  </li>

                  <li className="flex gap-4 px-2 py-2 text-smallTextColor dark:text-lightGrey font-[600] text-[18px]">
                    <img src={rightArrow} alt="" className="h-[20px] w-[25px] mt-1" />
                    Organizational skills
                  </li>

                  <li className="flex gap-4 px-2 py-2 text-smallTextColor dark:text-lightGrey font-[600] text-[18px]">
                    <img src={rightArrow} alt="" className="h-[20px] w-[25px] mt-1"/>
                    Effective communication
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="flex gap-4 px-2 py-2 text-smallTextColor dark:text-lightGrey font-[600] text-[18px]">
                    <img src={rightArrow} alt="" className="h-[20px] w-[25px] mt-1" />
                    Leveraging AI tools
                  </li>

                  <li className="flex gap-4 px-2 py-2 text-smallTextColor dark:text-lightGrey font-[600] text-[18px]">
                    <img src={rightArrow} alt="" className="h-[20px] w-[25px] mt-1" />
                    Web development
                  </li>

                  <li className="flex gap-4 px-2 py-2 text-smallTextColor dark:text-lightGrey font-[600] text-[18px]">
                    <img src={rightArrow} alt="" className="h-[20px] w-[25px] mt-1" />
                    UI/UX designs
                  </li>
                </ul>
              </div>
            </div>

            {/* **************tech stack************** */}
            <h1 className="font-[Poppins] text-headingColor dark:text-white font-[800] text-[26px] mt-7 mb-2">
              Technologies I have worked with
            </h1>
            <Slider />
          </div>
          {/* ***********right-side white container ends*************** */}
        </div>
        {/* ***********right content ends*************** */}
      </div>
      {/* ********** main flex ends******** */}
    </section>
  );
};

export default Profile;
