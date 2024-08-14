import React from "react";
import Link from "next/link";
import CustomSlider from "@/components/Slide/CustomSlider";
import First from "@/assets/homeRental/image.png";
import Second from "@/assets/homeRental/image-1.png";
import Third from "@/assets/homeRental/image-2.png";
import Tie1 from "@/assets/tieProject/image.png";
import Tie2 from "@/assets/tieProject/image2.png";
import { StaticImageData } from "next/image";
import Cab from "@/assets/cabBeck/image.png";
import Cab1 from "@/assets/cabBeck/image1.png";
import Cab2 from "@/assets/cabBeck/image2.png";
import Cab3 from "@/assets/cabBeck/image3.png";
import juice from "@/assets/juice-recipes/image.png";
import juice1 from "@/assets/juice-recipes/image1.png";
import juice2 from "@/assets/juice-recipes/image2.png";
import cabHub from "@/assets/cabHub/image.png";
import cabHub1 from "@/assets/cabHub/image1.png";
import cabHub2 from "@/assets/cabHub/image2.png";
import cabHub3 from "@/assets/cabHub/image3.png";
import blog from "@/assets/blog/image.png";
import note from "@/assets/note/image.png";
import kebab from "@/assets/kebab/image.png";
import kebab1 from "@/assets/kebab/image1.png";
import kebab2 from "@/assets/kebab/image2.png";
import Country from "@/assets/countries/image.png";
import Country1 from "@/assets/countries/image1.png";
import HE from "@/assets/HEicon.png";

interface Project {
  title: string;
  description: string;
  slug: string;
  link: string;
  images: StaticImageData[];
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Rest Countries",
      description:
        "A project showcasing country information using the REST Countries API.",
      slug: "rest-countries",
      link: "https://country-lrd3u5mak-hardin.vercel.app/", // Update to Vercel URL
      images: [Country, Country1],
    },

    {
      title: "Home Rentals",
      description: "A platform for finding and renting homes.",
      slug: "home-rentals",
      link: "https://github.com/hamideghbali/hamidrental",
      images: [First, Second, Third],
    },
    {
      title: "Cab Hub",
      description: "A hub for all cab services and management.",
      slug: "cab-hub",
      link: "https://github.com/hamideghbali/cab-hub",
      images: [cabHub, cabHub1, cabHub2, cabHub3],
    },
    {
      title: "Kebab Store ",
      description: "A simple and effective note-taking application.",
      slug: "kebab-store",
      link: "https://github.com/hamideghbali/kebeb-store",
      images: [kebab, kebab1, kebab2],
    },
    {
      title: "Tie Project",
      description: "An innovative project management tool.",
      slug: "tie-project",
      link: "https://github.com/hamideghbali/hamid_tie",
      images: [Tie1, Tie2],
    },
    {
      title: "Cab Taxi",
      description: "A taxi booking service with real-time tracking.",
      slug: "cab-taxi",
      link: "https://github.com/hamideghbali/cab-taxi",
      images: [Cab, Cab1, Cab2, Cab3],
    },
    {
      title: "Blog Platform",
      description: "A customizable platform for writing and sharing blogs.",
      slug: "blog-platform",
      link: "https://github.com/hamideghbali/blog",
      images: [blog],
    },
    {
      title: "Juice Recipes",
      description: "A collection of delicious and healthy juice recipes.",
      slug: "juice-recipes",
      link: "https://github.com/hamideghbali/juice-recipes",
      images: [juice, juice1, juice2],
    },
    {
      title: "Note App",
      description: "A simple and effective note-taking application.",
      slug: "note-app",
      link: "https://github.com/hamideghbali/note",
      images: [note],
    },
    {
      title: "Coding Problems",
      description: "A simple and effective note-taking application.",
      slug: "coding-problems",
      link: "https://github.com/hamideghbali/coding-problem",
      images: [HE],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-full h-72 mb-4">
                <CustomSlider images={project.images} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
                <Link href={project.link} target="_blank">
                  <span className="cursor-pointer hover:text-purple-600">
                    {project.title}
                  </span>
                </Link>
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link href={project.link} target="_blank">
                <span className="text-purple-600 cursor-pointer hover:underline">
                  View Source Code
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
