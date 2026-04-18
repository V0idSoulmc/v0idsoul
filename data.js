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
      short: "Sites vitrines, portfolios et landing pages qui convertissent.",
      description: "Du site vitrine minimaliste à la landing page percutante, je conçois des expériences web qui donnent envie de rester et d'agir. Design sur-mesure, responsive, performance optimale et SEO intégré dès le départ.",
      features: ["Sites vitrines & landing pages", "Portfolios & blogs", "Responsive & mobile-first", "SEO technique intégré", "Animations & micro-interactions", "Hébergement & mise en ligne"],
      tech: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind", "WordPress"],
      color: "#ffffff"
    },
    {
      id: "code", num: "02", icon: "⟨/⟩",
      title: "Applications web",
      short: "Full-stack, APIs REST, dashboards et outils sur mesure.",
      description: "Applications web complexes, tableaux de bord interactifs, APIs robustes, systèmes d'alertes en temps réel — je code des outils utiles et fiables. Comme STM Alertes (signalement métro) ou RH Québec (gestion RH SaaS).",
      features: ["Applications web full-stack", "Tableaux de bord & SaaS", "APIs REST & microservices", "Systèmes de notifications/alertes", "Authentification & gestion utilisateurs", "Intégrations tierces (Stripe, OAuth)"],
      tech: ["Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB", "Docker"],
      color: "#cccccc"
    },
    {
      id: "minecraft", num: "03", icon: "⛏",
      title: "Serveurs Minecraft",
      short: "Serveurs Paper/Spigot, plugins Java custom et configurations complètes.",
      description: "Création et configuration de serveurs Minecraft entièrement sur-mesure. Plugins Java développés de zéro, mécaniques de jeu uniques, expérience joueur optimisée — comme Territoria, mon projet personnel de serveur immersif.",
      features: ["Configuration serveur (Paper/Spigot)", "Plugins Java custom", "Mécaniques de jeu uniques", "Systèmes de guildes & territoires", "Optimisation performance & TPS", "Panneau admin & monitoring"],
      tech: ["Java", "Paper/Spigot", "BungeeCord", "MySQL", "Redis", "Linux"],
      color: "#aaaaaa"
    },
    {
      id: "desktop", num: "04", icon: "▣",
      title: "Applications desktop",
      short: "Apps Windows, Mac et Linux avec Electron — interface web, comportement natif.",
      description: "Applications desktop avec Electron pour Windows, Mac et Linux. Interface web moderne, comportement natif, auto-update intégré, packaging et installation simple. Comme le Territoria Launcher — un clic pour jouer.",
      features: ["Applications Electron multi-plateforme", "Interface moderne (React/HTML)", "Système d'auto-update", "Installation & packaging (.exe .dmg)", "Communication avec serveurs & APIs", "Notifications système natives"],
      tech: ["Electron", "Node.js", "React", "JavaScript", "TypeScript", "GitHub Actions"],
      color: "#888888"
    },
    {
      id: "design", num: "05", icon: "✦",
      title: "Créations graphiques",
      short: "Logos, identités visuelles complètes et assets digitaux.",
      description: "Du logo à la charte graphique complète. Je crée des visuels cohérents, distinctifs et adaptés à ton projet sur tous les supports — réseaux sociaux, web, print. L'identité visuelle qui dit qui tu es avant que tu parles.",
      features: ["Logo & identité visuelle", "Bannières & assets digitaux", "Supports pour réseaux sociaux", "Design d'interface (UI/UX)", "Icônes & illustrations", "Pitch decks & présentations"],
      tech: ["Figma", "Illustrator", "Photoshop", "After Effects", "Canva", "Procreate"],
      color: "#666666"
    },
    {
      id: "maintenance", num: "06", icon: "⟳",
      title: "Maintenance & Support",
      short: "Suivi continu, corrections rapides et évolutions régulières.",
      description: "Après la livraison, je reste disponible. Mises à jour régulières, corrections de bugs sous 48h, nouvelles fonctionnalités, monitoring de performance — ton projet continue d'évoluer sans que tu aies à t'en inquiéter.",
      features: ["Mises à jour régulières", "Corrections de bugs rapides", "Backups automatiques", "Monitoring de performance", "Support par message", "Évolutions & nouvelles features"],
      tech: ["Vercel", "Cloudflare", "GitHub Actions", "Netlify", "AWS", "Sentry"],
      color: "#444444"
    }
  ],
  projects: [
    {
      id: 1, title: "Territoria", category: "minecraft",
      tags: ["Minecraft", "Serveur", "En cours"],
      year: "2026-27",
      color1: "#141414", color2: "#222222",
      letter: "T",
      image: "Territoria.png",
      status: "En cours",
      description: "Serveur Minecraft immersif avec mécaniques de territoires, guildes et économie. Projet personnel ambitieux développé depuis 2024, sortie prévue 2026–2027."
    },
    {
      id: 2, title: "Territoria Launcher", category: "desktop",
      tags: ["Electron", "Desktop", "En cours"],
      year: 2025,
      color1: "#0f0f0f", color2: "#1c1c1c",
      letter: "L",
      status: "En cours",
      description: "Launcher Minecraft custom pour Territoria. Développé avec Electron — installation automatique, mises à jour en arrière-plan et connexion au serveur en un clic."
    },
    {
      id: 3, title: "RH Québec", category: "code",
      tags: ["Dashboard", "SaaS"],
      year: 2024,
      color1: "#101010", color2: "#1a1a1a",
      letter: "RH",
      image: "RH_Que_bec.png",
      description: "Tableau de bord RH pour jeunes entreprises québécoises. Gestion des employés, documents et paie — simple, accessible, sans superflu."
    },
    {
      id: 4, title: "STM Alertes", category: "web",
      tags: ["Web App", "Montréal"],
      year: 2024,
      color1: "#0c0c0c", color2: "#181818",
      letter: "S",
      description: "Application web permettant aux usagers du métro de Montréal de signaler des alertes en temps réel. Simple, communautaire et véritablement utile."
    }
  ],
  process: [
    { step: "01", title: "Échange",   desc: "Tu m'expliques ton projet, tes objectifs et tes contraintes. Pas de jargon — juste une conversation claire pour partir du bon pied." },
    { step: "02", title: "Plan",      desc: "Je définis la direction technique et visuelle. Architecture, technos, délais — tout est validé avant d'écrire une seule ligne de code." },
    { step: "03", title: "Build",     desc: "Je construis et itère régulièrement. Tu peux suivre l'avancement sur un lien de démo privé à chaque étape clé." },
    { step: "04", title: "Livraison", desc: "Mise en ligne, transfert complet des accès et code source, formation si besoin. Je reste disponible pour la suite." }
  ]
};
