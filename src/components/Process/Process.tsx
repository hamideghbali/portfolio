import React from "react";
import { FaBook, FaPen, FaChartBar, FaLaptop } from "react-icons/fa";

export const Process = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-gray-100 md:mt-20">
      <div className="flex-1 flex justify-center md:justify-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10">
          <div className="bg-white flex flex-col text-gray-800 p-12 rounded-[10px]">
            <FaBook className="text-[50px] text-white bg-purple-500 p-3 mb-5 rounded-[3px]" />
            <h1 className="font-bold mb-3">1. Research</h1>
            <p className="text-gray-800 text-sm tracking-[2px]">
              I start by learning everything I can about the project. This helps me understand what you need and how to make it happen.
            </p>
          </div>
          <div className="bg-white flex flex-col text-gray-800 p-12 rounded-[10px]">
            <FaChartBar className="text-[50px] text-white bg-purple-400 p-3 mb-5 rounded-[3px]" />
            <h1 className="font-bold mb-3">2. Analyze</h1>
            <p className="text-gray-800 text-sm tracking-[2px]">
              Next, I look at all the information to find the best way to achieve your goals. This step helps me plan the project effectively.
            </p>
          </div>
          <div className="bg-white flex flex-col text-gray-800 p-12 rounded-[10px]">
            <FaPen className="text-[50px] text-white bg-purple-400 p-3 mb-5 rounded-[3px]" />
            <h1 className="font-bold mb-3">3. Design</h1>
            <p className="text-gray-800 text-sm tracking-[2px]">
              Then, I create designs that look great and work well. I make sure they match your vision and are easy for users to use.
            </p>
          </div>
          <div className="bg-white flex flex-col text-gray-800 p-12 rounded-[10px]">
            <FaLaptop className="text-[50px] text-white bg-purple-400 p-3 mb-5 rounded-[3px]" />
            <h1 className="font-bold mb-3">4. Launch</h1>
            <p className="text-gray-800 text-sm tracking-[2px]">
              Finally, I launch the project and make sure everything goes smoothly. I&apos;m here to help with any issues that come up.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center md:pl-4">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold mt-8 md:mt-0">Work Process</h1>
          <p className="text-lg md:text-xl text-gray-600 py-5">
            My work process is simple and effective. I focus on research, analysis, design, and launch to make sure your project is a success.
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            I keep you updated every step of the way and value your feedback to ensure the final product meets your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};
