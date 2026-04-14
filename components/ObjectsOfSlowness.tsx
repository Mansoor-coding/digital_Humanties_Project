"use client";

import { accounts } from "./data";

// Aggregate and rank hero objects across all accounts
function getObjectFrequency() {
  const freq: Record<string, number> = {};
  accounts.forEach((acc) => {
    acc.heroObjects.forEach((obj) => {
      const key = obj.toLowerCase().trim();
      freq[key] = (freq[key] || 0) + 1;
    });
  });
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);
}

const objectCategories = [
  {
    label: "The Natural World",
    icon: "🌿",
    objects: ["mountains", "rivers", "fields", "hills", "forests", "lakes", "flowers", "trees", "wheat"],
    interpretation:
      "Nature is not backdrop — it is the protagonist. These accounts frame slow living as a return to ecological embeddedness, where rivers and hills signal a pace that capitalism cannot quantify.",
  },
  {
    label: "Domestic Ritual",
    icon: "🏠",
    objects: ["garden", "backyard", "wooden home interiors", "dining tables", "food spreads", "meadow"],
    interpretation:
      "The home becomes a site of mindful production. Dining tables and food spreads are photographed not as meals but as rituals — the act of making as the point, not the product.",
  },
  {
    label: "The Body & Labour",
    icon: "🙌",
    objects: ["female figure", "educator figure", "care symbols", "workshops"],
    interpretation:
      "Bodies appear in these feeds as practicing subjects — tending, teaching, nurturing. The predominantly female gaze naturalizes care-work as aesthetic pleasure rather than invisible labor.",
  },
  {
    label: "Ancestral Objects",
    icon: "🏺",
    objects: ["jain cooking pots", "fire or cooking flames", "kulluvi dress", "pahadi dress", "sea shells"],
    interpretation:
      "Traditional material culture — regional garments, clay pots, open fire — function as indexical signs of authenticity. They anchor the aesthetic in pre-industrial time.",
  },
];

export default function ObjectsOfSlowness() {
  const frequencies = getObjectFrequency();
  const max = frequencies[0]?.[1] ?? 1;

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.25em] text-warm-stone uppercase mb-4">
            § 03 — The Analysis
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-deep-forest leading-tight">
            The Objects
            <br />
            <em className="text-warm-stone">of Slowness</em>
          </h2>
          <p className="mt-6 max-w-xl text-soft-charcoal/70 font-light leading-relaxed">
            Certain objects appear again and again — not randomly, but as a
            shared grammar. These are the visual shorthand for a slower world:
            chosen, curated, and repeated until they become myth.
          </p>
        </div>

        {/* Object frequency chart */}
        <div className="bg-white/30 rounded-2xl p-8 border border-warm-stone/15 mb-14">
          <h3 className="font-serif text-xl text-deep-forest mb-8">
            Recurring Objects Across All Accounts
          </h3>
          <div className="space-y-3">
            {frequencies.map(([obj, count]) => (
              <div key={obj} className="flex items-center gap-4">
                <span className="font-mono text-xs text-soft-charcoal/60 w-36 text-right capitalize flex-shrink-0">
                  {obj}
                </span>
                <div className="flex-1 h-5 bg-deep-forest/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(count / max) * 100}%`,
                      backgroundColor:
                        count >= 3
                          ? "#2C3B2D"
                          : count === 2
                          ? "#8FAF8C"
                          : "#C8B89A",
                    }}
                  />
                </div>
                <span className="font-mono text-xs text-warm-stone w-6 flex-shrink-0">
                  {count}×
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-6 mt-8 pt-6 border-t border-warm-stone/10">
            {[
              { color: "#2C3B2D", label: "3+ accounts" },
              { color: "#8FAF8C", label: "2 accounts" },
              { color: "#C8B89A", label: "1 account" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: l.color }}
                />
                <span className="font-mono text-[10px] text-soft-charcoal/50">
                  {l.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Thematic analysis cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectCategories.map((cat) => (
            <div
              key={cat.label}
              className="bg-white/40 rounded-2xl p-7 border border-warm-stone/15 hover:border-warm-stone/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h4 className="font-serif text-lg text-deep-forest">{cat.label}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cat.objects.map((o) => (
                  <span
                    key={o}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-deep-forest/8 border border-deep-forest/10 text-soft-charcoal/60"
                  >
                    {o}
                  </span>
                ))}
              </div>
              <p className="text-sm text-soft-charcoal/70 leading-relaxed font-light">
                {cat.interpretation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
