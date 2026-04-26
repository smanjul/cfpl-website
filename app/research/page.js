"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

const researchAreas = [
  {
    title: "High-Order CFD",
    slug: "high-order-cfd",
    desc: "Development of high-order accurate numerical schemes for compressible and incompressible flows on complex geometries.",
  },
  {
    title: "Turbulence & Vortex Dynamics",
    slug: "turbulence",
    desc: "DNS and analysis of vortex breakdown, helicity transport, and multi-scale turbulence structures.",
  },
  {
    title: "Immersed Boundary Methods",
    slug: "immersed-boundary",
    desc: "Cartesian-grid based solvers for complex and moving geometries using sharp-interface techniques.",
  },
  {
    title: "Multiphase & Multiphysics Flows",
    slug: "multiphase",
    desc: "Simulation of coupled transport phenomena involving heat, mass, and phase interactions.",
  },
];

export default function Research() {
  return (
    <>
      {/*<Navbar />*/}

      <main className="max-w-6xl mx-auto px-10 py-24 bg-gradient-to-br from-gray-50 to-white">

        {/* TITLE */}
        <h1 className="text-5xl font-semibold mb-6 tracking-tight">
          Research
        </h1>

        {/* INTRO */}
        <p className="text-gray-700 max-w-3xl mb-16 leading-relaxed">
          Our research focuses on high-fidelity simulation of complex fluid
          systems, combining physics-based modeling with high-performance
          computing. We develop scalable numerical methods for turbulence,
          multiphase flows, and transport phenomena.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          {researchAreas.map((r, i) => (
            <Link key={i} href={`/research/${r.slug}`} className="block">

              <div
                className="
                  relative p-6 rounded-xl

                  bg-white/40 backdrop-blur-md
                  border border-[#B87333]/30

                  shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]

                  transition duration-300 ease-out
                  transform hover:-translate-y-2 hover:scale-[1.02]

                  overflow-hidden
                  cursor-pointer
                "
              >
                {/* copper accent line */}
                <div className="absolute top-0 left-0 w-full h-[0px] bg-[#B87333]/60" />

                {/* glass highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none rounded-xl" />

                {/* content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {r.title}
                  </h3>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </main>
    </>
  );
}
