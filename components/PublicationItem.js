export default function PublicationItem({
  title,
  authors,
  journal,
  year,
  doi,
  url,
}) {
  return (
    <div className="border-l-4 border-[#B87333] pl-6 hover:translate-x-1 transition-all duration-200">
      
      {/* TITLE */}
      <h3 className="text-xl font-medium text-gray-900 max-w-2xl">
        {title}
      </h3>

      {/* AUTHORS */}
      <p
        className="text-gray-700 text-sm mt-2"
        dangerouslySetInnerHTML={{ __html: authors }}
      />

      {/* JOURNAL */}
      <p className="text-gray-600 text-sm mt-1">
        {journal}, {year}
      </p>

      {/* LINKS */}
      <div className="mt-3 flex items-center gap-4 text-sm">

        {doi && (
          <a
            href={doi}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-3 py-1 rounded-md
              border border-gray-300
              text-gray-700
              hover:border-[#B87333] hover:text-[#B87333]
              transition
            "
          >
            DOI
          </a>
        )}

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black hover:underline transition"
          >
            Publisher Link
          </a>
        )}

      </div>
    </div>
  );
}
