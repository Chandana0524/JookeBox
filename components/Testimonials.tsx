/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";


import { testimonials } from "@/data";
import TitleHeader from "./TitleHeader";
import GlowCard from "./GlowCard";

// 1. Define the shape of a single testimonial object
interface Testimonial {
  name: string;
  mentions: string;
  imgPath: string;
  review: string; // Ensure this matches what GlowCard expects
}

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About jookebox?"
          sub="⭐️ Customer feedback highlights"
        />

        {/* Using columns-3 for a masonry-style layout. 
          Ensure 'break-inside-avoid-column' is in GlowCard's CSS 
          to prevent cards from splitting between columns.
        */}
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-6">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.imgPath} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-white-50 text-sm">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;