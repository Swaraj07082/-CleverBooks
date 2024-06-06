'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CleverBooksLogo from "../../public/CleverBooks.png";
import { Button } from "@/components/ui/button";

export default function Navbar() {   
  return(   
    <div className='pt-4 pb-4 bg-[#151218]'>
      <div className="flex justify-around ">
        {/* <div>CleverBooks</div> */}
        <Image src={CleverBooksLogo} height={5} width={250} alt="dwedf" />

        <div className=" mt-4">
          <ul className="flex gap-x-7 text-white font-medium">
            <li className=" text-[15px] hover:text-[#fc907e]">
              <Link href={"/"}>Product</Link>
            </li>
            <li className=" text-[15px] hover:text-[#fc907e]">
              <Link href={"/"}>Pricing</Link>
            </li>
            <li className=" text-[15px] hover:text-[#fc907e]">
              <Link href={"/"}>Industry</Link>
            </li>
            <li className=" text-[15px] hover:text-[#fc907e]">
              <Link href={"/"}>Customer Stories</Link>
            </li>
            <li className=" text-[15px] hover:text-[#fc907e]">
              <Link href={"/"}>About</Link>
            </li>
            <li className=" text-[15px] hover:text-[#fc907e]">
              <Link href={"/"}>Blog</Link>
            </li>
          </ul>
        </div>

        <div className="text-gradient bg-clip-text flex items-center gap-x-7 text-white font-medium">
          <div className=" text-[15px] hover:text-white">Login</div>
          <Button className=" py-6 px-6 rounded-full bg-gradient-to-tr from-red-400 to-indigo-600 hover:text-black">Talk to Us</Button>
        </div>
      </div>
    </div>
  );
}
