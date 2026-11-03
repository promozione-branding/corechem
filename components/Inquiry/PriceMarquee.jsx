
"use client";

import React from "react";
import {
    TrendingUp,
    ShieldCheck,
    Truck,
    FileCheck2,
    Clock3,
    Zap,
} from "lucide-react";

const announcements = [
    {
        icon: TrendingUp,
        text: "Prices are moving daily after new duty. Book your quantity now and lock todays rate.",
    },
];

export default function PriceMarquee({ onQuoteClick }) {
    return (
        <div className="relative w-full h-[40px] overflow-hidden bg-[#c8921c] sm:p-2.5 py-1 text-[#062347]">

            <style jsx>{`
  @keyframes marqueeScroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: marqueeScroll var(--marquee-duration, 22s)
      linear infinite;
    will-change: transform;
  }

  .marquee-track:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee-track {
      animation: none;
    }
  }
`}</style>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#c8921c] to-transparent" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#c8921c] to-transparent" />

            <div className="marquee-track">
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        aria-hidden={copy === 1}
                        className="flex shrink-0 items-center"
                    >
                        {announcements.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={`${copy}-${index}`}
                                    className="flex shrink-0 items-center gap-3 px-6 md:px-10"
                                >
                                    <Icon size={16} className="shrink-0 text-[#fff]" />

                                    <span className="whitespace-nowrap text-[20px] font-bold text-[#fff] sm:text-[13px]">
                                        {item.text}
                                    </span>

                                    <span className="ml-4 text-[#fff]">✦</span>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
