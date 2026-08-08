/* ==========================================================================
   KHALID BARRADAH — PORTFOLIO PRO
   Scripts v3.0 — Premium (Bilingual FR/EN)
   ========================================================================== */

(function () {
  'use strict';

  // ========================================================================
  // 1. I18N DICTIONARIES (Centralized translations)
  //    French is the default language. English falls back to FR if a key is missing.
  // ========================================================================

var I18N = {
    storageKey: 'portfolio-lang',
    defaultLang: 'fr',
    current: 'fr',
    fr: {
      'meta.title': 'Khalid Barradah | ENCGJ Student • Digital Development @OFPPT • Web Developer',
      'meta.ogTitle': 'Khalid Barradah | ENCGJ Student • Digital Development @OFPPT • Web Developer',
      'meta.twitterTitle': 'Khalid Barradah | ENCGJ Student • Digital Development @OFPPT • Web Developer',
      'meta.description': 'Portfolio de Khalid Barradah — ENCGJ Student & Digital Development @OFPPT. Web Development • Digital & Business Enthusiast. À la recherche d\'un stage à El Jadida / Casablanca.',
      'meta.ogDescription': 'Étudiant ENCGJ & Développement Digital @OFPPT — Web Development • Digital & Business Enthusiast. Recherche de stage.',

      'lang.label': 'Changer la langue',
      'lang.frLabel': 'Passer au français',
      'lang.enLabel': 'Passer à l\'anglais',

      'preloader.label': 'Chargement',
      'preloader.line1': 'Initialisation du portfolio...',
      'preloader.line2': 'Chargement des compétences...',
      'preloader.line3': 'Prêt.',

      // Nav
      'nav.label': 'Navigation principale',
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.skills': 'Compétences',
      'nav.projects': 'Projets',
      'nav.contact': 'Contact',
      'nav.theme': 'Changer le thème',
      'nav.palette': 'Ouvrir la palette de commandes',
      'nav.menu': 'Menu mobile',
      'nav.backToTop': 'Retour en haut',
'nav.backToStart': 'Retour à l\'accueil',

      // Hero
      'hero.badge': 'Disponible pour un stage',
      'hero.eyebrow': '// étudiant encgj & développement digital — el jadida, ma',
      'hero.title1': 'Bonjour, je suis',
      'hero.typingPrefix': 'Je suis ',
      'hero.description': 'Étudiant à l\'<strong>ENCGJ</strong> & <strong>Développement Digital @OFPPT</strong> — Je transforme des idées en applications complètes, de la logique métier jusqu\'à l\'interface. Actuellement à la recherche d\'un stage pour mettre mes compétences techniques et ma vision <strong>digital & business</strong> au service d\'une équipe passionnante.',
      'hero.ctaProjects': 'Voir mes projets',
      'hero.ctaCv': 'Télécharger mon CV',
      'hero.statProjects': 'Projets',
      'hero.statTechs': 'Technos',
      'hero.statMotivation': '% Motivation',
      'hero.terminalLabel': 'Terminal interactif — tapez une commande',
      'hero.terminalHint': 'Tapez',
      'hero.terminalHint2': 'pour les commandes',
      'hero.scroll': 'Scroll',

      // About
      'about.eyebrow': '// à propos',
      'about.title1': 'Je transforme l\'apprentissage en',
      'about.title2': 'réalisations concrètes.',
      'about.text1': 'Étudiant en 1ère année à l\'<strong>ENCG El Jadida</strong> (École Nationale de Commerce et de Gestion) et en <strong>Développement Digital @OFPPT</strong>, avec une formation en développement web à l\'ISTA HH1 Casablanca comme background technique. Titulaire d\'un baccalauréat Sciences Mathématiques B (mention Bien). Je conçois des interfaces claires et des solutions robustes — du script Python à l\'application web complète.',
      'about.text2': 'Ma vision : allier <strong>compétences techniques</strong> (dev web, Python, PHP, JavaScript) et <strong>vision business & management</strong> acquise à l\'ENCGJ pour créer des solutions numériques à fort impact. Mon expérience chez McDonald\'s m\'a appris la <strong>rigueur</strong>, le <strong>travail en équipe</strong> et la gestion sous pression — des soft skills que j\'applique aujourd\'hui dans chaque projet.',
      'about.info.location': 'Localisation',
      'about.info.locationVal': 'El Jadida / Casablanca, Maroc',
      'about.info.education': 'Formation',
      'about.info.educationVal': 'ENCGJ & OFPPT — Développement Digital',
      'about.info.level': 'Niveau',
      'about.info.levelVal': '1ère année ENCGJ & OFPPT (2025–2026)',
      'about.info.bac': 'Bac',
      'about.info.bacVal': 'Sciences Math B — 14,97/20',
      'about.info.status': 'Statut',
      'about.info.statusVal': 'Recherche de stage',
      'about.status': 'Disponible',
      'about.env.location': '"El Jadida/Casablanca, Maroc"',
      'about.env.education': '"ENCGJ & OFPPT — Dev Digital"',
      'about.env.status': '"Recherche de stage"',

      // Skills
      'skills.eyebrow': '// compétences',
      'skills.title1': 'Des bases solides pour construire',
      'skills.title2': 'de vrais projets.',
      'skills.filterAll': 'Tous',
      'skills.filterFrontend': 'Frontend',
      'skills.filterBackend': 'Backend',
      'skills.filterTools': 'Outils',
      'skills.responsive': 'Responsive',
      'skills.python': 'Python (POO)',
      'skills.sql': 'MySQL / SQL',
      'skills.git': 'Git & GitHub',
      'skills.cyber': 'Cybersécurité',
      'skills.level.advanced': 'Avancé',
      'skills.level.intermediate': 'Intermédiaire',
      'skills.level.intermediatePlus': 'Intermédiaire+',
      'skills.level.beginner': 'Débutant',
      'skills.level.basic': 'Initiation',

      // Projects
      'projects.eyebrow': '// projets',
      'projects.title1': 'Quelques',
      'projects.title2': 'réalisations récentes.',
      'projects.viewCode': 'Voir le code',
      'projects.viewGithub': 'Voir sur GitHub',
      'projects.stageMaroc.alt': 'StageMaroc - Plateforme de stages',
      'projects.stageMaroc.desc': 'Plateforme de mise en relation stagiaires-entreprises avec publication d\'offres et gestion des candidatures.',
      'projects.gestionStagiaires.title': 'Gestion des Stagiaires OFPPT',
      'projects.gestionStagiaires.alt': 'Gestion des Stagiaires OFPPT',
      'projects.gestionStagiaires.desc': 'Application console Python orientée objet : gestion des stagiaires, suivi des absences, sauvegarde JSON et export CSV.',
      'projects.calculatrice.title': 'Calculatrice Web Interactive',
      'projects.calculatrice.alt': 'Calculatrice Web Interactive',
      'projects.calculatrice.desc': 'Application front-end en HTML5, CSS3 et JavaScript avec une expérience de calcul fluide et design moderne.',
      'projects.gestionCandidats.title': 'Gestion des Candidats',
      'projects.gestionCandidats.alt': 'Gestion des Candidats',
      'projects.gestionCandidats.desc': 'Application CRUD complète en PHP/MySQL : ajout, affichage, modification et suppression de fiches candidats.',

      // Contact
      'contact.eyebrow': '// contact',
      'contact.title1': 'Discutons de votre',
      'contact.title2': 'prochain projet.',
      'contact.description': 'Vous avez un projet en tête, une opportunité de stage, ou simplement envie d\'échanger ? Je suis à l\'écoute. N\'hésitez pas à me contacter via le formulaire ou directement par email.',
      'contact.email': 'Email',
      'contact.emailSecondary': 'Email secondaire',
      'contact.copyEmail': 'Copier l\'email',
      'contact.formTitle': 'Nouveau message',
      'contact.name': 'Nom complet',
      'contact.namePlaceholder': 'Votre nom',
      'contact.emailLabel': 'Email',
      'contact.emailPlaceholder': 'vous@exemple.com',
      'contact.subject': 'Sujet',
      'contact.subjectPlaceholder': 'Sujet du message',
      'contact.message': 'Message',
      'contact.messagePlaceholder': 'Votre message...',
      'contact.submit': 'Envoyer le message',
      'contact.sending': 'Envoi...',

      // Footer
      'footer.rights': 'Tous droits réservés.',
      'footer.build': 'Construit avec',
      'footer.and': 'et',

      // Modal
      'modal.close': 'Fermer',
      'modal.alt': 'Khalid Barradah - Portrait',

      // Palette
      'palette.label': 'Palette de commandes',
      'palette.placeholder': 'Tapez une commande ou une section…',
      'palette.close': 'fermer',
      'palette.navigate': 'Naviguer',
      'palette.open': 'Ouvrir',
      'palette.empty': 'Aucun résultat trouvé',

      // Dynamic (typing, terminal, palette items, toasts)
      'typing.0': 'des applications web complètes.',
      'typing.1': 'des expériences utilisateur modernes.',
      'typing.2': 'des solutions backend robustes.',
      'typing.3': 'des interfaces élégantes et réactives.',
      'typing.4': 'l\'avenir du web, une ligne à la fois.',

      'term.help': 'Commandes disponibles:\n  help       — Affiche cette aide\n  whoami     — Qui suis-je ?\n  skills     — Mes compétences\n  projects   — Mes projets\n  contact    — Me contacter\n  education  — Ma formation\n  experience — Mon expérience\n  cv         — Télécharger mon CV\n  github     — Mon GitHub\n  linkedin   — Mon LinkedIn\n  email      — Mon email\n  date       — Affiche la date\n  clear      — Efface le terminal\n  sudo       ;-)',
      'term.whoami': 'Khalid Barradah\nÉtudiant à l\'ENCG El Jadida | Ancien étudiant en Développement Digital @ OFPPT\nPassionné par le code, le design et l\'innovation.',
      'term.skills': 'Compétences techniques :\n  • Frontend : HTML5, CSS3, JavaScript (ES6+),\n    Responsive Design\n  • Backend  : Python (POO), PHP, MySQL/SQL\n  • Outils   : Git & GitHub, VirtualBox\n  • Sécurité : Initiation cybersécurité',
      'term.projects': 'Projets récents :\n  1. StageMaroc — PHP/MySQL (plateforme stages)\n  2. Gestion Stagiaires — Python (POO)\n  3. Calculatrice Web — HTML/CSS/JS\n  4. Gestion Candidats — PHP/MySQL (CRUD)\n  Tapez "open 1-4" pour voir sur GitHub.',
      'term.contact': 'Me contacter :\n  Email : khalidberrada2007@gmail.com\n  LinkedIn : @khalid-barradah\n  GitHub : @khalidberrada2007-dotcom',
      'term.education': 'Formation :\n  • ENCG El Jadida — 1ère année (2026 - Présent)\n  • OFPPT - ISTA HH1 — Développement Digital (2025 - 2026)\n  • Baccalauréat Sciences Mathématiques B — Mention Bien (14,97/20)',
      'term.experience': 'Expérience :\n  • Équipier McDonald\'s (soft skills : rigueur, travail d\'équipe, gestion stress)\n  • Projets personnels (voir "projects")',
      'term.cv': 'Téléchargement du CV en cours...',
      'term.github': 'Ouverture de GitHub...',
      'term.linkedin': 'Ouverture de LinkedIn...',
      'term.email': 'Ouverture du client email...',
      'term.sudo': '😏 Vous avez les droits root. Mais il n\'y a rien à casser ici.',
      'term.openOk': 'Ouverture du projet ',
      'term.openErr': 'introuvable. Utilisez "projects" pour voir la liste.',
      'term.intro0': 'Bienvenue sur mon portfolio ! 🚀',
      'term.intro1': 'Système : étudiant-encgj/pro',
      'term.intro2': 'Kernel : créativité 🔥 + logique ⚡',
      'term.introHelp': 'Tapez "help" pour explorer.',
      'term.paletteHint': 'Ou cliquez sur ⌘K pour la palette.',
      'term.unknown': 'Commande inconnue : "',
      'term.unknown2': '". Tapez "help" pour la liste.',

      'paletteItem.home': 'Accueil',
      'paletteItem.about': 'À propos',
      'paletteItem.skills': 'Compétences',
      'paletteItem.projects': 'Projets',
      'paletteItem.contact': 'Contact',
      'paletteItem.theme': 'Changer le thème',
      'paletteItem.cv': 'Télécharger CV',
      'paletteItem.copyEmail': 'Copier l\'email',
      'paletteItem.github': 'Ouvrir GitHub',
      'paletteItem.linkedin': 'Ouvrir LinkedIn',

      'toast.copied': 'Copié dans le presse-papier !',
      'toast.copyError': 'Impossible de copier.',
      'toast.emailCopied': 'Email copié !',
      'toast.required': 'Veuillez remplir tous les champs obligatoires.',
      'toast.invalidEmail': 'Veuillez entrer un email valide.',
      'toast.fallback': 'Message envoyé par email de secours.',
      'toast.success': 'Merci ',
      'toast.success2': ' ! Votre message a bien été envoyé. Je vous répondrai rapidement. ✨'
    },

    en: {
      'meta.title': 'Khalid Barradah | ENCGJ Student • Digital Development @OFPPT • Web Developer',
      'meta.description': 'Portfolio of Khalid Barradah — ENCGJ Student & Digital Development @OFPPT. Web Development • Digital & Business Enthusiast. Looking for an internship in El Jadida / Casablanca.',
      'meta.ogTitle': 'Khalid Barradah | ENCGJ Student • Digital Development @OFPPT • Web Developer',
      'meta.ogDescription': 'ENCGJ Student & Digital Development @OFPPT — Web Development • Digital & Business Enthusiast. Looking for an internship.',
      'meta.twitterTitle': 'Khalid Barradah | ENCGJ Student • Digital Development @OFPPT • Web Developer',

      'preloader.label': 'Loading',
      'preloader.line1': 'Initializing portfolio...',
      'preloader.line2': 'Loading skills...',
      'preloader.line3': 'Ready.',

      'nav.label': 'Main navigation',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'nav.theme': 'Toggle theme',
      'nav.palette': 'Open command palette',
      'nav.menu': 'Mobile menu',
      'nav.backToTop': 'Back to top',
      'nav.backToStart': 'Back to home',

      'lang.label': 'Change language',
      'lang.frLabel': 'Switch to French',
      'lang.enLabel': 'Switch to English',

      'hero.badge': 'Available for an internship',
      'hero.eyebrow': '// encgj student & digital development — el jadida, ma',
      'hero.title1': 'Hello, I am',
      'hero.typingPrefix': 'I am ',
      'hero.description': 'Student at <strong>ENCGJ</strong> & <strong>Digital Development @OFPPT</strong> — I turn ideas into complete applications, from business logic to the interface. Currently looking for an internship to put my technical skills and my <strong>digital & business</strong> vision at the service of an exciting team.',
      'hero.ctaProjects': 'View my projects',
      'hero.ctaCv': 'Download my CV',
      'hero.statProjects': 'Projects',
      'hero.statTechs': 'Techs',
      'hero.statMotivation': '% Motivation',
      'hero.terminalLabel': 'Interactive terminal — type a command',
      'hero.terminalHint': 'Type',
      'hero.terminalHint2': 'for commands',
      'hero.scroll': 'Scroll',

      'about.eyebrow': '// about',
      'about.title1': 'I turn learning into',
      'about.title2': 'concrete achievements.',
      'about.text1': 'First-year student at <strong>ENCG El Jadida</strong> (National School of Commerce and Management) and in <strong>Digital Development @OFPPT</strong>, with web development training at ISTA HH1 Casablanca as a technical background. I hold a Baccalaureate in Mathematical Sciences B (with honors). I design clear interfaces and robust solutions — from Python scripts to full web applications.',
      'about.text2': 'My vision: combine <strong>technical skills</strong> (web dev, Python, PHP, JavaScript) and a <strong>business & management mindset</strong> learned at ENCGJ to create high-impact digital solutions. My experience at McDonald\'s taught me <strong>rigor</strong>, <strong>teamwork</strong> and working under pressure — soft skills I apply today in every project.',
      'about.info.location': 'Location',
      'about.info.locationVal': 'El Jadida / Casablanca, Morocco',
      'about.info.education': 'Education',
      'about.info.educationVal': 'ENCGJ & OFPPT — Digital Development',
      'about.info.level': 'Level',
      'about.info.levelVal': '1st year ENCGJ & OFPPT (2025–2026)',
      'about.info.bac': 'Bac',
      'about.info.bacVal': 'Math Sciences B — 14.97/20',
      'about.info.status': 'Status',
      'about.info.statusVal': 'Looking for an internship',
      'about.status': 'Available',
      'about.env.location': '"El Jadida/Casablanca, Morocco"',
      'about.env.education': '"ENCGJ & OFPPT — Dev Digital"',
      'about.env.status': '"Looking for an internship"',

      'skills.eyebrow': '// skills',
      'skills.title1': 'Solid foundations to build',
      'skills.title2': 'real projects.',
      'skills.filterAll': 'All',
      'skills.filterFrontend': 'Frontend',
      'skills.filterBackend': 'Backend',
      'skills.filterTools': 'Tools',
      'skills.responsive': 'Responsive',
      'skills.python': 'Python (OOP)',
      'skills.sql': 'MySQL / SQL',
      'skills.git': 'Git & GitHub',
      'skills.cyber': 'Cybersecurity',
      'skills.level.advanced': 'Advanced',
      'skills.level.intermediate': 'Intermediate',
      'skills.level.intermediatePlus': 'Intermediate+',
      'skills.level.beginner': 'Beginner',
      'skills.level.basic': 'Basics',

      'projects.eyebrow': '// projects',
      'projects.title1': 'Some',
      'projects.title2': 'recent achievements.',
      'projects.viewCode': 'View code',
      'projects.viewGithub': 'View on GitHub',
      'projects.stageMaroc.alt': 'StageMaroc - Internship platform',
      'projects.stageMaroc.desc': 'Platform connecting interns and companies with job posting and application management.',
      'projects.gestionStagiaires.title': 'OFPPT Intern Management',
      'projects.gestionStagiaires.alt': 'OFPPT Intern Management',
      'projects.gestionStagiaires.desc': 'Object-oriented Python console application: intern management, absence tracking, JSON save and CSV export.',
      'projects.calculatrice.title': 'Interactive Web Calculator',
      'projects.calculatrice.alt': 'Interactive Web Calculator',
      'projects.calculatrice.desc': 'Front-end application in HTML5, CSS3 and JavaScript with a smooth calculation experience and modern design.',
      'projects.gestionCandidats.title': 'Candidate Management',
      'projects.gestionCandidats.alt': 'Candidate Management',
      'projects.gestionCandidats.desc': 'Complete CRUD application in PHP/MySQL: add, display, edit and delete candidate records.',

      'contact.eyebrow': '// contact',
      'contact.title1': 'Let\'s discuss your',
      'contact.title2': 'next project.',
      'contact.description': 'Do you have a project in mind, an internship opportunity, or just want to chat? I\'m all ears. Feel free to contact me via the form or directly by email.',
      'contact.email': 'Email',
      'contact.emailSecondary': 'Secondary email',
      'contact.copyEmail': 'Copy email',
      'contact.formTitle': 'New message',
      'contact.name': 'Full name',
      'contact.namePlaceholder': 'Your name',
      'contact.emailLabel': 'Email',
      'contact.emailPlaceholder': 'you@example.com',
      'contact.subject': 'Subject',
      'contact.subjectPlaceholder': 'Message subject',
      'contact.message': 'Message',
      'contact.messagePlaceholder': 'Your message...',
      'contact.submit': 'Send message',
      'contact.sending': 'Sending...',

      'footer.rights': 'All rights reserved.',
      'footer.build': 'Built with',
      'footer.and': 'and',

      'modal.close': 'Close',
      'modal.alt': 'Khalid Barradah - Portrait',

      'palette.label': 'Command palette',
      'palette.placeholder': 'Type a command or a section…',
      'palette.close': 'close',
      'palette.navigate': 'Navigate',
      'palette.open': 'Open',
      'palette.empty': 'No result found',

      'typing.0': 'complete web applications.',
      'typing.1': 'modern user experiences.',
      'typing.2': 'robust backend solutions.',
      'typing.3': 'elegant and responsive interfaces.',
      'typing.4': 'the future of the web, one line at a time.',

      'term.help': 'Available commands:\n  help       — Shows this help\n  whoami     — Who am I?\n  skills     — My skills\n  projects   — My projects\n  contact    — Contact me\n  education  — My education\n  experience — My experience\n  cv         — Download my CV\n  github     — My GitHub\n  linkedin   — My LinkedIn\n  email      — My email\n  date       — Shows the date\n  clear      — Clears the terminal\n  sudo       ;-)',
      'term.whoami': 'Khalid Barradah\nStudent at ENCG El Jadida | Former student in Digital Development @ OFPPT\nPassionate about code, design and innovation.',
      'term.skills': 'Technical skills:\n  • Frontend: HTML5, CSS3, JavaScript (ES6+),\n    Responsive Design\n  • Backend : Python (OOP), PHP, MySQL/SQL\n  • Tools   : Git & GitHub, VirtualBox\n  • Security: Cybersecurity basics',
      'term.projects': 'Recent projects:\n  1. StageMaroc — PHP/MySQL (internship platform)\n  2. Intern Management — Python (OOP)\n  3. Web Calculator — HTML/CSS/JS\n  4. Candidate Management — PHP/MySQL (CRUD)\n  Type "open 1-4" to view on GitHub.',
      'term.contact': 'Contact me:\n  Email: khalidberrada2007@gmail.com\n  LinkedIn: @khalid-barradah\n  GitHub: @khalidberrada2007-dotcom',
      'term.education': 'Education:\n  • ENCG El Jadida — 1st year (2026 - Present)\n  • OFPPT - ISTA HH1 — Digital Development (2025 - 2026)\n  • Baccalaureate Mathematical Sciences B — With honors (14.97/20)',
      'term.experience': 'Experience:\n  • McDonald\'s Crew Member (soft skills: rigor, teamwork, stress management)\n  • Personal projects (see "projects")',
      'term.cv': 'Downloading CV...',
      'term.github': 'Opening GitHub...',
      'term.linkedin': 'Opening LinkedIn...',
      'term.email': 'Opening email client...',
      'term.sudo': '😏 You have root access. But there\'s nothing to break here.',
      'term.openOk': 'Opening project ',
      'term.openErr': 'not found. Use "projects" to see the list.',
      'term.intro0': 'Welcome to my portfolio! 🚀',
      'term.intro1': 'System: student-encgj/pro',
      'term.intro2': 'Kernel: creativity 🔥 + logic ⚡',
      'term.introHelp': 'Type "help" to explore.',
      'term.paletteHint': 'Or click ⌘K for the palette.',
      'term.unknown': 'Unknown command: "',
      'term.unknown2': '". Type "help" for the list.',

      'paletteItem.home': 'Home',
      'paletteItem.about': 'About',
      'paletteItem.skills': 'Skills',
      'paletteItem.projects': 'Projects',
      'paletteItem.contact': 'Contact',
      'paletteItem.theme': 'Toggle theme',
      'paletteItem.cv': 'Download CV',
      'paletteItem.copyEmail': 'Copy email',
      'paletteItem.github': 'Open GitHub',
      'paletteItem.linkedin': 'Open LinkedIn',

      'toast.copied': 'Copied to clipboard!',
      'toast.copyError': 'Unable to copy.',
      'toast.emailCopied': 'Email copied!',
      'toast.required': 'Please fill in all required fields.',
      'toast.invalidEmail': 'Please enter a valid email.',
      'toast.fallback': 'Message sent via fallback email.',
      'toast.success': 'Thank you ',
      'toast.success2': '! Your message has been sent. I will get back to you soon. ✨'
    },

    // Resolve a key with fallback to French
    t: function (key) {
      var dict = this[this.current] || this[this.defaultLang];
      var val = dict[key];
      if (val === undefined || val === null || val === '') {
        val = this[this.defaultLang][key];
      }
      if (val === undefined || val === null) return '';
      return val;
    },

    // Get current language
    getLang: function () {
      return this.current;
    },

    // Get a list of typing words for current lang
    typingWords: function () {
      var words = [];
      for (var i = 0; i < 5; i++) {
        words.push(this.t('typing.' + i));
      }
      return words;
    }
  };

  // Expose global translation helper
  window.i18n = I18N;

  // ========================================================================
  // 1. UTILITIES
  // ========================================================================

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];

  const on = (el, ev, fn, opts) => { if (el) el.addEventListener(ev, fn, opts); };
  const off = (el, ev, fn) => { if (el) el.removeEventListener(ev, fn); };

  const debounce = (fn, ms) => {
    let t;
    ms = ms || 100;
    return function () {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, arguments), ms);
    };
  };

  const throttle = (fn, ms) => {
    ms = ms || 80;
    let wait = false;
    return function () {
      if (wait) return;
      fn.apply(this, arguments);
      wait = true;
      setTimeout(function () { wait = false; }, ms);
    };
  };

  const clamp = function (v, min, max) {
    return Math.max(min, Math.min(max, v));
  };

  const rand = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  var ls = {
    get: function (key, def) {
      if (def === undefined) def = null;
      try {
        var v = localStorage.getItem(key);
        return v !== null ? JSON.parse(v) : def;
      } catch (e) { return def; }
    },
    set: function (key, val) {
      try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
    }
  };

  // ========================================================================
  // 2. DOM REFS
  // ========================================================================

  var DOM = {
    html: document.documentElement,
    body: document.body,
    preloader: $('#preloader'),
    preloaderBar: $('#preloader-bar'),
    header: $('#header'),
    navLinks: $('.nav-links'),
    menuToggle: $('#menuToggle'),
    themeToggle: $('#themeToggle'),
    themeIcon: $('#themeIcon'),
    langBtns: $$('.lang-btn'),
    scrollProgress: $('#scrollProgress'),
    backToTop: $('#backToTop'),
    typingText: $('#typingText'),
    typingCursor: $('#typingCursor'),
    terminalBody: $('#terminalBody'),
    terminalOutput: $('#terminalOutput'),
    terminalInputLine: $('#terminalInputLine'),
    terminalInput: $('#terminalInput'),
    particlesCanvas: $('#particlesCanvas'),
    heroStats: $$('.hero-stat-value'),
    skillsGrid: $('#skillsGrid'),
    filterBtns: [],
    projectGrid: $('#projectGrid'),
    contactForm: $('#contactForm'),
    formSubmit: $('.form-submit'),
    submitText: $('.submit-text'),
    submitLoading: $('.submit-loading'),
    cmdkOverlay: $('#cmdkOverlay'),
    cmdkInput: $('#cmdkInput'),
    cmdkList: $('#cmdkList'),
    cmdkTrigger: $('#cmdkTrigger'),
    imageModal: $('#imageModal'),
    toast: $('#toast'),
    year: $('#year'),
    channelCopies: [],
    scrollIndicator: $('.scroll-indicator')
  };

  // Populate filter btns
  DOM.filterBtns = $$('.filter-btn');
  DOM.channelCopies = $$('.channel-copy');

  // ========================================================================
  // 2.5 I18N MODULE
  // ========================================================================
  function I18n() {
    this.lang = null;
  }

  I18n.prototype.init = function () {
    var self = this;
    // Read saved language (default 'fr')
    var saved = ls.get(I18N.storageKey, I18N.defaultLang);
    if (saved !== 'fr' && saved !== 'en') saved = I18N.defaultLang;
    this.lang = saved;
    I18N.current = saved;

    // Wire language buttons
    DOM.langBtns.forEach(function (btn) {
      on(btn, 'click', function () {
        self.setLang(btn.dataset.lang);
      });
    });

    // Apply initial language
    this.apply();
  };

  I18n.prototype.setLang = function (lang) {
    if (lang !== 'fr' && lang !== 'en') lang = 'fr';
    if (lang === this.lang) {
      this.apply(); // still refresh
      return;
    }
    this.lang = lang;
    I18N.current = lang;
    ls.set(I18N.storageKey, lang);
    this.apply();
    // Refresh dynamic content
    this.refreshDynamic();
  };

  I18n.prototype.apply = function () {
    // 1. Set document lang
    DOM.html.setAttribute('lang', this.lang);

    // 2. Update active button states
    DOM.langBtns.forEach(function (btn) {
      var active = btn.dataset.lang === (window.i18n.current);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      if (active) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    // 3. Update all [data-i18n] text nodes
    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = window.i18n.t(key);
      } else {
        el.textContent = window.i18n.t(key);
      }
      // If element has data-text (preloader), update it too
      if (el.hasAttribute('data-text')) {
        el.setAttribute('data-text', window.i18n.t(key));
      }
    });

    // 4. Update all [data-i18n-attr] attributes
    $$('[data-i18n-attr]').forEach(function (el) {
      var spec = el.getAttribute('data-i18n-attr');
      // Spec format: "attr:key" or "attr:key,attr2:key2"
      spec.split(',').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length < 2) return;
        var attr = parts[0].trim();
        var key = parts.slice(1).join(':').trim();
        el.setAttribute(attr, window.i18n.t(key));
      });
    });

    // 5. Update meta tags
    var title = $('#pageTitle');
    if (title) title.textContent = window.i18n.t('meta.title');
    var metaDesc = $('#metaDescription');
    if (metaDesc) {
      var d = window.i18n.t('meta.description');
      if (d) metaDesc.setAttribute('content', d);
    }
    var ogTitle = $('#ogTitle');
    if (ogTitle) ogTitle.setAttribute('content', window.i18n.t('meta.ogTitle'));
    var ogDesc = $('#ogDescription');
    if (ogDesc) ogDesc.setAttribute('content', window.i18n.t('meta.ogDescription'));
    var twTitle = $('#twitterTitle');
    if (twTitle) twTitle.setAttribute('content', window.i18n.t('meta.twitterTitle'));
  };

