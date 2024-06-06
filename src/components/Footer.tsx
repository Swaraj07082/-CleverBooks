import React from "react";
import { Button } from "./ui/button";
import logo from "../../public/CleverBooks.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className=" bg-[#151218] h-fit pt-32 ">
      <div className=" bg-[#f1e9fc] flex  rounded-3xl justify-center flex-col gap-y-9 items-center  h-[490px] w-[1280px] ml-28 mr-28 max-L:w-[864px] max-L:ml-72">
        <p className=" text-[55px] font-semibold max-L:text-[30px]">
          You can grow faster than you think!
        </p>
        <p className=" px-64 text-center">
          Plan with Crest to fulfil your demand today, and dreams tomorrow. We
          bring the methods and technologies of large global companies to help
          brands of all sizes scale.
        </p>
        <Button className=" w-52 h-12 rounded-3xl">
          Get started with Crest
        </Button>
      </div>

      <div className=" flex ">
        <div className=" flex flex-col gap-y-10 text-left py-52 pl-28 ">
          <Image src={logo} height={100} width={225} alt="d" />

          <p className=" text-white leading-8">
            Crest is an AI-powered supply chain software that provides companies
            tools for demand forecasting, inventory planning and more .This
            helps them have the right amount of stock, optimise space and fulfil
            every order.
          </p>
        </div>

        <div className=" text-white flex py-52 px-48  gap-x-40">
          <ul className="flex flex-col gap-y-4">
            <li>Explore</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Customer Stories</li>
            <li>Career</li>
          </ul>

          <ul className="flex flex-col gap-y-4">
            <li>Learn</li>
            <li>About us</li>
            <li>Blog</li>
          </ul>

          <ul className="flex  flex-col gap-y-4">
            <li>Contact Crest </li>
            <li>sales@getcrest.ai</li>
            <li>
              Registered Office: 1507, Incubex, 11th cross road, 19th Main Road,
              Bengaluru, India. 560102
            </li>
            <li>
              Corporate Office: 291, All Time Space, 4th Floor, 15th A Cross,
              Sector - 6, HSR Layout, Bengaluru, India. 560102
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
