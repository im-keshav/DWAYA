import React from "react";

export default function ApproxBrandLogo({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-transform duration-500 ease-out group-hover:rotate-180"
      >
        <polygon
          points="24,2 45,14 45,34 24,46 3,34 3,14"
          stroke="#121316"
          strokeWidth="1.75"
          className="stroke-[#121316] transition-all duration-300 group-hover:stroke-stone-500"
          strokeLinejoin="round"
        />
        <path
          d="M24 8L37 34H29.5L24 22L18.5 34H11L24 8Z"
          fill="#121316"
          fillRule="evenodd"
          clipRule="evenodd"
          className="transition-transform duration-300"
        />
        <polygon points="24,15 28.5,25 19.5,25" fill="#FAF9F5" />
        <circle cx="24" cy="30" r="1.5" fill="#121316" />
      </svg>
    </div>
  );
}
