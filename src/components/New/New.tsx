import React from "react";
import Image from "next/image";
import Link from "next/link";
import Country from "@/assets/countries/image2.png"; // Replace with your actual image path
import { Button } from "../ui/button";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";

export const New = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-gradient-to-r from-purple-50 via-white to-purple-50 rounded-lg my-8">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left order-1 md:order-1 md:pr-10 mb-10 mt-10 md:mt-0 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold md:mb-10 text-gray-800 mb-4">
          Check Out My New Project!
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          I recently developed a project integrating the REST Countries API.
          This project demonstrates my ability to create responsive and dynamic
          web applications using Next.js and Tailwind CSS.
        </p>
        <Button className="bg-purple-600 text-white hover:bg-purple-500 px-6 py-3 rounded-[5px]">
          <Link href="/portfolio">View Project</Link>
        </Button>

        {/* Tech Stack Badges */}
        <div className="flex items-center justify-around md:justify-start md:gap-16 gap-4 bg-white h-[80px] rounded-[10px] md:mt-16 lg:mt-28 xl:mt-48 mt-10 md:h-[110px] md:px-10">
          <Link
            href="https://nextjs.org/"
            className="text-purple-600 text-3xl hover:text-purple-500 scale-125"
            target="_blank"
          >
            <RiNextjsFill />
          </Link>
          <Link
            href="https://tailwindcss.com/"
            className="text-purple-600 text-3xl hover:text-purple-500"
            target="_blank"
          >
            <RiTailwindCssFill />
          </Link>
          <Link
            href="https://aws.amazon.com/"
            className="text-purple-600 text-3xl hover:text-purple-500"
            target="_blank"
          >
            <FaAws />
          </Link>
        </div>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex justify-center md:justify-start order-2 md:order-2">
        <div className="relative w-full max-w-[700px] md:max-w-[900px]">
          <Image
            src={Country}
            alt="Project Thumbnail"
            className="rounded-[5px] shadow-2xl"
            layout="intrinsic"
            width={700}
            height={900}
          />
        </div>
      </div>
    </div>
  );
};

export default New;
