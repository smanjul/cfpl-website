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

      // Clean LaTeX escapes from title
      const rawTitle = (tags.title || "No title")
        .replace(/[{}]/g, "")
        .replace(/\\'\{?([aeiouAEIOU])\}?/g, (_, v) => {
          const map = {a:"á",e:"é",i:"í",o:"ó",u:"ú",A:"Á",E:"É",I:"Í",O:"Ó",U:"Ú"};
          return map[v] || v;
        })
        .replace(/\\`\{?([aeiouAEIOU])\}?/g, (_, v) => {
          const map = {a:"à",e:"è",i:"ì",o:"ò",u:"ù",A:"À",E:"È",I:"Ì",O:"Ò",U:"Ù"};
          return map[v] || v;
        })
        .replace(/---/g, "—")
        .replace(/--/g, "–")
        .trim();

      // Handle DOI fields that already contain the full URL
      const rawDoi = tags.doi || null;
      const doiUrl = rawDoi
        ? (rawDoi.startsWith("http") ? rawDoi : `https://doi.org/${rawDoi}`)
        : null;

      return {
        title: rawTitle,
        authors: formatAuthors(tags.author),
        journal: tags.journal || tags.booktitle || "",
        year: parseInt(tags.year),
        doi: doiUrl,
        url: tags.url || null,
      };
    })
    .filter((pub) => pub.year >= currentYear - 2)
    .sort((a, b) => b.year - a.year);
}
