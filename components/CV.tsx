import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 10,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 50,
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
  },
  // Header
  header: {
    marginBottom: 20,
    borderBottom: "2px solid #7c3aed",
    paddingBottom: 12,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    color: "#7c3aed",
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
  },
  contact: {
    fontSize: 9,
    color: "#6b7280",
  },
  // Section
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: 4,
    marginBottom: 8,
  },
  // Résumé
  summary: {
    fontSize: 10,
    color: "#374151",
    lineHeight: 1.5,
  },
  // Expérience
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 3,
  },
  expTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
  },
  expPeriod: {
    fontSize: 9,
    color: "#6b7280",
  },
  expCompany: {
    fontSize: 9,
    color: "#7c3aed",
    marginBottom: 4,
  },
  expItem: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 2,
  },
  expBullet: {
    fontSize: 10,
    color: "#6b7280",
  },
  expText: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.4,
    flex: 1,
  },
  expTags: {
    fontSize: 8,
    color: "#7c3aed",
    marginTop: 3,
  },
  expBlock: {
    marginBottom: 12,
  },
  // Formation
  eduHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  eduDegree: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#111827",
  },
  eduYear: {
    fontSize: 9,
    color: "#6b7280",
  },
  eduSchool: {
    fontSize: 9,
    color: "#7c3aed",
    marginBottom: 2,
  },
  eduDesc: {
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.4,
  },
  eduBlock: {
    marginBottom: 10,
  },
  // Compétences
  skillsRow: {
    marginBottom: 6,
  },
  skillCategory: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#374151",
    marginBottom: 2,
  },
  skillItems: {
    fontSize: 9,
    color: "#6b7280",
    lineHeight: 1.4,
  },
  // Langues
  langRow: {
    flexDirection: "row",
    gap: 20,
  },
  langItem: {
    fontSize: 9,
    color: "#374151",
  },
});

