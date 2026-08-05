export type Project = {
  slug: string;
  emoji: string;
  title: string;
  shortDescription: { fr: string; en: string };
  longDescription: { fr: string; en: string };
  context: { fr: string; en: string };
  challenges: { fr: string; en: string }[];
  tags: string[];
  color: string;
  bg: string;
  demo: string;
  github: string;
  features: { fr: string; en: string }[];
  stack: { category: string; items: string[] }[];
};

export const projects: Project[] = [
  {
    slug: "assistant-planning",
    emoji: "📅",
    title: "Assistant Planning",
    shortDescription: {
      fr: "Application de planification hebdomadaire intelligente avec IA intégrée, drag & drop et persistance des données.",
      en: "Intelligent weekly planning application with integrated AI, drag & drop and data persistence.",
    },
    longDescription: {
      fr: "Assistant Planning transforme une liste de tâches en texte libre en un planning hebdomadaire structuré grâce à l'IA. L'utilisateur décrit ses tâches naturellement, l'IA les analyse, les priorise et les distribue sur la semaine. Il peut ensuite les réorganiser par drag & drop, les marquer comme terminées, en ajouter manuellement ou les modifier.",
      en: "Assistant Planning transforms a free-text task list into a structured weekly schedule using AI. The user describes their tasks naturally, AI analyzes, prioritizes and distributes them across the week. They can then reorganize by drag & drop, mark as done, add manually or edit them.",
    },
    context: {
      fr: "Projet personnel conçu pour démontrer l'intégration d'un LLM dans une application web full-stack. L'objectif était de créer un outil réellement utile au quotidien, pas un simple wrapper d'API.",
      en: "Personal project designed to demonstrate LLM integration in a full-stack web application. The goal was to create a genuinely useful daily tool, not just a simple API wrapper.",
    },
    challenges: [
      {
        fr: "Fiabiliser la sortie JSON de l'IA — le modèle pouvait retourner du texte non structuré. Résolu avec un prompt strict et un parsing avec fallback.",
        en: "Ensuring reliable JSON output from AI — the model could return unstructured text. Solved with a strict prompt and parsing with fallback.",
      },
      {
        fr: "Connexion PostgreSQL bloquée par le réseau local (port 5432). Résolu avec @prisma/adapter-neon qui passe par WebSockets.",
        en: "PostgreSQL connection blocked by local network (port 5432). Solved with @prisma/adapter-neon using WebSockets.",
      },
      {
        fr: "Drag & drop entre colonnes — le DragOverlay interceptait les événements. Résolu en supprimant l'overlay et en gérant l'effet visuel directement sur la carte.",
        en: "Drag & drop between columns — DragOverlay intercepted events. Solved by removing the overlay and handling visual effect directly on the card.",
      },
    ],
    features: [
      {
        fr: "Génération de planning via IA à partir de texte libre",
        en: "AI-powered planning generation from free text",
      },
      {
        fr: "Vue planning hebdomadaire interactive (7 colonnes)",
        en: "Interactive weekly planning view (7 columns)",
      },
      {
        fr: "Drag & drop des tâches entre les jours",
        en: "Drag & drop tasks between days",
      },
      {
        fr: "Ajout et modification manuelle des tâches",
        en: "Manual task addition and editing",
      },
      {
        fr: "Marquage des tâches comme terminées",
        en: "Mark tasks as completed",
      },
      {
        fr: "Authentification complète avec Clerk",
        en: "Complete authentication with Clerk",
      },
    ],
    tags: ["Next.js", "TypeScript", "Groq AI", "Prisma", "PostgreSQL", "dnd-kit", "Clerk", "Tailwind"],
    color: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    demo: "https://assistant-planning.vercel.app",
    github: "https://github.com/Tsiky-Sylvia/assistant-planning",
    stack: [
      { category: "Frontend", items: ["Next.js 15", "TypeScript", "Tailwind CSS", "dnd-kit"] },
      { category: "Backend", items: ["Next.js API Routes", "Prisma", "PostgreSQL (Neon)"] },
      { category: "IA", items: ["Groq API", "Llama 3.3 70B"] },
      { category: "Auth", items: ["Clerk"] },
      { category: "Déploiement", items: ["Vercel", "Neon"] },
    ],
  },
  {
    slug: "proposai",
    emoji: "📄",
    title: "ProposAI",
    shortDescription: {
      fr: "Générateur de propositions commerciales IA pour freelances et PME avec signature électronique et suivi en temps réel.",
      en: "AI-powered commercial proposal generator for freelancers and SMEs with electronic signature and real-time tracking.",
    },
    longDescription: {
      fr: "ProposAI permet aux freelances et PME de générer une proposition commerciale professionnelle en 30 secondes. Le freelance décrit le projet, l'IA génère un document complet (contexte, livrables, planning, tarification, conditions). Le client reçoit un lien unique, peut consulter la proposition, la signer électroniquement ou demander un renouvellement.",
      en: "ProposAI enables freelancers and SMEs to generate a professional commercial proposal in 30 seconds. The freelancer describes the project, AI generates a complete document (context, deliverables, timeline, pricing, conditions). The client receives a unique link, can view the proposal, sign electronically or request renewal.",
    },
    context: {
      fr: "Projet conçu pour résoudre un vrai problème du marché freelance francophone: les outils de propositions commerciales existants sont soit trop chers (50-100$/mois), soit en anglais, soit trop complexes pour un indépendant solo.",
      en: "Project designed to solve a real problem in the French-speaking freelance market: existing proposal tools are either too expensive (50-100$/month), in English only, or too complex for a solo freelancer.",
    },
    challenges: [
      {
        fr: "Conflit de types entre @react-pdf/renderer et React — résolu avec un cast `as ReactElement<DocumentProps>`.",
        en: "Type conflict between @react-pdf/renderer and React — solved with an `as ReactElement<DocumentProps>` cast.",
      },
      {
        fr: "useSearchParams() sans Suspense boundary en production — non détecté en dev, bloquait le build Vercel.",
        en: "useSearchParams() without Suspense boundary in production — undetected in dev, blocked Vercel build.",
      },
      {
        fr: "Client Prisma non généré sur Vercel — résolu avec un script postinstall dans package.json.",
        en: "Prisma client not generated on Vercel — solved with a postinstall script in package.json.",
      },
    ],
    features: [
      {
        fr: "Génération IA de proposition en 30 secondes",
        en: "AI proposal generation in 30 seconds",
      },
      {
        fr: "Envoi au client par email avec lien unique",
        en: "Send to client by email with unique link",
      },
      {
        fr: "Signature électronique avec preuve d'acceptation",
        en: "Electronic signature with acceptance proof",
      },
      {
        fr: "Suivi en temps réel (consultée, acceptée, refusée)",
        en: "Real-time tracking (viewed, accepted, declined)",
      },
      {
        fr: "Export PDF professionnel",
        en: "Professional PDF export",
      },
      {
        fr: "Dashboard avec statistiques et filtres",
        en: "Dashboard with statistics and filters",
      },
      {
        fr: "Renouvellement de proposition en un clic",
        en: "One-click proposal renewal",
      },
    ],
    tags: ["Next.js", "TypeScript", "Groq AI", "Prisma", "PostgreSQL", "Clerk", "Resend", "PDF"],
    color: "from-blue-500 to-indigo-600",
    bg: "from-blue-50 to-indigo-50",
    demo: "https://proposai.vercel.app",
    github: "https://github.com/Tsiky-Sylvia/proposai",
    stack: [
      { category: "Frontend", items: ["Next.js 15", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Next.js API Routes", "Prisma", "PostgreSQL (Neon)"] },
      { category: "IA", items: ["Groq API", "Llama 3.3 70B"] },
      { category: "Auth & Email", items: ["Clerk", "Resend"] },
      { category: "PDF", items: ["@react-pdf/renderer"] },
      { category: "Déploiement", items: ["Vercel", "Neon"] },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}