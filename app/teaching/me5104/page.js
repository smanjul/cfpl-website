import Navbar from "@/components/Navbar";

export default function Course() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-10 py-20">

        {/* TITLE */}
        <h1 className="text-3xl font-semibold mb-4">
          ME 5104 — Computational Fluid Dynamics
        </h1>

        <p className="text-gray-600 mb-8">
          Postgraduate Course • Fall 2025
        </p>

        {/* SYLLABUS */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Syllabus</h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Governing equations of fluid flow</li>
            <li>Finite difference and finite volume methods</li>
            <li>Stability and convergence</li>
            <li>Turbulence modeling</li>
            <li>High-order methods</li>
          </ul>
        </section>

        {/* LECTURE NOTES */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Lecture Notes</h2>

          <ul className="space-y-2 text-blue-600">
            <li>
              <a href="/notes/cfd/lecture1.pdf" target="_blank">
                Lecture 1 — Introduction
              </a>
            </li>
            <li>
              <a href="/notes/cfd/lecture2.pdf" target="_blank">
                Lecture 2 — Discretization
              </a>
            </li>
          </ul>
        </section>

        {/* ASSIGNMENTS */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Assignments</h2>

          <ul className="space-y-2 text-blue-600">
            <li>
              <a href="/assignments/cfd/a1.pdf">Assignment 1</a>
            </li>
          </ul>
        </section>

      </main>
    </>
  );
}
