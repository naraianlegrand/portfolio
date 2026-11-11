// French site copy, overlaid onto `en` by localize() in profile.js.
// Objects merge by key and arrays by index, so every array here follows the same order as `en`
// (use {} for an entry with nothing to translate). Anything left out stays as in `en`:
// URLs, images, tech names, publication and course titles.
// Same accuracy rules as English (CLAUDE.md): translate, never add.

const FILM_POSTER_ALT =
  "Affiche du court métrage Delusions of Grandeur, réalisé par Karthikeyan Umesh, avec les lauriers de la sélection officielle au CARV Karnataka 2020, du 2e meilleur court métrage à IIM Shortcuts 2019 et du 3e meilleur court métrage à Estrade St. Claret 2020"
const IBM_BADGE = { alt: 'Logo IBM' }

export const frOverrides = {
  ui: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer',
    language: 'Langue',
    privateRepo: 'Dépôt privé',
    repo: 'Dépôt',
    live: 'Site en ligne',
    visitLive: 'Voir le site en ligne',
    status: 'Statut',
    role: 'Rôle',
    tech: 'Technologies',
    tools: 'Outils et méthodes',
    myContributions: 'Mes contributions',
    relatedPapers: 'Recherche associée',
    viewCredential: 'Voir le certificat',
    credentialId: 'Identifiant du certificat',
    backToTop: 'Retour en haut',
    readStory: "Lire l'histoire",
    emailMe: "M'écrire",
    showAllProjects: 'Voir tous les projets',
    showAllExperience: "Voir toute l'expérience",
    showLess: 'Voir moins',
    newTab: "(s'ouvre dans un nouvel onglet)",
    openFull: "ouvrir l'image en taille réelle dans un nouvel onglet",
    featured: 'En vedette',
    awards: 'Prix',
    heroLabel: 'Présentation',
    navLabel: 'Navigation principale',
    form: {
      name: 'Nom',
      email: 'Courriel',
      message: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi…',
      sent: 'Merci, votre message a été envoyé.',
      error: "Une erreur s'est produite. Écrivez-moi plutôt directement par courriel.",
    },
  },

  nav: [
    { label: 'À propos' },
    { label: 'Projets' },
    { label: 'Expérience' },
    { label: 'Compétences' },
    { label: 'Publications' },
    { label: 'Au-delà du code' },
    { label: 'Contact' },
    { label: 'Blogue' },
  ],

  hero: {
    headline: 'Développeur infonuagique et logiciel',
    subheadline: 'Certifié AWS · M.Eng. Génie logiciel, Concordia',
    location: 'Montréal / Toronto · prêt à déménager partout au Canada',
    status: 'Disponible pour un emploi',
    photo: { alt: 'Karthikeyan Umesh en complet foncé à la Place des Arts, à Montréal, par une journée ensoleillée' },
    ctas: [{ label: 'Voir mes projets' }, { label: 'Me joindre' }],
    resumeLabel: 'CV (PDF, en anglais)',
  },

  about: {
    title: 'À propos',
    paragraphs: [
      "Diplômé en génie logiciel (M.Eng., Université Concordia), je conçois des solutions infonuagiques sécurisées et évolutives sur AWS. Je détiens la certification AWS Certified Cloud Practitioner et je me prépare à l'examen AWS Solutions Architect – Associate.",
      "Mon parcours couvre la science des données et le développement logiciel, avec de solides compétences en Python et en Java. Je m'intéresse particulièrement à aider les organisations à bâtir des architectures infonuagiques résilientes et économiques. En ce moment, je réalise des projets AWS concrets avec EC2, S3, RDS, IAM et le sans serveur.",
      "J'aime transformer des problèmes complexes en solutions concrètes, en alliant esprit analytique, créativité et esprit d'équipe. Du développement de projets logiciels à l'automatisation par l'IA, je valorise une communication claire, l'apprentissage continu et une technologie qui résout de vrais problèmes. En dehors de l'ingénierie, ma passion pour le cinéma m'a appris à adopter différents points de vue, à raconter des histoires captivantes et à donner vie aux idées.",
    ],
    photo: {
      alt: 'Karthikeyan Umesh en toge à la collation des grades de Concordia, tenant la pochette de son diplôme',
      caption: 'Collation des grades, Concordia, 2026',
    },
    languagesTitle: 'Langues',
    languages: [
      { name: 'Anglais', level: 'Langue maternelle ou bilingue', credential: { score: 'Bande 8', logo: { alt: 'Logo IELTS' } } },
      { name: 'Français', level: 'Compétence professionnelle complète', credential: { logo: { alt: "Logo d'Immigration, Francisation et Intégration Québec" } } },
      { name: 'Hindi', level: 'Compétence professionnelle complète' },
      { name: 'Kannada', level: 'Langue maternelle ou bilingue' },
      { name: 'Tamoul', level: 'Langue maternelle ou bilingue' },
      { name: 'Espagnol', level: 'Niveau élémentaire' },
    ],
  },

  projectsTitle: 'Projets',
  projectsIntro: "Les projets phares d'abord, puis les projets universitaires, d'apprentissage et en cours. Chaque fiche indique où en est réellement le projet.",

  featured: [
    {
      status: 'Publié · v0.2.0, novembre 2026',
      group: 'Projet terminé',
      tagline:
        "Un coach de posture toujours actif qui fait tourner son IA sur le NPU du portable, pas sur le processeur : environ 1 % du processeur, et la vidéo ne quitte jamais l'ordinateur.",
      description:
        "Il surveille votre posture par la webcam : si vous vous affaissez pendant la majeure partie de 30 secondes, les bords de l'écran s'illuminent; une fois par heure, il vous envoie marcher. Je l'ai mené seul de l'idée à une application Windows publiée et open source : quantification du modèle, débogage du NPU, l'application, l'installateur et un site bilingue.",
      note: "Fonctionne aujourd'hui sur les portables Windows 11 équipés d'un AMD Ryzen 7040 ou 8040; des versions pour Intel, Snapdragon et Mac sont prévues. Gratuit et open source (AGPL-3.0). Confidentialité dès la conception : chaque image de la caméra devient 17 points du corps sur le NPU, puis est supprimée; seuls des nombres sur la posture sont gardés, sur le portable, et rien n'est envoyé.",
      highlights: [
        { lead: '96,5 % sur le NPU, environ 1 % du processeur', text: "YOLOv8n-pose en INT8 à 12-17 ms par image; corriger l'attente active du pool de threads d'ONNX Runtime a fait passer l'utilisation du processeur de toute l'application de 44 % à environ 1 %." },
        { lead: 'Aucune fausse alerte', text: 'Sur 9 séquences filmées au bureau, les 3 séquences de mauvaise posture déclenchent une alerte à 30 s, et aucune des 6 autres.' },
        { lead: 'Des stats pour un coach IA', text: "La v0.2 ajoute des statistiques de posture à la minute, une vue de la semaine et un résumé en un clic à coller dans Gemini, ChatGPT ou Claude, le tout gardé sur le portable." },
        { lead: 'Livré comme un produit', text: "Deux versions en 8 jours : installateur de 39,6 Mo, sans droits d'administrateur, autotest, versions GitHub avec sommes de contrôle, branche principale protégée, tests à chaque demande de tirage." },
        { lead: 'Confidentialité dès la conception', text: 'Aucun compte, aucun nuage, aucune télémétrie; conçu en tenant compte de la Loi 25 du Québec.' },
      ],
      role: 'En solo',
      images: [
        { alt: 'Site de Sloucher : « Your laptop has an AI chip that sits idle. Let it fix your posture. »' },
        { alt: "Graphique de l'utilisation du processeur de toute l'application : réglages par défaut d'ONNX Runtime 44 %, attente active désactivée 3 %, Sloucher à 2 images/s 0,8 %" },
        { alt: "La fenêtre Stats de Sloucher : aujourd'hui 72 % bien droit, les alertes, le temps pour se redresser, et les 7 derniers jours en barres (semaine d'exemple)" },
      ],
    },
    {
      name: 'Architecture AWS à trois niveaux avec Terraform',
      status: 'Terminé · déployé et testé, détruit entre les démos pour réduire les coûts',
      group: 'Projet terminé',
      tagline:
        "Un outil de suivi des demandes pour les équipes d'ingénierie, sur une infrastructure AWS à trois niveaux qu'une seule commande terraform apply construit à partir de zéro et qu'une commande terraform destroy supprime.",
      description:
        "J'ai conçu l'infrastructure et l'application : un VPC réparti sur deux zones de disponibilité, avec des sous-réseaux publics, applicatifs privés et de base de données privés; un équilibreur de charge d'application devant un groupe Auto Scaling EC2 qui exécute un conteneur FastAPI; RDS PostgreSQL et S3 pour les données. Tout est défini en modules Terraform avec un état distant, et les changements d'infrastructure passent par des demandes de tirage (pull requests) avec des vérifications automatisées.",
      note: "Détruite entre les démos pour garder les coûts près de zéro; la reconstruire ne prend qu'une commande. HTTP seulement pour l'instant (aucun domaine ni certificat), et l'application n'a pas encore de connexion : l'équilibreur de charge n'accepte donc que mon adresse IP.",
      highlights: [
        { lead: 'IAM à privilèges minimaux', text: "Le rôle EC2 n'accède qu'à deux préfixes S3, un dépôt ECR, un groupe de journaux et un secret, et lit le mot de passe de la base de données dans Secrets Manager. GitHub Actions s'authentifie avec OIDC : aucune clé AWS n'est stockée nulle part." },
        { lead: 'Groupes de sécurité en chaîne', text: "Équilibreur de charge → application sur le port 8000 → PostgreSQL sur le port 5432, chaque niveau n'acceptant que le précédent. Aucun SSH ni adresse IP publique sur EC2; l'accès d'administration passe par SSM." },
        { lead: 'Autoréparation testée', text: "J'ai arrêté le conteneur de l'application : la vérification de l'état a échoué, le groupe Auto Scaling a remplacé l'instance et une alarme CloudWatch m'a envoyé un courriel." },
        { lead: 'Reproductible', text: "Construite à partir de zéro, détruite puis reconstruite sans aucune étape manuelle. Chaque demande de tirage d'infrastructure exécute fmt, validate, tflint, une analyse de sécurité Checkov et un plan en lecture seule." },
      ],
      role: 'En solo',
      images: [
        { alt: "Carte des ressources du VPC AWS : 6 sous-réseaux répartis sur ca-central-1a et 1b (publics, applicatifs, base de données), 4 tables de routage, et les liens vers la passerelle Internet, la passerelle NAT et le point de terminaison S3" },
        { alt: "Activité du groupe Auto Scaling : une instance retirée du service après l'échec d'une vérification de l'état ELB, puis une instance de remplacement lancée" },
        { alt: "Courriel d'alarme CloudWatch d'AWS Notifications : engops-portal-dev-alb-5xx est passée de OK à ALARM" },
      ],
    },
  ],

  projects: [
    {
      status: 'Testé localement · déploiement Lambda prévu',
      group: 'Projet terminé',
      tagline:
        "Une API propulsée par l'IA qui compare des CV à des offres d'emploi et produit des recommandations structurées pour adapter le CV aux systèmes de suivi des candidatures (ATS).",
      description:
        "J'ai conçu un microservice Python modulaire avec FastAPI qui analyse des CV en PDF et les évalue par rapport à des offres d'emploi ciblées grâce à l'API Gemini de Google. Le pipeline renvoie du JSON structuré contenant un score de correspondance, les mots-clés manquants et des suggestions de puces adaptées pour le CV. J'ai mis en place la communication HTTP asynchrone avec HTTPX et une validation stricte des réponses avec Pydantic, et conçu un chemin de déploiement conteneurisé vers AWS Lambda avec Mangum.",
      note: "Appelle directement l'API REST de Gemini 2.5 Flash via HTTPX plutôt que le SDK Google GenAI. La capture d'écran montre un exemple de réponse d'une exécution locale.",
      role: 'En solo',
      images: [
        { alt: 'Swagger UI affichant une réponse 200 du point de terminaison local /api/v1/tailor : score de correspondance de 48, mots-clés manquants et puces adaptées' },
      ],
    },
    {
      subtitle: "Plateforme d'intégration de données à haut volume",
      status: 'Terminé · SOEN 6441, automne 2024',
      group: 'Projet universitaire en équipe',
      tagline: "Une application Web Java en temps réel qui intègre des données YouTube en direct au moyen d'API REST et de WebSockets.",
      description:
        "J'ai développé une plateforme d'intégration de données en temps réel avec Java et Play Framework pour consommer des API REST et traiter des données YouTube en direct. J'ai travaillé avec des acteurs Akka et des WebSockets pour la gestion des données en temps réel, en appliquant les principes de la conception orientée objet et de bonnes pratiques de test. J'ai contribué à l'intégration, aux tests et à la documentation, en utilisant Sonar pour valider la qualité du code et les échanges de données du système.",
      role: 'Équipe de 4',
      contributions: [
        "Conçu le service d'API YouTube : gestion des clés d'API, limitation du débit des requêtes sortantes et passage automatique à une nouvelle clé une fois le quota atteint",
        "Conçu les contrôleurs : routage des vues et actualisation du fil en direct",
        "Conçu l'acteur Akka des profils de chaînes",
        "Conçu le modèle de chaîne et la vue du profil de chaîne, et travaillé sur la configuration de build",
        'Rédigé la documentation Javadoc et les tests',
      ],
      images: [
        { alt: 'Le dépôt TubeLytics soen6441f24 sur GitHub' },
        { alt: 'Commit de Karthik du 1er décembre 2024 ajoutant ChannelProfileActor.java' },
      ],
    },
    {
      name: "Conseiller académique basé sur l'IA",
      status: 'Terminé · SOEN 6841, automne 2024',
      group: 'Proposition universitaire',
      tagline: "Un concept de planification des études propulsé par l'IA, conçu pour personnaliser les recommandations de cours et réduire la fatigue décisionnelle des étudiants.",
      description:
        "J'ai dirigé, à titre de chef de projet, un projet d'équipe du cours Software Project Management (SOEN 6841) portant sur un conseiller académique basé sur l'IA pour aider les étudiants universitaires à choisir leurs cours et à planifier leurs études. J'ai contribué à définir le public cible et rédigé le rapport d'identification du problème. J'ai élaboré les points forts de la solution, en définissant ses principales fonctionnalités, et créé des représentations visuelles pour communiquer la solution proposée. J'ai collaboré avec mes coéquipiers à la justification du marché et à l'ensemble de la proposition de projet.",
      achievement: "Prix du meilleur pitch de projet logiciel, Université Concordia. Présentation dans le style d'Apple Keynote qui a reçu une ovation debout.",
      role: 'Chef de projet',
      tools: ['Planification de projet', 'Diagrammes de Gantt', 'Planification des jalons', 'Analyse des exigences', 'Gestion des risques', 'Analyse de faisabilité et de viabilité', 'Planification budgétaire', 'Visualisation de la solution'],
      images: [
        { alt: "Le README du dépôt du conseiller académique basé sur l'IA : aperçu du projet et membres de l'équipe" },
        { alt: 'Tableau des fonctionnalités prévues dans la proposition : suggestions de cours personnalisées, suivi et alertes académiques, orientation de carrière, intégration LMS/SIS, engagement ludique' },
        { alt: "Diagramme de flux : l'étudiant se connecte, saisit ses préférences de cours, le conseiller récupère les données académiques et présente les cours les mieux classés" },
        { alt: 'Diagramme de Gantt des cinq phases proposées, de novembre 2024 à mars 2025' },
        { alt: "Graphique d'analyse des risques évaluant l'impact, la probabilité et la priorité de chaque risque du projet" },
      ],
    },
    {
      subtitle: "Site d'apprentissage AWS",
      status: 'Terminé',
      group: "Projet d'apprentissage",
      tagline: "Un site adaptatif d'apprentissage infonuagique qui documente un parcours d'apprentissage AWS et les projets associés.",
      description:
        "J'ai créé un site adaptatif d'apprentissage infonuagique en HTML, CSS et JavaScript, avec une navigation interactive, des thèmes clair et sombre, des animations déclenchées au défilement et une chronologie des projets. Le site est hébergé grâce à l'hébergement de site Web statique d'Amazon S3 et sert de base pour documenter des projets infonuagiques et la progression de l'apprentissage.",
      role: 'Équipe de 2 · Architecte technique',
      tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Hébergement statique Amazon S3', 'GitHub'],
      images: [{ alt: 'script.js dans le dépôt mk-cloud-journey sur GitHub : code de la barre de navigation fixe et du menu hamburger' }],
    },
    {
      subtitle: "Prédiction du prix de l'iPhone / assistant d'achat",
      status: 'Appuyé par la recherche · dépôt en cours de récupération',
      group: 'Projet de recherche',
      tagline: "Un concept de prédiction de prix et d'assistant d'achat qui explore des modèles de régression pour aider les consommateurs à prendre des décisions d'achat plus éclairées.",
      description:
        "PennyWise est un projet de prédiction de prix lié à des recherches sur la tarification des produits par régression et l'aide à l'achat. Ces recherches ont exploré l'historique des prix de l'iPhone 11 sur Amazon et des algorithmes de régression par apprentissage automatique pour prédire les prix, afin d'aider les consommateurs à prendre des décisions d'achat plus éclairées.",
      images: [{ alt: 'Page Springer Link de « A Regression Analysis of iPhone 11 Pricing Factors »' }],
    },
  ],

  experienceTitle: 'Expérience',
  experience: [
    {
      role: 'Analyste en automatisation IA et données',
      dates: 'août 2026 – oct. 2026',
      meta: 'Temps partiel, non rémunéré',
      summary:
        "J'ai contribué aux opérations et à l'approvisionnement tout en soutenant l'acquisition de clients pour des services de logiciels CRM et d'intégration de l'IA. J'ai fait de la prospection auprès de clients potentiels, aidé à repérer des occasions d'affaires et contribué à l'analyse de données et à des initiatives d'automatisation par l'IA.",
      highlights: ['Communiqué avec des centaines de clients potentiels dans le cadre de la prospection'],
    },
    {
      role: "Surveillant d'examens",
      org: 'Université Concordia',
      dates: 'avr. 2026 – sept. 2026',
      meta: 'Contrat, temps partiel · Montréal, sur place',
      summary:
        "J'ai surveillé les salles d'examen pour préserver l'intégrité académique, aidé les étudiants à suivre les procédures d'examen et collaboré avec le personnel administratif pour assurer le bon déroulement des examens.",
    },
    {
      role: 'Spécialiste des relations clients et des opérations (collecte de fonds par téléphone)',
      dates: "févr. 2026 – aujourd'hui",
      meta: 'Temps partiel · Montréal, à distance',
      summary:
        'Sollicitation bilingue (anglais/français) de donateurs partout au Canada pour des organismes comme la Croix-Rouge canadienne et Cœur + AVC.',
      highlights: [
        'Géré un volume élevé de communications bilingues (anglais/français) avec la clientèle',
        'Analysé les données opérationnelles et les indicateurs de performance quotidiens pour gérer les horaires hebdomadaires',
      ],
    },
    {
      role: 'Testeur assurance qualité et matériel (pigiste)',
      meta: "Montréal · Mandat d'une journée, sous entente de confidentialité",
      highlights: [
        "Exécuté des tests manuels et des protocoles d'assurance qualité pour repérer des défauts et vérifier la performance du logiciel",
        'Collaboré avec des équipes de développement multidisciplinaires pour résoudre des problèmes techniques et améliorer la fiabilité du système',
      ],
    },
    {
      // Role title kept as issued ("ingénieur" is a protected title in Québec).
      dates: 'juin 2023 – mars 2024',
      meta: 'Bengaluru, Inde · Hybride',
      highlights: [
        'Développé et intégré des applications back-end et des API évolutives en Java et en Python dans un environnement Linux/Unix.',
        "Collaboré directement avec des analystes et des équipes d'ingénierie multidisciplinaires pour mettre en œuvre des améliorations logicielles et corriger des vulnérabilités de cybersécurité.",
        "Participé à des revues rigoureuses de conception et de code, en veillant au respect des pratiques d'amélioration continue et à la qualité du travail livré.",
        "Contribué aux flux de travail CI/CD avec Git, documenté le développement des programmes et participé activement aux discussions de l'équipe Agile.",
      ],
    },
    {
      role: 'Stagiaire en apprentissage automatique et automatisation',
      dates: 'mars 2023 – mai 2023',
      meta: 'Bengaluru, Inde · Hybride',
      highlights: [
        "Collaboré à un modèle de maintenance prédictive qui a réduit de 20 % les temps d'arrêt de l'équipement",
        'Automatisé des flux de traitement de données basés sur S3 pour réduire le travail manuel et simplifier les processus opérationnels.',
        'Créé un assistant personnel JARVIS en Python fonctionnant sur un Raspberry Pi',
      ],
    },
    {
      role: 'Concepteur Web et graphiste (stagiaire)',
      dates: 'juin 2020 – oct. 2020',
      meta: 'New Delhi, Inde · À distance',
      summary:
        'Conception Web et graphique pour des clients, dont un site générateur de prospects, du matériel marketing et des visuels pour les réseaux sociaux, en travaillant directement avec les clients sur leurs besoins.',
    },
  ],

  skillsTitle: 'Compétences',
  skills: [
    { group: 'Langages' },
    { group: 'Back-end et API', items: ['FastAPI', 'Pydantic', 'HTTPX', 'asyncio', 'Flask', 'Play Framework', 'Akka', 'WebSockets', 'API REST', 'PostgreSQL'] },
    { group: 'Infonuagique et DevOps', items: ['AWS (EC2, S3, RDS, VPC, IAM, ALB, Auto Scaling, CloudWatch, Lambda)', 'Terraform', 'Hébergement statique S3', 'Cloudflare Pages', 'Docker', 'Git', 'GitHub Actions (OIDC)', 'CI/CD', 'Checkov', 'Linux/Unix'] },
    { group: 'IA et données', items: ['ONNX Runtime', 'AMD Ryzen AI (NPU)', 'Quantification INT8 (AMD Quark)', 'YOLOv8n-pose', 'OpenCV', 'NumPy', 'API Gemini', 'Modèles de régression', 'Analyse de données'] },
    { group: 'Front-end et bureau' },
    { group: 'Qualité', items: ['Tests manuels et automatisés', 'pytest', 'Revues de code', 'Sonar', 'Javadoc'] },
    { group: 'Pratiques', items: ['Conception orientée objet', 'Agile', 'Gestion de projet', 'Analyse des exigences', 'Gestion des risques'] },
    { group: "En cours d'apprentissage" },
  ],

  educationTitle: 'Formation',
  education: [
    {
      degree: 'M.Eng. Génie logiciel',
      school: 'Université Concordia',
      detail: "École de génie et d'informatique Gina Cody",
      dates: 'mai 2024 – mai 2026',
      grade: 'Moyenne cumulative 3,29',
      activities: [
        "Passage de la M.Eng. en génie des systèmes de qualité au génie logiciel (sept. 2024) pour aligner mon diplôme sur mes objectifs en logiciel et en infonuagique, en conservant mes cours d'assurance qualité dans le nouveau programme",
        'Membre du conseil, représentant des étudiants des cycles supérieurs, Concordia Council on Student Life (CCSL) : vote sur le financement d’initiatives étudiantes',
        "Coordonnateur d'événements, Concordia Filmmaking Club : organisation d'événements pour la communauté étudiante du cinéma",
        'Bénévole à la vente de livres usagés de Concordia en novembre',
      ],
    },
    {
      degree: 'B.E. Informatique (Computer Science Engineering)',
      dates: 'août 2019 – juin 2023',
      location: 'Bengaluru, Inde',
      grade: 'CGPA 8,44',
      activities: [
        'Publication de trois articles de recherche, dont un Prix du meilleur article',
        "Vice-président, ACE CS Club : direction d'une équipe de 20 membres organisant des concours de programmation, des événements technos et des projets d'applications et de sites Web",
        "Secrétaire, Drama Club : encadrement d'une équipe de plus de 25 membres jusqu'à des victoires à l'échelle nationale",
        'Coordonnateur étudiant, département CIE (innovation et entrepreneuriat)',
      ],
    },
  ],
  courseworkTitle: 'Cours suivis à Concordia',
  coursework: [{ term: 'Été 2024' }, { term: 'Automne 2024' }, { term: 'Hiver 2025' }, { term: 'Automne 2025' }, { term: 'Hiver 2026' }],

  certificationsTitle: 'Certifications',
  certifications: [
    { date: "déc. 2024 · valide jusqu'en déc. 2027", badge: { alt: 'Badge AWS Certified Cloud Practitioner' } },
    { date: 'En cours' },
    { issuer: 'AWS, offert par Vinsys IT Services', date: 'sept. – déc. 2023', detail: 'Programme de 12 semaines : EC2, S3, RDS, IAM, VPC, Lambda, CloudWatch, Linux, Jenkins' },
    { date: 'nov. 2022', badge: IBM_BADGE },
    { date: 'nov. 2022', badge: IBM_BADGE },
    { date: 'nov. 2022', badge: IBM_BADGE },
  ],

  publicationsTitle: 'Publications et prix',
  publications: [
    {
      date: 'mai 2024',
      tags: ['Springer', 'Indexé dans Scopus'],
      summary: "Utilise l'historique des prix de l'iPhone 11 sur Amazon pour entraîner et tester des modèles de régression par apprentissage automatique, et propose un outil pour aider les consommateurs dans leurs décisions d'achat.",
    },
    {
      venue: "43e World Conference on Applied Science, Engineering & Technology (WCASET 2022), Goa, en association avec l'IFERP",
      date: 'déc. 2022',
      tags: ['Prix du meilleur article'],
    },
    { date: 'mai 2022', tags: ['Revue'] },
  ],
  awards: [
    {
      title: 'Prix du meilleur article',
      org: "WCASET 2022 · Padre Conceição College of Engineering avec l'IFERP",
      date: 'déc. 2022',
      detail: 'Pour « Product Price Rate Detection Using Regression Models and Shopping Assistant », Goa, Inde.',
      image: { alt: 'Certificat du meilleur article de la 43e World Conference on Applied Science, Engineering & Technology, décerné à Karthikeyan Umesh', label: 'Voir le certificat' },
    },
    {
      title: 'Prix du meilleur pitch de projet logiciel',
      org: 'Université Concordia · SOEN 6841',
      detail: "Pour le conseiller académique basé sur l'IA. Présentation dans le style d'Apple Keynote qui a reçu une ovation debout.",
    },
    {
      title: '2e meilleur court métrage, IIM Shortcuts Film Festival',
      org: 'Delusions of Grandeur · décerné par Film Companion',
      detail: "Festival d'envergure nationale; l'œuvre a été vue par Anupama Chopra. Le film a aussi remporté le prix du 3e meilleur court métrage au Estrade St. Claret Film Festival 2020 et a été en sélection officielle au CARV Karnataka Film Festival 2020.",
      image: { alt: FILM_POSTER_ALT, label: "Voir l'affiche" },
    },
  ],

  beyond: {
    title: 'Au-delà du code',
    stories: [
      {
        title: 'Cinéma',
        body: "J'adore faire et réaliser des courts métrages. J'ai réalisé Delusions of Grandeur, qui a remporté le prix du 2e meilleur court métrage au IIM Shortcuts Film Festival 2019 (Film Companion) et celui du 3e meilleur court métrage au Estrade St. Claret Film Festival 2020, en plus d'être en sélection officielle au CARV Karnataka Film Festival 2020. J'ai aussi été assistant-réalisateur sur deux courts métrages, dont l'un figure sur IMDb. De septembre 2025 à mai 2026, j'ai été coordonnateur d'événements du Concordia Filmmaking Club. Le cinéma a façonné ma façon d'aborder la narration, la résolution créative de problèmes, le travail d'équipe et la coordination.",
        image: { alt: FILM_POSTER_ALT },
        link: { label: 'Profil IMDb' },
      },
      {
        title: 'Apprendre le français',
        body: "J'ai étudié le français avec le MIFI à l'EMULCQ (près de la station Vendôme) pendant environ un an et demi, en parallèle avec des études exigeantes à Concordia. J'ai suivi le programme jusqu'au niveau 7 et j'ai été le seul étudiant de ma classe à poursuivre tous les niveaux sans abandonner. Aujourd'hui, je converse en français dans des contextes quotidiens et professionnels.",
        badge: { alt: "Logo d'Immigration, Francisation et Intégration Québec" },
      },
      {
        title: 'Bienvenue au Canada',
        body: "PeaceGeeks a présenté mon arrivée de Bengaluru à Montréal dans un récit sur les nouveaux arrivants consacré à sa plateforme Welcome to Canada.",
        image: {
          alt: "Bannière du récit de PeaceGeeks avec Karthik et sa citation : « Preparation is everything. The right resources can make all the difference. I'd absolutely recommend newcomers use Welcome to Canada. »",
          credit: 'Image : PeaceGeeks',
        },
        link: { label: 'Lire le récit (en anglais)' },
      },
    ],
    leadershipTitle: 'Leadership et engagement',
    leadership: [
      {
        role: 'Membre du conseil',
        dates: 'sept. 2025 – avr. 2026',
        detail: "J'ai représenté les intérêts des étudiants des cycles supérieurs dans les décisions universitaires sur la vie étudiante et voté sur des initiatives étudiantes et le financement de programmes menés par des étudiants.",
      },
      {
        role: "Coordonnateur d'événements",
        dates: 'sept. 2025 – mai 2026',
        detail: "Organisation du Film Jam, coordination d'un court métrage réalisé au sein du club et organisation d'une rencontre avec des cinéastes de Montréal et de l'Université Concordia.",
      },
      {
        dates: 'Été 2024',
        detail: "Rencontres étudiantes de fin de semaine à mon arrivée à Concordia, pour bâtir une communauté autour de discussions et d'activités.",
      },
      {
        role: 'Bénévole, éducateur en santé menstruelle',
        dates: 'juill. 2022',
        detail: "Séances de sensibilisation à domicile sur la santé et l'hygiène menstruelles.",
      },
    ],
    personal: "Preneur de notes assidu, travailleur acharné et passionné de français. J'aime voyager et organiser les horaires, les déplacements et la logistique qui vont avec.",
    travelTitle: 'Voyages',
    travel: [
      { when: 'oct. 2026', caption: "Départ de l'aéroport métropolitain de Montréal", photo: { alt: "Karthik devant l'aéroport métropolitain de Montréal (MET), à côté de l'enseigne du terminal" } },
      { when: 'oct. 2026', photo: { alt: 'Karthik sous la verrière du West Edmonton Mall, avec des pédalos-cygnes roses derrière lui' } },
      { when: 'oct. 2026', photo: { alt: 'Karthik devant un squelette de dinosaure au Royal Alberta Museum' } },
      { when: 'oct. 2026', caption: "La vallée de la rivière la nuit, avec le dôme de l'Assemblée législative au loin", photo: { alt: "Karthik sur un pont la nuit, avec les tours d'Edmonton et le dôme illuminé de l'Assemblée législative de l'Alberta derrière lui" } },
      { when: 'déc. 2024', caption: 'Examen AWS Cloud Practitioner' },
      { place: 'Inde', when: 'Été 2025', caption: 'Voyage de 21 jours' },
      { when: 'juin 2026' },
    ],
  },

  contact: {
    title: 'Contact',
    lead: "Ouvert aux postes à temps plein et à temps partiel en logiciel, infonuagique, automatisation par l'IA et données, y compris les postes pour nouveaux diplômés et les contrats. Le moyen le plus rapide de me joindre est le courriel.",
    links: [{}, {}, { label: 'CV (PDF, en anglais)' }],
  },

  footer: {
    note: 'Conçu avec React, Tailwind CSS et GSAP.',
    analytics: 'Ce site utilise des statistiques respectueuses de la vie privée, sans témoins.',
  },
}
