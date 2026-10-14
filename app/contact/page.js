export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-10 py-20">
      <h1 className="text-4xl font-semibold mb-10">Contact</h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Address & email */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Address</h2>
          <p className="text-gray-600 leading-relaxed">
            Complex Flow Physics Lab<br />
            Aerospace Lab, Vineet Nayyar Academic Building<br />
            Mahindra University<br />
            Hyderabad – 500 043, India
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Email</h2>
          <a
            href="mailto:manjul.sharma@mahindrauniversity.edu.in"
            className="text-[#B87333] hover:underline"
          >
            manjul.sharma@mahindrauniversity.edu.in
          </a>

          <div className="mt-8">
            <a
              href="https://maps.google.com/?q=Mahindra+University+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-white transition text-sm font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>

        {/* Embedded map */}
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm h-72 md:h-auto">
          <iframe
            title="Mahindra University location"
            src="https://maps.google.com/maps?q=Mahindra+University+Hyderabad&output=embed&z=15"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </main>
  );
}
