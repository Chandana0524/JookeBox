/* eslint-disable @next/next/no-img-element */
import { logoIconsList } from '@/data';
import React from 'react';


export const LogoSection = () => {
  return (
   <div className="w-full py-10 md:py-20 flex flex-col items-center justify-center">
      <div className="marquee">
        <div className="marquee-box">
        
          {logoIconsList.map((icon, idx) => (
            <div key={`logo-${idx}`} className="marquee-item">
              <img src={icon.imgPath} alt="" />
            </div>
          ))}
         
          {logoIconsList.map((icon, idx) => (
            <div key={`clone-${idx}`} className="marquee-item">
              <img src={icon.imgPath} alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;