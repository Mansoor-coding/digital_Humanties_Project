"use client";

import { accounts, categoryColors } from "./data";
import { Users, Instagram, Youtube } from "lucide-react";

export default function AccountRoster() {
  return (
    <section id="roster" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.25em] text-warm-stone uppercase mb-4">
            § 01 — The Subjects
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-deep-forest leading-tight">
            The Accounts
            <br />
            <em className="text-warm-stone">Under the Lens</em>
          </h2>
          <p className="mt-6 max-w-xl text-soft-charcoal/70 font-light leading-relaxed">
            Ten creators, each building a corner of the slow living world. Their
            feeds were analyzed across color, light, and recurring objects.
          </p>
        </div>

        {/* Account grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {accounts.map((account, i) => (
            <AccountCard key={account.handle} account={account} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccountCard({
  account,
  index,
}: {
  account: (typeof accounts)[0];
  index: number;
}) {
  const catColor = categoryColors[account.category];

  return (
    <div
      className="group relative bg-white/40 backdrop-blur-sm border border-warm-stone/20 rounded-2xl p-6 hover:border-warm-stone/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Category pill */}
      <div className="flex items-center justify-between mb-5">
        <span
          className="text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: catColor + "20",
            color: catColor,
            border: `1px solid ${catColor}40`,
          }}
        >
          {account.categoryLabel}
        </span>
        {account.platform === "instagram" ? (
          <Instagram className="w-4 h-4 text-soft-charcoal/30" />
        ) : (
          <Youtube className="w-4 h-4 text-soft-charcoal/30" />
        )}
      </div>

      {/* Palette swatches */}
      <div className="flex gap-1.5 mb-5">
        {account.palette.slice(0, 5).map((color, j) => (
          <div
            key={j}
            className="h-6 rounded-full flex-1 shadow-sm"
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>

      {/* Handle */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">{account.emoji}</span>
        <h3 className="font-serif text-lg text-deep-forest">
          @{account.handle}
        </h3>
      </div>

      {/* Lighting */}
      <p className="text-xs text-soft-charcoal/55 font-light italic mb-4 leading-relaxed">
        {account.lighting}
      </p>

      {/* Hero objects */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {account.heroObjects.slice(0, 4).map((obj) => (
          <span
            key={obj}
            className="text-[10px] px-2 py-0.5 rounded bg-deep-forest/5 text-soft-charcoal/60 font-mono"
          >
            {obj}
          </span>
        ))}
        {account.heroObjects.length > 4 && (
          <span className="text-[10px] px-2 py-0.5 rounded bg-deep-forest/5 text-soft-charcoal/40 font-mono">
            +{account.heroObjects.length - 4}
          </span>
        )}
      </div>

      {/* Follower count */}
      <div className="flex items-center gap-2 pt-4 border-t border-warm-stone/15">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-warm-stone/20 flex items-center justify-center">
            <Users className="w-3 h-3 text-warm-stone" />
          </div>
          <span className="font-mono text-xs text-warm-stone font-medium">
            {account.followers}
          </span>
        </div>
        <span className="font-mono text-[10px] text-soft-charcoal/30 uppercase tracking-wider">
          followers
        </span>
      </div>
    </div>
  );
}