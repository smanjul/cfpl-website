import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
  {/*<Navbar />*/}

      <main className="max-w-5xl mx-auto px-10 py-20">
        <h1 className="text-4xl font-semibold mb-6">Contact</h1>

        <p className="text-gray-600">
          Complex Flow Physics Lab <br />
	  Aerospace Lab <br />
	  Vineet Nayyar Academic Building <br />
          Mahindra University <br />
          Hyderabad, India
        </p>

        <p className="mt-4 text-gray-600">
          Email: manjul.sharma@mahindrauniversity.edu.in
        </p>
      </main>
    </>
  );
}
