import React from "react";
import whattoOrder from "../../public/_what to orderr.svg";
import whentoorder from "../../public/_when to orderr.svg";
import howmuchtostock from "../../public/_how much to stock.svg";
import wheretoplace from "../../public/_where to placee.svg";
import Image from "next/image";

export default function Section2() {
  return (
    <div className=" flex flex-col justify-evenly items-center">
      <div className=" text-[44px] font-bold my-24 ">
        {" "}
        Four key questions answered by CleverBooks
      </div>

      <div className="grid grid-cols-4 gap-x-10 mb-24 max-L:grid-cols-2 max-L:gap-y-5 ">
      {/* <div className="flex  gap-x-10 mb-24"> */}

        <div className=" bg-[#f1e9fc] gap-y-5 h-[328px] w-80  rounded-[20px] flex flex-col pl-6 pt-6">
          <Image src={whattoOrder} height={56} width={56} alt="erf" />
          <div className="text-[25px] font-semibold">What to Order</div>
          <div>
            Get accurate demand and days to  <br />stock out. Automate purchase <br />
            planning so you can always have <br />what you need for your next sales <br />
            cycle.
          </div>
        </div>

        <div className=" bg-[#f1e9fc] gap-y-5 h-[328px] w-80  rounded-[20px] flex flex-col pl-6 pt-6">
          <Image src={whentoorder} height={56} width={56} alt="erf" />
          <div className=" text-[25px] font-semibold">When to Order</div>
          <div>
            Have up-to-date inventory,<br /> storage, sales velocity, and <br /> demand. Get
            timely order <br /> suggestions so you are never left <br /> guessing.
          </div>
        </div>

        <div className=" bg-[#f1e9fc] gap-y-5 h-[328px] w-80  rounded-[20px] flex flex-col pl-6 pt-8">
          <Image src={howmuchtostock} height={56} width={56} alt="erf" />
          <div className="text-[25px] font-semibold">How much to stock</div>
          <div>
            Get inventory requirements for <br /> every node, for  every SKU. So you <br />
            avoid out-of-stock situations, even <br /> during demand spikes.
          </div>
        </div>

        <div className=" bg-[#f1e9fc] gap-y-5 h-[328px] w-80  rounded-[20px] flex flex-col pl-6 pt-6">
          <Image src={wheretoplace} height={56} width={56} alt="erf" />
          <div className="text-[25px] font-semibold">Where to place</div>
          <div className="">
            Our tool suggests how to move <br /> stock within your supply chain. So <br /> you
            will always have products <br /> available across cities.
          </div>
        </div>
      </div>
    </div>
  );
}
