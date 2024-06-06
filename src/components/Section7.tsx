import Image from "next/image";
import React from "react";
import FounderPhoto from "../../public/_Founders Photo-p-800.webp";
import { Button } from "./ui/button";

export default function Section7() {
  return (
    <div className=" pt-36 flex flex-1">
      <div className=" pl-36">
        <Image src={FounderPhoto} height={500} width={600} alt="ef" className=" rounded-3xl"/>
        <div className=" h-28 w-[404px] bg-[#f1e9fc] relative left-80 z-10 bottom-16 rounded-2xl text-[16px] font-medium p-8">Rahul Vishwakarma, Akhil Kumar & Yogesh Byahatti - Founders</div>
      </div>

      <div className=" flex-1 flex flex-col gap-y-8 p-40">
        <p className=" text-[44px] font-bold">From the founders</p>
        <p>
          We are a young company solving an age-old problem: Supply Chain. Our
          goal is <br /> simple: to eradicate stock outs for businesses that
          want to grow faster. Our <br /> background, tech expertise, and
          empathy allow us to do just that.{" "}
        </p>
        <p>
          Thank you for checking out Crest, and we hope to help you always be in
          stock!
        </p>
        <Button className=" border-gradient bg-transparent w-[100px] h-11 text-gradient p-5">
          Learn more
        </Button>
      </div>
    </div>
  );
}
