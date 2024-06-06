import React from "react";
import ME from "@/assets/ME.png"; // Replace with your actual image path
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  FaInstagram,
  FaBasketballBall,
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-center justify-between p-6 md:p-12 md:mt-20">
      <div className="flex-1 text-center md:text-left md:pr-12 mb-10">
        <h1 className="text-4xl md:text-6xl font-bold md:mb-10 text-gray-800 mb-4">
          Hello, I&apos;m
          <br />
          Hamid Eghbali
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          I&apos;m a Freelance UI/UX Designer and Developer based in Toronto, Canada.
          I strive to build immersive and beautiful web applications through
          carefully crafted code and user-centric design.
        </p>
        <Button className="bg-purple-600 text-white hover:bg-purple-500 px-6 py-3 rounded-[5px] ">
          <Link href="/Hamid-res.pdf" target="_blank" rel="noopener noreferrer">
            My CV / Resume
          </Link>
        </Button>
        <div className="flex items-center justify-around md:justify-start md:gap-16 gap-4 bg-white  h-[80px] rounded-[10px] md:mt-16 lg:mt-40 xl:mt-80 mt-10 md:h-[110px] md:px-10 ">
          <Link
            href="https://linkedin.com/in/hamid-egh"
            className="text-purple-600 text-3xl hover:text-purple-500 fonts scale-125"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link href="https://wa.me/4374990651" target="_blank">
            <FaWhatsapp className="text-purple-600 text-3xl hover:text-purple-500" />
          </Link>
          <Link href="https://github.com/hamideghbali" target="_blank">
            <FaGithub className="text-purple-600 text-3xl hover:text-purple-500" />
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end mb-6 md:mb-0 ">
        <Image src={ME} alt="ME" className="rounded-[5px] shadow-2xl" />
      </div>
    </div>
  );
};

export default Hero;
