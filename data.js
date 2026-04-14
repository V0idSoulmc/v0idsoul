/* ========================================================
   VØID — Data Store
   ======================================================== */

window.DATA = {
  studio: {
    name: "VØID",
    tagline: "Je fais du bruit.",
    github: "https://github.com/V0idSoulmc",
    address: "Québec, Canada",
    founded: 2023,
    description: "Développeur & créatif freelance. Je construis des expériences digitales — seul, mais sans compromis sur la qualité."
  },
  stats: [
    { number: 4,  label: "Projets actifs",           suffix: "" },
    { number: 3,  label: "Années d'expérience",       suffix: "+" },
    { number: 8,  label: "Technologies maîtrisées",   suffix: "+" },
    { number: 1,  label: "Personne derrière tout ça", suffix: "" }
  ],
  services: [
    {
      id: "web", num: "01", icon: "◈",
      title: "Sites web & Landing pages",
      short: "Des sites rapides, beaux et qui convertissent.",
      description: "Du site vitrine minimaliste à la landing page percutante, je conçois des expériences web qui donnent envie de rester. Design sur-mesure, responsive, performance maximale.",
      features: ["Sites vitrines & landing pages", "Portfolios & blogs", "Responsive & mobile-first", "SEO technique intégré", "Animations & micro-interactions", "Hébergement & mise en ligne"],
      tech: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind", "WordPress"],
      color: "#b8ff57"
    },
    {
      id: "code", num: "02", icon: "⟨/⟩",
      title: "Applications web",
      short: "Full-stack, APIs, dashboards et outils en ligne.",
      description: "Applications web complexes, tableaux de bord, APIs, systèmes d'alertes — je code des outils utiles et robustes. Comme STM Alertes ou RH Québec.",
      features: ["Applications web full-stack", "Tableaux de bord & SaaS", "APIs REST & microservices", "Systèmes de notifications/alertes", "Authentification & gestion utilisateurs", "Intégrations tierces (Stripe, OAuth)"],
      tech: ["Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB", "Docker"],
      color: "#57c8ff"
    },
    {
      id: "minecraft", num: "03", icon: "⛏",
      title: "Serveurs Minecraft",
      short: "Serveurs custom, plugins Java et configurations.",
      description: "Création et configuration de serveurs Minecraft sur-mesure. Plugins custom, mécaniques de jeu uniques, expérience joueur optimisée — comme Territoria.",
      features: ["Configuration serveur (Paper/Spigot)", "Plugins Java custom", "Mécaniques de jeu uniques", "Systèmes de guildes & territoires", "Optimisation performance & TPS", "Panneau admin & monitoring"],
      tech: ["Java", "Paper/Spigot", "BungeeCord", "MySQL", "Redis", "Linux"],
      color: "#ff9f57"
    },
    {
      id: "desktop", num: "04", icon: "▣",
      title: "Applications desktop",
      short: "Apps multi-plateforme modernes avec Electron.",
      description: "Applications desktop avec Electron — Windows, Mac, Linux. Interface web, comportement natif. Auto-update, packaging, installation simple. Comme le Territoria Launcher.",
      features: ["Applications Electron multi-plateforme", "Interface moderne (React/HTML)", "Système d'auto-update", "Installation & packaging (.exe .dmg)", "Communication avec serveurs & APIs", "Notifications système natives"],
      tech: ["Electron", "Node.js", "React", "JavaScript", "TypeScript", "GitHub Actions"],
      color: "#ff4d6d"
    },
    {
      id: "design", num: "05", icon: "✦",
      title: "Créations graphiques",
      short: "Logos, identités visuelles et supports.",
      description: "Du logo à la charte graphique complète. Je crée des visuels cohérents qui correspondent à ton projet et à ton image, sur tous les supports.",
      features: ["Logo & identité visuelle", "Bannières & assets digitaux", "Supports pour réseaux sociaux", "Design d'interface (UI/UX)", "Icônes & illustrations", "Pitch decks & présentations"],
      tech: ["Figma", "Illustrator", "Photoshop", "After Effects", "Canva", "Procreate"],
      color: "#c457ff"
    },
    {
      id: "maintenance", num: "06", icon: "⟳",
      title: "Maintenance & Support",
      short: "Suivi continu, mises à jour et tranquillité d'esprit.",
      description: "Après la livraison, je reste disponible. Mises à jour régulières, corrections de bugs, nouvelles fonctionnalités — ton projet continue d'évoluer.",
      features: ["Mises à jour régulières", "Corrections de bugs rapides", "Backups automatiques", "Monitoring de performance", "Support par message", "Évolutions & nouvelles features"],
      tech: ["Vercel", "Cloudflare", "GitHub Actions", "Netlify", "AWS", "Sentry"],
      color: "#57ffd4"
    }
  ],
  projects: [
    {
      id: 1, title: "Territoria", category: "minecraft",
      tags: ["Minecraft", "Serveur", "En cours"],
      year: "2026-27",
      color1: "#1a0d00", color2: "#2d1a00",
      letter: "T",
      image: "Territoria.png",
      status: "En cours",
      description: "Serveur Minecraft immersif avec mécaniques de territoires et guildes. Projet personnel ambitieux, sortie prévue 2026–2027."
    },
    {
      id: 2, title: "Territoria Launcher", category: "desktop",
      tags: ["Electron", "Desktop", "En cours"],
      year: 2025,
      color1: "#0d1a0a", color2: "#152e0a",
      letter: "L",
      status: "En cours",
      description: "Launcher Minecraft custom pour Territoria. Développé avec Electron — installation, mises à jour et connexion au serveur en un clic."
    },
    {
      id: 3, title: "RH Québec", category: "code",
      tags: ["Dashboard", "SaaS"],
      year: 2024,
      color1: "#0a0a2d", color2: "#15153d",
      letter: "RH",
      image: "RH_Que_bec.png",
      description: "Tableau de bord RH pour jeunes entreprises québécoises. Gestion des employés, documents et paie — simple et accessible."
    },
    {
      id: 4, title: "STM Alertes", category: "web",
      tags: ["Web App", "Montréal"],
      year: 2024,
      color1: "#001a2d", color2: "#002d4d",
      letter: "S",
      description: "Application web permettant aux usagers du métro de Montréal de signaler des alertes en temps réel. Simple, communautaire, utile."
    }
  ],
  process: [
    { step: "01", title: "Échange",   desc: "Tu m'expliques ton projet, tes objectifs et tes contraintes. Pas de jargon, just clair." },
    { step: "02", title: "Plan",      desc: "Je définis la direction technique et visuelle. Architecture, technos — tout est validé avant de coder." },
    { step: "03", title: "Build",     desc: "Je construis et itère régulièrement. Tu peux suivre l'avancement sur un lien de démo privé." },
    { step: "04", title: "Livraison", desc: "Mise en ligne, transfert des accès, formation si besoin. Je reste disponible pour la suite." }
  ]
};
