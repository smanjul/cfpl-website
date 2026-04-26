"use client";

import Navbar from "@/components/Navbar";
import { courses } from "@/lib/courses";
import CourseItem from "@/components/CourseItem";

export default function Teaching() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-10 py-20">

        {/* TITLE */}
        <h1 className="text-4xl font-semibold mb-6">
          Teaching
        </h1>

        {/* INTRO */}
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          My teaching focuses on building strong fundamentals in fluid mechanics
          while integrating modern computational approaches. Emphasis is placed
          on physical intuition, mathematical rigor, and practical simulation skills.
        </p>

        {/* TEACHING PHILOSOPHY */}
        <h2 className="text-xl font-semibold mt-12">
          Teaching Philosophy
        </h2>

        <p className="mt-3 text-gray-700 leading-relaxed">
          The goal is to connect theoretical concepts with real-world flow
          phenomena. Students are encouraged to think beyond equations and
          develop an intuitive understanding of fluid behavior through
          analysis, computation, and visualization.
        </p>



        {/* COURSES */}
        <h2 className="text-2xl font-semibold mt-10">Courses</h2>

        {/* MAHINDRA UNIVERSITY */}
        <div className="border-l-2 border-[#B87333]/60 pl-4 mt-6">
          <h2 className="text-xl text-blue-600">
            At Mahindra University (MU)
          </h2>

          <ul className="mt-2 space-y-3">
            {courses
              .filter((c) => c.university === "MU")
              .map((course) => (
                <CourseItem key={course.slug} course={course} />
              ))}
          </ul>
        </div>

        {/* CU BOULDER */}
        <div className="border-l-2 border-[#B87333]/30 pl-4 mt-10">
          <h2 className="text-xl text-blue-600">
            At University of Colorado, Boulder (CU Boulder)
          </h2>

          <ul className="mt-2 space-y-3">
            {courses
              .filter((c) => c.university === "CU")
              .map((course) => (
                <CourseItem key={course.slug} course={course} />
              ))}
          </ul>
        </div>

        {/* COURSE COMPONENTS */}
	  {/*
        <h2 className="text-xl font-semibold mt-10">
          Course Components
        </h2>

        <ul className="mt-3 text-gray-600 space-y-1">
          <li>Conceptual lectures with physical insights</li>
          <li>Problem-solving sessions</li>
          <li>Computational assignments (Python / MATLAB / Fortran)</li>
          <li>Mini-projects involving simulation and analysis</li>
        </ul>
	*/}

        {/* FUTURE COURSES */}
	  {/*
        <h2 className="text-xl font-semibold mt-10">
          Future Offerings
        </h2>

        <ul className="mt-3 text-gray-600 space-y-1">
          <li>High-Performance Computing for CFD</li>
          <li>Advanced Turbulence Modeling</li>
          <li>Numerical Methods for PDEs</li>
        </ul>
	*/}

      </main>
    </>
  );
}
