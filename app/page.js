import Navbar from "@/components/Navbar";
import FlowField from "@/components/FlowField";
import ResearchCard from "@/components/ResearchCard";
import PublicationItem from "@/components/PublicationItem";
import { getRecentPublications } from "@/lib/getRecentPublications";

export default function Home() {
  const publications = getRecentPublications();

  return (
    <>
      {/*<Navbar />*/}

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <FlowField />
        </div>

        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="z-10 px-6">
          <h1 className="text-5xl font-semibold mb-6 text-white">
            Complex Flow Physics Lab
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            High-fidelity simulation of complex fluid systems
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-10 py-20">
        <h2 className="text-4xl font-semibold mb-6">About the Lab</h2>

        <p className="text-gray-700 leading-relaxed text-2xl">
          The Complex Flow Physics Lab (CFPL) focuses on high-fidelity numerical
          simulations of complex fluid systems, with emphasis on turbulence,
          multiphysics interactions, and high-performance computing.
        </p>
      </section>

      {/* RESEARCH */}
      <section className="max-w-6xl mx-auto px-10 py-20">
        <h2 className="text-3xl font-semibold mb-10">Research</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ResearchCard
            title="Direct Numerical Simulation (DNS)"
            desc="High-order, high-fidelity simulations of turbulent flows using advanced numerical schemes."
          />
          <ResearchCard
            title="Immersed Boundary Methods (IBM)"
            desc="Accurate representation of complex geometries in incompressible flow solvers."
          />
          <ResearchCard
            title="High-Performance Computing (HPC)"
            desc="Scalable multi-GPU and MPI-based simulation frameworks."
          />
          <ResearchCard
            title="Multiphysics & Multiphase Flows"
            desc="Coupled transport, heat transfer, and interfacial phenomena."
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="/research"
            className="inline-block px-8 py-3 rounded-lg border border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white transition duration-300 font-medium tracking-wide"
          >
            Learn More →
          </a>
        </div>
      </section>

      {/* RECENT PUBLICATIONS */}
      <section className="bg-gray-50 py-20 px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">
            Recent Publications
          </h2>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <PublicationItem key={index} {...pub} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/publications"
              className="inline-block px-8 py-3 rounded-lg border border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white transition duration-300 font-medium tracking-wide"
            >
              View All Publications →
            </a>
          </div>
        </div>
      </section>


      {/* RECRUITMENT */}
      <section className="bg-gray-50 py-20 px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Join the Lab</h2>

          <p className="text-gray-700 mb-6">
            We are actively looking for motivated PhD students and research
            interns interested in computational fluid dynamics, turbulence,
            and high-performance computing.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Strong background in fluid mechanics</li>
            <li>Experience with programming (Fortran/C++/Python)</li>
            <li>Interest in HPC / GPU computing</li>
          </ul>

          <div className="mt-8">
            <a
	  //{/*href="mailto:manjul.sharma@mahindrauniversity.edu.in"*/}
              href="/opportunities"
	  className="inline-block px-8 py-3 rounded-lg border border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white transition duration-300 font-medium tracking-wide"
            >
              Opportunities →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
