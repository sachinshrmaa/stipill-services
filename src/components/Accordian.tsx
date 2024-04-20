"use client";
import React, { useState } from "react";

export default function Accordian({ title, content }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 rounded-md">
      <div
        className="flex justify-between items-center py-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="text-slate-600 text-sm md:text-md">{title}</div>
        <div
          className={`transform text-purple-700 ${
            isOpen ? "rotate-180" : "rotate-90"
          } transition-transform`}
        >
          {isOpen ? "-" : "+"}
        </div>
      </div>
      {isOpen && (
        <div className="px-4 py-2 border-t border-gray-300">
          <div className="text-slate-500 text-xs md:text-sm">{content}</div>
        </div>
      )}
    </div>
  );
}
