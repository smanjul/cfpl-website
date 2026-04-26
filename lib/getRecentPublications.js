import fs from "fs";
import path from "path";
import bibtexParse from "bibtex-parse-js";

function formatAuthors(authorString) {
  if (!authorString) return "";

  const authors = authorString.split(" and ").map((a) => {
    // Convert "Last, First" → "First Last"
    if (a.includes(",")) {
      const [last, first] = a.split(",").map((s) => s.trim());
      return `${first} ${last}`;
    }
    return a.trim();
  });

  return authors.map((author) => {
    if (author.toLowerCase().includes("manjul sharma")) {
      return `<strong>${author}</strong>`;
    }
    return author;
  }).join(", ");
}

export function getRecentPublications() {
  const filePath = path.join(process.cwd(), "public", "data", "publications.bib");
  const bibtex = fs.readFileSync(filePath, "utf8");

  const entries = bibtexParse.toJSON(bibtex);
  const currentYear = new Date().getFullYear();

  return entries
    .map((entry) => {
      const tags = entry.entryTags;

      return {
        title: tags.title?.replace(/[{}]/g, "") || "No title",
        authors: formatAuthors(tags.author),
        journal: tags.journal || tags.booktitle || "",
        year: parseInt(tags.year),
        doi: tags.doi ? `https://doi.org/${tags.doi}` : null,
        url: tags.url || null,
      };
    })
    .filter((pub) => pub.year >= currentYear - 1)
    .sort((a, b) => b.year - a.year);
}
