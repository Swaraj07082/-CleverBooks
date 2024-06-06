import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "../../public/_expert 1-p-500.png";
import image2 from "../../public/_Focus on KPIs that matter.svg";
import Image from "next/image";
import image3 from "../../public/_Ease of use.svg";
import image4 from "../../public/_Purpose-built & ever-improving tech.svg";

export function CarouselDemo() {
  return (
    <Carousel className=" w-[75%] ">
      <CarouselContent>
        <CarouselItem>
          <div>
            <Card className=" h-[550px]">
              <CardContent className="flex justify-center items-center mt-16 ml-5 ">
                <Image
                  src={image1}
                  height={1000}
                  width={1000}
                  alt="dw"
                  className="flex-1"
                />
                <div className="flex-1 pl-12 w-fit">
                  <p className=" text-[35px] font-semibold mb-5">
                    Deep domain expertise
                  </p>
                  <p>
                    Our team members have years of experience leading supply{" "}
                    <br />
                    chains for businesses ranging from $10M to $10B.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div>
            <Card className=" h-[550px]">
              <CardContent className="flex justify-center items-center mt-16 ml-5 ">
                <Image
                  src={image2}
                  height={1000}
                  width={1000}
                  alt="dw"
                  className="flex-1"
                />
                <div className="flex-1 pl-12 w-fit">
                  <p className=" text-[35px] font-semibold mb-5">
                    A focus on KPIs that matter
                  </p>
                  <p>
                    Our tools help you make decisions to grow your business.
                    Everything works towards improving cash flow and product
                    availability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div>
            <Card className=" h-[550px]">
              <CardContent className="flex justify-center items-center mt-16 ml-5 ">
                <Image
                  src={image3}
                  height={1000}
                  width={1000}
                  alt="dw"
                  className="flex-1"
                />
                <div className="flex-1 pl-12 w-fit">
                  <p className=" text-[35px] font-semibold mb-5">
                    Ease of use , for everyone
                  </p>
                  <p>
                    With an intuitive interface and empathetic design, Crest
                    requires only minimal training (or beginner-level knowledge
                    of supply chain) to use.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div>
            <Card className=" h-[550px]">
              <CardContent className="flex justify-center items-center mt-16 ml-5 ">
                <Image
                  src={image4}
                  height={1000}
                  width={1000}
                  alt="dw"
                  className="flex-1"
                />
                <div className="flex-1 pl-12 w-fit">
                  <p className=" text-[35px] font-semibold mb-5">
                    Purpose-built and ever-imporving tech
                  </p>
                  <p>
                    Our demand forecasting engine has been meticulously-built,
                    while our ML engine constantly trains on years of data and
                    is ever-evolving.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}