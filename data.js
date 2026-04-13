/* ========================================================
   VØID Studio — Data Store
   Charge les données depuis data.json ou utilise les données
   inline si fetch n'est pas disponible (fichier local).
   ======================================================== */

window.DATA = {
  studio: {
    name: "VØID",
    tagline: "Nous faisons du bruit.",
    email: "hello@void-studio.fr",
    phone: "+33 6 12 34 56 78",
    address: "12 Rue du Faubourg, 75011 Paris",
    founded: 2019,
    description: "Un studio créatif qui transforme les idées sauvages en expériences digitales inoubliables."
  },
  stats: [
    { number: 87, label: "Projets livrés", suffix: "" },
    { number: 34, label: "Clients actifs", suffix: "+" },
    { number: 12, label: "Awards", suffix: "" },
    { number: 5, label: "Années d'expérience", suffix: "" }
  ],
  services: [
    {
      id: "web", num: "01", icon: "◈",
      title: "Création de site web",
      short: "Sites qui convertissent, séduisent, et marquent les esprits.",
      description: "Du site vitrine au e-commerce complet, on conçoit des expériences web qui donnent envie de rester. Design sur-mesure, animations soignées, performance maximale.",
      features: ["Sites vitrines & landing pages", "E-commerce (Shopify, WooCommerce)", "Blogs & portfolios", "Responsive & mobile-first", "SEO technique intégré", "Animations & micro-interactions"],
      tech: ["HTML/CSS", "JavaScript", "React", "Next.js", "Shopify", "WordPress"],
      color: "#b8ff57"
    },
    {
      id: "code", num: "02", icon: "⟨/⟩",
      title: "Code du tout",
      short: "Full-stack, APIs, scripts et automatisations. On code tout.",
      description: "Applications web complexes, APIs RESTful, automatisations, bots, outils internes — on code ce que les autres osent pas imaginer.",
      features: ["Applications web full-stack", "APIs & microservices", "Scripts & automatisations", "Bots & outils internes", "Intégrations tierces (Stripe, CRM…)", "Optimisation de performance"],
      tech: ["Node.js", "Python", "TypeScript", "PostgreSQL", "MongoDB", "Docker"],
      color: "#57c8ff"
    },
    {
      id: "collab", num: "03", icon: "⊕",
      title: "En collaboration avec",
      short: "Partenariats créatifs, co-création et projets à plusieurs mains.",
      description: "On adore travailler avec d'autres studios ou freelances. On s'intègre à votre équipe et on livre ensemble, sans friction.",
      features: ["Sous-traitance & white-label", "Renfort d'équipe temporaire", "Co-direction artistique", "Partenariats long terme", "Projets inter-studios", "Consulting & audit créatif"],
      tech: ["Figma", "Notion", "Slack", "GitHub", "Loom", "Miro"],
      color: "#ff9f57"
    },
    {
      id: "design", num: "04", icon: "✦",
      title: "Créations graphiques",
      short: "Identités visuelles, logos et supports qui marquent.",
      description: "Du logo au système de design complet. On forge des marques qui ne ressemblent à rien d'autre, avec une logique graphique cohérente sur tous les supports.",
      features: ["Logo & charte graphique", "Identité visuelle complète", "Supports print & digital", "Social media kit", "Pitch decks & présentations", "Illustration & iconographie"],
      tech: ["Figma", "Illustrator", "Photoshop", "After Effects", "InDesign", "Procreate"],
      color: "#ff4d6d"
    },
    {
      id: "motion", num: "05", icon: "▶",
      title: "Motion & Animation",
      short: "Animations, vidéos et contenus en mouvement.",
      description: "Le mouvement au service de votre message. De l'animation d'interface au reel Instagram, on donne vie à vos visuels avec précision.",
      features: ["Animations d'interface (CSS/JS)", "Motion design & vidéo", "Reels & shorts Instagram/TikTok", "Intro & bumper vidéo", "Animation de logo", "3D & effets visuels"],
      tech: ["After Effects", "Lottie", "GSAP", "Three.js", "Cinema 4D", "Blender"],
      color: "#c457ff"
    },
    {
      id: "maintenance", num: "06", icon: "⟳",
      title: "Maintenance & Support",
      short: "Suivi continu, mises à jour et tranquillité d'esprit.",
      description: "Après la livraison, on reste là. Mises à jour, corrections, évolutions et hébergement managé — votre site tourne, on veille.",
      features: ["Hébergement & nom de domaine", "Mises à jour de sécurité", "Backups automatiques", "Monitoring de performance", "Support email & téléphone", "Évolutions & nouvelles features"],
      tech: ["Vercel", "Cloudflare", "Netlify", "AWS", "GitHub Actions", "Sentry"],
      color: "#57ffd4"
    }
  ],
  projects: [
    { id: 1, title: "Nova Finance", category: "web", tags: ["Branding", "Web Design"], year: 2024, color1: "#1a0533", color2: "#0d1f4d", letter: "N", description: "Refonte complète de l'identité et du site pour une fintech parisienne. Design épuré, animations fluides, taux de conversion x3." },
    { id: 2, title: "Folia Studio", category: "design", tags: ["Identité visuelle", "Print"], year: 2024, color1: "#001a0d", color2: "#0a2020", letter: "F", description: "Création de l'identité visuelle complète pour un studio d'architecture végétale. Logo, charte, supports print." },
    { id: 3, title: "Kōdo Platform", category: "code", tags: ["Full-stack", "UX/UI"], year: 2023, color1: "#1a0a00", color2: "#2a1500", letter: "K", description: "Plateforme SaaS pour la gestion de projets créatifs. Dashboard interactif, API REST, 500+ utilisateurs au lancement." },
    { id: 4, title: "Vega Records", category: "motion", tags: ["Motion", "Branding"], year: 2023, color1: "#00001f", color2: "#0f002a", letter: "V", description: "Identité visuelle et motion design pour un label électronique berlinois. Visuels pour 12 sorties." },
    { id: 5, title: "Helix Lab", category: "collab", tags: ["Collaboration", "Web"], year: 2023, color1: "#0a1a00", color2: "#152e00", letter: "H", description: "Co-création avec un studio de Berlin pour un labo biotech. Direction artistique partagée, résultat unique." },
    { id: 6, title: "Oura Collective", category: "web", tags: ["E-commerce", "Design"], year: 2024, color1: "#1a0015", color2: "#2d0028", letter: "O", description: "Boutique Shopify custom pour un collectif de bijoux artisanaux. Expérience d'achat premium, taux de conversion +45%." }
  ],
  process: [
    { step: "01", title: "Découverte", desc: "Brief approfondi, pas de questions stupides. On comprend votre projet, vos objectifs et vos contraintes avant tout." },
    { step: "02", title: "Stratégie", desc: "Direction créative et technique. Moodboard, architecture, choix technologiques — tout validé avant la première ligne de code." },
    { step: "03", title: "Création", desc: "Itérations régulières, feedback loop court. Vous voyez l'avancement en temps réel sur un lien de démo privé." },
    { step: "04", title: "Livraison", desc: "Mise en ligne, transfert des accès, formation si besoin. On reste disponibles. La vraie fin, c'est votre succès." }
  ]
};