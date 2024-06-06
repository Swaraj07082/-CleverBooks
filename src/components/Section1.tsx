import React from "react";
import HeroImage from "../../public/Hero Image.svg";
import Image from "next/image";
import pointingtext from "../../public/_hero-home-cta right to left.svg";
import { Button } from "./ui/button";

export default function Section1() {
  return (
    <div className="bg-[#151218] flex h-[900px] w-screen slanting-div">
      {/* <Image src={HeroImage} height={300} width={300} alt="dwef"/> */}

      <div className="flex flex-col flex-1 pl-24 py-28  pr-20">
        <div className="text-[69px] font-semibold leading-[95px] text-white">
          Every order <br></br> fulfilled,
          <span className=" pl-1 text-gradient">on time.</span>
        </div>

        <div className="text-[18px] font-medium my-5 text-white">
          Eliminate overstocking and under-stocking with Crest. Built by
          supply-chain experts, <br></br> it brings the same technology used by
          large global brands to power fast-growing <br></br>startups. In short,
          we make supply meet demand, and then help you grow both.
        </div>

        <div className="flex mt-8">
          <Button className="text-[16px] p-6  solid border-[3px]  bg-transparent text-gradient border-gradient rounded-3xl">
            Get started with CleverBooks
          </Button>
          <Image
            src={pointingtext}
            height={200}
            width={200}
            alt="ef"
            className=" mt-[18px] ml-4"
          />
        </div>
      </div>

      <Image
        className=" flex-[0.80] bg-gradient-left "
        src={HeroImage}
        height={200}
        width={200}
        alt="dwef"
      />
    </div>
  );
}
