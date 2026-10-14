export function generateStaticParams() {
  return [
    { slug: "high-order-cfd" },
    { slug: "turbulence" },
    { slug: "immersed-boundary" },
    { slug: "multiphase" },
  ];
}

import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import Link from "next/link";

// ─── Research area data ───────────────────────────────────────────────────────
const data = {
  "high-order-cfd": {
    title: "High-Order CFD",
    tagline: "High-accuracy numerical methods for incompressible and compressible flows",

    overview: `We develop high-order accurate numerical schemes for simulating complex fluid
    systems with emphasis on minimising numerical dissipation while preserving conservation
    properties. Central to our work is the EDAC (Entropically Damped Artificial
    Compressibility) formulation, which enables robust pressure coupling in incompressible
    flows, and skew-symmetric finite-difference schemes that ensure long-time kinetic energy
    conservation in turbulent simulations.`,

    equation: `\\frac{\\partial \\mathbf{u}}{\\partial t}
      + \\nabla \\cdot (\\mathbf{u} \\otimes \\mathbf{u})
      = -\\nabla p + \\nu \\nabla^2 \\mathbf{u}`,
    equationLabel: "Incompressible Navier–Stokes",

    methods: [
      "8th-order explicit finite-difference schemes in skew-symmetric form",
      "EDAC formulation for incompressible pressure-velocity coupling",
      "Curvilinear coordinate transformation with metric identity enforcement",
      "Immersed boundary treatment for complex geometries",
      "Scalable MPI-based domain decomposition",
    ],

    placeholderFigure: "Convergence / spectral resolution plots",

    publications: [
      {
        cite: "Sharma, Srikanth, Jayachandran & Sameen — Comp. Fluids, 2023",
        doi: "https://doi.org/10.1016/j.compfluid.2023.105997",
      },
      {
        cite: "Srikanth, Praveen Kumar, Jayachandran, Sameen & Sharma — Comp. Fluids, 2025",
        doi: "https://doi.org/10.1016/j.compfluid.2025.106835",
      },
      {
        cite: "Sharma, Nair, Vishnu & Sameen — Phil. Trans. R. Soc. A, 2023",
        doi: "https://doi.org/10.1098/rsta.2022.0136",
      },
    ],
  },

  turbulence: {
    title: "Turbulence & Vortex Dynamics",
    tagline: "DNS of vortex breakdown, helicity transport, and multi-scale turbulence",

    overview: `Using high-resolution direct numerical simulations, we investigate the structure
    and dynamics of turbulent and transitional flows with particular focus on vortex breakdown,
    helicity transport, and the role of geometry in shaping flow topology. Our studies span
    enclosed rotating flows (spherical Couette, Vogel–Escudier), particle-laden turbulence,
    and buoyancy-driven instabilities, connecting fundamental physics to geophysical
    and industrial applications.`,

    equation: `H = \\int_{\\mathcal{V}} \\mathbf{u} \\cdot \\boldsymbol{\\omega} \\, dV`,
    equationLabel: "Helicity integral",

    methods: [
      "Direct Numerical Simulation (DNS) at high Reynolds numbers",
      "Helicity-based diagnostics and topological flow analysis",
      "Spectral energy budgets and scale-by-scale decomposition",
      "Q-criterion and λ₂ vortex identification",
      "Spherical Couette and Vogel–Escudier flow configurations",
    ],

    placeholderFigure: "Vorticity isosurfaces / helicity maps",

    publications: [
      {
        cite: "Ananthu, Sharma, Sameen & Narayanan — J. Fluid Mech., 2025",
        doi: "https://doi.org/10.1017/jfm.2025.163",
      },
      {
        cite: "Ananthu, Sharma, Sameen & Narayanan — Phys. Fluids, 2026",
        doi: "https://doi.org/10.1063/5.0326544",
      },
      {
        cite: "Dhurandhar, Sharma, Mohan & Sameen — Phys. Fluids, 2026",
        doi: "https://doi.org/10.1063/5.0310616",
      },
      {
        cite: "Dhurandhar, Sharma, Mohan & Sameen — Phys. Scr., 2024",
        doi: "https://doi.org/10.1088/1402-4896/ad4061",
      },
      {
        cite: "Sarkar, Sharma & Narayanan — Phys. Fluids, 2025",
        doi: "https://doi.org/10.1063/5.0277905",
      },
      {
        cite: "Vishnu, Sharma & Sameen — Phys. Fluids, 2021",
        doi: "https://doi.org/10.1063/5.0065134",
      },
      {
        cite: "Sharma & Sameen — J. Fluid Mech., 2020",
        doi: "https://doi.org/10.1017/jfm.2020.43",
      },
      {
        cite: "Sharma & Sameen — Phys. Fluids, 2021",
        doi: "https://doi.org/10.1063/5.0053847",
      },
    ],
  },

  "immersed-boundary": {
    title: "Immersed Boundary Methods",
    tagline: "Cartesian-grid solvers for complex and moving geometries",

    overview: `We develop sharp-interface immersed boundary methods that allow accurate simulation
    of flows over complex geometries without body-fitted meshes. By combining ghost-cell
    reconstruction with high-order Cartesian-grid solvers, the approach maintains near-boundary
    accuracy while enabling straightforward parallelisation. Current work extends the framework
    to moving and deforming boundaries.`,

    equation: `\\mathbf{F}(\\mathbf{x}) = \\int \\mathbf{f}(s)\\,\\delta\\bigl(\\mathbf{x} - \\mathbf{X}(s)\\bigr)\\,ds`,
    equationLabel: "Immersed boundary force density",

    methods: [
      "Sharp-interface ghost-cell immersed boundary method",
      "High-order reconstruction at cut cells",
      "Cartesian grid with embedded geometry representation",
      "Coupling with high-order EDAC flow solver",
      "Extension to moving and rotating boundaries",
    ],

    placeholderFigure: "Velocity / pressure fields around embedded geometry",

    publications: [
      {
        cite: "Sharma, Nair, Vishnu & Sameen — Phil. Trans. R. Soc. A, 2023",
        doi: "https://doi.org/10.1098/rsta.2022.0136",
      },
      {
        cite: "Sharma, Srikanth, Jayachandran & Sameen — Comp. Fluids, 2023",
        doi: "https://doi.org/10.1016/j.compfluid.2023.105997",
      },
    ],
  },

  multiphase: {
    title: "Multiphase & Multiphysics Flows",
    tagline: "Coupled heat, mass and phase transport — from rarefied gas to particle-laden turbulence",

    overview: `This research programme spans a broad range of multiphysics problems: buoyancy-driven
    convection (Rayleigh–Bénard and salt-finger regimes), particle-laden turbulence, and rarefied
    gas dynamics using Direct Simulation Monte Carlo (DSMC). A common thread is coupling between
    flow and a transported scalar — temperature, concentration, or phase — with implications for
    geophysical, atmospheric, and engineering systems.`,

    equation: `\\frac{\\partial \\phi}{\\partial t} + \\mathbf{u} \\cdot \\nabla \\phi = D\\,\\nabla^2 \\phi`,
    equationLabel: "Scalar transport equation",

    methods: [
      "DNS of Rayleigh–Bénard and doubly-diffusive (salt-finger) convection",
      "Direct Simulation Monte Carlo (DSMC) for rarefied flow regimes",
      "Lagrangian particle tracking in turbulent carrier flows",
      "Fixed-flux thermal boundary conditions",
      "Coupled Navier–Stokes and scalar transport solvers",
    ],

    placeholderFigure: "Temperature / concentration fields, particle distribution snapshots",

    publications: [
      {
        cite: "Liu, Sharma, Julien & Knobloch — J. Fluid Mech., 2024",
        doi: "https://doi.org/10.1017/jfm.2023.1057",
      },
      {
        cite: "Dhurandhar, Mohan, Sharma & Sameen — Phys. Rev. E, 2025",
        doi: "https://doi.org/10.1103/PhysRevE.111.055108",
      },
      {
        cite: "Dhurandhar, Mohan, Sharma & Sameen — AIP Conf. Proc., 2024",
        doi: "https://doi.org/10.1063/5.0187617",
      },
      {
        cite: "Dhurandhar, Sharma, Mohan & Sameen — Phys. Scr., 2024",
        doi: "https://doi.org/10.1088/1402-4896/ad4061",
      },
      {
        cite: "Sarkar, Sharma & Narayanan — Phys. Fluids, 2025",
        doi: "https://doi.org/10.1063/5.0277905",
      },
      {
        cite: "Srikanth, Praveen Kumar, Jayachandran, Sameen & Sharma — Comp. Fluids, 2025",
        doi: "https://doi.org/10.1016/j.compfluid.2025.106835",
      },
    ],
  },
};

