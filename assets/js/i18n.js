/* =========================================================
   Dictionnaire de traductions FR / EN
   Toute clé référencée dans le HTML via data-i18n="cle"
   ========================================================= */
const TRANSLATIONS = {
  fr: {
    "meta.title": "Alexandre Bruno — Développeur Fullstack",
    "meta.description":
      "Portfolio d'Alexandre Bruno, développeur fullstack et étudiant ingénieur web à Aix-en-Provence.",

    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.education": "Formation",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    "hero.kicker": "portfolio.dev — session active",
    "hero.title.pre": "Salut, je suis ",
    "hero.title.name": "Alexandre",
    "hero.lead":
      "Développeur fullstack de 25 ans, diplômé d'un Master Ingénieur Web à Ynov Campus. J'aime transformer un besoin flou en produit qui tourne vraiment.",
    "hero.meta.age": "25 ans",
    "hero.meta.location": "Aix-en-Provence, France",
    "hero.meta.status": "Ouvert aux opportunités",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Me contacter",
    "hero.term.title": "~/alexandre-bruno — zsh",
    "hero.term.whoami": "whoami",
    "hero.term.roles_cmd": "cat roles.log",
    "hero.term.role1": "Software Engineer",
    "hero.term.role2": "Développeur Fullstack",
    "hero.term.role3": "Chef de projet",
    "hero.term.role4": "Étudiant Ingénieur Web",

    "about.eyebrow": "about",
    "about.title": "À propos",
    "about.p1":
      "L'univers du développement est une passion depuis l'enfance : partir de rien, écrire du code, et voir apparaître quelque chose qui fonctionne vraiment. C'est ce moment précis qui me pousse à continuer d'apprendre.",
    "about.p2":
      "Après un stage chez <strong>Abyxo</strong>, une alternance chez <strong>AMX One Solution</strong> puis une mission chez <strong>Capgemini</strong> en tant que Software Engineer, je suis diplômé d'un Master Ingénieur Web à <strong>Ynov Campus</strong>.",
    "about.p3":
      "Je peux paraître réservé au premier abord, mais je suis quelqu'un qui vise un travail proche du parfait, qui aime comprendre en profondeur avant d'agir, et qui n'hésite pas à donner son avis sur un sujet technique ou non.",
    "about.p4":
      "Côté jeux vidéo : Master sur League of Legends, aventurier et stratège Pokémon, Univers Mario et Touhou Project en tête d'affiche — pour les histoires, le développement des personnages et les musiques. Je joue aussi bien au die-and-retry qu'au FPS, au RPG, au MOBA, à la stratégie ou au danmaku / shoot 'em up.",
    "about.fact.birth": "Âge",
    "about.fact.birth.value": "25 ans",
    "about.fact.location": "Ville",
    "about.fact.location.value": "Aix-en-Provence, France",
    "about.fact.degree": "Diplômé",
    "about.fact.degree.value": "Master Ingénieur Web",
    "about.fact.email": "Email",
    "about.fact.email.value": "alexandre.bruno01@orange.fr",

    "experience.eyebrow": "experience",
    "experience.title": "Expérience professionnelle",
    "experience.subtitle":
      "Trois postes, trois façons différentes d'apprendre le métier.",
    "exp1.date": "Sept. 2024 — Déc. 2025",
    "exp1.role": "Software Engineer",
    "exp1.org": "Capgemini",
    "exp1.desc":
      "Développeur fullstack sur l'ensemble de mes missions, avec manipulation de bases de données. Exploration et création d'IA générative personnalisée. Stack principale : Python, Java, Angular.",
    "exp2.date": "Oct. 2022 — Sept. 2023",
    "exp2.role": "Développeur Fullstack Web",
    "exp2.org": "AMX One Solution",
    "exp2.desc":
      "Analyse des besoins client et des problèmes techniques, détermination de mesures correctives. Suivi via ticketing : création de features, traitement de demandes clients et correction de bugs.",
    "exp3.date": "Juil. 2022 — Août 2022",
    "exp3.role": "Stagiaire Webmaster",
    "exp3.org": "Abyxo",
    "exp3.desc":
      "Découverte de la gestion administrative d'une agence web et analyse approfondie de la configuration WordPress. Webmaster et assistant sur les projets web de l'agence, setup et configuration de plugins PHP.",

    "education.eyebrow": "education",
    "education.title": "Formation",
    "edu1.date": "Sept. 2025",
    "edu1.role": "Master Ingénieur Web",
    "edu1.org": "Ynov Campus",
    "edu1.desc":
      "Conception de différents types de sites (forum, e-commerce, vitrine) et développement mobile. Prise du rôle de chef de projet sur des projets à profils d'équipe variés. Introduction à l'UX Design et à une approche logicielle par la création de scripts d'exploration. Administration de bases de données et développement autour d'API tierces (Spotify, Discord). Cours de gestion, SI, DevOps et management d'équipe.",
    "edu2.date": "2020 — 2023",
    "edu2.role": "Bachelor Informatique",
    "edu2.org": "Ynov Aix Campus",
    "edu2.desc":
      "Bachelor en développement informatique, avec pour objectif la poursuite en Master (Bac+5).",

    "skills.eyebrow": "skills",
    "skills.title": "Compétences",
    "skills.subtitle":
      "Le résultat de plusieurs années de pratique, en entreprise comme en formation.",
    "skills.languages": "Langages",
    "skills.frameworks": "Frameworks & outils",
    "skills.data": "Données & systèmes",
    "skills.other": "Autres",
    "skills.callout.tag": "En pratique",
    "skills.callout.text":
      "Utilisation quotidienne de l'IA générative comme outil de développement : accélération de la conception, exploration de solutions, création d'IA générative personnalisée en mission chez Capgemini.",

    "projects.eyebrow": "projects",
    "projects.title": "Projets",
    "projects.subtitle": "Une sélection de projets personnels et scolaires.",
    "project1.tag": "Web · Forum",
    "project1.title": "Astulpho",
    "project1.desc":
      "Forum communautaire développé en binôme, avec un serveur codé en Golang de A à Z.",
    "project2.tag": "UX Design",
    "project2.title": "GameShelf",
    "project2.desc":
      "Premiers pas dans l'UX Design : du papier à une maquette Figma complète.",
    "project3.tag": "UX Design · Hackathon",
    "project3.title": "Challenge 48h",
    "project3.desc":
      "Maquette d'un système de gestion des téléviseurs du campus Ynov, conçue en 48h en équipe de 3.",
    "project4.tag": "Jeu vidéo",
    "project4.title": "Tang & Arlee",
    "project4.desc":
      "Jeu vidéo 3D développé sous Unity au sein d'une équipe de 8 personnes : personnage, caméra, mouvements, animations et quêtes.",
    "project.link": "Voir le détail",
    "projects.note":
      "// De nouveaux projets arrivent bientôt (Gameshelf v2, missions Capgemini, projets Ynov).",

    "projectnav.back": "Retour au portfolio",
    "projectnav.prev": "Projet précédent",
    "projectnav.next": "Projet suivant",

    "proj.astulpho.tag": "Web · Forum",
    "proj.astulpho.title": "Astulpho",
    "proj.astulpho.lead":
      "Un forum communautaire développé de zéro, moteur inclus.",
    "proj.astulpho.meta.category": "Web design / Forum / Base de données",
    "proj.astulpho.meta.date": "Juin 2021",
    "proj.astulpho.meta.team": "Binôme",
    "proj.astulpho.h1": "Le projet",
    "proj.astulpho.p1":
      "Projet réalisé en binôme sur la durée d'un mois, avec pour objectif de construire un forum pleinement fonctionnel. Le serveur a été codé en Golang, de la gestion des routes à la logique métier.",
    "proj.astulpho.h2": "Fonctionnalités",
    "proj.astulpho.li1":
      "Système d'inscription et de connexion des utilisateurs",
    "proj.astulpho.li2": "Modération des contenus publiés",
    "proj.astulpho.li3": "Création de posts et interface de réponse",
    "proj.astulpho.li4": "Système de like / dislike et de partage",
    "proj.astulpho.h3": "Galerie",

    "proj.tang.tag": "Jeu vidéo · Unity 3D",
    "proj.tang.title": "Tang & Arlee",
    "proj.tang.lead":
      "Un jeu vidéo 3D construit en équipe, de la caméra aux quêtes.",
    "proj.tang.meta.category": "Unity 3D / Script C#",
    "proj.tang.meta.date": "Juin – Juillet 2021",
    "proj.tang.meta.team": "Équipe de 8, dont 2 développeurs",
    "proj.tang.h1": "Le projet",
    "proj.tang.p1":
      "Stage de 6 semaines consacré à la création du jeu vidéo 3D Tang & Arlee, au sein d'une équipe de 8 personnes dont 2 développeurs. Les scripts ont été écrits en C# sous Rider, avec Unity 3D pour l'intégration.",
    "proj.tang.h2": "Ma contribution",
    "proj.tang.p2":
      "Mon rôle était de développer un maximum de fonctionnalités pour obtenir un jeu réellement jouable, avec un gameplay cohérent.",
    "proj.tang.li1":
      "Mise en place du personnage, de la caméra et des mouvements",
    "proj.tang.li2": "Système d'animations et d'actions",
    "proj.tang.li3": "Système de quêtes",
    "proj.tang.h3": "Galerie",

    "proj.gameshelf.tag": "UX Design",
    "proj.gameshelf.title": "GameShelf",
    "proj.gameshelf.lead":
      "Premiers pas dans le métier d'UX designer, du papier à Figma.",
    "proj.gameshelf.meta.category": "Site web / UX Design",
    "proj.gameshelf.meta.date": "2022",
    "proj.gameshelf.meta.team": "Projet pédagogique",
    "proj.gameshelf.h1": "Le projet",
    "proj.gameshelf.p1":
      "Projet visant à découvrir les bases de l'UX Design : les subtilités du domaine, les étapes à respecter et les bons réflexes pour améliorer l'expérience utilisateur d'un site.",
    "proj.gameshelf.h2": "Méthodologie",
    "proj.gameshelf.p2":
      "Le projet a suivi les étapes réelles de production d'un site, à commencer sur papier, pour une entreprise réelle ou fictive :",
    "proj.gameshelf.li1":
      "Définition de la marque : nom, logo, secteur d'activité",
    "proj.gameshelf.li2":
      "Positionnement, marché visé et définition de la cible",
    "proj.gameshelf.li3":
      "Recherche des rubriques et hiérarchie de l'information",
    "proj.gameshelf.li4": "Organigramme, arborescence et maillage interne",
    "proj.gameshelf.li5": "Recherche de liens externes et de call-to-action",
    "proj.gameshelf.h3": "Du papier à l'écran",
    "proj.gameshelf.p3":
      "Une fois la structure posée, place à la mise en page : wireframes desktop et mobile, placement des blocs, boutons et CTA, puis réalisation d'un organigramme complet du site et d'un schéma du maillage interne.",
    "proj.gameshelf.h4": "Interface finale",
    "proj.gameshelf.p4":
      "Dernière étape : la transposition numérique sur Figma — recherche colorimétrique et typographique, rédaction et traitement des contenus, création des boutons et des éléments graphiques participant à l'identité visuelle.",
    "proj.gameshelf.h5": "Galerie",

    "proj.challenge48.tag": "UX Design · Hackathon",
    "proj.challenge48.title": "Challenge 48h",
    "proj.challenge48.lead":
      "Une maquette clé en main pour la gestion des téléviseurs du campus Ynov.",
    "proj.challenge48.meta.category": "Site web / UX Design",
    "proj.challenge48.meta.date": "2022",
    "proj.challenge48.meta.team": "Équipe de 3",
    "proj.challenge48.h1": "Le projet",
    "proj.challenge48.p1":
      "Challenge proposé par Ynov : concevoir un système de gestion des téléviseurs du campus d'Aix-en-Provence, avec une solution clé en main et un budget chiffré à destination de l'administration.",
    "proj.challenge48.p2":
      "Mon objectif était de réaliser la maquette du site de gestion. En équipe de 3, nous avons avancé par étapes en respectant les règles propres à ce type de projet, en 48 heures chrono.",
    "proj.challenge48.h2": "Points clés du cahier des charges",
    "proj.challenge48.li1":
      "Développer un logiciel de gestion des téléviseurs du campus, en réseau",
    "proj.challenge48.li2": "Installer et déployer la solution sur un serveur",
    "proj.challenge48.li3":
      "Sécuriser la solution et évaluer les failles potentielles",
    "proj.challenge48.li4":
      "Documenter la solution pour la rendre réutilisable et déployable",
    "proj.challenge48.li5":
      "Prévoir un budget matériel en minimisant les coûts",
    "proj.challenge48.h3": "Galerie",

    "contact.eyebrow": "contact",
    "contact.title": "Discutons de votre projet",
    "contact.text":
      "Disponible pour un échange autour d'une opportunité, d'une mission freelance ou simplement pour parler développement.",
    "contact.email.label": "Email",
    "contact.phone.label": "Téléphone",
    "contact.linkedin.label": "LinkedIn",
    "contact.instagram.label": "Instagram",

    "footer.rights": "Tous droits réservés.",
    "footer.credit": "Conçu et développé par Alexandre Bruno.",
  },

  en: {
    "meta.title": "Alexandre Bruno — Fullstack Developer",
    "meta.description":
      "Portfolio of Alexandre Bruno, fullstack developer and web engineering student based in Aix-en-Provence, France.",

    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.kicker": "portfolio.dev — active session",
    "hero.title.pre": "Hi, I'm ",
    "hero.title.name": "Alexandre",
    "hero.lead":
      "25-year-old fullstack developer, currently pursuing a Master's in Web Engineering at Ynov Campus. I like turning vague needs into products that actually run.",
    "hero.meta.age": "25 years old",
    "hero.meta.location": "Aix-en-Provence, France",
    "hero.meta.status": "Open to opportunities",
    "hero.cta.projects": "See my projects",
    "hero.cta.contact": "Get in touch",
    "hero.term.title": "~/alexandre-bruno — zsh",
    "hero.term.whoami": "whoami",
    "hero.term.roles_cmd": "cat roles.log",
    "hero.term.role1": "Software Engineer",
    "hero.term.role2": "Fullstack Developer",
    "hero.term.role3": "Project Lead",
    "hero.term.role4": "Web Engineering Student",

    "about.eyebrow": "about",
    "about.title": "About",
    "about.p1":
      "Development has been a passion since childhood: starting from nothing, writing code, and watching something that actually works come to life. That exact moment is what keeps me learning.",
    "about.p2":
      "After an internship at <strong>Abyxo</strong>, an apprenticeship at <strong>AMX One Solution</strong>, and a role as Software Engineer at <strong>Capgemini</strong>, I'm now pursuing a Master's in Web Engineering at <strong>Ynov Campus</strong>.",
    "about.p3":
      "I can come across as reserved at first, but I aim for work that's as close to perfect as possible, I like to understand things in depth before acting, and I'm never shy about sharing my view on a technical — or not so technical — topic.",
    "about.p4":
      "On the gaming side: Pokémon, Mario and Touhou Project top the list — mainly for the stories, character development and music. I play everything from die-and-retry to FPS, RPG, MOBA, strategy and danmaku / shoot 'em up.",
    "about.fact.birth": "Date of birth",
    "about.fact.birth.value": "December 29, 2001",
    "about.fact.location": "City",
    "about.fact.location.value": "Aix-en-Provence, France",
    "about.fact.degree": "Current degree",
    "about.fact.degree.value": "Master's in Web Engineering",
    "about.fact.email": "Email",
    "about.fact.email.value": "alexandre.bruno01@orange.fr",

    "experience.eyebrow": "experience",
    "experience.title": "Professional experience",
    "experience.subtitle":
      "Three roles, three different ways of learning the craft.",
    "exp1.date": "Sep. 2024 — Dec. 2025",
    "exp1.role": "Software Engineer",
    "exp1.org": "Capgemini",
    "exp1.desc":
      "Fullstack developer across all my assignments, working with databases. Explored and built custom generative AI solutions. Main stack: Python, Java, Angular.",
    "exp2.date": "Oct. 2022 — Sep. 2023",
    "exp2.role": "Fullstack Web Developer",
    "exp2.org": "AMX One Solution",
    "exp2.desc":
      "Analyzed client needs and technical issues, defined corrective actions. Ticket-based workflow: built new features, handled client requests and fixed bugs.",
    "exp3.date": "Jul. 2022 — Aug. 2022",
    "exp3.role": "Webmaster Intern",
    "exp3.org": "Abyxo",
    "exp3.desc":
      "Discovered the administrative side of running a web agency and studied WordPress configuration in depth. Acted as webmaster and web-project assistant, setting up and configuring PHP plugins.",

    "education.eyebrow": "education",
    "education.title": "Education",
    "edu1.date": "Since Sep. 2025",
    "edu1.role": "Master's in Web Engineering",
    "edu1.org": "Ynov Campus",
    "edu1.desc":
      "Designed different types of websites (forum, e-commerce, showcase) and worked on mobile development. Took on the role of project lead across projects with varied team profiles. Introduction to UX design and a scripting-driven approach to exploring new possibilities. Database administration and development against third-party APIs (Spotify, Discord). Coursework in management, information systems, DevOps and team leadership.",
    "edu2.date": "2020 — 2023",
    "edu2.role": "Bachelor's in Computer Science",
    "edu2.org": "Ynov Aix Campus",
    "edu2.desc":
      "Bachelor's degree in software development, with the goal of continuing on to a Master's degree.",

    "skills.eyebrow": "skills",
    "skills.title": "Skills",
    "skills.subtitle":
      "The result of several years of practice, both in industry and in training.",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks & tools",
    "skills.data": "Data & systems",
    "skills.other": "Other",
    "skills.callout.tag": "In practice",
    "skills.callout.text":
      "Daily use of generative AI as a development tool: speeding up design, exploring solutions, and building custom generative AI during my time at Capgemini.",

    "projects.eyebrow": "projects",
    "projects.title": "Projects",
    "projects.subtitle": "A selection of personal and school projects.",
    "project1.tag": "Web · Forum",
    "project1.title": "Astulpho",
    "project1.desc":
      "A community forum built with a partner, with a server written in Golang from scratch.",
    "project2.tag": "UX Design",
    "project2.title": "GameShelf",
    "project2.desc":
      "First steps into UX design: from paper sketches to a full Figma mockup.",
    "project3.tag": "UX Design · Hackathon",
    "project3.title": "48h Challenge",
    "project3.desc":
      "Mockup of a TV management system for the Ynov campus, designed in 48h with a team of 3.",
    "project4.tag": "Video game",
    "project4.title": "Tang & Arlee",
    "project4.desc":
      "3D video game built in Unity with a team of 8: character, camera, movement, animations and quests.",
    "project.link": "View details",
    "projects.note":
      "// New projects coming soon (Gameshelf v2, Capgemini work, Ynov projects).",

    "projectnav.back": "Back to portfolio",
    "projectnav.prev": "Previous project",
    "projectnav.next": "Next project",

    "proj.astulpho.tag": "Web · Forum",
    "proj.astulpho.title": "Astulpho",
    "proj.astulpho.lead":
      "A community forum built from scratch, engine included.",
    "proj.astulpho.meta.category": "Web design / Forum / Database",
    "proj.astulpho.meta.date": "June 2021",
    "proj.astulpho.meta.team": "Pair project",
    "proj.astulpho.h1": "The project",
    "proj.astulpho.p1":
      "Built with a partner over one month, with the goal of shipping a fully functional forum. The server was written in Golang, from routing to business logic.",
    "proj.astulpho.h2": "Features",
    "proj.astulpho.li1": "User sign-up and login system",
    "proj.astulpho.li2": "Moderation of published content",
    "proj.astulpho.li3": "Post creation and reply interface",
    "proj.astulpho.li4": "Like / dislike and sharing system",
    "proj.astulpho.h3": "Gallery",

    "proj.tang.tag": "Video game · Unity 3D",
    "proj.tang.title": "Tang & Arlee",
    "proj.tang.lead":
      "A 3D video game built as a team, from the camera to the quests.",
    "proj.tang.meta.category": "Unity 3D / C# scripting",
    "proj.tang.meta.date": "June – July 2021",
    "proj.tang.meta.team": "Team of 8, incl. 2 developers",
    "proj.tang.h1": "The project",
    "proj.tang.p1":
      "A 6-week internship dedicated to building the 3D video game Tang & Arlee, within a team of 8 people including 2 developers. Scripts were written in C# using Rider, with Unity 3D for integration.",
    "proj.tang.h2": "My contribution",
    "proj.tang.p2":
      "My role was to build as many features as possible to end up with a genuinely playable game with coherent gameplay.",
    "proj.tang.li1": "Character, camera and movement setup",
    "proj.tang.li2": "Animation and action systems",
    "proj.tang.li3": "Quest system",
    "proj.tang.h3": "Gallery",

    "proj.gameshelf.tag": "UX Design",
    "proj.gameshelf.title": "GameShelf",
    "proj.gameshelf.lead": "First steps into UX design, from paper to Figma.",
    "proj.gameshelf.meta.category": "Website / UX Design",
    "proj.gameshelf.meta.date": "2022",
    "proj.gameshelf.meta.team": "School project",
    "proj.gameshelf.h1": "The project",
    "proj.gameshelf.p1":
      "A project aimed at discovering the basics of UX design: the subtleties of the field, the steps to follow, and the right habits to improve a website's user experience.",
    "proj.gameshelf.h2": "Methodology",
    "proj.gameshelf.p2":
      "The project followed the real production steps of a website, starting on paper, for a real or fictional company:",
    "proj.gameshelf.li1": "Brand definition: name, logo, industry",
    "proj.gameshelf.li2": "Positioning, target market and audience definition",
    "proj.gameshelf.li3": "Content sections and information hierarchy",
    "proj.gameshelf.li4": "Sitemap, structure and internal linking",
    "proj.gameshelf.li5": "External links and calls-to-action",
    "proj.gameshelf.h3": "From paper to screen",
    "proj.gameshelf.p3":
      "Once the structure was set, it was time for layout: desktop and mobile wireframes, block and button placement, CTAs, a full sitemap, and an internal-linking diagram.",
    "proj.gameshelf.h4": "Final interface",
    "proj.gameshelf.p4":
      "The last step was the digital transposition on Figma: color and typography research, content writing, image treatment, and creating the buttons and graphic elements that make up the visual identity.",
    "proj.gameshelf.h5": "Gallery",

    "proj.challenge48.tag": "UX Design · Hackathon",
    "proj.challenge48.title": "48h Challenge",
    "proj.challenge48.lead":
      "A turnkey mockup for managing TVs across the Ynov campus.",
    "proj.challenge48.meta.category": "Website / UX Design",
    "proj.challenge48.meta.date": "2022",
    "proj.challenge48.meta.team": "Team of 3",
    "proj.challenge48.h1": "The project",
    "proj.challenge48.p1":
      "A challenge set by Ynov: design a system to manage the TVs across the Aix-en-Provence campus, with a turnkey solution and a costed budget for the administration.",
    "proj.challenge48.p2":
      "My goal was to design the mockup for the management site. As a team of 3, we moved forward step by step, following the rules of this kind of challenge, in 48 hours flat.",
    "proj.challenge48.h2": "Key requirements",
    "proj.challenge48.li1": "Build networked software to manage the campus TVs",
    "proj.challenge48.li2": "Install and deploy the solution on a server",
    "proj.challenge48.li3":
      "Secure the solution and assess potential vulnerabilities",
    "proj.challenge48.li4":
      "Document the solution so it can be reused and redeployed",
    "proj.challenge48.li5": "Plan hardware budget while minimizing costs",
    "proj.challenge48.h3": "Gallery",

    "contact.eyebrow": "contact",
    "contact.title": "Let's talk about your project",
    "contact.text":
      "Available to talk about an opportunity, a freelance mission, or just to talk shop about development.",
    "contact.email.label": "Email",
    "contact.phone.label": "Phone",
    "contact.linkedin.label": "LinkedIn",
    "contact.instagram.label": "Instagram",

    "footer.rights": "All rights reserved.",
    "footer.credit": "Designed and built by Alexandre Bruno.",
  },
};
