import React from "react";
import HE from "@/assets/HEwhite.png";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import First from "@/assets/image.png";
import Second from "@/assets/image-1.png";
import Third from "@/assets/image-2.png";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Link href="/" className="flex items-center mb-4">
            <Image src={HE} alt="HE" className="w-11 h-11 mr-3 text-white" />
            <span className="text-2xl font-bold">HAMID EGHBALI</span>
          </Link>
          <p className="text-gray-400 text-center md:text-left">
            Freelance UI/UX Designer and Developer based in Toronto, Canada. I
            strive to build immersive and beautiful web applications through
            carefully crafted code and user-centric design.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:px-4">
          <h2 className="text-lg font-bold mb-2">Contact</h2>
          <div className="flex space-x-4">
            <Link
              href="mailto:hardinegh@gmail.com"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <FaEnvelope className="w-6 h-6" />
            </Link>
            <Link
              href="//linkedin.com/in/hamid-egh"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com/hamideghbali"
              className="text-gray-400 hover:text-white"
              target="_blank"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-400 hover:text-white">
              Portfolio
            </Link>
            <Link
              href="/Hamid-res.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              My CV / Resume
            </Link>
          </nav>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Hamid Eghbali. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/" className="text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
