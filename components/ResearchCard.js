export default function ResearchCard({ title, desc }) {
  return (
    <div className="bg-white border border-yellow-500/30 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
