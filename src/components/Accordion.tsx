"use client";

import { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion(props: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col text-left">
      <div className="flex justify-between m-5">
        <h2 className="w-3/4 text-xl font-semibold">{props.question}</h2>
        <button
          className={`
            flex items-center justify-center hover:bg-zinc-900
            ${isOpen ? "bg-zinc-900" : "bg-purple-500"}
            rounded-full text-xl text-white text-center w-8 h-8
          `}
          onClick={toggle}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <p className="font-normal m-5">{props.answer}</p>}
      <span className="border border-zinc-100 mx-5" />
    </div>
  );
}
