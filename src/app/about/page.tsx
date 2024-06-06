import React from "react";
import Image from "next/image";
import HE from "@/assets/HEicon.png"; // Replace with your actual image path

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-6 md:mb-0 md:mr-6">
            <Image
              src={HE}
              alt="Profile Picture"
              className="rounded-full shadow-lg"
              width={300}
              height={300}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Hi, I'm Hamid Eghbali, a passionate self-taught web developer and UI/UX designer based in Toronto, Canada. With a deep love for creating beautiful and functional web applications, I strive to deliver the best user experiences through thoughtful design and code.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              As a self-taught developer, I have dedicated myself to learning and mastering various aspects of web development and design. My journey has equipped me with skills in crafting intuitive user interfaces and building robust web applications. My goal is to continuously learn and improve, always staying ahead of the latest trends and technologies.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              When I'm not working on projects, you can find me exploring the outdoors, reading books, playing soccer, or working out for muscle. I'm always open to new opportunities and collaborations, so feel free to reach out and say hello!
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">Creating user-friendly interfaces</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend Development</h3>
              <p className="text-gray-600">Building responsive web applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Backend Development</h3>
              <p className="text-gray-600">Developing server-side logic and databases</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">JavaScript</h3>
              <p className="text-gray-600">Proficient in modern JavaScript frameworks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">React</h3>
              <p className="text-gray-600">Expertise in building React applications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Node.js</h3>
              <p className="text-gray-600">Experience with server-side JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
