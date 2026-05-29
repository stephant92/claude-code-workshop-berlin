import { resources } from "../content";

export function Resources() {
  return (
    <section id="resources" className="bg-muted px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">{resources.heading}</h2>
        <p className="mt-3 text-lg text-ink/65">{resources.intro}</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {resources.items.map((r, i) => (
            <a
              key={i}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-paper border border-ink/10 hover:border-accent transition"
            >
              <h3 className="font-semibold text-lg text-accent">{r.name} →</h3>
              <p className="mt-3 text-ink/70 leading-relaxed">{r.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
