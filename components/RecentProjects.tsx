"use client";
import React from "react";
import Image from "next/image"; // 1. Use Next.js Image component
import { projects } from "@/data";
import { PinContainer } from "./ui/pin";

const RecentProjects = () => {
  return (
    <div className="py-10 w-full" id="about">
      <h1 className="heading">
        The <span className="text-purple">Jookebox Standard</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mt-2 p-4 max-w-6xl mx-auto">
        {projects.map((item, idx) => (
          <div
            key={item.id}
            /* Changed to h-fit to stop vertical spacing issues */
            className="flex items-center justify-center sm:w-[450px] w-full max-w-[90vw] h-fit py-8 mx-auto"
          >
            <PinContainer title={item.title} href={item.title}>
              <div className="relative flex items-center justify-center sm:w-[450px] w-[80vw] overflow-hidden h-[25vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image 
                    src="/bg.png" 
                    alt="bgimg" 
                    fill 
                    className="object-cover"
                  />
                </div>
                {/* 2. Optimized Project Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  /* priority=true for first 2 images makes them load instantly */
                  priority={idx < 2} 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="z-10 absolute object-cover rounded-xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm mt-2"
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