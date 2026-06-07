"use client";

import { useState } from "react";
import { ArrowRight, Check, BarChart3, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 0,
    icon: Crown,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    price: 17,
    icon: BarChart3,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Premium",
    price: 99,
    icon: Zap,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState("Growth");

  return (
    <section className="bg-black py-24 px-4 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-1 w-1 rounded-full bg-blue-500" />
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Pricing
            </p>
            <span className="h-1 w-1 rounded-full bg-blue-500" />
          </div>

          <h2 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isActive = selectedPlan === plan.name;

            return (
              <div
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`
                  group cursor-pointer rounded-3xl border p-6
                  transition-all duration-500 ease-out

                  hover:-translate-y-3
                  hover:shadow-[0_20px_60px_rgba(255,255,255,0.08)]

                  ${
                    isActive
                      ? "border-white bg-white text-black shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
                      : "border-zinc-800 bg-[#070707] text-white"
                  }
                `}
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                        flex h-10 w-10 items-center justify-center rounded-xl
                        transition-all duration-300

                        ${
                          isActive
                            ? "bg-black text-white"
                            : "bg-zinc-900 border border-zinc-700"
                        }
                      `}
                    >
                      <Icon size={18} />
                    </div>

                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                  </div>

                  <div>
                    <span className="text-4xl font-bold">${plan.price}</span>

                    <span
                      className={`text-sm ${
                        isActive ? "text-black/60" : "text-zinc-500"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`mt-8 text-sm ${
                    isActive ? "text-black/70" : "text-zinc-400"
                  }`}
                >
                  Start building your insights hub:
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div
                        className={`
                          flex h-5 w-5 items-center justify-center rounded-md

                          ${
                            isActive
                              ? "bg-black text-white"
                              : "bg-zinc-800 text-white"
                          }
                        `}
                      >
                        <Check size={12} />
                      </div>

                      <span
                        className={isActive ? "text-black" : "text-zinc-300"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`
                    mt-10 flex w-full items-center justify-between
                    rounded-xl px-5 py-3 text-sm font-medium

                    transition-all duration-300

                    ${
                      isActive
                        ? "bg-black text-white hover:bg-zinc-800"
                        : "bg-zinc-900 text-white hover:bg-white hover:text-black"
                    }
                  `}
                >
                  Choose This Plan
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
