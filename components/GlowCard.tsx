"use client";

import { useRef, ReactNode, MouseEvent } from "react";

// 1. Define the shape of your card data
interface CardData {
  review: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allows for other properties like name or id
}

interface GlowCardProps {
  card: CardData;
  index: number;
  children: ReactNode;
}

const GlowCard = ({ card, index, children }: GlowCardProps) => {
  // 2. Type the ref as an array of HTMLDivElement or null
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 3. Type the event as a React MouseEvent on a DIV element
  const handleMouseMove = (index: number) => (e: MouseEvent<HTMLDivElement>) => {
    const cardElement = cardRefs.current[index];
    if (!cardElement) return;

    const rect = cardElement.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    // 4. Update the CSS variable using the calculated angle
    cardElement.style.setProperty("--start", String(angle + 60));
  };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>
      
      {/* 5. Star Rating - Ensure the src path is correct in your public folder */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            key={i} 
            src="/images/star.png" 
            alt="star" 
            className="size-5" 
          />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      
      {children}
    </div>
  );
};

export default GlowCard;