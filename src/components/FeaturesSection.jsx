"use client";

import {
  Search,
  Bookmark,
  TrendingUp,
  FileText,
  MousePointerClick,
  Hexagon,
  Building2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Search,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: TrendingUp,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: Building2,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: Bookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: Sparkles,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Hexagon,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: MousePointerClick,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-center mb-10">
          <div className=" px-10 py-2 text-center">
            <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-zinc-500">
              <span className="w-2 h-2 bg-violet-500" />
              Features Job
              <span className="w-2 h-2 bg-violet-500" />
            </div>

            <h2 className="text-white text-4xl md:text-6xl font-semibold leading-tight mt-4">
              Everything you need
              <br />
              to succeed
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className=" p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="flex items-start gap-5">
                  {/* Icon Box */}
                  <div className="shrink-0 w-20 h-20 rounded-xl border border-white/10 bg-[#0a0a0f] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-fuchsia-300" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-white text-xl font-medium">
                      {feature.title}
                    </h3>

                    <p className="text-zinc-500 text-base leading-relaxed mt-3">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