I18n.prototype.refreshDynamic = function () {
    // Refresh typing words
    if (window.typing) window.typing.words = window.i18n.typingWords();
    // Refresh terminal commands
    if (window.terminal) window.terminal.commands = window.terminal.buildCommands();
    // Reprint terminal intro in the new language (no manual refresh needed)
    if (window.terminal && window.terminal.reprintIntro) window.terminal.reprintIntro();
    // Refresh palette items
    if (window.cmdk) window.cmdk.items = window.cmdk.buildItems();
  };

  // ========================================================================
  // 3. PRELOADER
  // ========================================================================

  function Preloader() {
    this.bar = DOM.preloaderBar;
    this.el = DOM.preloader;
    this.progress = 0;
  }

  Preloader.prototype.start = function () {
    if (!this.el) return;
    this.el.classList.remove('hidden');
    DOM.body.style.overflow = 'hidden';
    this.animate();
  };

  Preloader.prototype.animate = function () {
    var self = this;
    if (self.progress >= 100) {
      self.complete();
      return;
    }
    self.progress = clamp(self.progress + rand(3, 15), 0, 100);
    if (self.bar) self.bar.style.width = self.progress + '%';
    var delay = self.progress > 85 ? rand(40, 100) : rand(15, 50);
    setTimeout(function () { self.animate(); }, delay);
  };

  Preloader.prototype.complete = function () {
    var self = this;
    if (self.bar) self.bar.style.width = '100%';
    setTimeout(function () {
      if (self.el) {
        self.el.classList.add('hidden');
        self.el.style.display = 'none';
      }
      DOM.body.style.overflow = '';
      // Reveal hero fade-up elements with stagger
      document.querySelectorAll('.fade-up').forEach(function (el, i) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          setTimeout(function () { el.classList.add('in-view'); }, i * 80);
        }
      });
      // Start terminal
      if (window.terminal && window.terminal.intro) window.terminal.intro();
    }, 200);
  };

  // ========================================================================
  // 4. THEME MANAGER
  // ========================================================================

  function ThemeManager() {
    this.key = 'portfolio-theme';
    this.icon = DOM.themeIcon;
    this.btn = DOM.themeToggle;
    this.current = ls.get(this.key, 'dark');
  }

  ThemeManager.prototype.init = function () {
    var self = this;
    self.apply(self.current, false);
    if (self.btn) on(self.btn, 'click', function () { self.toggle(); });
    var mq = window.matchMedia('(prefers-color-scheme: light)');
    on(mq, 'change', function (e) {
      if (!ls.get(self.key)) self.apply(e.matches ? 'light' : 'dark', true);
    });
  };

  ThemeManager.prototype.apply = function (theme, animate) {
    if (animate === undefined) animate = true;
    this.current = theme;
    DOM.html.setAttribute('data-theme', theme);
    ls.set(this.key, theme);
    if (this.icon) {
      this.icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
    if (animate) this.flash();
  };

  ThemeManager.prototype.toggle = function () {
    this.apply(this.current === 'dark' ? 'light' : 'dark');
  };

  ThemeManager.prototype.flash = function () {
    var el = document.createElement('div');
    var opacity = this.current === 'light' ? '0.08' : '0.03';
    el.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(255,255,255,' + opacity + ');pointer-events:none;transition:opacity 0.35s ease;';
    DOM.body.appendChild(el);
    requestAnimationFrame(function () {
      el.style.opacity = '0';
      setTimeout(function () { el.remove(); }, 400);
    });
  };

  // ========================================================================
  // 5. MOBILE MENU
  // ========================================================================

  function MobileMenu() {
    this.btn = DOM.menuToggle;
    this.menu = DOM.navLinks;
  }

  MobileMenu.prototype.init = function () {
    var self = this;
    if (!self.btn) return;
    on(self.btn, 'click', function () { self.toggle(); });
    $$('.nav-link', self.menu).forEach(function (link) {
      on(link, 'click', function () { self.close(); });
    });
    on(window, 'resize', debounce(function () {
      if (window.innerWidth > 768) self.close();
    }, 150));
  };

  MobileMenu.prototype.toggle = function () {
    var isOpen = this.menu.classList.toggle('open');
    this.btn.setAttribute('aria-expanded', isOpen);
    DOM.body.style.overflow = isOpen ? 'hidden' : '';
  };

  MobileMenu.prototype.close = function () {
    this.menu.classList.remove('open');
    this.btn.setAttribute('aria-expanded', 'false');
    DOM.body.style.overflow = '';
  };

  // ========================================================================
  // 6. SCROLL MANAGER
  // ========================================================================

  function ScrollManager() {
    this.header = DOM.header;
  }

  ScrollManager.prototype.init = function () {
    var self = this;
    on(window, 'scroll', throttle(function () { self.handle(); }, 50), { passive: true });
    self.handle();
  };

  ScrollManager.prototype.handle = function () {
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;

    // Progress bar
    if (DOM.scrollProgress) {
      DOM.scrollProgress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    }

    // Header
    if (this.header) {
      if (y > 60) this.header.classList.add('scrolled');
      else this.header.classList.remove('scrolled');
    }

    // Back to top
    if (DOM.backToTop) {
      if (y > 500) DOM.backToTop.classList.add('show');
      else DOM.backToTop.classList.remove('show');
    }

    // Nav active
    this.updateActiveNav(y);
  };

  ScrollManager.prototype.updateActiveNav = function (y) {
    var sections = $$('section[id]');
    var current = '';
    var self = this;
    sections.forEach(function (section) {
      var top = section.offsetTop - 120;
      var bottom = top + section.offsetHeight;
      if (y >= top && y < bottom) current = section.id;
    });
    $$('.nav-link').forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + current;
      if (isActive) link.classList.add('active');
      else link.classList.remove('active');
    });
  };

  // ========================================================================
  // 7. TYPING EFFECT
  // ========================================================================

  function TypingEffect() {
    this.el = DOM.typingText;
    this.words = window.i18n.typingWords();
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
  }

  TypingEffect.prototype.init = function () {
    var self = this;
    if (!self.el) return;
    setTimeout(function () { self.type(); }, 1800);
    window.typing = this; // expose for language switch
  };

  TypingEffect.prototype.type = function () {
    var self = this;
    var current = self.words[self.wordIndex] || '';

    if (self.isDeleting) {
      self.charIndex--;
      self.el.textContent = current.substring(0, self.charIndex);
    } else {
      self.charIndex++;
      self.el.textContent = current.substring(0, self.charIndex);
    }

    var speed = self.isDeleting ? rand(20, 50) : rand(60, 120);

    if (!self.isDeleting && self.charIndex === current.length) {
      speed = 1800;
      self.isDeleting = true;
    } else if (self.isDeleting && self.charIndex === 0) {
      self.isDeleting = false;
      self.wordIndex = (self.wordIndex + 1) % self.words.length;
      speed = 400;
    }

    setTimeout(function () { self.type(); }, speed);
  };

  // ========================================================================
  // 8. PARTICLES CANVAS
  // ========================================================================

  function Particles() {
    this.canvas = DOM.particlesCanvas;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 100 };
    this.count = 0;
    this.animId = null;
  }

  Particles.prototype.init = function () {
    var self = this;
    if (!self.canvas) return;
    self.resize();
    on(window, 'resize', debounce(function () { self.resize(); }, 200));
    on(self.canvas, 'mousemove', function (e) {
      var rect = self.canvas.getBoundingClientRect();
      self.mouse.x = e.clientX - rect.left;
      self.mouse.y = e.clientY - rect.top;
    });
    on(self.canvas, 'mouseleave', function () {
      self.mouse.x = null;
      self.mouse.y = null;
    });
    self.createParticles();
    self.animate();
  };

  Particles.prototype.resize = function () {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    var isMobile = window.innerWidth < 768 || (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);
    var divisor = isMobile ? 25000 : 12000;
    this.count = Math.min(isMobile ? 30 : 80, Math.floor((this.canvas.width * this.canvas.height) / divisor));
  };

  Particles.prototype.createParticles = function () {
    this.particles = [];
    for (var i = 0; i < this.count; i++) {
      this.particles.push({
        x: rand(0, this.canvas.width),
        y: rand(0, this.canvas.height),
        size: rand(1, 2.5),
        speedX: rand(-0.4, 0.4),
        speedY: rand(-0.4, 0.4),
        opacity: rand(0.2, 0.7)
      });
    }
  };

  Particles.prototype.animate = function () {
    var self = this;
    if (!self.canvas || !self.ctx) return;
    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    self.particles.forEach(function (p, i) {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = self.canvas.width;
      if (p.x > self.canvas.width) p.x = 0;
      if (p.y < 0) p.y = self.canvas.height;
      if (p.y > self.canvas.height) p.y = 0;

      // Mouse interaction
      if (self.mouse.x !== null) {
        var dx = self.mouse.x - p.x;
        var dy = self.mouse.y - p.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < self.mouse.radius) {
          var force = (self.mouse.radius - dist) / self.mouse.radius;
          p.x -= dx * force * 0.02;
          p.y -= dy * force * 0.02;
        }
      }

      // Draw
      self.ctx.beginPath();
      self.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      self.ctx.fillStyle = 'rgba(47, 102, 144, ' + p.opacity + ')';
      self.ctx.fill();

      // Connect
      for (var j = i + 1; j < self.particles.length; j++) {
        var p2 = self.particles[j];
        var dx2 = p.x - p2.x;
        var dy2 = p.y - p2.y;
        var dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        if (dist2 < 120) {
          self.ctx.beginPath();
          self.ctx.moveTo(p.x, p.y);
          self.ctx.lineTo(p2.x, p2.y);
          self.ctx.strokeStyle = 'rgba(47, 102, 144, ' + (0.1 * (1 - dist2 / 120)) + ')';
          self.ctx.lineWidth = 0.5;
          self.ctx.stroke();
        }
      }
    });
    self.animId = requestAnimationFrame(function () { self.animate(); });
  };

  // Pause particles when tab hidden
  on(document, 'visibilitychange', function () {
    if (window.particles) {
      if (document.hidden && window.particles.animId) {
        cancelAnimationFrame(window.particles.animId);
        window.particles.animId = null;
      } else if (!document.hidden && !window.particles.animId) {
        window.particles.animate();
      }
    }
  });

  // ========================================================================
  // 9. SKILLS FILTER
  // ========================================================================

  function SkillsFilter() {
    this.btns = DOM.filterBtns;
    this.grid = DOM.skillsGrid;
  }

  SkillsFilter.prototype.init = function () {
    var self = this;
    if (!self.btns.length) return;
    self.btns.forEach(function (btn) {
      on(btn, 'click', function () { self.filter(btn.dataset.filter); });
    });
  };

  SkillsFilter.prototype.filter = function (category) {
    var self = this;
    self.btns.forEach(function (b) {
      if (b.dataset.filter === category) b.classList.add('active');
      else b.classList.remove('active');
    });
    var cards = $$('.skill-card', self.grid);
    cards.forEach(function (card) {
      var match = category === 'all' || card.dataset.category === category;
      if (match) card.classList.remove('hidden-skill');
      else card.classList.add('hidden-skill');
      if (match) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        requestAnimationFrame(function () {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      }
    });
  };

  // ========================================================================
  // 10. SCROLL REVEAL
  // ========================================================================

  function ScrollReveal() {}

  ScrollReveal.prototype.init = function () {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-up').forEach(function (el) {
        el.classList.add('in-view');
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          var bars = entry.target.querySelectorAll('.skill-bar-fill');
          bars.forEach(function (bar) {
            var w = bar.dataset.width;
            if (w) setTimeout(function () { bar.style.width = w + '%'; }, 200);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up').forEach(function (el) {
      observer.observe(el);
    });
  };

  // ========================================================================
  // 11. INTERACTIVE TERMINAL
  // ========================================================================

  function Terminal() {
    this.output = DOM.terminalOutput;
    this.inputLine = DOM.terminalInputLine;
    this.input = DOM.terminalInput;
    this.body = DOM.terminalBody;
    this.history = [];
    this.historyIndex = -1;
  }

  Terminal.prototype.buildCommands = function () {
    var self = this;
    var t = window.i18n.t.bind(window.i18n);
    return {
      help: function () {
        self.echo(t('term.help'), 'out');
      },
      whoami: function () {
        self.echo(t('term.whoami'), 'out');
      },
      skills: function () {
        self.echo(t('term.skills'), 'out');
      },
      projects: function () {
        self.echo(t('term.projects'), 'out');
      },
      contact: function () {
        self.echo(t('term.contact'), 'out');
      },
      education: function () {
        self.echo(t('term.education'), 'out');
      },
      experience: function () {
        self.echo(t('term.experience'), 'out');
      },
      cv: function () {
        var a = document.createElement('a');
        a.href = 'KHALID_BARRADAH_CV.pdf';
        a.download = 'KHALID_BARRADAH_CV.pdf';
        a.click();
        self.echo(t('term.cv'), 'out');
      },
      github: function () {
        window.open('https://github.com/khalidberrada2007-dotcom', '_blank');
        self.echo(t('term.github'), 'out');
      },
      linkedin: function () {
        window.open('https://linkedin.com/in/khalid-barradah', '_blank');
        self.echo(t('term.linkedin'), 'out');
      },
      email: function () {
        window.location.href = 'mailto:khalidberrada2007@gmail.com';
        self.echo(t('term.email'), 'out');
      },
      date: function () {
        var locale = (window.i18n.current === 'en') ? 'en-US' : 'fr-FR';
        self.echo(new Date().toLocaleString(locale), 'out');
      },
      clear: function () {
        self.output.innerHTML = '';
      },
      sudo: function () {
        self.echo(t('term.sudo'), 'out');
      },
      open: function (args) {
        var urls = {
          1: 'https://github.com/khalidberrada2007-dotcom/StageMaroc',
          2: 'https://github.com/khalidberrada2007-dotcom/Gestion-des-stagiaires',
          3: 'https://github.com/khalidberrada2007-dotcom/Calculatrice-Web',
          4: 'https://github.com/khalidberrada2007-dotcom/Gestion-des-Candidats-CRUD-PHP-MySQL'
        };
        var url = urls[args[0]];
        if (url) {
          window.open(url, '_blank');
          self.echo(t('term.openOk') + args[0] + '...', 'out');
          return;
        }
        self.echo('"' + args[0] + '" ' + t('term.openErr'), 'err');
      }
    };
  };

  Terminal.prototype.init = function () {
    var self = this;
    if (!self.output) return;

    this.commands = this.buildCommands();

    self.inputLine.hidden = false;
    on(self.input, 'keydown', function (e) {
      if (e.key === 'Enter') self.execute();
      if (e.key === 'ArrowUp') { e.preventDefault(); self.navigateHistory(-1); }
      if (e.key === 'ArrowDown') { e.preventDefault(); self.navigateHistory(1); }
    });
    on(self.body, 'click', function () { self.input.focus(); });
    window.terminal = this; // expose for language switch
  };

Terminal.prototype.intro = function () {
    var self = this;
    // Clear any pending intro timers to avoid stacking on re-print
    if (self._introTimers) {
      self._introTimers.forEach(function (t) { clearTimeout(t); });
    }
    self._introTimers = [];
    var t = window.i18n.t.bind(window.i18n);
    var lines = [
      t('term.intro0'),
      t('term.intro1'),
      t('term.intro2'),
      '',
      t('term.introHelp'),
      t('term.paletteHint')
    ];
    lines.forEach(function (line, i) {
      var timer = setTimeout(function () {
        self.echo(line, i < 4 ? 'out' : 'acc');
      }, 300 + i * 350);
      self._introTimers.push(timer);
    });
  };

  // Reprint the intro in the currently selected language (called on language switch)
  Terminal.prototype.reprintIntro = function () {
    var self = this;
    if (!self.output) return;
    self.output.innerHTML = '';
    self.intro();
  };

  Terminal.prototype.execute = function () {
    var raw = this.input.value.trim();
    if (!raw) return;
    this.history.push(raw);
    this.historyIndex = this.history.length;

    var parts = raw.split(/\s+/);
    var cmd = parts[0].toLowerCase();
    var args = parts.slice(1);

    this.echo('$ ' + raw, 'prompt');

    if (this.commands[cmd]) {
      this.commands[cmd](args);
    } else {
      var t = window.i18n.t.bind(window.i18n);
      this.echo(t('term.unknown') + cmd + t('term.unknown2'), 'err');
    }

    this.input.value = '';
    this.body.scrollTop = this.body.scrollHeight;
  };

  Terminal.prototype.echo = function (text, type) {
    if (type === undefined) type = 'out';
    var div = document.createElement('div');
    var cls = type === 'err' ? 'terminal-line-err' : 'terminal-line-out';
    div.className = 'line ' + cls;
    div.textContent = text;
    this.output.appendChild(div);
    this.body.scrollTop = this.body.scrollHeight;
  };

  Terminal.prototype.navigateHistory = function (dir) {
    var idx = this.historyIndex + dir;
    if (idx < 0 || idx >= this.history.length) return;
    this.historyIndex = idx;
    this.input.value = this.history[idx] || '';
  };

  // ========================================================================
  // 12. COMMAND PALETTE
  // ========================================================================

  function CommandPalette() {
    this.overlay = DOM.cmdkOverlay;
    this.input = DOM.cmdkInput;
    this.list = DOM.cmdkList;
    this.trigger = DOM.cmdkTrigger;
    this.items = [];
    this.activeIndex = 0;
  }

  CommandPalette.prototype.buildItems = function () {
    var self = this;
    var t = window.i18n.t.bind(window.i18n);
    return [
      { label: t('paletteItem.home'), icon: 'fas fa-home', action: function () { self.navigate('#home'); } },
      { label: t('paletteItem.about'), icon: 'fas fa-user', action: function () { self.navigate('#about'); } },
      { label: t('paletteItem.skills'), icon: 'fas fa-code', action: function () { self.navigate('#skills'); } },
      { label: t('paletteItem.projects'), icon: 'fas fa-folder', action: function () { self.navigate('#projects'); } },
      { label: t('paletteItem.contact'), icon: 'fas fa-envelope', action: function () { self.navigate('#contact'); } },
      {
        label: t('paletteItem.theme'),
        icon: 'fas fa-palette',
        action: function () { if (window.theme) window.theme.toggle(); self.toggle(); }
      },
      {
        label: t('paletteItem.cv'),
        icon: 'fas fa-download',
        action: function () { var a = document.createElement('a'); a.href = 'KHALID_BARRADAH_CV.pdf'; a.download = ''; a.click(); self.toggle(); }
      },
      {
        label: t('paletteItem.copyEmail'),
        icon: 'fas fa-copy',
        action: function () { navigator.clipboard.writeText('khalidberrada2007@gmail.com'); self.showToast(t('toast.emailCopied')); self.toggle(); }
      },
      {
        label: t('paletteItem.github'),
        icon: 'fab fa-github',
        action: function () { window.open('https://github.com/khalidberrada2007-dotcom', '_blank'); self.toggle(); }
      },
      {
        label: t('paletteItem.linkedin'),
        icon: 'fab fa-linkedin',
        action: function () { window.open('https://linkedin.com/in/khalid-barradah', '_blank'); self.toggle(); }
      }
    ];
  };

  CommandPalette.prototype.init = function () {
    var self = this;
    if (!self.overlay) return;

    self.items = this.buildItems();
    window.cmdk = this;

    on(self.trigger, 'click', function () { self.open(); });

    on(document, 'keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        self.toggle();
      }
      if (e.key === 'Escape' && self.isOpen()) self.close();
    });

    on(self.input, 'input', function () { self.render(); });
    on(self.input, 'keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); self.move(1); }
      if (e.key === 'ArrowUp') { e.preventDefault(); self.move(-1); }
      if (e.key === 'Enter') { e.preventDefault(); self.select(); }
    });

    var backdrop = self.overlay.querySelector('.cmdk-backdrop');
    if (backdrop) on(backdrop, 'click', function () { self.close(); });
  };

  CommandPalette.prototype.navigate = function (hash) {
    var el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.close();
  };

  CommandPalette.prototype.open = function () {
    this.overlay.hidden = false;
    this.overlay.setAttribute('aria-hidden', 'false');
    this.input.value = '';
    this.activeIndex = 0;
    this.render();
    var self = this;
    setTimeout(function () { self.input.focus(); }, 100);
  };

  CommandPalette.prototype.close = function () {
    this.overlay.hidden = true;
    this.overlay.setAttribute('aria-hidden', 'true');
  };

  CommandPalette.prototype.toggle = function () {
    if (this.isOpen()) this.close();
    else this.open();
  };

  CommandPalette.prototype.isOpen = function () {
    return this.overlay.getAttribute('aria-hidden') === 'false';
  };

  CommandPalette.prototype.render = function () {
    var self = this;
    var q = this.input.value.toLowerCase().trim();
    var filtered = q ? this.items.filter(function (i) { return i.label.toLowerCase().includes(q); }) : this.items;
    this.activeIndex = clamp(this.activeIndex, 0, filtered.length - 1);

    if (!filtered.length) {
      var t = window.i18n.t.bind(window.i18n);
      this.list.innerHTML = '<div class="cmdk-empty">' + t('palette.empty') + '</div>';
      return;
    }

    this.list.innerHTML = filtered.map(function (item, idx) {
      var active = idx === self.activeIndex ? 'active' : '';
      var label = self.highlight(item.label, q);
      return '<div class="cmdk-item ' + active + '" data-index="' + idx + '">' +
        '<i class="' + item.icon + '"></i>' +
        '<span>' + label + '</span>' +
        '</div>';
    }).join('');

    $$('.cmdk-item', this.list).forEach(function (el) {
      on(el, 'click', function () {
        var idx = parseInt(el.dataset.index);
        var it = filtered[idx];
        if (it) it.action();
      });
      on(el, 'mouseenter', function () {
        var idx = parseInt(el.dataset.index);
        self.activeIndex = idx;
        $$('.cmdk-item', self.list).forEach(function (e, i) {
          if (i === idx) e.classList.add('active');
          else e.classList.remove('active');
        });
      });
    });
  };

  CommandPalette.prototype.highlight = function (text, q) {
    if (!q) return text;
    var idx = text.toLowerCase().indexOf(q);
    if (idx === -1) return text;
    return text.slice(0, idx) + '<strong>' + text.slice(idx, idx + q.length) + '</strong>' + text.slice(idx + q.length);
  };

  CommandPalette.prototype.move = function (dir) {
    var self = this;
    var q = this.input.value.toLowerCase().trim();
    var items = q ? this.items.filter(function (i) { return i.label.toLowerCase().includes(q); }) : this.items;
    if (!items.length) return;
    this.activeIndex = (this.activeIndex + dir + items.length) % items.length;
    this.render();
    var active = this.list.querySelector('.cmdk-item.active');
    if (active) active.scrollIntoView({ block: 'nearest' });
  };

  CommandPalette.prototype.select = function () {
    var self = this;
    var q = this.input.value.toLowerCase().trim();
    var items = q ? this.items.filter(function (i) { return i.label.toLowerCase().includes(q); }) : this.items;
    var item = items[this.activeIndex];
    if (item) item.action();
  };

  CommandPalette.prototype.showToast = function (msg) {
    if (window.toast) window.toast.show(msg);
  };

  // ========================================================================
  // 13. COUNT UP
  // ========================================================================

  function CountUp() {
    this.elements = DOM.heroStats;
  }

  CountUp.prototype.init = function () {
    var self = this;
    if (!self.elements.length) return;

    if (!('IntersectionObserver' in window)) {
      self.elements.forEach(function (el) {
        el.textContent = el.dataset.count || el.textContent;
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.dataset.count) || 0;
          self.animate(el, target);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    self.elements.forEach(function (el) { observer.observe(el); });
  };

  CountUp.prototype.animate = function (el, target) {
    var duration = 1500;
    var startTime = performance.now();

    function step(now) {
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      el.textContent = target === 100 ? current + '%' : current;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target === 100 ? target + '%' : target;
      }
    }

    requestAnimationFrame(step);
  };

  // ========================================================================
  // 14. IMAGE MODAL
  // ========================================================================

  function ImageModal() {
    this.modal = DOM.imageModal;
  }

  ImageModal.prototype.init = function () {
    var self = this;
    if (!self.modal) return;
    var closeBtn = self.modal.querySelector('.modal-close');
    var backdrop = self.modal.querySelector('.modal-backdrop');
    if (closeBtn) on(closeBtn, 'click', function () { self.close(); });
    if (backdrop) on(backdrop, 'click', function () { self.close(); });
    on(document, 'keydown', function (e) {
      if (e.key === 'Escape' && self.isOpen()) self.close();
    });
  };

  ImageModal.prototype.open = function () {
    this.modal.setAttribute('aria-hidden', 'false');
    DOM.body.style.overflow = 'hidden';
  };

  ImageModal.prototype.close = function () {
    this.modal.setAttribute('aria-hidden', 'true');
    DOM.body.style.overflow = '';
  };

  ImageModal.prototype.isOpen = function () {
    return this.modal.getAttribute('aria-hidden') === 'false';
  };

  // ========================================================================
  // 15. CONTACT FORM
  // ========================================================================

  function ContactForm() {
    this.form = DOM.contactForm;
    this.btn = DOM.formSubmit;
    this.submitText = DOM.submitText;
    this.submitLoading = DOM.submitLoading;
  }

  ContactForm.prototype.init = function () {
    var self = this;
    if (!self.form) return;
    on(self.form, 'submit', function (e) { self.handleSubmit(e); });
  };

  ContactForm.prototype.handleSubmit = function (e) {
    e.preventDefault();
    var self = this;
    var t = window.i18n.t.bind(window.i18n);

    var name = self.form.querySelector('#formName').value.trim();
    var email = self.form.querySelector('#formEmail').value.trim();
    var message = self.form.querySelector('#formMessage').value.trim();

    if (!name || !email || !message) {
      self.showToast(t('toast.required'), 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      self.showToast(t('toast.invalidEmail'), 'error');
      return;
    }

    self.btn.disabled = true;
    if (self.submitText) self.submitText.hidden = true;
    if (self.submitLoading) self.submitLoading.hidden = false;

    var formData = new FormData(self.form);
    fetch(self.form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(function (resp) {
      if (resp.ok) return resp.json();
      throw new Error('Server error');
    })
    .then(function () {
      self.showSuccessModal(name);
      self.form.reset();
    })
    .catch(function () {
      // Fallback: open mailto with form data
      var subject = encodeURIComponent(self.form.querySelector('#formSubject').value || 'Contact Portfolio');
      var body = encodeURIComponent('Nom: ' + name + '\nEmail: ' + email + '\n\n' + message);
      window.open('mailto:khalidberrada2007@gmail.com?subject=' + subject + '&body=' + body, '_blank');
      self.showToast(t('toast.fallback'), 'success');
      self.form.reset();
    })
    .finally(function () {
      self.btn.disabled = false;
      if (self.submitText) self.submitText.hidden = false;
      if (self.submitLoading) self.submitLoading.hidden = true;
    });
  };

  ContactForm.prototype.showSuccessModal = function (name) {
    var t = window.i18n.t.bind(window.i18n);
    var msg = t('toast.success') + name + t('toast.success2');
    this.showToast(msg, 'success');
  };

  ContactForm.prototype.showToast = function (msg, type) {
    if (window.toast) window.toast.show(msg, type);
  };

  // ========================================================================
  // 16. COPY CHANNEL
  // ========================================================================

  function CopyChannel() {
    this.buttons = DOM.channelCopies;
  }

  CopyChannel.prototype.init = function () {
    var self = this;
    if (!self.buttons.length) return;
    self.buttons.forEach(function (btn) {
      on(btn, 'click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var text = btn.dataset.copy;
        if (!text) return;
        navigator.clipboard.writeText(text).then(function () {
          var original = btn.innerHTML;
          btn.innerHTML = '<i class="fas fa-check"></i>';
          btn.style.color = 'var(--color-success)';
          setTimeout(function () {
            btn.innerHTML = original;
            btn.style.color = '';
          }, 1800);
          if (window.toast) window.toast.show(window.i18n.t('toast.copied'));
        }).catch(function () {
          if (window.toast) window.toast.show(window.i18n.t('toast.copyError'), 'error');
        });
      });
    });
  };

  // ========================================================================
  // 17. GITHUB REPO STATS
  // ========================================================================

  function RepoStats() {}

  RepoStats.prototype.init = function () {
    var cards = $$('.project-card');
    var self = this;
    cards.forEach(function (card) {
      var repo = card.dataset.repo;
      var container = card.querySelector('.repo-stats');
      if (!repo || !container) return;
      self.fetchStats(repo, container);
    });
  };

  RepoStats.prototype.fetchStats = function (repo, container) {
    fetch('https://api.github.com/repos/' + repo)
      .then(function (resp) {
        if (!resp.ok) throw new Error('Not found');
        return resp.json();
      })
      .then(function (data) {
        var langColor = data.language ? '#e3a63a' : '#5a6793';
        var lang = data.language || 'N/A';
        container.innerHTML =
          '<span><i class="fas fa-star"></i> ' + (data.stargazers_count || 0) + '</span>' +
          '<span><i class="fas fa-code-fork"></i> ' + (data.forks_count || 0) + '</span>' +
          '<span><i class="fas fa-circle" style="color:' + langColor + '"></i> ' + lang + '</span>';
      })
      .catch(function () {});
  };

  // ========================================================================
  // 18. TOAST
  // ========================================================================

  function Toast() {
    this.el = DOM.toast;
    this.timeout = null;
  }

  Toast.prototype.init = function () {
    if (!this.el) return;
    window.toast = this;
  };

  Toast.prototype.show = function (message, type) {
    if (!this.el) return;
    if (type === undefined) type = 'info';
    clearTimeout(this.timeout);
    this.el.textContent = message;
    this.el.className = 'toast show';
    if (type === 'success') {
      this.el.style.borderLeft = '3px solid var(--color-success)';
    } else if (type === 'error') {
      this.el.style.borderLeft = '3px solid var(--color-error)';
    } else {
      this.el.style.borderLeft = '';
    }
    var self = this;
    this.timeout = setTimeout(function () {
      self.el.classList.remove('show');
    }, 3500);
  };

  // ========================================================================
  // 19. BACK TO TOP
  // ========================================================================

  function BackToTop() {
    this.btn = DOM.backToTop;
  }

  BackToTop.prototype.init = function () {
    var self = this;
    if (!self.btn) return;
    on(self.btn, 'click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  // ========================================================================
  // 20. FOOTER YEAR
  // ========================================================================

  function FooterYear() {
    this.el = DOM.year;
  }

  FooterYear.prototype.init = function () {
    if (this.el) this.el.textContent = '' + new Date().getFullYear();
  };

  // ========================================================================
  // 21. 3D TILT EFFECT (PROJECT CARDS)
  // ========================================================================

  function Tilt3D() {}

  Tilt3D.prototype.init = function () {
    var cards = $$('.project-card');
    var self = this;
    cards.forEach(function (card) {
      on(card, 'mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var rotateX = (y - centerY) / centerY * -6;
        var rotateY = (x - centerX) / centerX * 6;
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-6px)';
        card.style.transition = 'transform 0.1s ease';
      });
      on(card, 'mouseleave', function () {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
      });
    });
  };

  // ========================================================================
  // 22. STAGGER ANIMATION (CARDS APPEAR IN CASCADE)
  // ========================================================================

  function StaggerAnim() {}

  StaggerAnim.prototype.init = function () {
    if (!('IntersectionObserver' in window)) return;
    var groups = [
      { sel: '.skill-card', delay: 80 },
      { sel: '.project-card', delay: 100 },
      { sel: '.about-info-item', delay: 60 },
      { sel: '.contact-channel', delay: 70 }
    ];
    var self = this;
    groups.forEach(function (g) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var parent = entry.target;
            var children = parent.querySelectorAll(g.sel);
            // If the entry itself is a child (not parent), handle differently
            if (!children.length && entry.target.matches(g.sel)) {
              var idx = Array.prototype.indexOf.call(entry.target.parentElement.querySelectorAll(g.sel), entry.target);
              entry.target.style.transitionDelay = (idx * g.delay) + 'ms';
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            } else if (children.length) {
              children.forEach(function (child, idx) {
                child.style.transitionDelay = (idx * g.delay) + 'ms';
                child.classList.add('in-view');
              });
              observer.unobserve(entry.target);
            }
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll(g.sel).forEach(function (el) {
        // If element is inside a parent with fade-up, observe the parent
        var parent = el.closest('.fade-up');
        if (parent && parent !== el) observer.observe(parent);
        else observer.observe(el);
      });
    });
  };

  // ========================================================================
  // 23. GLOBAL FUNCTIONS
  // ========================================================================

  window.openImageModal = function () {
    if (window.imageModal) window.imageModal.open();
  };
  window.closeImageModal = function () {
    if (window.imageModal) window.imageModal.close();
  };
  window.closeCmdk = function () {
    if (window.cmdk) window.cmdk.close();
  };

  // ========================================================================
  // 24. BOOTSTRAP
  // ========================================================================

  function init() {
    var i18nManager = new I18n();
    var preloader = new Preloader();
    var theme = new ThemeManager();
    var mobileMenu = new MobileMenu();
    var scrollManager = new ScrollManager();
    var typing = new TypingEffect();
    var particles = new Particles();
    var skillsFilter = new SkillsFilter();
    var scrollReveal = new ScrollReveal();
    var terminal = new Terminal();
    var cmdk = new CommandPalette();
    var countUp = new CountUp();
    var imageModal = new ImageModal();
    var contactForm = new ContactForm();
    var copyChannel = new CopyChannel();
    var repoStats = new RepoStats();
    var toast = new Toast();
    var backToTop = new BackToTop();
    var footerYear = new FooterYear();
    var tilt3d = new Tilt3D();
    var staggerAnim = new StaggerAnim();

    // Globals
    window.i18nManager = i18nManager;
    window.theme = theme;
    window.terminal = terminal;
    window.cmdk = cmdk;
    window.imageModal = imageModal;
    window.toast = toast;
    window.particles = particles;

    // Init order
    toast.init();
    footerYear.init();
    i18nManager.init();   // apply translations first
    theme.init();
    mobileMenu.init();
    scrollManager.init();
    particles.init();
    scrollReveal.init();
    terminal.init();
    cmdk.init();
    countUp.init();
    imageModal.init();
    contactForm.init();
    copyChannel.init();
    backToTop.init();
    tilt3d.init();
    staggerAnim.init();

    setTimeout(function () { repoStats.init(); }, 500);
    setTimeout(function () { preloader.start(); }, 400);
  }

  // ========================================================================
  // 23. ERROR CATCHER
  // ========================================================================

  window.addEventListener('error', function (e) {
    console.warn('[Portfolio] Caught error:', e.message);
  });

  // ========================================================================
  // 24. START
  // ========================================================================

  if (document.readyState === 'loading') {
    on(document, 'DOMContentLoaded', init);
  } else {
    init();
  }

})();
