export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-warm-stone/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-serif text-xl text-deep-forest italic mb-2">
              Curating Calm
            </p>
            <p className="font-mono text-xs text-soft-charcoal/40 tracking-widest">
              DIGITAL HUMANITIES · VISUAL ANALYSIS PROJECT
            </p>
          </div>
          <div className="text-right space-y-1">
            <p className="font-mono text-xs text-soft-charcoal/40">
              10 accounts · 5 categories
            </p>
            <p className="font-mono text-xs text-soft-charcoal/30">
              Instagram &amp; YouTube · 2024–25
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-warm-stone/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-soft-charcoal/30 tracking-wider">
            A PROJECT IN VISUAL CULTURE &amp; DIGITAL HUMANITIES
          </p>
          <div className="flex gap-2 items-center">
            <span className="h-px w-8 bg-warm-stone/20" />
            <span className="font-mono text-[10px] text-warm-stone/40">∞</span>
            <span className="h-px w-8 bg-warm-stone/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
