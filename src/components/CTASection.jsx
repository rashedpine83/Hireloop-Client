"use client";

import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export default function CareerCTASection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: "url('/images/cta-bg.png')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Glow Effect */}
        <div className="absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-[#5C53FE] blur-[140px] " />
        {/* Heading */}
        <h2 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
          Your next role is
          <br />
          already looking for you
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-sm text-zinc-400 md:text-base">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            radius="lg"
            endContent={<ArrowRight size={16} />}
            className="bg-white px-6 text-black font-medium transition-all duration-300 hover:scale-105"
          >
            Create a free account
          </Button>

          <Button
            size="lg"
            radius="lg"
            variant="bordered"
            className="border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
