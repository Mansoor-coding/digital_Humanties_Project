"use client";

import { accounts, categoryColors, categoryLabels, Category } from "./data";

export default function ColorMoodBoard() {
  const categories = Array.from(new Set(accounts.map((a) => a.category))) as Category[];

  return (
    <section className="py-28 px-6 bg-deep-forest/5">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.25em] text-warm-stone uppercase mb-4">
            § 02 — The Visual Evidence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-deep-forest leading-tight">
            Palette &amp; Mood
            <br />
            <em className="text-warm-stone">by Category</em>
          </h2>
          <p className="mt-6 max-w-xl text-soft-charcoal/70 font-light leading-relaxed">
            Each category clusters around distinct chromatic identities. Notice
            how warmth and desaturation signal authenticity, while vibrancy
            signals abundance.
          </p>
        </div>

        {/* Category mood boards */}
        <div className="space-y-10">
          {categories.map((cat) => {
            const catAccounts = accounts.filter((a) => a.category === cat);
            const allColors = catAccounts.flatMap((a) => a.palette);
            const color = categoryColors[cat];

            return (
              <div key={cat} className="bg-white/30 rounded-2xl p-8 border border-warm-stone/15">
                {/* Category label */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <h3 className="font-serif text-2xl text-deep-forest">
                    {categoryLabels[cat]}
                  </h3>
                  <span className="font-mono text-xs text-soft-charcoal/40 ml-auto">
                    {catAccounts.length} creator{catAccounts.length > 1 ? "s" : ""}
                  </span>
                </div>

                {/* Full palette strip */}
                <div className="flex h-16 rounded-xl overflow-hidden mb-6 shadow-sm">
                  {allColors.map((c, i) => (
                    <div
                      key={i}
                      className="flex-1 relative group/swatch"
                      style={{ backgroundColor: c }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover/swatch:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="font-mono text-[9px] text-white drop-shadow-lg">
                          {c}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Per-account palettes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {catAccounts.map((acc) => (
                    <div key={acc.handle} className="space-y-2">
                      <div className="flex gap-1">
                        {acc.palette.map((c, i) => (
                          <div
                            key={i}
                            className="h-5 rounded flex-1"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                      <p className="font-mono text-[10px] text-soft-charcoal/50">
                        @{acc.handle}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Lighting note */}
                <div className="mt-6 pt-4 border-t border-warm-stone/10">
                  <p className="text-xs text-soft-charcoal/50 font-light italic">
                    <span className="font-mono not-italic text-warm-stone mr-2">
                      Lighting:
                    </span>
                    {catAccounts.map((a) => a.lighting).join(" · ")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}