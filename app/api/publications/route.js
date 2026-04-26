import { NextResponse } from "next/server";
import SerpApi from "google-search-results-nodejs";

export async function GET() {
  try {
    const search = new SerpApi.GoogleSearch(process.env.SERPAPI_KEY);

    return await new Promise((resolve) => {
      search.json(
        {
          engine: "google_scholar_author",
          author_id: "O0spKioAAAAJ", // 👈 replace with your Scholar ID
        },
        (data) => {
          if (!data || data.error) {
            resolve(
              NextResponse.json(
                { error: "Failed to fetch publications", raw: data },
                { status: 500 }
              )
            );
            return;
          }

          // ✅ Robust parsing
          const pubs =
            data.articles?.map((p) => ({
              title: p.title || "No title",
              authors: p.authors || "Unknown",
              year: parseInt(p.year) || 0,
              link: p.link || "#",

              // 🔥 FIXED citation extraction
              citations:
                p.cited_by?.value ||
                p.inline_links?.cited_by?.total ||
                0,
            })) || [];

          resolve(NextResponse.json(pubs));
        }
      );
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}
