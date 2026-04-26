import SerpApi from "google-search-results-nodejs";

export async function getPublications() {
  return new Promise((resolve, reject) => {
    const search = new SerpApi.GoogleSearch(process.env.SERPAPI_KEY);

    search.json(
      {
        engine: "google_scholar_author",
        author_id: "O0spKioAAAAJ",
      },
      (data) => {
        if (!data || data.error) {
          reject(data);
          return;
        }

        const pubs =
          data.articles?.map((p) => ({
            title: p.title || "No title",
            authors: p.authors || "Unknown",
            year: parseInt(p.year) || 0,
            link: p.link || "#",
            citations:
              p.cited_by?.value ||
              p.inline_links?.cited_by?.total ||
              0,
          })) || [];

        resolve(pubs);
      }
    );
  });
}
