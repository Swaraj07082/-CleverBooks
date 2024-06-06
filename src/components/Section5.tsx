import Image from "next/image";
import React from "react";
import image from "../../public/_Demand forecasting-p-800.webp";
import { Button } from "./ui/button";

export default function Section5() {
  return (
    <>
      <h1 className="text-center text-[44px] font-bold ">
        Things your spreadsheet wishes it could do
      </h1>
      <div className="flex ">
        <div className=" flex-[0.8] pl-32 pt-32 ">
          <p className=" text-[28px] text-gradient font-semibold">
            Accurate Demand Forecasting
          </p>
          <p className=" mt-4 leading-7">
            Dynamically predict future demand across all channels, with high{" "}
            <br /> accuracy and lowest granularity. Crest takes into account
            what <br />
            traditional forecasts do not: trends, real-time market signals,{" "}
            <br /> promotional activities, and even logistics disruptions.{" "}
          </p>
          <p className=" mt-5 mb-11 text-gradient">Learn more</p>
          <div className=" flex gap-y-6 flex-col">
            <hr className=" w-[80%]" />

            <h1 className="text-[28px] font-semibold">
              HELIX: Workflow Automation
            </h1>
            <hr className=" w-[80%]"/>
            <h1 className="text-[28px] font-semibold">
              Automated Purchase Planning
            </h1>
            <hr className=" w-[80%]"/>
            <h1 className="text-[28px] font-semibold">
              Automated Distribution Planning
            </h1>
            <hr className=" w-[80%]"/>
            <h1 className="text-[28px] font-semibold">Easy Integration</h1>
            <hr className=" w-[80%]"/>
            <h1 className="text-[28px] font-semibold">Custom Dashboards</h1>
            <hr className=" w-[80%]"/>
            <h1 className="text-[28px] font-semibold">Consensurs Planning</h1>
            <hr className=" w-[80%]"/>
          </div>
        </div>
        <div className="  flex-1 mt-32  h-[50.5rem] w-24 flex items-center justify-center bg-gradient-left  rounded-3xl">
          <Image src={image} height={395} width={720} alt="dwed" />
        </div>
      </div>
<div className=" flex justify-center items-center my-24 ">

      <Button className=" bg-transparent p-5 text-gradient border-gradient rounded-xl">View all features</Button>
</div>
    </>
  );
}
