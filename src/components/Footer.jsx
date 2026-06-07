"use client";

import { useState } from "react";
import Link from "next/link";
import { PinOffIcon } from "lucide-react";
import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";
import Image from "next/image";

const productLinks = ["Job discovery", "Worker AI", "Companies", "Salary data"];

const navigationLinks = ["Help center", "Career library", "Contact"];

const resourceLinks = ["Brand Guideline", "Newsroom"];

export default function Footer() {
  const [activeSocial, setActiveSocial] = useState("pinterest");

  const socialClass = (name) =>
    `flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 ${
      activeSocial === name
        ? "bg-violet-600 text-white"
        : "border border-white/10 bg-white/5 text-zinc-300 hover:-translate-y-1 hover:bg-violet-500 hover:text-white"
    }`;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,80,255,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center sm:items-start sm:col-span-2 lg:col-span-1">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xs text-sm leading-7 text-zinc-400">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-8 flex items-center justify-center gap-3 sm:justify-start">
              <Link
                href="#"
                onClick={() => setActiveSocial("facebook")}
                className={socialClass("facebook")}
              >
                <LogoFacebook size={18} />
              </Link>

              <Link
                href="#"
                onClick={() => setActiveSocial("pinterest")}
                className={socialClass("pinterest")}
              >
                <PinOffIcon size={18} />
              </Link>

              <Link
                href="#"
                onClick={() => setActiveSocial("linkedin")}
                className={socialClass("linkedin")}
              >
                <LogoLinkedin size={18} />
              </Link>
            </div>
          </div>

          {/* PRODUCT */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-violet-400">
              Product
            </h3>

            <ul className="space-y-4">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 transition hover:pl-1 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAVIGATIONS */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-violet-400">
              Navigations
            </h3>

            <ul className="space-y-4">
              {navigationLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 transition hover:pl-1 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-violet-400">
              Resources
            </h3>

            <ul className="space-y-4">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-zinc-400 transition hover:pl-1 hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-14 flex flex-col items-center gap-5 border-t border-white/10 pt-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm text-zinc-500">Copyright 2024 — Hire Loop</p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-500">
            <Link href="#" className="transition hover:text-white">
              Terms & Policy
            </Link>

            <span className="hidden text-white/20 sm:block">•</span>

            <Link href="#" className="transition hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
