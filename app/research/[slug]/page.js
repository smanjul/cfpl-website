import Navbar from "@/components/Navbar";
import Image from "next/image";
import { BlockMath } from "react-katex";

const data = {
  "high-order-cfd": {
    title: "High-Order CFD for Complex Geometries",

    abstract:
      "This work focuses on the development of high-order accurate numerical schemes for simulating compressible and incompressible flows over complex geometries. Emphasis is placed on minimizing numerical dissipation while maintaining stability on curvilinear grids.",

    equation: `
      \\frac{\\partial \\mathbf{u}}{\\partial t}
      + \\nabla \\cdot (\\mathbf{u} \\otimes \\mathbf{u})
      = -\\nabla p + \\nu \\nabla^2 \\mathbf{u}
    `,

    figure: "/figures/cfd.png",

    methods: [
      "8th-order explicit finite difference schemes",
      "Curvilinear coordinate transformation",
      "Metric identity enforcement for free-stream preservation",
      "Parallel domain decomposition for HPC scaling",
    ],

    results:
      "The developed schemes achieve spectral-like accuracy with significantly reduced dispersion and dissipation errors. Benchmark tests demonstrate superior resolution of small-scale features compared to conventional second-order methods.",

    publications: [
      "Sharma et al., Journal of Fluid Mechanics (2024)",
      "Sharma & Sameen, Physics of Fluids (2023)",
    ],
  },

  turbulence: {
    title: "Turbulence & Vortex Dynamics",

    abstract:
      "This research investigates the structure and dynamics of turbulence using high-resolution direct numerical simulations (DNS), with particular focus on vortex breakdown and helicity transport.",

    equation: `
      H = \\int \\mathbf{u} \\cdot \\boldsymbol{\\omega} \\, dV
    `,

    figure: "/figures/vorticity.png",

    methods: [
      "Direct Numerical Simulation (DNS)",
      "Helicity-based flow diagnostics",
      "Spectral energy analysis",
      "Vortex identification using Q-criterion",
    ],

    results:
      "Results reveal strong coupling between helicity distribution and vortex topology, providing new insight into transport barriers and breakdown mechanisms.",

    publications: [
      "Sharma et al., Journal of Fluid Mechanics (2024)",
    ],
  },

  "immersed-boundary": {
    title: "Immersed Boundary Methods",

    abstract:
      "We develop sharp-interface immersed boundary methods on Cartesian grids for simulating flows over complex and moving geometries.",

    equation: `
      \\mathbf{F}(\\mathbf{x}) = \\int \\mathbf{f}(s) \\delta(\\mathbf{x} - \\mathbf{X}(s)) ds
    `,

    figure: "/figures/ibm.png",

    methods: [
      "Cartesian grid formulation",
      "Sharp-interface reconstruction",
      "Ghost-cell methodology",
      "Extension to moving boundaries",
    ],

    results:
      "The method achieves accurate representation of boundary conditions without body-fitted meshes, significantly reducing grid generation complexity.",

    publications: [
      "Sharma et al., Physics of Fluids (2023)",
    ],
  },

  multiphase: {
    title: "Multiphase & Multiphysics Flows",

    abstract:
      "This work focuses on the simulation of coupled transport phenomena involving heat, mass, and phase interactions in complex flow systems.",

    equation: `
      \\frac{\\partial \\phi}{\\partial t}
      + \\mathbf{u} \\cdot \\nabla \\phi
      = D \\nabla^2 \\phi
    `,

    figure: "/figures/multiphase.png",

    methods: [
      "Coupled Navier–Stokes and scalar transport solvers",
      "Interface capturing techniques",
      "High-resolution convection schemes",
      "Parallel HPC implementation",
    ],

    results:
      "Simulations capture complex interactions between convection, diffusion, and phase dynamics, enabling predictive modeling of multiphysics systems.",

    publications: [
      "Sharma et al., International Journal of Multiphase Flow (2024)",
    ],
  },
};

export default async function ResearchDetail({ params }) {
  const { slug } = await params;
  const page = data[slug];

  if (!page) {
    return <div className="p-10">No data for slug: {slug}</div>;
  }

  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-10 py-20">

        {/* TITLE */}
        <h1 className="text-4xl font-semibold mb-6">
          {page.title}
        </h1>

        {/* ABSTRACT */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Abstract</h2>
          <p className="text-gray-700 leading-relaxed">
            {page.abstract}
          </p>
        </section>

        {/* EQUATION */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Governing Equation</h2>
          <div className="bg-gray-50 p-4 rounded-md border text-center">
            <BlockMath math={page.equation} />
          </div>
        </section>

        {/* FIGURE */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Flow Visualization</h2>

          <Image
            src={page.figure}
            alt="CFD visualization"
            width={800}
            height={400}
            className="rounded-lg border"
          />
        </section>

        {/* METHODS */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Methods</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            {page.methods.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </section>

        {/* RESULTS */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Key Results</h2>
          <p className="text-gray-700">{page.results}</p>
        </section>

        {/* PUBLICATIONS */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Related Publications</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {page.publications.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </section>

      </main>
    </>
  );
}
