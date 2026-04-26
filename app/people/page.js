import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function People() {
  return (
    <>
      {/*<Navbar />*/}

      <main className="max-w-6xl mx-auto px-10 py-20">
        <h1 className="text-4xl font-semibold mb-12">People</h1>

        {/* Faculty */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Faculty</h2>

          <div className="flex items-center gap-6">

            {/* ✅ Profile Image */}
            <Image
              src="/profile.jpg"
              alt="Dr. Manjul Sharma"
              width={112}
              height={112}
              className="rounded-full object-cover border shadow-sm"
            />

            <div>
              <h3 className="text-lg font-medium">Dr. Manjul Sharma</h3>
              <p className="text-gray-600">Assistant Professor</p>
              <p className="text-gray-500 text-sm">
                CFD • Turbulence • HPC
              </p>
            </div>

          </div>
        </section>

        {/* Students */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Students</h2>

          <p className="text-gray-600">
            (Add PhD, M.Tech, B.Tech students here)
          </p>
        </section>
      </main>
    </>
  );
}
