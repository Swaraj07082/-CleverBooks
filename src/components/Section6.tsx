"use client";
import React from "react";
import { Carousel } from "./ui/carousel";
import { CarouselDemo } from "./Carousel";

export default function Section6() {
  return (
    <div className=" bg-[#f2f2f2] flex flex-col justify-center items-center pb-40">
      <div className="text-[44px] pt-28 font-bold flex justify-center items-center mb-10">
        Get Crest and get...
      </div>

      <CarouselDemo />
    </div>
  );
}
