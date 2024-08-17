"use client";
import React from "react";
import Image from "next/image";
import { Input } from "../ui/input";

interface CustomInputProps {
  route: string;
  iconposition: string;
  imgsrc: string;
  placholder: string;
  otherClasses: string;
}

const LocalSearch = ({
  route,
  iconposition,
  imgsrc,
  placholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconposition === "left" && (
        <Image
          src={imgsrc}
          alt="icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
      {iconposition === "right" && (
        <Image
          src={imgsrc}
          alt="icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;
