import Image from "next/image";
import React from "react";
import AWS from "@/assets/AWS.png";
import { Button } from "../ui/button";
import Link from "next/link";

export const Aws = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-gradient-to-r from-purple-50 via-white to-purple-50 rounded-lg">
      {/* Image Section */}
      <div className="flex-1 flex justify-center md:justify-start mb-10 mt-14 md:mb-0 order-2 md:order-1 md:pr-10">
        <div className="relative w-full max-w-[700px] md:max-w-[900px]">
          <Image
            src={AWS}
            alt="Project Thumbnail"
            className="rounded-[5px]"
            layout="intrinsic"
            width={600}
            height={800}
          />
        </div>
      </div>
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left order-1 md:order-2">
        <h2 className="text-4xl md:text-5xl font-bold md:mb-10 text-gray-800 mb-4">
          AWS Certified Fullstack Cloud Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          I'm proud to hold an AWS Cloud Practitioner Certification, which
          validates my skills in leveraging AWS cloud services to design, build,
          and deploy scalable applications. Explore my projects to see AWS tools
          like Lambda, DynamoDB, and Amplify in action!
        </p>
        <Button className="bg-purple-600 text-white hover:bg-purple-500 px-6 py-3 rounded-[5px]">
          <Link href="https://www.credly.com/badges/52287bfc-13e9-4a69-a32c-a00b0360da3f/public_url" target="_blank">
            View My Certificate
          </Link>
        </Button>
      </div>
    </div>
  );
};
