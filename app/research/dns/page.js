"use client";

import DNSDataViewer from "../../../components/DNSDataViewer";

export default function DNSPage() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        Direct Numerical Simulation
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Problem</h2>
        <p>
          DNS resolves all scales of turbulence without modeling assumptions,
          enabling accurate study of fundamental flow physics.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Numerical Method</h2>
        <ul className="list-disc ml-6">
          <li>8th-order finite difference schemes</li>
          <li>Skew-symmetric formulation</li>
          <li>Immersed Boundary Methods</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Vorticity Field</h2>
        <DNSDataViewer />
      </section>
    </div>
  );
}
