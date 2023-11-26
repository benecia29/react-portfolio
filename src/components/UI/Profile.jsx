import React from "react";
import profilePic from "../../assets/images/benecia.jpg";
import star from "../../assets/images/star.png";
import rightArrow from "../../assets/images/right-arrow.png";
import resume from "../../assets/resume.pdf";

const Profile = () => {
  return (
    <section id="profile" className="sm:pb-9 pb-2 pt-0">
      <div className="container">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] sm:mb-[200px]">
            Personal Details & Qualifications
          </h2>
        </div>

        <div className="sm:flex items-center">
          {/* ***********card starts*************** */}
          <main className=" sm:w-[450px] my-5 mt-[150px] h-[90%] mx-3 rounded-2xl sticky shadow-2xl bg-white">
            <div className="absolute sm:-mt-[150px] -mt-[120px] sm:left-[84px] left-[63px]">
              <img
                src={profilePic}
                className="shadow-xl sm:w-[270px] w-[200px] sm:h-[270px] h-[200px] drop-shadow-xl mx-auto rounded-[20px]  left-[15%]"
                alt=""
              />
            </div>

            <div className="sm:mt-2 pt-[105px] sm:pt-[143px] sm:pb-0 space-y-2">
              <h3 className="text-center font-bold text-xl text-smallTextColor font-[Poppins] sm:leading-10 top-[100px] text-[29px] sm:text-[30px]">
                Benecia Crasta
              </h3>
            </div>

            {/* *************social media starts********** */}
            <div className="flex items-center gap-9 my-[25px] justify-center">
              <div className="flex items-center gap-2  font-[600] shadow bg-[#F3F6F6] py-2 px-4 rounded-xl max-h-[40px] hover:bg-primaryColor hover:text-white ease-in duration-300">
                <a href="#linkedin">
                  <i className="ri-linkedin-line"></i>
                </a>
              </div>

              <div className="flex items-center gap-2  font-[600] shadow bg-[#F3F6F6] py-2 px-4 rounded-xl max-h-[40px] hover:bg-primaryColor hover:text-white ease-in duration-300">
                <a href="#github">
                  <i className="ri-github-line"></i>
                </a>
              </div>

              <div className="flex items-center gap-2  font-[600] shadow bg-[#F3F6F6] py-2 px-4 rounded-xl max-h-[40px] hover:bg-primaryColor hover:text-white ease-in duration-300">
                <a href="#twitter">
                  <i className="ri-twitter-line"></i>
                </a>
              </div>
            </div>
            {/* *************social media ends********** */}

            {/* *******personal details starts******** */}
            <div className="container w-9/12 mx-auto py-3 space-y-3 bg-[#F3F6F6] p-5 rounded-lg">
              {/* ********phone********* */}
              <div className="flex gap-3 sm:gap-5">
                <div className="flex items-center gap-2 mt-[6px] font-[600] shadow-xl bg-white px-3 rounded-xl max-h-[40px] hover:bg-primaryColor hover:text-white ease-in duration-300">
                  <a href="#github">
                    <i class="ri-cellphone-line"></i>
                  </a>
                </div>

                <div>
                  <span className="text-smallTextColor text-[12px] sm:text-[14px]">
                    Phone
                  </span>
                  <h4 className="text-[16px] sm:text-[18px] text-smallTextColor mt-0 leading-6">
                    +91 8850668524
                  </h4>
                </div>
              </div>
              <hr className="text-white" />

              {/* ********location********* */}
              <div className="flex gap-3 sm:gap-5">
                <div className="mt-[17px] sm:mt-[5px] flex items-center gap-2  font-[600] shadow-xl bg-white px-3 sm:py-3 rounded-xl max-h-[40px] hover:bg-primaryColor hover:text-white ease-in duration-300">
                  <a href="#location">
                    <i class="ri-map-pin-line"></i>
                  </a>
                </div>

                <div>
                  <span className="text-smallTextColor text-[12px] sm:text-[14px]">
                    Location
                  </span>
                  <h4 className="text-[16px] sm:text-[18px] text-smallTextColor mt-0 leading-6">
                    Mumbai, Maharashtra
                  </h4>
                </div>
              </div>
              <hr className="text-white" />

              {/* ********email********* */}
              <div className="gap-3 sm:gap-5 flex">
                <div className="mt-[17px] sm:mt-[6px] flex items-center gap-2  font-[600] shadow-xl bg-white px-3 sm:py-3 rounded-xl max-h-[40px] hover:bg-primaryColor hover:text-white ease-in duration-300">
                  <a href="#email">
                    <i class="ri-mail-line"></i>
                  </a>
                </div>

                <div>
                  <span className="text-smallTextColor text-[12px] sm:text-[14px]">
                    Email
                  </span>

                  <h4 className="text-[16px] sm:text-[18px] text-smallTextColor mt-0 leading-6">
                    crastabenecia9@gmail <br />
                    .com
                  </h4>
                </div>
              </div>
              <hr className="text-white" />

              {/* ********birthday********* */}
              <div className="gap-3 sm:gap-5 flex">
                <div className="mt-[5px] flex items-center gap-2  font-[600] shadow-xl bg-white px-3 rounded-xl max-h-[40px] hover:bg-primaryColor hover:text-white ease-in duration-300">
                  <a href="#birthday">
                    <i class="ri-calendar-2-line"></i>
                  </a>
                </div>

                <div>
                  <span className="text-smallTextColor text-[12px] sm:text-[14px]">
                    Birthday
                  </span>
                  <h4 className="text-[16px] sm:text-[18px] text-smallTextColor mt-0 leading-6">
                    29 August, 2003
                  </h4>
                </div>
              </div>
            </div>
            {/* *******personal details ends******** */}

            <button className="px-4 py-2 my-6 ml-[95px] sm:ml-[153px] font-semibold text-sm text-center  bg-smallTextColor text-white rounded-full shadow-sm">
              <a href={resume} download>
                <span className="mx-2 inline">Download CV</span>
              </a>
            </button>
          </main>
          {/* ***********card ends*************** */}

          {/* ***********right content starts*************** */}
          <div className="h-full bg-white ml-10">
            <div className="flex gap-2 items-center">
              <frame className="h-7 w-7 bg-transparent">
                <img src={star} alt="" />
              </frame>
              <h2 className="px-2 py-2 text-primaryColor font-[600] text-[20px]">
                Class Representative for 3 consecutive years.
              </h2>
            </div>

            <div className="flex gap-2 items-center">
              <frame className="h-7 w-7 bg-transparent">
                <img src={star} alt="" />
              </frame>
              <h2 className="px-2 py-2 text-primaryColor font-[600] text-[20px]">
                Student Manager at DLLE.
              </h2>
            </div>

            <div className="flex gap-2 items-center">
              <frame className="h-7 w-7 bg-transparent">
                <img src={star} alt="" />
              </frame>
              <h2 className="px-2 py-2 text-primaryColor font-[600] text-[20px]">
                Assistant Contingent Leader at Bhavan's College.
              </h2>
            </div>

            <div className="flex gap-2 items-center">
              <frame className="h-7 w-7 bg-transparent">
                <img src={star} alt="" />
              </frame>
              <h2 className="px-2 py-2 text-primaryColor font-[600] text-[20px]">
                Social media manager{" "}
                <a
                  href="https://instagram.com/bhavans.cultural?igshid=YTQwZjQ0NmI0OA=="
                  className="text-[#2d6195]"
                >
                  @bhavans.cultural
                </a>{" "}
                on Instagram.
              </h2>
            </div>
            <h1 className="font-[Poppins] text-headingColor font-[800] text-[26px] mt-6 mb-2">
              Top Skills
            </h1>
            <ul>
              <li className="flex gap-4 px-2 py-2 text-smallTextColor font-[600] text-[20px]">
                <img src={rightArrow} alt="" className="mr" />
                Interpersonal skills
              </li>

              <li className="flex gap-4 px-2 py-2 text-smallTextColor font-[600] text-[20px]">
                <img src={rightArrow} alt="" className="mr" />
                Organizational skills
              </li>

              <li className="flex gap-4 px-2 py-2 text-smallTextColor font-[600] text-[20px]">
                <img src={rightArrow} alt="" className="mr" />
                Effective communication
              </li>

              <li className="flex gap-4 px-2 py-2 text-smallTextColor font-[600] text-[20px]">
                <img src={rightArrow} alt="" className="mr" />
                Leveraging AI tools
              </li>

              <li className="flex gap-4 px-2 py-2 text-smallTextColor font-[600] text-[20px]">
                <img src={rightArrow} alt="" className="mr" />
                Web development
              </li>

              <li className="flex gap-4 px-2 py-2 text-smallTextColor font-[600] text-[20px]">
                <img src={rightArrow} alt="" className="mr" />
                UI/UX designs
              </li>
            </ul>
            <h1 className="font-[Poppins] text-headingColor font-[800] text-[26px] mt-6 mb-2">
              Technologies I have experience with
            </h1>
            
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
