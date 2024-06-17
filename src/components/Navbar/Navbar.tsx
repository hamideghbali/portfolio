import React from "react";
import HE from "@/assets/HEicon.png";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 px-4 sm:px-10 md:pr-24 mt-6">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src={HE}
            alt="HE"
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
          />
        </Link>
        <Link href="/">
          <span className="text-purple-800 font-bold">HAMID EGHBALI</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <div className="sm:hidden flex items-center">
                <button>
                  <RiMenu3Line className="text-xl ml-2" />
                </button>
              </div>
            </SheetTrigger>
            <SheetContent side={side} className="bg-white ">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4">
                <Button className="hover:bg-gray-200 rounded-[6px]">
                  <Link href="/about">About</Link>
                </Button>
                <Button className="hover:bg-gray-200 rounded-[6px]">
                  <Link href="/portfolio">Portfolio</Link>
                </Button>
                <Button className="bg-purple-600 rounded-[6px] text-white hover:bg-purple-500">
                  <Link
                    href="/Hamid-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My CV / Resume
                  </Link>
                </Button>
              </div>
              <SheetFooter className="flex items-center mt-96 ">
                <Link href="/">
                  <Image src={HE} alt="HE" className="w-[150px]" />
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
      <div className="hidden sm:flex items-center sm:justify-end ">
        <div className="flex gap-6 md:gap-12">
          <Button>
            <Link href="/about" className="hover:bg-gray-200 rounded-[6px] p-3">
              About
            </Link>
          </Button>
          <Button>
            <Link
              href="/portfolio"
              className="hover:bg-gray-200 rounded-[6px] p-3"
            >
              Portfolio
            </Link>
          </Button>
          <Button>
            <Link
              href="/Hamid-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 rounded-[6px] text-white hover:bg-purple-500 p-3"
            >
              My CV / Resume
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
