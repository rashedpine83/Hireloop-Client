"use client";

import { Card } from "@heroui/react";

import { ArrowRight, BriefcaseBusiness, CircleDollarSign } from "lucide-react";

import { FaLocationDot } from "react-icons/fa6";

const jobs = [
  {
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "UI/UX Designer",
    description:
      "Design engaging experiences and craft beautiful user interfaces for products.",
    location: "California, USA",
    type: "Remote",
    salary: "€30–€50/hour",
  },
  {
    title: "Backend Developer",
    description:
      "Build scalable APIs and optimize application performance for enterprise systems.",
    location: "Berlin, Germany",
    type: "Hybrid",
    salary: "€35–€60/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "UI/UX Designer",
    description:
      "Design engaging experiences and craft beautiful user interfaces for products.",
    location: "California, USA",
    type: "Remote",
    salary: "€30–€50/hour",
  },
  {
    title: "Backend Developer",
    description:
      "Build scalable APIs and optimize application performance for enterprise systems.",
    location: "Berlin, Germany",
    type: "Hybrid",
    salary: "€35–€60/hour",
  },
];

export default function JobCards() {
  return (
    <section className="bg-black min-h-screen py-20 px-4">
      <div className="flex justify-center mb-20">
        <div className=" px-10 py-6 text-center">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-zinc-500">
            <span className="w-2 h-2 bg-violet-500" />
            Smart job discovery
            <span className="w-2 h-2 bg-violet-500" />
          </div>

          <h2 className="text-white text-4xl md:text-6xl font-semibold leading-tight mt-4">
            The roles you'd never
            <br />
            find by searching
          </h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <Card
            key={index}
            radius="lg"
            shadow="none"
            className="relative overflow-hidden bg-[#0c0c10] border border-white/5 rounded-[2rem] p-6 md:p-8 min-h-[360px]"
          >
            {/* CONTENT */}
            <div className="flex flex-col h-full">
              {/* TITLE */}
              <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
                {job.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-zinc-500 text-lg leading-relaxed mt-5">
                {job.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-3 mt-8">
                {/* LOCATION */}
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-fuchsia-300/20">
                    <FaLocationDot className="text-fuchsia-300 text-[10px]" />
                  </div>

                  <span className="text-white text-sm">{job.location}</span>
                </div>

                {/* TYPE */}
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-fuchsia-300/20">
                    <BriefcaseBusiness className="text-fuchsia-300 w-3 h-3" />
                  </div>

                  <span className="text-white text-sm">{job.type}</span>
                </div>

                {/* SALARY */}
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-fuchsia-300/20">
                    <CircleDollarSign className="text-fuchsia-300 w-3 h-3" />
                  </div>

                  <span className="text-white text-sm">{job.salary}</span>
                </div>
              </div>

              {/* APPLY */}
              <button className="group flex items-center gap-2 text-white text-xl font-medium mt-auto pt-16 hover:text-fuchsia-300 transition">
                Apply Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
