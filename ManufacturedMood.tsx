"use client";

import { accounts } from "./data";

const lightingAnalysis = [
  {
    type: "Golden Hour / Sunkissed",
    accounts: ["pooja_vegesna", "havwild"],
    description:
      "The warm orange-gold of magic hour is the most recurring lighting motif. It flatters skin, softens textures, and carries a temporal message: this moment will pass. The ephemerality is the point.",
    gradient: "from-amber-200 to-orange-300",
    icon: "🌅",
  },
  {
    type: "Soft Diffused / Overcast",
    accounts: ["itsrachelhannah", "xwahang"],
    description:
      "Grey-sky light eliminates shadows entirely, producing a melancholic, contemplative atmosphere. Objects lose their drama and become equal — a democratization of attention that mirrors slow living's ethos.",
    gradient: "from-slate-200 to-blue-200",
    icon: "☁️",
  },
  {
    type: "Window Light / Indoor Ambient",
    accounts: ["thuydao_", "vibrantlivingbysridevijasti"],
    description:
      "Interior accounts rely on natural window light to maintain the 'real home' aesthetic. Harsh artificial lighting would signal the commercial; soft indoor light signals the personal, the intimate, the lived-in.",
    gradient: "from-yellow-100 to-amber-100",
    icon: "🪟",
  },
  {
    type: "Harsh Sunlight / Direct",
    accounts: ["villagecookingchannel", "shruthipahari_007"],
    description:
      "The only accounts using harsh, unfiltered light are those signaling outdoor labor and abundance. Fire-lit cooking and mountain photography embrace contrast as a marker of authenticity over polish.",
    gradient: "from-orange-300 to-red-300",
    icon: "☀️",
  },
];

const colorKeywords = [
  { word: "Sage / Olive", meaning: "Organic restraint, ecological awareness", hex: "#8FAF8C" },
  { word: "Warm Stone / Beige", meaning: "Pre-industrial material memory", hex: "#C8B89A" },
  { word: "Deep Forest Green", meaning: "Rootedness, counter-urban identity", hex: "#2C3B2D" },
  { word: "Golden Yellow", meaning: "Harvest, abundance, seasonal time", hex: "#F9A825" },
  { word: "Mist Grey / Overcast", meaning: "Contemplation, melancholy, quietude", hex: "#90A4AE" },
  { word: "Plum / Dusty Purple", meaning: "Spiritual interiority, wellness culture", hex: "#6A1B9A" },
];

export default function ManufacturedMood() {
  return (
    <section className="py-28 px-6 bg-deep-forest/5">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.25em] text-warm-stone uppercase mb-4">
            § 04 — The Mood Machine
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-deep-forest leading-tight">
            The Manufactured
            <br />
            <em className="text-warm-stone">Mood</em>
          </h2>
          <p className="mt-6 max-w-xl text-soft-charcoal/70 font-light leading-relaxed">
            Lighting and color grading are not passive recording choices — they
            are rhetorical acts. Each lighting style encodes an emotional
            argument about what it means to live slowly.
          </p>
        </div>

        {/* Lighting analysis */}
        <h3 className="font-serif text-2xl text-deep-forest mb-8">
          Lighting Typologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {lightingAnalysis.map((light) => (
            <div
              key={light.type}
              className="rounded-2xl overflow-hidden border border-warm-stone/15 bg-white/30 hover:shadow-md transition-shadow"
            >
              {/* Color bar */}
              <div className={`h-2 bg-gradient-to-r ${light.gradient}`} />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{light.icon}</span>
                  <h4 className="font-serif text-lg text-deep-forest">
                    {light.type}
                  </h4>
                </div>
                {/* Accounts using this */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {light.accounts.map((a) => (
                    <span
                      key={a}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-warm-stone/20 text-warm-stone"
                    >
                      @{a}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-soft-charcoal/70 leading-relaxed font-light">
                  {light.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Color semiotics */}
        <h3 className="font-serif text-2xl text-deep-forest mb-8">
          The Semiotics of Color
        </h3>
        <div className="bg-white/30 rounded-2xl p-8 border border-warm-stone/15">
          <p className="text-sm text-soft-charcoal/60 font-light mb-8 leading-relaxed max-w-2xl">
            Colors in slow living content are not decorative — they are
            argumentative. Each palette choice encodes a claim about
            authenticity, temporality, and relationship to nature.
          </p>
          <div className="space-y-4">
            {colorKeywords.map((ck) => (
              <div key={ck.word} className="flex items-start gap-5">
                <div
                  className="w-10 h-10 rounded-lg flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: ck.hex }}
                />
                <div>
                  <p className="font-serif text-base text-deep-forest mb-0.5">
                    {ck.word}
                  </p>
                  <p className="text-xs text-soft-charcoal/60 font-light leading-relaxed">
                    {ck.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <blockquote className="mt-20 text-center px-8">
          <p className="font-serif text-2xl md:text-3xl text-deep-forest/80 italic leading-relaxed max-w-3xl mx-auto">
            "Slow living is not the absence of aesthetics — it is aesthetics
            doing the most work of all."
          </p>
          <cite className="block mt-4 font-mono text-xs text-warm-stone tracking-widest not-italic">
            — PROJECT OBSERVATION
          </cite>
        </blockquote>
      </div>
    </section>
  );
}