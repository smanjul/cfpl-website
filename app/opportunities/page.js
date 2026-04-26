import Navbar from "@/components/Navbar";

export default function Opportunities() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-10 py-20">

        {/* HEADLINE */}
        <h1 className="text-4xl font-semibold mb-6">
          Join the Complex Flow Physics Lab
        </h1>

        <p className="text-gray-600 mb-10">
          We are looking for highly motivated students interested in 
          turbulence, high-performance computing, and numerical methods.
        </p>

        {/* WHY JOIN */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why join?</h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Work on high-fidelity CFD and turbulence research</li>
            <li>Access to HPC resources and advanced simulation tools</li>
            <li>Collaborations with international institutions</li>
            <li>Strong focus on publications in top journals</li>
          </ul>
        </section>

        {/* EXPECTATIONS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What we expect</h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Strong background in fluid mechanics</li>
            <li>Programming skills (C/C++/Fortran/Python)</li>
            <li>Interest in numerical methods and HPC</li>
          </ul>
        </section>

        {/* OPENINGS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>

          <p className="text-gray-600">
            PhD positions are available in:
          </p>

          <ul className="list-disc ml-6 mt-3 text-gray-700">
            <li>Immersed boundary methods</li>
            <li>High-order CFD</li>
            <li>Turbulence modeling</li>
          </ul>
        </section>

        {/* APPLY CTA */}
        <section className="bg-black text-white p-8 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Apply Now
          </h2>

          <p className="mb-4">
            Send your CV, transcripts, and a brief statement of interest.
          </p>

          <p className="font-medium">
            Email: manjul.sharma@mahindrauniversity.edu.in
          </p>
        </section>

      </main>
    </>
  );
}
