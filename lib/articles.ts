export type Article = {
  slug: string;
  emoji: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  date: string;
  readTime: { fr: string; en: string };
  tags: string[];
  content: { fr: string; en: string };
};

export const articles: Article[] = [
  {
    slug: "groq-nextjs-ai-planning",
    emoji: "🤖",
    title: {
      fr: "Comment j'ai intégré l'IA dans une app de planification avec Groq et Next.js",
      en: "How I integrated AI into a planning app with Groq and Next.js",
    },
    description: {
      fr: "Retour technique sur l'intégration d'un LLM dans une vraie application web — du prompt engineering à la fiabilisation du JSON en sortie.",
      en: "Technical deep-dive on integrating an LLM into a real web application — from prompt engineering to reliable JSON output.",
    },
    date: "2025-07-01",
    readTime: { fr: "8 min de lecture", en: "8 min read" },
    tags: ["Next.js", "Groq", "LLM", "TypeScript", "Prompt Engineering"],
    content: {
      fr: `## Le problème à résoudre

Quand j'ai commencé à construire Assistant Planning, l'idée était simple: l'utilisateur tape ses tâches en langage naturel, et l'application génère un planning structuré pour la semaine. Facile à dire, moins évident à implémenter.

Le vrai défi n'était pas d'appeler une API d'IA — c'est une affaire de quelques lignes. Le vrai défi était de rendre cette intégration **fiable, rapide et exploitable** dans une vraie interface utilisateur.

## Pourquoi Groq plutôt qu'OpenAI ou Anthropic?

Trois raisons principales:

**1. La vitesse.** Groq utilise des puces LPU (Language Processing Units) qui permettent des inférences extrêmement rapides — on parle de 500-800 tokens/seconde contre 50-100 pour les providers classiques. Pour une app de planification où l'utilisateur attend la réponse, cette différence est énorme.

**2. Le prix.** Groq offre un tier gratuit généreux — parfait pour un projet en développement sans budget API.

**3. La compatibilité.** L'API Groq est compatible OpenAI, ce qui signifie qu'un changement de provider est trivial si besoin.

## Le prompt engineering — la partie la plus critique

C'est ici que j'ai passé le plus de temps. Un LLM sans instructions précises retourne du texte libre — impossible à parser programmatiquement. J'avais besoin d'un JSON structuré et fiable à chaque appel.

Voici les règles que j'ai appliquées dans le prompt système:

\`\`\`
Tu es un assistant de planification intelligent.
[...]
IMPORTANT: Tu dois répondre UNIQUEMENT avec un tableau JSON valide,
sans aucun texte avant ou après, sans backticks, sans markdown.
\`\`\`

La clé est dans le mot **UNIQUEMENT** en majuscules et la liste exhaustive de ce qui est interdit. Sans ça, le modèle ajoute souvent une phrase d'introduction ou enveloppe le JSON dans des backticks markdown.

J'ai aussi utilisé \`response_format: { type: "json_object" }\` côté SDK pour forcer le format JSON — une double protection.

## Structurer la sortie avec des types TypeScript

Une fois le JSON récupéré, je le type immédiatement:

\`\`\`typescript
type GeneratedTask = {
  title: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  category: string;
  estimatedDuration: number;
  suggestedDay: string;
};
\`\`\`

Le parsing se fait dans un try/catch avec un message d'erreur clair pour l'utilisateur si le JSON est invalide — ce qui arrive rarement mais peut arriver si le modèle "hallucine" du contenu non JSON.

## Les règles de distribution dans le prompt

Ce qui fait la valeur de l'app, c'est pas juste la structuration — c'est la qualité des décisions de l'IA. J'ai défini des règles explicites:

- Les tâches **HIGH** priority vont en début de semaine (lundi, mardi)
- Maximum 3-4 tâches par jour pour éviter la surcharge
- Les tâches perso peuvent aller en fin de semaine
- La durée estimée doit être réaliste selon le type de tâche

Ces règles sont dans le prompt système et font toute la différence entre une IA qui "range" des tâches au hasard et une IA qui planifie intelligemment.

## Tests avec des inputs variés

J'ai testé trois types d'inputs:

**Input clair**: "finir le rapport client, appeler le plombier, préparer la présentation de vendredi" → résultat parfait, priorités bien attribuées.

**Input ambigu**: "bosser sur le truc de demain, rappeler machin, finir ce que j'ai pas fini" → l'IA interprète intelligemment plutôt que de planter, ce qui est le bon comportement.

**Input long** (12 tâches): distribution équilibrée sur 7 jours, aucun jour surchargé — exactement ce qu'on attendait.

## Ce que j'ai appris

L'intégration d'un LLM dans une app web n'est pas complexe techniquement — l'API est simple. La vraie compétence est dans le **prompt engineering**: définir des règles précises, anticiper les cas limites, et construire des filets de sécurité (parsing robuste, gestion d'erreurs, feedback utilisateur) pour que l'expérience reste fluide même quand le modèle n'est pas parfait.`,

      en: `## The problem to solve

When I started building Assistant Planning, the idea was simple: the user types their tasks in natural language, and the app generates a structured schedule for the week. Easy to say, less obvious to implement.

The real challenge wasn't calling an AI API — that's a matter of a few lines. The real challenge was making this integration **reliable, fast and usable** in a real user interface.

## Why Groq instead of OpenAI or Anthropic?

Three main reasons:

**1. Speed.** Groq uses LPU (Language Processing Units) chips that enable extremely fast inference — we're talking 500-800 tokens/second versus 50-100 for classic providers. For a planning app where the user is waiting for a response, this difference is huge.

**2. Price.** Groq offers a generous free tier — perfect for a development project without an API budget.

**3. Compatibility.** The Groq API is OpenAI-compatible, meaning switching providers is trivial if needed.

## Prompt engineering — the most critical part

This is where I spent the most time. An LLM without precise instructions returns free text — impossible to parse programmatically. I needed structured, reliable JSON on every call.

Here are the rules I applied in the system prompt:

\`\`\`
You are an intelligent planning assistant.
[...]
IMPORTANT: You must respond ONLY with a valid JSON array,
with no text before or after, no backticks, no markdown.
\`\`\`

The key is in the word **ONLY** in capitals and the exhaustive list of what's forbidden. Without that, the model often adds an introductory sentence or wraps the JSON in markdown backticks.

I also used \`response_format: { type: "json_object" }\` on the SDK side to force JSON format — a double protection.

## Structuring output with TypeScript types

Once I get the JSON back, I type it immediately:

\`\`\`typescript
type GeneratedTask = {
  title: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  category: string;
  estimatedDuration: number;
  suggestedDay: string;
};
\`\`\`

Parsing happens in a try/catch with a clear error message for the user if the JSON is invalid — which rarely happens but can if the model "hallucinates" non-JSON content.

## Distribution rules in the prompt

What makes the app valuable isn't just the structuring — it's the quality of the AI's decisions. I defined explicit rules:

- **HIGH** priority tasks go early in the week (Monday, Tuesday)
- Maximum 3-4 tasks per day to avoid overload
- Personal tasks can go at the end of the week
- Estimated duration must be realistic based on task type

These rules are in the system prompt and make all the difference between an AI that randomly "sorts" tasks and one that actually plans intelligently.

## Testing with varied inputs

I tested three types of inputs:

**Clear input**: "finish the client report, call the plumber, prepare Friday's presentation" → perfect result, priorities well assigned.

**Ambiguous input**: "work on the thing for tomorrow, call whatsisname, finish what I didn't finish" → AI interprets intelligently rather than failing, which is the right behavior.

**Long input** (12 tasks): balanced distribution across 7 days, no day overloaded — exactly what we expected.

## What I learned

Integrating an LLM into a web app isn't technically complex — the API is simple. The real skill is in **prompt engineering**: defining precise rules, anticipating edge cases, and building safety nets (robust parsing, error handling, user feedback) so the experience stays smooth even when the model isn't perfect.`,
    },
  },
  {
    slug: "prisma-neon-vercel-serverless",
    emoji: "🗄️",
    title: {
      fr: "Prisma + Neon + Vercel: le trio parfait pour un backend serverless",
      en: "Prisma + Neon + Vercel: the perfect trio for a serverless backend",
    },
    description: {
      fr: "Comment j'ai configuré une base de données PostgreSQL serverless avec Prisma et Neon pour mes projets Next.js déployés sur Vercel — et les problèmes que j'ai rencontrés.",
      en: "How I configured a serverless PostgreSQL database with Prisma and Neon for my Next.js projects deployed on Vercel — and the problems I encountered.",
    },
    date: "2025-07-15",
    readTime: { fr: "6 min de lecture", en: "6 min read" },
    tags: ["Prisma", "Neon", "Vercel", "PostgreSQL", "Serverless", "Next.js"],
    content: {
      fr: `## Pourquoi ce trio?

Quand on développe une application Next.js full-stack et qu'on veut la déployer sur Vercel, on fait face à un choix architectural important: quelle base de données utiliser?

Les contraintes sont claires:
- **Vercel est serverless** — pas de connexions persistantes à une DB traditionnelle
- **Les API Routes Next.js** s'exécutent dans des fonctions éphémères
- On veut **PostgreSQL** pour sa robustesse et ses fonctionnalités relationnelles
- On veut un **tier gratuit** pour démarrer sans coût

C'est exactement ce que résout la combinaison Prisma + Neon + Vercel.

## Neon — PostgreSQL serverless natif

Neon est une base de données PostgreSQL qui se comporte comme une fonction serverless: elle s'endort quand elle n'est pas utilisée et se réveille en quelques millisecondes à la première requête. C'est parfait pour un déploiement Vercel.

Le tier gratuit offre:
- 512 MB de stockage
- Connexions poolées incluses
- Branching (très utile pour les environnements de développement)

La configuration est simple: créer un projet sur neon.tech, récupérer la connection string, et c'est parti.

## Prisma — L'ORM qui simplifie tout

Prisma est un ORM TypeScript qui génère un client fortement typé à partir de votre schéma. Concrètement, ça ressemble à ça:

\`\`\`prisma
model Task {
  id        String   @id @default(cuid())
  title     String
  priority  Priority @default(MEDIUM)
  userId    String
  user      User     @relation(fields: [userId], references: [id])
}
\`\`\`

Et côté code:

\`\`\`typescript
const tasks = await prisma.task.findMany({
  where: { userId: user.id },
  orderBy: { createdAt: "desc" },
});
\`\`\`

Pas de SQL à écrire, auto-complétion complète, et les types sont inférés automatiquement.

## Le problème du port 5432

Premier piège que j'ai rencontré: mon réseau local bloquait le port 5432 (le port TCP standard de PostgreSQL). Résultat: impossible de faire tourner les migrations Prisma ou d'utiliser Prisma Studio.

La solution: utiliser **@prisma/adapter-neon** qui passe par WebSockets (port 443) au lieu de TCP:

\`\`\`typescript
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter });
\`\`\`

Cette configuration fonctionne aussi bien en local qu'en production, sans VPN ni configuration réseau particulière.

## Le piège du client Prisma sur Vercel

Deuxième problème: lors du déploiement sur Vercel, le build échouait avec:

\`\`\`
Module not found: Can't resolve '@/app/generated/prisma'
\`\`\`

La cause: le dossier \`generated/\` est dans le .gitignore — Prisma génère le client localement mais il n'est pas versionné. Vercel fait un \`npm install\` puis build sans jamais générer le client.

La solution: ajouter un script \`postinstall\` dans \`package.json\`:

\`\`\`json
{
  "scripts": {
    "postinstall": "prisma generate"
  }
}
\`\`\`

\`postinstall\` s'exécute automatiquement après \`npm install\` — donc Vercel génère le client avant le build. Problème résolu.

## La configuration deux URLs

Neon recommande deux connection strings différentes:

- **DATABASE_URL**: connexion poolée (via pgBouncer) — pour les requêtes de l'app
- **DIRECT_URL**: connexion directe — pour les migrations Prisma

\`\`\`prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
\`\`\`

La connexion poolée limite le nombre de connexions simultanées, ce qui est essentiel en serverless où chaque invocation de fonction peut ouvrir une nouvelle connexion.

## Ce que j'ai appris

Ce trio Prisma + Neon + Vercel est aujourd'hui ma stack par défaut pour tout nouveau projet Next.js full-stack. Il résout élégamment le problème des connexions DB en environnement serverless, offre une excellente DX avec Prisma, et le tout est gratuit pour démarrer.

Les pièges à éviter: ne pas oublier le script \`postinstall\`, utiliser \`@prisma/adapter-neon\` si votre réseau bloque le port 5432, et bien configurer les deux URLs (poolée et directe) dans votre \`.env\`.`,

      en: `## Why this trio?

When developing a full-stack Next.js application and wanting to deploy it on Vercel, you face an important architectural choice: which database to use?

The constraints are clear:
- **Vercel is serverless** — no persistent connections to a traditional DB
- **Next.js API Routes** run in ephemeral functions
- We want **PostgreSQL** for its robustness and relational features
- We want a **free tier** to start without cost

That's exactly what the Prisma + Neon + Vercel combination solves.

## Neon — Native serverless PostgreSQL

Neon is a PostgreSQL database that behaves like a serverless function: it sleeps when not in use and wakes up in milliseconds on the first request. Perfect for a Vercel deployment.

The free tier offers:
- 512 MB storage
- Pooled connections included
- Branching (very useful for development environments)

Setup is simple: create a project on neon.tech, grab the connection string, and you're good to go.

## Prisma — The ORM that simplifies everything

Prisma is a TypeScript ORM that generates a strongly-typed client from your schema. Concretely, it looks like this:

\`\`\`prisma
model Task {
  id        String   @id @default(cuid())
  title     String
  priority  Priority @default(MEDIUM)
  userId    String
  user      User     @relation(fields: [userId], references: [id])
}
\`\`\`

And on the code side:

\`\`\`typescript
const tasks = await prisma.task.findMany({
  where: { userId: user.id },
  orderBy: { createdAt: "desc" },
});
\`\`\`

No SQL to write, full autocomplete, and types are inferred automatically.

## The port 5432 problem

First issue I encountered: my local network was blocking port 5432 (the standard TCP port for PostgreSQL). Result: impossible to run Prisma migrations or use Prisma Studio.

The solution: use **@prisma/adapter-neon** which goes through WebSockets (port 443) instead of TCP:

\`\`\`typescript
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter });
\`\`\`

This configuration works equally well locally and in production, without VPN or special network configuration.

## The Prisma client trap on Vercel

Second problem: when deploying to Vercel, the build failed with:

\`\`\`
Module not found: Can't resolve '@/app/generated/prisma'
\`\`\`

The cause: the \`generated/\` folder is in .gitignore — Prisma generates the client locally but it's not versioned. Vercel does \`npm install\` then builds without ever generating the client.

The solution: add a \`postinstall\` script in \`package.json\`:

\`\`\`json
{
  "scripts": {
    "postinstall": "prisma generate"
  }
}
\`\`\`

\`postinstall\` runs automatically after \`npm install\` — so Vercel generates the client before the build. Problem solved.

## The two-URL configuration

Neon recommends two different connection strings:

- **DATABASE_URL**: pooled connection (via pgBouncer) — for app queries
- **DIRECT_URL**: direct connection — for Prisma migrations

\`\`\`prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
\`\`\`

The pooled connection limits the number of simultaneous connections, which is essential in serverless where each function invocation can open a new connection.

## What I learned

This Prisma + Neon + Vercel trio is now my default stack for any new full-stack Next.js project. It elegantly solves the DB connection problem in serverless environments, offers excellent DX with Prisma, and it's all free to start.

Pitfalls to avoid: don't forget the \`postinstall\` script, use \`@prisma/adapter-neon\` if your network blocks port 5432, and properly configure both URLs (pooled and direct) in your \`.env\`.`,
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}