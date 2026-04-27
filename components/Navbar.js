"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const pathname = usePathname();

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Active link logic
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // ✅ Style helper
  const navClass = (href) =>
    `transition-all duration-200 ease-in-out pb-1 ${
      isActive(href)
        ? "font-semibold text-black border-b-2 border-[#B87333]"
        : "text-gray-600 hover:text-black"
    }`;

  // ✅ Group active (for dropdown parent)
  const groupActive =
    pathname.startsWith("/about") ||
    pathname.startsWith("/people") ||
    pathname.startsWith("/opportunities") ||
    pathname.startsWith("/funding");

  return (
	  <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md">
	  <div className="w-full px-6 py-4 flex justify-between items-center">

        <Logo />

        <div className="flex items-center gap-8 text-sm font-medium text-white">

          <Link href="/" className={navClass("/")}>
            Home
          </Link>

          <Link href="/research" className={navClass("/research")}>
            Research
          </Link>

          <Link href="/publications" className={navClass("/publications")}>
            Publications
          </Link>

          {/* GROUP DROPDOWN */}
          <div ref={ref} className="relative">

            <button
              onClick={() => setOpen((prev) => !prev)}
              className={`flex items-center gap-1 pb-1 transition ${
                groupActive
                  ? "font-semibold text-black border-b-2 border-[#B87333]"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Group
              <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            <div
              className={`absolute left-0 mt-3 w-52 bg-white border rounded-xl shadow-lg transition-all duration-200 ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <Link href="/about" className="block px-5 py-3 hover:bg-gray-50">
                About
              </Link>
              <Link href="/people" className="block px-5 py-3 hover:bg-gray-50">
                People
              </Link>
              <Link href="/opportunities" className="block px-5 py-3 hover:bg-gray-50">
                Opportunities
              </Link>
              <Link href="/funding" className="block px-5 py-3 hover:bg-gray-50">
                Funding
              </Link>
            </div>
          </div>

	  {/*
          <Link href="/projects" className={navClass("/projects")}>
            Projects
          </Link>
	  */}

          <Link href="/teaching" className={navClass("/teaching")}>
            Teaching
          </Link>

          <Link href="/contact" className={navClass("/contact")}>
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}
