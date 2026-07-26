/* ==========================================================================
   KHALID BARRADAH — PORTFOLIO PRO
   Scripts v3.0 — Premium
   ========================================================================== */

(function () {
  'use strict';

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
    this.words = [
      'des applications web compl\u00e8tes.',
      'des exp\u00e9riences utilisateur modernes.',
      'des solutions backend robustes.',
      'des interfaces \u00e9l\u00e9gantes et r\u00e9actives.',
      'l\'avenir du web, une ligne \u00e0 la fois.'
    ];
    this.wordIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
  }

  TypingEffect.prototype.init = function () {
    var self = this;
    if (!self.el) return;
    setTimeout(function () { self.type(); }, 1800);
  };

  TypingEffect.prototype.type = function () {
    var self = this;
    var current = self.words[self.wordIndex];

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
    return {
      help: function () {
        self.echo(
          'Commandes disponibles:\n' +
          '  help       — Affiche cette aide\n' +
          '  whoami     — Qui suis-je ?\n' +
          '  skills     — Mes comp\u00e9tences\n' +
          '  projects   — Mes projets\n' +
          '  contact    — Me contacter\n' +
          '  education  — Ma formation\n' +
          '  experience — Mon exp\u00e9rience\n' +
          '  cv         — T\u00e9l\u00e9charger mon CV\n' +
          '  github     — Mon GitHub\n' +
          '  linkedin   — Mon LinkedIn\n' +
          '  email      — Mon email\n' +
          '  date       — Affiche la date\n' +
          '  clear      — Efface le terminal\n' +
          '  sudo       ;-)',
          'out'
        );
      },
      whoami: function () {
        self.echo(
          'Khalid Barradah\n' +
          'D\u00e9veloppeur Web Junior | ISTA HH1\n' +
          'Passionn\u00e9 par le code, le design et l\'innovation.',
          'out'
        );
      },
      skills: function () {
        self.echo(
          'Comp\u00e9tences techniques :\n' +
          '  \u2022 Frontend : HTML5, CSS3, JavaScript (ES6+),\n' +
          '    Responsive Design\n' +
          '  \u2022 Backend  : Python (POO), PHP, MySQL/SQL\n' +
          '  \u2022 Outils   : Git & GitHub, VirtualBox\n' +
          '  \u2022 S\u00e9curit\u00e9 : Initiation cybers\u00e9curit\u00e9',
          'out'
        );
      },
      projects: function () {
        self.echo(
          'Projets r\u00e9cents :\n' +
          '  1. StageMaroc — PHP/MySQL (plateforme stages)\n' +
          '  2. Gestion Stagiaires — Python (POO)\n' +
          '  3. Calculatrice Web — HTML/CSS/JS\n' +
          '  4. Gestion Candidats — PHP/MySQL (CRUD)\n' +
          '  Tapez "open 1-4" pour voir sur GitHub.',
          'out'
        );
      },
      contact: function () {
        self.echo(
          'Me contacter :\n' +
          '  Email : khalidberrada2007@gmail.com\n' +
          '  LinkedIn : @khalid-barradah\n' +
          '  GitHub : @khalidberrada2007-dotcom',
          'out'
        );
      },
      education: function () {
        self.echo(
          'Formation :\n' +
          '  \u2022 ISTA HH1 — D\u00e9veloppement Digital (2025-2026)\n' +
          '  \u2022 Bac Sciences Math\u00e9matiques B — 14.97/20 (Mention Bien)',
          'out'
        );
      },
      experience: function () {
        self.echo(
          "Exp\u00e9rience :\n" +
          "  \u2022 \u00c9quipier McDonald's (soft skills : rigueur, travail d'\u00e9quipe, gestion stress)\n" +
          '  \u2022 Projets personnels (voir "projects")',
          'out'
        );
      },
      cv: function () {
        var a = document.createElement('a');
        a.href = 'KHALID_BARRADAH_CV.pdf';
        a.download = 'KHALID_BARRADAH_CV.pdf';
        a.click();
        self.echo('T\u00e9l\u00e9chargement du CV en cours...', 'out');
      },
      github: function () {
        window.open('https://github.com/khalidberrada2007-dotcom', '_blank');
        self.echo('Ouverture de GitHub...', 'out');
      },
      linkedin: function () {
        window.open('https://linkedin.com/in/khalid-barradah', '_blank');
        self.echo('Ouverture de LinkedIn...', 'out');
      },
      email: function () {
        window.location.href = 'mailto:khalidberrada2007@gmail.com';
        self.echo('Ouverture du client email...', 'out');
      },
      date: function () {
        self.echo(new Date().toLocaleString('fr-FR'), 'out');
      },
      clear: function () {
        self.output.innerHTML = '';
      },
      sudo: function () {
        self.echo('\uD83D\uDE0F Vous avez les droits root. Mais il n\'y a rien \u00e0 casser ici.', 'out');
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
          self.echo('Ouverture du projet ' + args[0] + '...', 'out');
          return;
        }
        self.echo('Projet "' + args[0] + '" introuvable. Utilisez "projects" pour voir la liste.', 'err');
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
  };

  Terminal.prototype.intro = function () {
    var self = this;
    var lines = [
      'Bienvenue sur mon portfolio ! \uD83C\uDF1F',
      'Syst\u00e8me : d\u00e9veloppeur-web/pro',
      'Kernel : cr\u00e9ativit\u00e9 \uD83D\uDD25 + logique \u26A1',
      '',
      'Tapez "help" pour explorer.',
      'Ou cliquez sur \u2318K pour la palette.'
    ];
    lines.forEach(function (line, i) {
      setTimeout(function () {
        self.echo(line, i < 4 ? 'out' : 'acc');
      }, 300 + i * 350);
    });
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
      this.echo('Commande inconnue : "' + cmd + '". Tapez "help" pour la liste.', 'err');
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

  CommandPalette.prototype.init = function () {
    var self = this;
    if (!self.overlay) return;

    self.items = [
      { label: 'Accueil', icon: 'fas fa-home', action: function () { self.navigate('#home'); } },
      { label: '\u00c0 propos', icon: 'fas fa-user', action: function () { self.navigate('#about'); } },
      { label: 'Comp\u00e9tences', icon: 'fas fa-code', action: function () { self.navigate('#skills'); } },
      { label: 'Projets', icon: 'fas fa-folder', action: function () { self.navigate('#projects'); } },
      { label: 'Contact', icon: 'fas fa-envelope', action: function () { self.navigate('#contact'); } },
      {
        label: 'Changer le th\u00e8me',
        icon: 'fas fa-palette',
        action: function () { if (window.theme) window.theme.toggle(); self.toggle(); }
      },
      {
        label: 'T\u00e9l\u00e9charger CV',
        icon: 'fas fa-download',
        action: function () { var a = document.createElement('a'); a.href = 'KHALID_BARRADAH_CV.pdf'; a.download = ''; a.click(); self.toggle(); }
      },
      {
        label: "Copier l'email",
        icon: 'fas fa-copy',
        action: function () { navigator.clipboard.writeText('khalidberrada2007@gmail.com'); self.showToast('Email copi\u00e9 !'); self.toggle(); }
      },
      {
        label: 'Ouvrir GitHub',
        icon: 'fab fa-github',
        action: function () { window.open('https://github.com/khalidberrada2007-dotcom', '_blank'); self.toggle(); }
      },
      {
        label: 'Ouvrir LinkedIn',
        icon: 'fab fa-linkedin',
        action: function () { window.open('https://linkedin.com/in/khalid-barradah', '_blank'); self.toggle(); }
      }
    ];

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
      this.list.innerHTML = '<div class="cmdk-empty">Aucun r\u00e9sultat trouv\u00e9</div>';
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

    var name = self.form.querySelector('#formName').value.trim();
    var email = self.form.querySelector('#formEmail').value.trim();
    var message = self.form.querySelector('#formMessage').value.trim();

    if (!name || !email || !message) {
      self.showToast('Veuillez remplir tous les champs obligatoires.', 'error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      self.showToast('Veuillez entrer un email valide.', 'error');
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
      throw new Error('Erreur serveur');
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
      self.showToast('Message envoy\u00e9 par email de secours. ✅', 'success');
      self.form.reset();
    })
    .finally(function () {
      self.btn.disabled = false;
      if (self.submitText) self.submitText.hidden = false;
      if (self.submitLoading) self.submitLoading.hidden = true;
    });
  };

  ContactForm.prototype.showSuccessModal = function (name) {
    // Show a success toast with the name
    var msg = 'Merci ' + name + ' ! Votre message a bien \u00e9t\u00e9 envoy\u00e9. Je vous r\u00e9pondrai rapidement. \u2728';
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
          if (window.toast) window.toast.show('Copi\u00e9 dans le presse-papier !');
        }).catch(function () {
          if (window.toast) window.toast.show('Impossible de copier.', 'error');
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
    window.theme = theme;
    window.terminal = terminal;
    window.cmdk = cmdk;
    window.imageModal = imageModal;
    window.toast = toast;
    window.particles = particles;

    // Init order
    toast.init();
    footerYear.init();
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

