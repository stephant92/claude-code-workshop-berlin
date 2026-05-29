// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR LANDING PAGE
// Almost every text change you'll want to make lives here.
// You don't need to touch the components — they read from this file.
// ────────────────────────────────────────────────────────────────

export const business = {
  name: "Find your place in Berlin",
  shortName: "Berlin Rentals",
  tagline: "A calmer start to your Berlin flat search.",
};

export const nav = {
  links: [
    { label: "Why this", href: "#why" },
    { label: "Tips", href: "#tips" },
    { label: "Where to look", href: "#resources" },
  ],
  ctaLabel: "Start searching",
  ctaHref: "#resources",
};

export const hero = {
  eyebrow: "Renting in Berlin",
  heading: "Find your place in Berlin.",
  subheading:
    "The Berlin housing hunt is stressful and scattered across a dozen sites. This is a calm starting point: what to know, where to look, and how to act fast when the right flat appears.",
  ctaPrimary: { label: "See where to look", href: "#resources" },
  ctaSecondary: { label: "Why start here", href: "#why" },
};

// "Why this" — the 3 value cards
export const services = {
  heading: "Why start here",
  intro:
    "Three things that make the search less overwhelming.",
  items: [
    {
      title: "Curated platforms",
      summary:
        "The listing sites that actually matter, gathered in one place — so you're not juggling ten browser tabs and missing the good ones.",
    },
    {
      title: "Know your rights",
      summary:
        "Plain-English basics on registration, credit checks, and what a fair rental contract looks like, so nothing catches you off guard.",
    },
    {
      title: "Move fast",
      summary:
        "Good flats are gone within hours. Know what to prepare in advance so you can reply first and stand out from the crowd.",
    },
  ],
};

// "Tips" — practical bullets for Berlin renters
export const benefits = {
  heading: "What every Berlin renter should know",
  items: [
    {
      title: "Register your address (Anmeldung)",
      summary:
        "Within 14 days of moving in, register at your local Bürgeramt. You'll need this confirmation for almost everything — a bank account, taxes, even your internet contract.",
    },
    {
      title: "Get your SCHUFA early",
      summary:
        "The SCHUFA is a credit report landlords almost always ask for. Order yours before you start viewings so you're never the applicant who has to go fetch it.",
    },
    {
      title: "Check if you qualify for a WBS",
      summary:
        "A Wohnberechtigungsschein (WBS) unlocks cheaper, subsidised flats if your income is below a set threshold. It's free to check and can seriously widen your options.",
    },
    {
      title: "Know Kaltmiete vs. Warmmiete",
      summary:
        "Kaltmiete is the base rent; Warmmiete adds heating and utilities on top. Always compare the Warmmiete between listings — that's the number you'll actually pay each month.",
    },
    {
      title: "Prepare your application folder",
      summary:
        "Keep one PDF ready: ID, your last three payslips, your SCHUFA, and a short friendly intro. When a flat appears, you can apply within minutes instead of hours.",
    },
  ],
};

// "Resources" — real listing sites (open in a new tab)
export const resources = {
  heading: "Where to look",
  intro:
    "The main places Berliners actually find flats. Start with these.",
  items: [
    {
      name: "ImmoScout24",
      href: "https://www.immobilienscout24.de/",
      summary:
        "Germany's biggest listing site and the default starting point for full apartments. Set up a search alert so new listings reach you first.",
    },
    {
      name: "WG-Gesucht",
      href: "https://www.wg-gesucht.de/",
      summary:
        "The go-to for shared flats (WGs) and temporary sublets. Hugely popular in Berlin, especially for newcomers and students.",
    },
    {
      name: "Kleinanzeigen",
      href: "https://www.kleinanzeigen.de/",
      summary:
        "Formerly eBay Kleinanzeigen — lots of private, no-agent listings. Move quickly, and stay alert for the occasional scam.",
    },
  ],
};

export const meta = {
  title: "Find your place in Berlin — a calm start to your flat search",
  description:
    "A simple, friendly starting point for renting in Berlin: what to know, where to look, and how to act fast.",
};

// ────────────────────────────────────────────────────────────────
// HIDDEN SECTIONS — not shown on the page right now.
// These belong to template sections we're not using (how-it-works,
// testimonials, FAQ, contact). They're kept only so the template
// keeps working. If you ever want one of these sections, add it back
// in app/page.tsx and edit the text below.
// ────────────────────────────────────────────────────────────────

export const howItWorks = {
  heading: "How it works",
  steps: [
    { title: "", summary: "" },
  ],
};

export const testimonials = {
  heading: "What people say",
  quotes: [
    { text: "", author: "", role: "" },
  ],
};

export const faq = {
  heading: "Common questions",
  items: [
    { q: "", a: "" },
  ],
};

export const contact = {
  heading: "Get in touch",
  body: "",
  email: "",
  phone: "",
  hours: "",
  address: "",
};