// ─── Page component ───────────────────────────────────────────────────────────
export default async function ResearchDetail({ params }) {
  // Next.js 15+: params is a Promise
  const { slug } = await params;
  const page = data[slug];

  if (!page) {
    return (
      <main className="max-w-4xl mx-auto px-10 py-20">
        <p className="text-gray-500">Research area not found.</p>
        <Link href="/research" className="text-[#B87333] underline mt-4 inline-block">
          ← Back to Research
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-10 py-20">

      {/* BREADCRUMB */}
      <Link
        href="/research"
        className="text-sm text-gray-500 hover:text-[#B87333] transition mb-8 inline-block"
      >
        ← Research
      </Link>

      {/* TITLE */}
      <h1 className="text-4xl font-semibold mb-2 mt-4">{page.title}</h1>
      <p className="text-gray-500 text-lg mb-10">{page.tagline}</p>

      {/* OVERVIEW */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Overview</h2>
        <p className="text-gray-700 leading-relaxed">{page.overview}</p>
      </section>

      {/* GOVERNING EQUATION */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Governing Equation</h2>
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-center">
          <BlockMath math={page.equation} />
          <p className="text-xs text-gray-400 mt-2">{page.equationLabel}</p>
        </div>
      </section>

      {/* METHODS */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Methods</h2>
        <ul className="space-y-2">
          {page.methods.map((m, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
              <span className="mt-1 w-2 h-2 rounded-full bg-[#B87333] shrink-0" />
              {m}
            </li>
          ))}
        </ul>
      </section>

      {/* RESULTS / FIGURES PLACEHOLDER */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Key Results</h2>
        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-10 text-center text-gray-400">
          <p className="text-4xl mb-3">🖼️</p>
          <p className="text-sm font-medium">{page.placeholderFigure}</p>
          <p className="text-xs mt-1">Add figures and result descriptions here</p>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Related Publications</h2>
        <div className="space-y-3">
          {page.publications.map((p, i) => (
            <div key={i} className="flex items-start gap-3 border-l-4 border-[#B87333]/40 pl-4 py-1">
              <div className="flex-1">
                <p className="text-gray-700 text-sm">{p.cite}</p>
              </div>
              <a
                href={p.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs px-2 py-1 rounded border border-gray-300 text-gray-600 hover:border-[#B87333] hover:text-[#B87333] transition"
              >
                DOI
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
