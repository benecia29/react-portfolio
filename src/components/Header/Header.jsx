import React, { useRef, useEffect } from "react";
import resume from "../../assets/resume.pdf";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    };

    // Add event listener
    window.addEventListener("scroll", stickyHeaderFunc);

    // Cleanup function
    return () => {
      // Remove the same function reference
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 80,
      left: 0,
    });
  };

  const togglemenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* *********logo start*********** */}
          <div className="flex items-center gap-10">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full  flex items-center justify-center">
              B
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl  text-smallTextColor font-[700]">
                Benecia
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                personal
              </p>
            </div>
          </div>
          {/* *********logo end*********** */}

          {/* *********menu start*********** */}
          <div className="menu" onClick={togglemenu} ref={menuRef}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600px]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600px]"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600px]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[600px]"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* *********menu end*********** */}

          {/* *********menu right*********** */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white ease-in duration-300">
              <a href={resume} download>
                <i className="ri-file-download-line">
                  <span className="mx-2 sm:inline hidden">Download CV</span>
                </i>
              </a>
            </button>
            <span
              onClick={togglemenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/* *********menu end*********** */}
        </div>
      </div>
    </header>
  );
};

export default Header;
