import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qmz5d28",
        "template_8udbg2m",
        form.current,
        "WrNe9Fjw_7xV2WxJH"
      )
      .then(
        (result) => {
          toast.success("Message sent!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          toast.error("Oh-uh! Some error occured", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  return (
    <section id="contact" className="pb-16 sm:pt-8 pt-2">
      <div className="container">
        <h2 className="text-headingColor dark:text-offWhite font-[700] text-[2.5rem] mb-4 text-center sm:mt-[30px]">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30158.574596082963!2d72.86162878195242!3d19.115470903899006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c811c87303bf%3A0x16a07ca1b90dcc56!2sMarol%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700029542834!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 dark:bg-black lg:px-8 py-8">
            <form className="w-full" ref={form} onSubmit={sendEmail}>
              {/* ref={form} onSubmit={sendEmail} */}
              <div className="mb-5 mx-4 sm:mx-2 ">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-darkGrey"
                  name="user_name"
                  required
                />
              </div>

              <div className="mb-5  mx-4 sm:mx-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-darkGrey"
                  name="user_email"
                  required
                />
              </div>

              <div className="mb-5  mx-4 sm:mx-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-darkGrey"
                />
              </div>

              <div className="mb-5  mx-4 sm:mx-2">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-darkGrey"
                  name="message"
                  required
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="w-[91%] sm:w-[97%] p-3 mx-auto focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor dark:hover:bg-[#244c7f] text-center ease-linear duration-150"
                  type="submit"
                  value="Send message"
                  required
                />
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
