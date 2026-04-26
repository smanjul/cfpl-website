import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
  {/*<Navbar />*/}

      <main className="max-w-6xl mx-auto px-10 py-20">
        
        {/* HEADER */}
        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
          
          {/* Profile image (optional) */}
          <div className="w-48 h-48 rounded-full overflow-hidden border">
            <Image
              src="/profile.jpg" // add your image later
              alt="Profile"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>

          {/* Name + title */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-semibold mb-2">
              Dr. Manjul Sharma
            </h1>

            <p className="text-gray-600 text-lg">
              Assistant Professor, Mechanical & Aerospace Engineering
            </p>

            <p className="text-gray-500 mt-2">
              Ecole Centrale School of Engineering, Mahindra University, Hyderabad
            </p>
          </div>
        </div>

        {/* RESEARCH SUMMARY */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Research Focus</h2>

          <p className="text-gray-700 leading-relaxed">
            My research focuses on high-fidelity numerical simulation of complex fluid systems,
            including turbulent flows, multiphase interactions, and convective transport phenomena.
            Emphasis is placed on high-order numerical methods, immersed boundary techniques,
            and large-scale high-performance computing.
          </p>
        </section>

        {/* EXPERTISE */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Expertise</h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-2">
              <li>• Computational Fluid Dynamics (CFD)</li>
              <li>• Turbulence & vortex dynamics</li>
              <li>• Multiphase & multiphysics flows</li>
            </ul>

            <ul className="space-y-2">
              <li>• High-performance computing (HPC)</li>
              <li>• High-order numerical methods</li>
              <li>• Immersed boundary methods</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Education & Experience</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Ph.D., Aerospace Engineering</strong> — IIT Madras
            </p>

           <p>
              <strong>Assistant Professor</strong> — Mahindra University
              <span className="text-gray-500"> (May 2025 – )</span>
            </p>

            <p>
              <strong>Project Scientist I</strong> — IIT Madras  
              <span className="text-gray-500"> (Aug 2024 – Apr 2025)</span>
            </p>

            <p>
              <strong>Research Faculty</strong> — University of Colorado, Boulder  
              <span className="text-gray-500"> (Aug 2021 – Jul 2024)</span>
            </p>

            <p>
              <strong>Postdoctoral Researcher</strong> — IIT Madras  
              <span className="text-gray-500"> (Sep 2020 – Jul 2021)</span>
            </p>
          </div>
        </section>

        {/* LAB SECTION */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Complex Flow Physics Lab</h2>

          <p className="text-gray-700 leading-relaxed">
            The Complex Flow Physics Lab focuses on advancing the understanding of
            fluid systems through high-resolution simulations and data-driven analysis.
            The lab integrates physics-based modeling with scalable computational frameworks
            to address problems in aerodynamics, turbulence, and transport phenomena.
          </p>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-gray-50 p-8 rounded-xl border">
          <h2 className="text-xl font-semibold mb-2">Join the Lab</h2>

          <p className="text-gray-600 mb-4">
            We are actively looking for motivated students with strong backgrounds
            in fluid mechanics, numerical methods, and programming.
          </p>

          <a
            href="/opportunities"
            className="inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            View Opportunities
          </a>
        </section>

      </main>
    </>
  );
}
