/* =========================================================
   Dictionnaire de traductions FR / EN
   Toute clé référencée dans le HTML via data-i18n="cle"
   ========================================================= */
const TRANSLATIONS = {
  fr: {
    "meta.title": "Alexandre Bruno — Développeur Fullstack",
    "meta.description":
      "Portfolio d'Alexandre Bruno, développeur fullstack et diplômé ingénieur web à Aix-en-Provence.",

    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.education": "Formation",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    "hero.kicker": "portfolio.dev — session active",
    "hero.title.pre": "Bonjour, je suis ",
    "hero.title.name": "Alexandre",
    "hero.lead":
      "Développeur fullstack de 25 ans, diplômé d'un Master Ingénieur Web à Ynov Campus. J'aime transformer un besoin flou en produit qui tourne vraiment.",
    "hero.meta.age": "25 ans",
    "hero.meta.location": "Aix-en-Provence, France",
    "hero.meta.status": "Disponible",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Me contacter",
    "hero.term.title": "~/alexandre-bruno — zsh",
    "hero.term.whoami": "whoami",
    "hero.term.roles_cmd": "cat roles.log",
    "hero.term.role1": "Software Engineer",
    "hero.term.role2": "Développeur Fullstack",
    "hero.term.role3": "Chef de projet",
    "hero.term.role4": "Diplômé Ingénieur Web",

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
    "project5.tag": "Site vitrine · Client",
    "project5.title": "L'Artisan du Bassin",
    "project5.desc":
      "Site d'un pisciniste à Allauch, du code au référencement local : Astro, Cloudflare et formulaire de devis.",
    "project6.tag": "Jeu web · Fullstack",
    "project6.title": "PokéGéo",
    "project6.desc":
      "GeoGuessr sur les cartes Pokémon : défi du jour, solo et multijoueur en temps réel, plus de 1 300 lieux.",
    "project.link": "Voir le détail",
    "projects.note":
      "// De nouveaux projets arrivent bientôt (Gameshelf v2, missions Capgemini, projets Ynov).",

    "projectnav.back": "Retour au portfolio",
    "projectnav.prev": "Projet précédent",
    "projectnav.next": "Projet suivant",

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

    "proj.artisan.tag": "Site vitrine · SEO local",
    "proj.artisan.title": "L'Artisan du Bassin",
    "proj.artisan.lead":
      "Le site d'un artisan pisciniste des Bouches-du-Rhône, conçu pour être trouvé sur Google et transformer les visites en demandes de devis.",
    "proj.artisan.meta.category": "Astro / Cloudflare / SEO local",
    "proj.artisan.meta.date": "Juillet – Octobre 2026",
    "proj.artisan.meta.team": "Projet client, en solo",
    "proj.artisan.cta": "Voir le site en ligne",
    "proj.artisan.h1": "Le projet",
    "proj.artisan.p1":
      "L'Artisan du Bassin est une entreprise de piscine installée à Allauch, qui intervient à Marseille, Aix-en-Provence et dans les communes voisines : entretien, traitement de l'eau, hivernage, dépannage, recherche de fuite et rénovation. Le besoin : un site rapide et crédible, qui remonte sur les recherches locales (« pisciniste Marseille », « entretien piscine Aix ») et donne envie d'appeler ou de demander un devis.",
    "proj.artisan.h2": "Comment on s'y est pris",
    "proj.artisan.p2":
      "Plutôt qu'un site figé, j'ai d'abord construit une base réutilisable pour les sites vitrines, puis je l'ai adaptée à l'entreprise, en avançant par itérations avec le client à partir de ses photos de chantier et de ses relectures.",
    "proj.artisan.li1":
      "Un starter Astro maison : les informations de l'entreprise (coordonnées, adresse officielle, GPS, SIRET, navigation) sont centralisées dans un fichier de configuration, avec des sections prêtes à l'emploi (accueil, services, méthode, FAQ, avant / après, appel à l'action).",
    "proj.artisan.li2":
      "Le contenu traité comme de la donnée : 8 services et 9 communes décrits en TypeScript, d'où sont générées les pages services et villes, chacune avec un texte unique, sa FAQ et ses liens internes.",
    "proj.artisan.li3":
      "Un site statique servi par le CDN de Cloudflare : seule la route du formulaire de contact s'exécute côté serveur.",
    "proj.artisan.li4":
      "L'IA générative (Claude Code) comme binôme de développement pour la refonte SEO : audit, réécriture des contenus et vérifications, chaque changement étant relu avant la mise en ligne.",
    "proj.artisan.h3": "Ce qui a été mis en place",
    "proj.artisan.li5":
      "Formulaire de devis : validation, champ piège anti-robots et vérification Cloudflare Turnstile côté serveur, puis envoi via Resend d'un email à l'artisan (réponse directe au client) et d'un accusé de réception au client.",
    "proj.artisan.li6":
      "SEO technique : une seule URL par page, balises canoniques et sitemap cohérents, robots.txt, un titre H1 par page et fil d'Ariane.",
    "proj.artisan.li7":
      "Données structurées Schema.org : fiche d'entreprise locale (adresse, coordonnées GPS, horaires, communes desservies, catalogue des prestations) et FAQ, pour des résultats enrichis dans Google.",
    "proj.artisan.li8":
      "Performance : images optimisées à la compilation, logo passé de 3,9 Mo à quelques Ko, polices auto-hébergées.",
    "proj.artisan.li9":
      "Mobile d'abord : bouton d'appel dès l'accueil, services en tuiles, devis et téléphone dans le menu, comparateur avant / après tactile.",
    "proj.artisan.li10":
      "Page réalisations avec filtres par type d'intervention (entretien, installation, pompe à chaleur).",
    "proj.artisan.h4": "Mise en ligne et référencement",
    "proj.artisan.p3":
      "Le site est déployé sur Cloudflare depuis GitHub, avec son nom de domaine et des clés d'API gardées hors du dépôt. Côté Google, le sitemap a été soumis dans la Search Console et les pages prioritaires indexées, et la fiche Google Business a été alignée sur le site (même nom, adresse et téléphone) pour renforcer le référencement local. Résultat : 25 pages indexables, dont 8 pages services et 9 pages villes.",
    "proj.artisan.h5": "Technologies",
    "proj.artisan.h6": "Galerie",

    "proj.pokegeo.tag": "Jeu web · Fullstack",
    "proj.pokegeo.title": "PokéGéo",
    "proj.pokegeo.lead":
      "Le principe de GeoGuessr appliqué aux cartes des jeux Pokémon : un bout de carte, un viseur, et il faut retrouver l'endroit exact.",
    "proj.pokegeo.meta.category": "Next.js / PostgreSQL / Temps réel",
    "proj.pokegeo.meta.date": "Mars – Octobre 2026",
    "proj.pokegeo.meta.team": "Projet personnel",
    "proj.pokegeo.cta": "Jouer en ligne",
    "proj.pokegeo.h1": "Le projet",
    "proj.pokegeo.p1":
      "Un morceau de carte d'un jeu Pokémon s'affiche (HeartGold / SoulSilver, Émeraude, Diamant / Perle / Platine), le lieu à trouver au centre du viseur. Il faut deviner la région, puis la zone, puis placer son repère au bon endroit, pendant que la vue se dézoome au fil du temps. Quatre régions sont jouables, de Kanto à Sinnoh, pour plus de 1 300 lieux.",
    "proj.pokegeo.li1":
      "<strong>Défi du jour</strong> : 5 lieux, les mêmes pour tout le monde, un essai par jour, classement et partage du résultat façon Wordle.",
    "proj.pokegeo.li2":
      "<strong>Solo</strong> : 4 difficultés, de 3 à 10 manches, jouable sans compte.",
    "proj.pokegeo.li3":
      "<strong>Multijoueur</strong> : salons de 2 à 8 joueurs avec invitation par lien ; chaque réponse divise par deux le temps des autres.",
    "proj.pokegeo.li4":
      "<strong>Progression</strong> : 8 badges d'arène, séries de jours et classements.",
    "proj.pokegeo.h2": "Comment on s'y est pris",
    "proj.pokegeo.li5":
      "Un premier prototype au printemps (Next.js, Prisma, comptes utilisateurs), puis une refonte complète à l'automne pour rendre le jeu fiable, rapide et jouable sans inscription.",
    "proj.pokegeo.li6":
      "Le serveur fait autorité : chrono, score et fin de manche sont calculés côté serveur, et le navigateur ne reçoit jamais la réponse (ni le nom de la carte, ni la position) avant la fin de la manche.",
    "proj.pokegeo.li7":
      "Des lieux générés automatiquement : un script analyse chaque carte et repère les couleurs rares (bâtiments, objets reconnaissables) pour placer les lieux et estimer leur difficulté, puis un éditeur interne permet de les retoucher et de dessiner les zones cliquables.",
    "proj.pokegeo.li8":
      "Une ouverture région par région (Kanto, Johto, puis Hoenn et Sinnoh) : cartes sourcées puis nettoyées des annotations qui trahissaient la réponse, zones placées d'après les coordonnées des projets de décompilation des jeux.",
    "proj.pokegeo.li9":
      "L'IA générative (Claude Code) comme binôme de développement : je fixe la direction et découpe le travail, l'IA accélère l'implémentation, et chaque changement est relu et testé avant d'être mis en ligne.",
    "proj.pokegeo.h3": "Ce qui a été mis en place",
    "proj.pokegeo.li10":
      "Indices générés côté serveur avec sharp : découpe de la carte autour du lieu et dézoom par paliers, débloqués par le chrono du serveur.",
    "proj.pokegeo.li11":
      "Un barème sur 5 000 points par manche : région, zone, précision et rapidité.",
    "proj.pokegeo.li12":
      "Multijoueur en temps réel avec Pusher (canaux privés autorisés par le serveur), repli automatique en polling, fin de manche idempotente et transfert d'hôte si quelqu'un quitte.",
    "proj.pokegeo.li13":
      "Comptes avec NextAuth : email et mot de passe, Discord ou Google, mode invité, confirmation d'email, mot de passe oublié et suppression du compte.",
    "proj.pokegeo.li14":
      "Sécurité : limitation de débit stockée en base, en-têtes CSP / Permissions-Policy / COOP, validation des entrées avec Zod, jetons de lien stockés sous forme d'empreinte.",
    "proj.pokegeo.li15":
      "Protection de la base de lieux contre l'aspiration : plafond quotidien de manches, empreinte cachée dans les coordonnées et filigrane invisible dans les images d'indice.",
    "proj.pokegeo.li16":
      "Performance : 208 cartes recompressées sans perte visible (de 65 à 36 Mo), accueil rendu côté serveur, application installable sur mobile, image d'aperçu générée pour chaque partage.",
    "proj.pokegeo.li17":
      "Une identité pixel art : cadres crantés, polices bitmap, sons 8-bit et menu pilotable au clavier.",
    "proj.pokegeo.h4": "Technologies",
    "proj.pokegeo.disclaimer":
      "// Projet de fan gratuit et non commercial, non affilié à Nintendo, Game Freak, Creatures ou The Pokémon Company.",
    "proj.pokegeo.h5": "Galerie",

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
    "project5.tag": "Showcase site · Client",
    "project5.title": "L'Artisan du Bassin",
    "project5.desc":
      "Website for a pool specialist near Marseille, from code to local SEO: Astro, Cloudflare and a quote request form.",
    "project6.tag": "Web game · Fullstack",
    "project6.title": "PokéGéo",
    "project6.desc":
      "GeoGuessr on Pokémon maps: daily challenge, solo and real-time multiplayer, over 1,300 locations.",
    "project.link": "View details",
    "projects.note":
      "// New projects coming soon (Gameshelf v2, Capgemini work, Ynov projects).",

    "projectnav.back": "Back to portfolio",
    "projectnav.prev": "Previous project",
    "projectnav.next": "Next project",

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

    "proj.artisan.tag": "Showcase site · Local SEO",
    "proj.artisan.title": "L'Artisan du Bassin",
    "proj.artisan.lead":
      "The website of a pool specialist in southern France, built to be found on Google and turn visits into quote requests.",
    "proj.artisan.meta.category": "Astro / Cloudflare / Local SEO",
    "proj.artisan.meta.date": "July – October 2026",
    "proj.artisan.meta.team": "Client project, solo",
    "proj.artisan.cta": "Visit the live site",
    "proj.artisan.h1": "The project",
    "proj.artisan.p1":
      "L'Artisan du Bassin is a pool company based in Allauch, working across Marseille, Aix-en-Provence and the surrounding towns: maintenance, water treatment, winterizing, repairs, leak detection and renovation. The need: a fast, credible website that ranks on local searches (\"pool specialist Marseille\", \"pool maintenance Aix\") and makes visitors want to call or ask for a quote.",
    "proj.artisan.h2": "How we went about it",
    "proj.artisan.p2":
      "Rather than a one-off site, I first built a reusable base for showcase websites, then adapted it to the business, iterating with the client on their job-site photos and proofreading.",
    "proj.artisan.li1":
      "A custom Astro starter: all business details (contact info, official address, GPS, company ID, navigation) live in a single config file, alongside ready-made sections (hero, services, process, FAQ, before / after, call to action).",
    "proj.artisan.li2":
      "Content treated as data: 8 services and 9 towns described in TypeScript, from which the service and town pages are generated, each with unique copy, its own FAQ and internal links.",
    "proj.artisan.li3":
      "A static site served from Cloudflare's CDN: only the contact form route runs on the server.",
    "proj.artisan.li4":
      "Generative AI (Claude Code) as a pair programmer for the SEO overhaul: audit, content rewrites and checks, with every change reviewed before going live.",
    "proj.artisan.h3": "What was built",
    "proj.artisan.li5":
      "Quote form: validation, an anti-bot honeypot field and server-side Cloudflare Turnstile verification, then Resend sends one email to the business (with direct reply to the client) and a confirmation to the client.",
    "proj.artisan.li6":
      "Technical SEO: one URL per page, consistent canonicals and sitemap, robots.txt, one H1 per page and breadcrumbs.",
    "proj.artisan.li7":
      "Schema.org structured data: local business listing (address, GPS coordinates, opening hours, towns served, service catalog) and FAQ, for rich results on Google.",
    "proj.artisan.li8":
      "Performance: images optimized at build time, logo down from 3.9 MB to a few KB, self-hosted fonts.",
    "proj.artisan.li9":
      "Mobile first: call button right on the home page, services as tiles, quote and phone in the menu, touch-friendly before / after slider.",
    "proj.artisan.li10":
      "Portfolio page with filters by type of work (maintenance, installation, heat pump).",
    "proj.artisan.h4": "Launch and search ranking",
    "proj.artisan.p3":
      "The site is deployed to Cloudflare from GitHub, with its own domain and API keys kept out of the repository. On the Google side, the sitemap was submitted in Search Console and priority pages indexed, and the Google Business profile was aligned with the site (same name, address and phone) to strengthen local SEO. Result: 25 indexable pages, including 8 service pages and 9 town pages.",
    "proj.artisan.h5": "Tech stack",
    "proj.artisan.h6": "Gallery",

    "proj.pokegeo.tag": "Web game · Fullstack",
    "proj.pokegeo.title": "PokéGéo",
    "proj.pokegeo.lead":
      "GeoGuessr's concept applied to Pokémon game maps: a piece of map, a crosshair, and you have to find the exact spot.",
    "proj.pokegeo.meta.category": "Next.js / PostgreSQL / Real-time",
    "proj.pokegeo.meta.date": "March – October 2026",
    "proj.pokegeo.meta.team": "Personal project",
    "proj.pokegeo.cta": "Play online",
    "proj.pokegeo.h1": "The project",
    "proj.pokegeo.p1":
      "A piece of map from a Pokémon game appears (HeartGold / SoulSilver, Emerald, Diamond / Pearl / Platinum), with the spot to find in the crosshair. You guess the region, then the area, then drop your pin in the right place, while the view zooms out over time. Four regions are playable, from Kanto to Sinnoh, for over 1,300 locations.",
    "proj.pokegeo.li1":
      "<strong>Daily challenge</strong>: 5 locations, the same for everyone, one try per day, leaderboard and Wordle-style result sharing.",
    "proj.pokegeo.li2":
      "<strong>Solo</strong>: 4 difficulty levels, 3 to 10 rounds, playable without an account.",
    "proj.pokegeo.li3":
      "<strong>Multiplayer</strong>: lobbies of 2 to 8 players with invite links; every answer halves everyone else's time.",
    "proj.pokegeo.li4":
      "<strong>Progression</strong>: 8 gym badges, daily streaks and leaderboards.",
    "proj.pokegeo.h2": "How we went about it",
    "proj.pokegeo.li5":
      "A first prototype in the spring (Next.js, Prisma, user accounts), then a full overhaul in the fall to make the game reliable, fast and playable without signing up.",
    "proj.pokegeo.li6":
      "The server is authoritative: timer, score and end of round are computed server-side, and the browser never receives the answer (neither the map name nor the position) before the round is over.",
    "proj.pokegeo.li7":
      "Auto-generated locations: a script analyses each map and spots rare colors (buildings, recognizable objects) to place locations and estimate their difficulty, then an internal editor is used to fine-tune them and draw the clickable areas.",
    "proj.pokegeo.li8":
      "Region-by-region rollout (Kanto, Johto, then Hoenn and Sinnoh): maps sourced and cleaned of annotations that gave the answer away, areas placed using coordinates from the games' decompilation projects.",
    "proj.pokegeo.li9":
      "Generative AI (Claude Code) as a pair programmer: I set the direction and break down the work, the AI speeds up implementation, and every change is reviewed and tested before going live.",
    "proj.pokegeo.h3": "What was built",
    "proj.pokegeo.li10":
      "Server-generated clues with sharp: the map is cropped around the location, with zoom-out steps unlocked by the server's timer.",
    "proj.pokegeo.li11":
      "Scoring out of 5,000 points per round: region, area, precision and speed.",
    "proj.pokegeo.li12":
      "Real-time multiplayer with Pusher (private channels authorized by the server), automatic polling fallback, idempotent round endings and host handover when someone leaves.",
    "proj.pokegeo.li13":
      "Accounts with NextAuth: email and password, Discord or Google, guest mode, email confirmation, password reset and account deletion.",
    "proj.pokegeo.li14":
      "Security: rate limiting stored in the database, CSP / Permissions-Policy / COOP headers, input validation with Zod, link tokens stored as hashes.",
    "proj.pokegeo.li15":
      "Protecting the location database from scraping: a daily round cap, a hidden fingerprint in the coordinates and an invisible watermark in clue images.",
    "proj.pokegeo.li16":
      "Performance: 208 maps recompressed with no visible loss (65 MB down to 36 MB), server-rendered home page, installable mobile app, preview image generated for every share.",
    "proj.pokegeo.li17":
      "A pixel-art identity: notched frames, bitmap fonts, 8-bit sounds and a keyboard-driven menu.",
    "proj.pokegeo.h4": "Tech stack",
    "proj.pokegeo.disclaimer":
      "// Free, non-commercial fan project, not affiliated with Nintendo, Game Freak, Creatures or The Pokémon Company.",
    "proj.pokegeo.h5": "Gallery",

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
