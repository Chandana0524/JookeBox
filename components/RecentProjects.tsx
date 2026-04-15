/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/pin";

const RecentProjects = () => {
  return (
    <div className="py-20 w-full" id="about">
      <h1 className="heading">
        The {" "}
        <span className="text-purple">Jookebox Standard</span>
      </h1>

      {/* 1. The Container Fix: Added max-w-6xl to keep them grouped in the center */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16  mt-5 md:mt-10 p-4 max-w-6xl mx-auto">
        {projects.map((item) => (
          <div
            key={item.id}
            // 2. The Card Wrapper: Reduced width slightly to 450px to ensure they fit side-by-side
            className="flex items-center justify-center sm:w-[450px] w-full max-w-[90vw] h-[32rem] lg:h-[35rem] mx-auto"
          >
            <PinContainer title={item.title}>
              {/* Image Container: Full width of the card */}
              <div className="relative flex items-center justify-center sm:w-[450px] w-[80vw] overflow-hidden h-[25vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                
                {/* Your project image - now showing fully */}
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute object-cover h-full w-full rounded-xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-5 mt-2"
                style={{ color: "#BEC1DD" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
              
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;