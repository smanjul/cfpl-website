"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import bibtexParse from "bibtex-parse-js";

function clean(str) {
  if (!str) return "";
  return str.replace(/[{}]/g, "");
}

const TAGS = {
  vishnu2021effect: ["Editor's Pick"],
  sharma2023near: ["Invited"],
  dhurandhar2026compressibility: ["Featured article"],
};

export default function Publications() {
  const [groupedPapers, setGroupedPapers] = useState(null);

  useEffect(() => {
    fetch("/data/publications.bib")
      .then((res) => res.text())
      .then((bibtex) => {
        const parsed = bibtexParse.toJSON(bibtex);

        const papers = parsed.map((entry) => {
          const t = entry.entryTags;

          return {
            id: entry.citationKey,
            authors: clean(t.author),
            title: clean(t.title),
            year: parseInt(t.year) || 0,

            venue: clean(t.journal || t.booktitle || ""),
            volume: clean(t.volume),
            number: clean(t.number),
            pages: clean(t.pages),
            publisher: clean(t.publisher),
            doi: clean(t.doi),
          };
        });

        // Sort
        const sorted = papers.sort((a, b) => {
          if (b.year !== a.year) return b.year - a.year;
          return a.title.localeCompare(b.title);
        });

        // Group
        const grouped = {};
        sorted.forEach((p) => {
          const year = p.year || "Unknown";
          if (!grouped[year]) grouped[year] = [];
          grouped[year].push(p);
        });

        setGroupedPapers(grouped);
      });
  }, []);

  const totalPapers = groupedPapers
    ? Object.values(groupedPapers).flat().length
    : 0;

  let runningIndex = 0;

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-8 py-20 text-black bg-white">
        <h1 className="text-4xl font-semibold mb-12">Journal Publications</h1>

        {!groupedPapers ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-12">
            {Object.keys(groupedPapers)
              .sort((a, b) => {
                if (a === "Unknown") return 1;
                if (b === "Unknown") return -1;
                return Number(b) - Number(a);
              })
              .map((year) => (
                <div key={year}>
                  <h2 className="text-2xl text-blue-600 mb-6">{year}</h2>

                  {groupedPapers[year].map((p, i) => {
                    const index = totalPapers - runningIndex;
                    runningIndex++;

                    return (
                      <div key={i} className="flex gap-4 mb-4">
                        <span className="w-10 text-gray-600">
                          [{index}]
                        </span>

                        <p className="leading-relaxed">
                          {/* Authors */}
                          {p.authors},{" "}

                          {/* Title */}
                          “{p.title},”{" "}

                          {/* Venue */}
                          {p.venue && <em>{p.venue}</em>}

                          {/* Volume/Issue */}
                          {p.volume && `, vol. ${p.volume}`}
                          {p.number && `, no. ${p.number}`}

                          {/* Pages */}
                          {p.pages && `, pp. ${p.pages}`}

                          {/* Publisher */}
                          {p.publisher && `, ${p.publisher}`}

                          {/* Year */}
                          {`, ${p.year}.`}

                          {/* DOI */}
                          {p.doi && (
                            <>
                              {" "}
                              <a
                                href={`https://doi.org/${p.doi}`}
                                target="_blank"
                                className="text-blue-600 hover:underline"
                              >
                                doi:{p.doi}
                              </a>
                            </>
                          )}

                          {/* Tags */}
                          {TAGS[p.id] && (
                            <span className="ml-2 text-red-600">
                              ({TAGS[p.id].join(", ")})
                            </span>
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ))}
          </div>
        )}
      </main>
    </>
  );
}
