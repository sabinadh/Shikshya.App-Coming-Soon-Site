import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logo from "/logo.svg";
import ShikshyaLogo from "/Shikshya-dark.svg";
import sideImage from "/img-1.svg";
import Countdown from "react-countdown";
import "./App.css";
import CountdownTimer from "./components/CountDownTimer";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "react-toastify";
const Completionist = () => <span>You are good to go!</span>;

function App() {
  // email js
  // const client = new SMTPClient({
  //   user: "user",
  //   password: "password",
  //   host: "smtp.your-email.com",
  //   ssl: true,
  // });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5kpkvae",
        "template_9f1k5xv",
        form.current,
        "sYiyf8Ra_F_bCxCRS"
      )
      .then((result) => {
        console.log(result);
        toast("Mail has been sent successflly! Thank You For Your Patient", {
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  // const targetEndDate = new Date("2024-04-01T00:00:00");
  const date = new Date("Sat Apr 03 2024 16:25:03 GMT+0545 (Nepal Time)");
  const targetEndDate = date.getTime();
  console.log(`Target time in App ${targetEndDate}`);

  const handleContactClick = () => {
    const phoneNumber = "9867872978";
    const telUrl = `tel:${phoneNumber}`;
    window.location.href = telUrl;
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="xl:absolute left-0 top-0 w-full">
          <div className="flex flex-wrap justify-between items-center py-6 container">
            <div>
              <img
                src={ShikshyaLogo}
                alt=""
                className="shikshyaLogo mb-10 dark_logo"
              />
              {/* <img
                  src={ShikshyaLogo}
                  alt=""
                  className="shikshyaLogo mb-10 white_logo"
                /> */}
            </div>
            <div>
              <button
                className="btn btn-outline-dark btn-sm"
                type="submit"
                // onClick={handleContactClick}
              >
                <a href="https://www.shotcoder.com/about/">Contact us</a>
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex justify-between flex-wrap items-center min-h-screen">
            <div className="max-w-[500px] space-y-4">
              <div className="relative flex space-x-3 items-center text-2xl text-slate-900 dark:text-white">
                {/* <span className="inline-block w-[25px] bg-secondary-500 h-[1px]"></span> */}
                {/* <span>Coming soon</span> */}
                <CountdownTimer
                  className="overallTime"
                  targetEndDate={targetEndDate}
                />
              </div>
              <div className="xl:text-[70px] xl:leading-[70px] text-4xl font-semibold text-slate-900 dark:text-white">
                Get notified when we launch
              </div>
              {/* <p className="font-normal text-slate-600 dark:text-slate-300 max-w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p> */}
              <div className="bg-white flex items-center px-3 rounded">
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="email"
                    name="message"
                    placeholder="Enter your email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    required
                    className="flex-1 bg-transparent h-full block w-full py-6 placeholder:text-secondary-500 text-base focus:outline-none focus:ring-0"
                  />
                  <div className="flex-none">
                    <button type="submit" className="btn btn-dark btn-sm px-6">
                      Notify me
                    </button>
                  </div>
                </form>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                *Don’t worry we will not spam you :)
              </div>
            </div>
            <div>
              <img src={sideImage} alt="" />
            </div>
          </div>
        </div>
        <div className="xl:fixed bottom-0 w-full">
          <div className="container">
            <div className="md:flex justify-between items-center flex-wrap space-y-4 py-6">
              <div>
                <ul className="flex md:justify-start justify-center space-x-3">
                  <li>
                    <a href="#" className="social-link">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/shotcodertech"
                      className="social-link"
                    >
                      {/* <iconify-icon icon="icomoon-free:twitter"></iconify-icon> */}
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/shotcodertech/"
                      className="social-link"
                    >
                      {/* <iconify-icon icon="icomoon-free:linkedin2"></iconify-icon> */}
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/shotcodertech"
                      className="social-link"
                    >
                      {/* <iconify-icon icon="icomoon-free:google"></iconify-icon> */}
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                {/* <ul className="flex md:justify-start justify-center space-x-3">
                  <li>
                    <a
                      href="#"
                      className="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                    >
                      Faq
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                    >
                      Email us
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
