import Navbar from "@/components/Navbar";

const grants = [
  {
    title: "GPU-Accelerated Machine-Learning Framework for Direct Numerical Simulation and Reduced-Order Modelling of Salt-Finger Convection",
    agency: "ANRF-PMECRG",
    duration: "2026 – 2029",
    amount: "₹ 5.79 million",
  },
//  {
//    title: "Turbulence and vortex dynamics in high-speed flows",
//    agency: "DST (Proposed)",
//    duration: "—",
//    amount: "—",
//  },
];

export default function Funding() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-10 py-20">
        <h1 className="text-4xl font-semibold mb-12">Funding</h1>

        <div className="space-y-8">
          {grants.map((g, i) => (
            <div key={i} className="flex gap-4">
              
              {/* Number */}
              <span className="w-10 text-gray-600">
                [{i + 1}]
              </span>

              {/* Content */}
              <div className="text-gray-800 leading-relaxed">
                <p>
                  <strong>{g.title}</strong>
                </p>

                <p className="text-gray-600">
                  {g.agency}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Duration: {g.duration} &nbsp;|&nbsp; Amount: {g.amount}
                </p>
              </div>

            </div>
          ))}
        </div>
      </main>
    </>
  );
}
