import Image from "next/image";
import React from "react";
import samosaparty from "../../public/_samosa party image.jpg";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import samosa from "../../public/_samosa.svg";

export default function Section4() {
  return (
    <div className="flex px-[63px] mb-40">
      <div className=" flex flex-col gap-y-14 mr-[120px] ">
        <div className=" text-[18px] leading-8">
          D2C brands face issues with supply chain management and high growth
          startups are not equipped to <br /> run their demand forecast
          manually. Crest automates all the workflows and helps brands predict
          high <br />
          demand periods and be ready to cater to customer demands. It has a
          direct impact on the revenue <br /> readiness of a company and that is
          the value we see Crest unlocking for many companies in the <br />{" "}
          future. Rahul and team have built a robust product with years of their
          experience distilled into the <br /> workflows.
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className=" h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <div className=" ml-4">
              <p className=" text-[20px]"> Swaraj Mali </p>
              <p className="text-[15px]">Co-founder , Samosa Party</p>
            </div>
          </div>

          <Image src={samosa} height={100} width={100} alt="ef" className="" />
        </div>

        <div className="flex mt-24 gap-x-12">
          <div className=" bg-[#f1e9fc] w-60 h-32 rounded-[20px] flex-1 flex items-center justify-center p-7 flex-col">
            <p className="text-[44px] font-semibold text-gradient">upto 95%</p>
            <p className="text-[18px]">Demand fulfilment</p>
          </div>
          <div className=" bg-[#f1e9fc] w-60  h-32 rounded-[20px] flex-1 flex items-center justify-center p-7 flex-col">
            <p className="text-[44px] font-semibold  text-gradient"> 3% </p>
            <p className="text-[18px]">Daily Stock-out</p>
          </div>
          <Button className=" w-60 h-32 text-[18px] flex items-center justify-center rounded-[20px] flex-1 bg-transparent solid border-gradient border-2 text-gradient">
            Read story
          </Button>
          {/* 
          <div></div>
          <Button></Button> */}
        </div>
      </div>

      <div className=" solid border-gradient border-2 w-fit rounded-3xl">
        <Image
          src={samosaparty}
          height={572}
          width={400}
          alt="dwer"
          className=" rounded-3xl"
        />
      </div>
    </div>
  );
}
