import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Benefits } from "../components/Benefits";
import { Resources } from "../components/Resources";
import { business } from "../content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Resources />
      </main>
      <footer className="bg-muted border-t border-ink/10 px-6 py-10 text-center text-sm text-ink/60">
        <p className="text-base text-ink/80">{business.tagline}</p>
        <p className="mt-2">
          © {new Date().getFullYear()} · Made with Claude Code in Berlin
        </p>
      </footer>
    </>
  );
}
