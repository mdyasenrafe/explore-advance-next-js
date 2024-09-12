import Image from "next/image";
import React from "react";
import testImage from "@/assets/image.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "gallery",
  description: "This is gallery page",
};

const page = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-4">This is gallery page</h1>
      <Image
        src={testImage}
        width={230}
        height={230}
        className="mx-auto"
        alt=""
      />
    </div>
  );
};

export default page;