export default function CV() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.name}>TSIKY SYLVIA</Text>
          <Text style={styles.title}>
            Développeuse Full-Stack & IA — Mobile et Web
          </Text>
          <View style={styles.contactRow}>
            <Text style={styles.contact}>tnasylvia@gmail.com</Text>
            <Text style={styles.contact}>Antananarivo, Madagascar</Text>
            <Text style={styles.contact}>github.com/Tsiky-Sylvia</Text>
            <Text style={styles.contact}>Disponible en remote</Text>
          </View>
        </View>

        {/* RÉSUMÉ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profil</Text>
          <Text style={styles.summary}>
            Développeuse full-stack basée à Antananarivo, spécialisée dans la
            construction d'applications web et mobiles intégrant l'IA. Master
            of Science en Big Data & AI (ESTIA, 2025). Expérience professionnelle
            en entreprise (Eqima Solutions, 2022-2024). Rapide en montée en
            compétence, code propre et maintenable, forte capacité d'organisation
            en environnement remote.
          </Text>
        </View>

        {/* EXPÉRIENCE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Expériences professionnelles</Text>

          <View style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>Web & Mobile Developer</Text>
              <Text style={styles.expPeriod}>02/2023 — 12/2024</Text>
            </View>
            <Text style={styles.expCompany}>
              Eqima Solutions — Antananarivo, Madagascar
            </Text>
            {[
              "Développement d'une application Android pour la gestion des utilisateurs et des transactions.",
              "Intégration de TensorFlow Lite pour la détection automatique de données depuis des cartes d'identité.",
              "Mise en place d'une architecture de synchronisation fiable.",
              "Refonte et optimisation d'applications web existantes pour améliorer performance et maintenabilité.",
              "Mise en œuvre d'architectures backend fiables avec tests unitaires et pipeline CI/CD.",
            ].map((item, i) => (
              <View key={i} style={styles.expItem}>
                <Text style={styles.expBullet}>•</Text>
                <Text style={styles.expText}>{item}</Text>
              </View>
            ))}
            <Text style={styles.expTags}>
              Technologies: Android, Java, JavaScript, SQLite, TensorFlow Lite,
              Room, Retrofit, CI/CD
            </Text>
          </View>

          <View style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>
                Web & Mobile Developer Intern
              </Text>
              <Text style={styles.expPeriod}>06/2022 — 01/2023</Text>
            </View>
            <Text style={styles.expCompany}>
              Eqima Solutions — Antananarivo, Madagascar
            </Text>
            {[
              "Développement d'applications mobiles et web pour le suivi des transactions et commissions.",
              "Conception d'APIs REST avec Spring Boot, JPA et WebSocket.",
            ].map((item, i) => (
              <View key={i} style={styles.expItem}>
                <Text style={styles.expBullet}>•</Text>
                <Text style={styles.expText}>{item}</Text>
              </View>
            ))}
            <Text style={styles.expTags}>
              Technologies: Android, Spring Boot, JPA, WebSocket, MySQL, SQLite
            </Text>
          </View>
        </View>

        {/* PROJETS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projets phares</Text>

          <View style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>Assistant Planning</Text>
              <Text style={styles.expPeriod}>2025</Text>
            </View>
            <Text style={styles.expCompany}>
              assistant-planning.vercel.app
            </Text>
            <View style={styles.expItem}>
              <Text style={styles.expBullet}>•</Text>
              <Text style={styles.expText}>
                Application de planification hebdomadaire avec IA intégrée
                (Groq/Llama 3). Génération de planning depuis texte libre,
                drag & drop, authentification, persistance PostgreSQL.
              </Text>
            </View>
            <Text style={styles.expTags}>
              Stack: Next.js, TypeScript, Groq API, Prisma, PostgreSQL, Clerk,
              dnd-kit, Vercel
            </Text>
          </View>

          <View style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>ProposAI</Text>
              <Text style={styles.expPeriod}>2025</Text>
            </View>
            <Text style={styles.expCompany}>proposai.vercel.app</Text>
            <View style={styles.expItem}>
              <Text style={styles.expBullet}>•</Text>
              <Text style={styles.expText}>
                Générateur de propositions commerciales IA pour freelances et
                PME. Génération en 30 secondes, signature électronique, suivi
                en temps réel, export PDF, notifications email.
              </Text>
            </View>
            <Text style={styles.expTags}>
              Stack: Next.js, TypeScript, Groq API, Prisma, PostgreSQL, Clerk,
              Resend, react-pdf, Vercel
            </Text>
          </View>
        </View>

        {/* FORMATION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formation</Text>

          <View style={styles.eduBlock}>
            <View style={styles.eduHeader}>
              <Text style={styles.eduDegree}>
                Master of Science — Big Data & AI (eBIHAR)
              </Text>
              <Text style={styles.eduYear}>2025</Text>
            </View>
            <Text style={styles.eduSchool}>
              ESTIA — France (cours à distance)
            </Text>
            <Text style={styles.eduDesc}>
              Formation en Big Data, Intelligence Artificielle et systèmes
              distribués. Projets appliqués en machine learning et traitement
              de données massives.
            </Text>
          </View>

          <View style={styles.eduBlock}>
            <View style={styles.eduHeader}>
              <Text style={styles.eduDegree}>
                Licence en Informatique — Web et Design
              </Text>
              <Text style={styles.eduYear}>2022</Text>
            </View>
            <Text style={styles.eduSchool}>
              ITU — Andoharanofotsy, Antananarivo, Madagascar
            </Text>
          </View>
        </View>

        {/* COMPÉTENCES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Compétences techniques</Text>

          {[
            {
              category: "Frontend",
              items: "Next.js, React, TypeScript, Tailwind CSS, Angular, JavaScript",
            },
            {
              category: "Backend",
              items: "Node.js, Spring Boot, REST APIs, WebSocket, JPA/Hibernate",
            },
            {
              category: "Mobile",
              items: "Android, Kotlin, Java, Jetpack Compose, Retrofit, Firebase",
            },
            {
              category: "IA & Data",
              items: "Groq API, TensorFlow Lite, OpenCV, LLM Integration, Big Data",
            },
            {
              category: "Base de données",
              items: "PostgreSQL, MySQL, SQLite, Prisma, Room",
            },
            {
              category: "DevOps & Outils",
              items: "Git, GitHub/GitLab CI/CD, Vercel, Docker, Postman, JUnit",
            },
          ].map((skill) => (
            <View key={skill.category} style={styles.skillsRow}>
              <Text style={styles.skillCategory}>{skill.category}:</Text>
              <Text style={styles.skillItems}>{skill.items}</Text>
            </View>
          ))}
        </View>

        {/* LANGUES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Langues</Text>
          <View style={styles.langRow}>
            <Text style={styles.langItem}>Français: Avancé (C1)</Text>
            <Text style={styles.langItem}>Anglais: Intermédiaire supérieur (B2)</Text>
            <Text style={styles.langItem}>Malgache: Langue maternelle</Text>
          </View>
        </View>

      </Page>
    </Document>
  );
}