"use client";
import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/pin";

const RecentProjects = () => {
  return (
    <div className="py-10 w-full" id="about">
      <h1 className="heading">
        The <span className="text-purple">Jookebox Standard</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2  mt-2 p-4 max-w-6xl mx-auto">
        {projects.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center sm:w-[450px] w-full max-w-[90vw] h-[32rem] lg:h-[35rem] mx-auto"
          >
            <PinContainer title={item.title} href={item.title}>
              <div className="relative flex items-center justify-center sm:w-[450px] w-[80vw] overflow-hidden h-[25vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute object-cover h-full w-full rounded-xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm  mt-2"
                style={{ color: "#BEC1DD" }}
              >
                {item.des}
              </p>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;