import React, { useRef, useEffect } from "react";

const Header = (props) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        props.theme === "light"
          ? headerRef.current.classList.add("sticky__header")
          : headerRef.current.classList.add("sticky_header_dark");
      } else {
        props.theme === "light"
          ? headerRef.current.classList.remove("sticky__header")
          : headerRef.current.classList.remove("sticky_header_dark");
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
      className="w-full h-[80px] leading-[80px] flex items-center bg-gradient-to-r from-[#ebe7ff] to-[#ffeef7] via-[#e7f5ff] dark:bg-gradient-to-r dark:from-[#0D1224] dark:to-[#42252F] dark:via-[#3D3141]"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* *********logo start*********** */}
          <div className="flex items-center gap-5">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full  flex items-center justify-center">
              B
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl  text-smallTextColor dark:text-offWhite font-[700] ">
                Benecia
              </h2>
              <p className="text-smallTextColor dark:text-offWhite text-[14px] font-[500]">
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
                  className="text-smallTextColor dark:text-offWhite font-[600px]"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor dark:text-offWhite font-[600px]"
                  href="#services"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor dark:text-offWhite font-[600px]"
                  href="#profile"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor dark:text-offWhite font-[600px]"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor dark:text-offWhite font-[600px]"
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
            {/* ************dark mode icons start************** */}
            <div className="flex shadow bg-[#F3F6F6] rounded-full hover:bg-primaryColor hover:text-white text-smallTextColor ease-in h-[46px] w-[46px]">
              <div
                onClick={props.handleSwitch}
                className="top-0 -mt-[17px] ml-[8px]"
              >
                {props.theme === "light" ? (
                  <i className="ri-moon-line text-[30px]"></i>
                ) : (
                  <i className="ri-sun-line text-[30px]"></i>
                )}
              </div>
            </div>
            {/* ************dark mode icons end************** */}

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
