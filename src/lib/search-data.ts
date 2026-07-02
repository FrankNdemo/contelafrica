import {
  INSIGHTS,
  LEADERSHIP,
  MILESTONES,
  OFFICES,
  PROCESS,
  PROJECTS,
  SERVICES,
  WHY_CONTEL,
} from "@/lib/site-data";

export type SearchEntry = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  keywords: string;
  external?: boolean;
};

const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, " ").trim();

const joinText = (parts: Array<string | number | undefined | null | string[]>) =>
  parts
    .flatMap((part) => (Array.isArray(part) ? part : [part]))
    .filter(Boolean)
    .join(" ");

export const SITE_SEARCH_ENTRIES: SearchEntry[] = [
  {
    title: "Contel Africa",
    eyebrow: "Company",
    description:
      "Engineering, construction, infrastructure and project delivery across African markets.",
    href: "/about",
    keywords: "home about contel africa construction engineering kenya nairobi company profile",
  },
  {
    title: "Request a quote",
    eyebrow: "Contact",
    description:
      "Start a construction, renovation, interior, electrical, telecoms or infrastructure project.",
    href: "/contact",
    keywords: "quote contact request project appointment phone email enquiry",
  },
  ...SERVICES.map((service) => ({
    title: service.title,
    eyebrow: `Service / ${service.category}`,
    description: service.description,
    href: `/services/${service.slug}`,
    keywords: joinText([
      service.title,
      service.short,
      service.description,
      service.category,
      service.features?.map((feature) => `${feature.title} ${feature.detail}`),
    ]),
  })),
  ...PROJECTS.map((project) => ({
    title: project.title,
    eyebrow: `Project / ${project.sector}`,
    description: `${project.city}, ${project.country}. ${project.scope}`,
    href: `/projects/${project.slug}`,
    keywords: joinText([
      project.title,
      project.sector,
      project.country,
      project.city,
      project.client,
      project.scope,
      project.overview,
      project.challenge,
      project.solution,
      project.technologies,
    ]),
  })),
  ...INSIGHTS.map((insight) => ({
    title: insight.title,
    eyebrow: `Insight / ${insight.category}`,
    description: insight.excerpt,
    href: `/insights/${insight.slug}`,
    keywords: joinText([
      insight.title,
      insight.category,
      insight.excerpt,
      insight.body,
      insight.date,
    ]),
  })),
  ...LEADERSHIP.map((member) => ({
    title: member.name,
    eyebrow: member.role,
    description: member.bio,
    href: "/about",
    keywords: joinText([member.name, member.role, member.bio, member.phone]),
  })),
  ...MILESTONES.map((milestone) => ({
    title: milestone.title,
    eyebrow: `Milestone / ${milestone.year}`,
    description: milestone.body,
    href: "/about",
    keywords: joinText([milestone.year, milestone.title, milestone.body]),
  })),
  ...WHY_CONTEL.map((card) => ({
    title: card.title,
    eyebrow: "Why Contel",
    description: card.body,
    href: "/expertise",
    keywords: joinText([card.title, card.body]),
  })),
  ...PROCESS.map((step) => ({
    title: step.title,
    eyebrow: `Process / Step ${step.step}`,
    description: step.body,
    href: "/expertise",
    keywords: joinText([step.step, step.title, step.body]),
  })),
  ...OFFICES.map((office) => ({
    title: office.address,
    eyebrow: "Location",
    description: office.address,
    href: "/presence",
    keywords: joinText([office.address, "office location presence"]),
  })),
];

export function searchSite(query: string) {
  const term = normalize(query);
  if (!term) return SITE_SEARCH_ENTRIES.slice(0, 8);

  const words = term.split(" ").filter(Boolean);

  return SITE_SEARCH_ENTRIES.map((entry) => {
    const haystack = normalize(
      joinText([entry.title, entry.eyebrow, entry.description, entry.keywords]),
    );
    const title = normalize(entry.title);
    const score =
      (title.includes(term) ? 8 : 0) +
      (haystack.includes(term) ? 5 : 0) +
      words.reduce((total, word) => total + (haystack.includes(word) ? 1 : 0), 0);

    return { entry, score };
  })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .map(({ entry }) => entry)
    .slice(0, 10);
}

export function googleSearchLinks(query: string): SearchEntry[] {
  const term = query.trim() || "Contel Africa";
  const searches = [
    `${term} Contel Africa`,
    `${term} Contel Africa Limited Kenya`,
    `Contel Africa construction engineering projects ${term}`,
  ];

  return searches.map((search, index) => ({
    title: index === 0 ? `Search Google for "${term}"` : search,
    eyebrow: "Google link",
    description: "Open a broader Google search related to Contel and this topic.",
    href: `https://www.google.com/search?q=${encodeURIComponent(search)}`,
    keywords: search,
    external: true,
  }));
}
