/* eslint-disable @next/next/no-img-element */
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data"; // Import the type

const Footer: React.FC = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to turn  <span className="text-purple">your next event</span> into an unforgettable experience
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today for a consultation or to browse our FAQs. We’re here to ensure every detail of your event hits the right note.
        </p>
        <a href="mailto:hello@jookebox.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright ©️ 2026 jookebox
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-300 transition-colors duration-300"
            >
              <img src={info.img} alt="social-icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
