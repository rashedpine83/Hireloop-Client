"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { signOut, useSession } from "../lib/auth-client";
import { Button } from "@heroui/react";

import Image from "next/image";

const navLinks = [
  { name: "Browse Jobs", href: "/jobs" },
  { name: "Companies", href: "/companies" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = useSession();

  const user = session?.user;

  const handleSignout = async () => {
    await signOut();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0B12]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* LEFT SIDE - LOGO */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <div className="leading-none">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto hidden items-center gap-8 lg:flex">
          {/* NAV LINKS */}
          <ul className="flex items-center gap-8 rounded-full border border-white/10 bg-white/5 px-8 py-3 backdrop-blur-md">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 transition hover:text-violet-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* VERTICAL DIVIDER */}
          <div className="h-8 w-px bg-white/10" />

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <p className="text-sm font-medium text-zinc-200">
                  Hi, <span className="text-violet-400">{user.name}</span>
                </p>

                <Button
                  onClick={handleSignout}
                  variant="ghost"
                  className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 transition hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="text-sm font-medium text-zinc-300 transition hover:text-violet-400"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="space-y-4 border-t border-white/10 bg-[#0B0B12]/95 px-4 py-6 backdrop-blur-xl">
          {/* MOBILE LINKS */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-violet-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE ACTIONS */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                className="flex h-12 items-center justify-center rounded-xl bg-white text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM GLOW LINE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 lg:block" />
    </nav>
  );
}
