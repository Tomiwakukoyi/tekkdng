"use client";

export default function PortfolioHighlights() {
  const highlights: { title: string; description?: string }[] = [
    { title: "Delivered 3 fully custom AI‑powered analytics dashboards" },
    { title: "Implemented 2 enterprise‑grade AI systems" },
    { title: "Developed 3 production AI models in healthcare" },
    { title: "Deployed an AI‑powered security surveillance system" },
    { title: "Launched 10+ high‑conversion landing pages" },
    { title: "Automated key processes for government portals" },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Portfolio Highlights
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            A snapshot of what we\'ve delivered across industries and platforms.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-sm text-accent">
            Achievements in the last year since we began operations
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xl">
                  •
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.description ? (
                    <p className="text-sm text-foreground/70 mt-1">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
