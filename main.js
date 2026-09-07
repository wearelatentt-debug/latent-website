/* ============================================================
   LATENT · main.js
   Nav · i18n · cursor · hero · talento · galería · formulario
============================================================ */

/* ---------- i18n ----------
   ES es la fuente. EN y PT se completan sobre la versión aprobada:
   toda clave que falte en EN/PT cae al castellano automáticamente. */
const translations = {
  es: {
    "nav.projects": "Proyectos", "nav.services": "Servicios", "nav.talent": "Talento digital", "nav.studio": "Studio", "nav.contact": "Contacto", "nav.cta": "Hablemos",

    "home.h1": "Dirigimos<br>y producimos",
    "home.sub": "Campañas publicitarias con dirección integral. Y un producto propio: el talento digital.",
    "home.cta1": "Ver proyectos", "home.cta2": "Hablemos",
    "home.do.label": "Qué hacemos",
    "home.do.title": "Campañas publicitarias, de principio a fin",
    "home.do.text": "Dirección creativa y producción de la campaña completa: la pieza principal y todo lo que la rodea.",
    "home.do.tag1": "Contenido y versiones", "home.do.tag2": "Archivo a movimiento",
    "home.do.link": "Ver servicios",
    "home.talent.label": "Producto propio",
    "home.talent.title": "El rostro digital de tu marca",
    "home.talent.text": "Digitalizamos el talento que tu marca ya contrató, o diseñamos uno desde cero. A partir de ahí, producimos en cualquier escenario el contenido que necesites.",
    "home.talent.link": "Conocer el talento digital",
    "scene.0": "Estudio", "scene.1": "Ciudad", "scene.2": "Playa", "scene.3": "Nieve",
    "home.projects.label": "Proyectos", "home.projects.link": "Ver todos",
    "home.cta.title": "Contanos qué necesitás producir", "home.cta.btn": "Hablemos",
    "ticker": "Campañas publicitarias · Contenido y versiones · Archivo a movimiento · Talent Extension · Talent Creation · Talent Campaign",

    "projects.h1": "Proyectos",

    "services.h1": "Dirección creativa y producción",
    "services.lead": "Desde el brief hasta el último formato. Dirigimos con criterio y producimos con herramientas de última generación, para que el número cierre sin que la pieza se resienta.",
    "services.camp.title": "Campañas publicitarias",
    "services.camp.text": "La pieza principal y el set completo de entregables: formatos, duraciones, versiones y gráfica derivada. Una dirección, todos los formatos.",
    "services.camp.s1.t": "Contenido y versiones", "services.camp.s1.d": "Adaptaciones por mercado, temporada o línea de producto. Un origen, muchas salidas.",
    "services.camp.s2.t": "Archivo a movimiento", "services.camp.s2.d": "Fotografía de campañas anteriores, convertida en contenido en movimiento. Sin producción nueva.",
    "services.camp.s3.t": "Piezas sueltas", "services.camp.s3.d": "Cuando la campaña necesita una pieza más, sin volver a empezar.",
    "services.camp.note": "Cotizamos por entregable y por rondas de revisión. Nunca por hora.",
    "services.dir.title": "Dirección integral",
    "services.dir.text": "Dirigimos la campaña completa: concepto, guion, referencias, style frames, producción y entrega. Antes de producir un frame, la pieza ya está diseñada. Una sola dirección de principio a fin, para que todos los formatos hablen igual.",
    "services.tal.title": "Diseño de talento",
    "services.tal.text": "Diseñamos el talento específico para tu marca: un rostro con carácter definido, guía de uso y consistencia a lo largo del tiempo. Digitalizado a partir del talento que ya tenés, o creado desde cero. Después, produce con él en cualquier escenario.",
    "services.tal.link": "Ver los tres pilares",
    "process.label": "Proceso",
    "process.1.t": "Brief", "process.1.d": "Entendemos el objetivo, la marca y los entregables. Definimos alcance y calendario.",
    "process.2.t": "Dirección", "process.2.d": "Antes de producir una imagen, la pieza ya está diseñada: guion, referencias, style frames.",
    "process.3.t": "Producción", "process.3.d": "Dirigimos las herramientas bajo una visión coherente. Cada frame pasa por criterio.",
    "process.4.t": "Entrega", "process.4.d": "Todos los formatos, rondas acordadas, iteración hasta dar en el clavo.",

    "talent.h1": "Tu talento en cualquier escenario",
    "talent.lead": "El talento digital es un rostro que la marca controla: con guía de uso, permanencia técnica y consistencia a lo largo del tiempo. Talento como capacidad instalada, no como gasto por campaña.",
    "talent.seq": "Se empieza por Extension o por Creation. Campaign es lo que viene después.",
    "talent.p1.label": "Punto de partida A", "talent.p1.title": "Talent Extension",
    "talent.p1.text": "Digitalizamos el talento que tu marca ya contrató. Embajador, modelo firmado, rostro de campaña. En tres semanas, la marca produce lo que necesita sin volver a citarlo, sin set físico y sin agenda cruzada.",
    "talent.p1.for": "Marcas con talento vigente", "talent.p1.time": "3 semanas",
    "talent.p2.label": "Punto de partida B", "talent.p2.title": "Talent Creation",
    "talent.p2.text": "Diseñamos un rostro propio desde cero. Fotorrealista o estilizado, con carácter definido y guía de uso. En licencia exclusiva o en cesión completa del paquete técnico.",
    "talent.p2.for": "Marcas sin talento firmado", "talent.p2.time": "4 a 6 semanas",
    "talent.p3.label": "Lo que viene después", "talent.p3.title": "Talent Campaign",
    "talent.p3.text": "Con el talento ya digitalizado o diseñado, producimos las campañas: una sola cara en todos los formatos, en cualquier escenario, sin volver a citarlo.",
    "talent.p3.for": "Marcas con Extension o Creation activo",
    "talent.for": "Para", "talent.time": "Onboarding",
    "talent.cta": "Hablemos de tu talento",

    "studio.h1": "Un estudio que dirige y produce",
    "studio.lead": "LATENT es un estudio de dirección creativa con capacidad de producción propia. Trabajamos con marcas de toda Iberoamérica desde Buenos Aires. Y desarrollamos un producto que ninguna productora tiene: el talento digital de marca.",
    "studio.q.title": "<b>La tecnología es el motor.</b> La dirección es el volante",
    "studio.q.text": "Dirigimos las herramientas, no al revés. Antes de producir un frame, la pieza ya está diseñada. Es lo que separa a un estudio de un generador.",
    "studio.link": "Franco Binaghi en LinkedIn",

    "contact.h1": "Contanos qué necesitás producir",
    "contact.lead": "Respondemos en menos de 24 horas hábiles. Si preferís, agendamos veinte minutos antes de cotizar.",
    "contact.email": "Mail", "contact.base": "Base", "contact.base.v": "Buenos Aires · Iberoamérica", "contact.social": "Redes",
    "form.name": "Nombre", "form.email": "Mail", "form.company": "Marca o empresa", "form.message": "Contanos",
    "form.check": "Prefiero agendar veinte minutos antes de recibir una propuesta.",
    "form.submit": "Enviar",
    "form.sent": "Enviado. Te respondemos en menos de 24 horas hábiles.",

    "footer.sign": "LATENT · Brand Talent Studio",
    "footer.nav": "Navegación", "footer.follow": "Redes", "footer.lang": "Idioma",
    "footer.legal": "© 2026 LATENT · Buenos Aires"
  },
  en: {},   /* se completa después de validar el castellano */
  pt: {}
};
const langCodes = { es: "es-AR", en: "en-US", pt: "pt-BR" };

function t(lang, key) {
  return (translations[lang] && translations[lang][key] !== undefined) ? translations[lang][key] : translations.es[key];
}
function setLanguage(lang) {
  if (!translations[lang]) lang = 'es';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const val = t(lang, key);
    if (val === undefined) return;
    if (attr) el.setAttribute(attr, val); else el.innerHTML = val;
  });
  document.documentElement.lang = langCodes[lang];
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  try { localStorage.setItem('latent_lang', lang); } catch (e) {}
}
(function initLang() {
  let saved; try { saved = localStorage.getItem('latent_lang'); } catch (e) {}
  const browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
  setLanguage(saved || (translations[browser] ? browser : 'es'));
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
})();

/* ---------- Nav ---------- */
(function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const burger = nav.querySelector('.nav-burger');
  if (burger) burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  const onScroll = () => nav.classList.toggle('is-solid', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  // marcar página activa
  const here = location.pathname.replace(/\/$/, '') || '/';
  nav.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === here || (href !== '/' && here.startsWith(href))) a.setAttribute('aria-current', 'page');
  });
})();

/* ---------- Cursor (punto naranja) ---------- */
(function initCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.createElement('div');
  c.className = 'cursor is-hidden';
  document.body.appendChild(c);
  document.body.classList.add('has-cursor');
  window.addEventListener('mousemove', e => {
    c.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    c.classList.remove('is-hidden');
    const target = e.target.closest('a, button, label, [role="button"]');
    c.classList.toggle('is-link', !!target);
  }, { passive: true });
  document.addEventListener('mouseleave', () => c.classList.add('is-hidden'));
})();

/* ---------- Hero · sonido del showreel ---------- */
(function initHero() {
  const video = document.querySelector('.hero-video');
  const btn = document.querySelector('.hero-sound');
  if (!video || !btn) return;
  btn.addEventListener('click', () => {
    video.muted = !video.muted;
    btn.classList.toggle('is-on', !video.muted);
    btn.setAttribute('aria-pressed', !video.muted);
    if (!video.muted) video.play().catch(() => {});
  });
})();

/* ---------- Talento digital · escenarios ---------- */
(function initTalent() {
  const stage = document.querySelector('.talent-stage');
  if (!stage) return;
  const scenes = stage.querySelectorAll('.talent-scene');
  const btns = document.querySelectorAll('.talent-btn');
  const name = stage.querySelector('.scene-name');
  let i = 0, timer = null;
  const lang = () => (document.documentElement.lang || 'es').slice(0, 2);
  function go(n) {
    i = (n + scenes.length) % scenes.length;
    scenes.forEach((s, k) => s.classList.toggle('is-active', k === i));
    btns.forEach((b, k) => b.classList.toggle('is-active', k === i));
    if (name) name.textContent = t(lang(), 'scene.' + i);
  }
  function start() { stop(); if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => go(i + 1), 3200); }
  function stop() { if (timer) clearInterval(timer); timer = null; }
  btns.forEach((b, k) => b.addEventListener('click', () => { go(k); start(); }));
  // rotación automática solo cuando está en pantalla
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? start() : stop()), { threshold: 0.4 });
  io.observe(stage);
  // imágenes ausentes: se queda el placeholder
  stage.querySelectorAll('img').forEach(img => img.addEventListener('error', () => { img.style.display = 'none'; }));
  go(0);
})();

/* ---------- Galería · reproducción en hover + lightbox ---------- */
(function initGallery() {
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  if (!items.length) return;
  const box = document.getElementById('lightbox');
  const player = box ? box.querySelector('video') : null;
  const title = box ? box.querySelector('.lightbox-title') : null;
  let current = 0;

  items.forEach((el, k) => {
    const v = el.querySelector('video');
    if (v) {
      el.addEventListener('mouseenter', () => v.play().catch(() => {}));
      el.addEventListener('mouseleave', () => { v.pause(); });
    }
    el.addEventListener('click', () => open(k));
  });

  function open(k) {
    if (!box || !player) return;
    current = k;
    const el = items[k];
    player.src = el.dataset.src;
    player.muted = false;
    if (title) title.textContent = el.dataset.title || '';
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    player.play().catch(() => {});
  }
  function close() {
    if (!box || !player) return;
    player.pause(); player.removeAttribute('src'); player.load();
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  if (box) {
    box.querySelector('.lightbox-close').addEventListener('click', close);
    box.querySelector('.lightbox-prev').addEventListener('click', () => open((current - 1 + items.length) % items.length));
    box.querySelector('.lightbox-next').addEventListener('click', () => open((current + 1) % items.length));
    box.addEventListener('click', e => { if (e.target === box) close(); });
    document.addEventListener('keydown', e => {
      if (!box.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') open((current + 1) % items.length);
      if (e.key === 'ArrowLeft') open((current - 1 + items.length) % items.length);
    });
  }
})();

/* ---------- Formulario · estado post-envío (Formspree) ---------- */
(function initForm() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('sent') !== 'true') return;
  const status = document.getElementById('formStatus');
  if (!status) return;
  status.textContent = t((document.documentElement.lang || 'es').slice(0, 2), 'form.sent');
  status.classList.add('success');
})();

/* ---------- Velo · entrar y navegar a través del punto ---------- */
(function initVeil() {
  const veil = document.getElementById('veil');
  if (!veil) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dot = veil.querySelector('.veil-dot');
  const grow = () => Math.ceil(Math.hypot(window.innerWidth, window.innerHeight) * 2 / 14);
  document.documentElement.style.setProperty('--grow', grow());
  let seen = false, fromNav = false;
  try { seen = sessionStorage.getItem('latent_seen') === '1'; fromNav = sessionStorage.getItem('latent_nav') === '1'; sessionStorage.removeItem('latent_nav'); } catch (e) {}
  if (reduce) return;
  if (fromNav) {
    veil.classList.add('is-on', 'is-orange');
    dot.style.display = 'none';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      veil.classList.add('is-fade');
      setTimeout(() => veil.classList.remove('is-on'), 400);
    }));
  } else if (!seen) {
    veil.classList.add('is-on', 'is-intro');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      veil.classList.add('is-fade');
      document.body.style.overflow = '';
      setTimeout(() => veil.classList.remove('is-on', 'is-intro'), 400);
    }, 1750);
    try { sessionStorage.setItem('latent_seen', '1'); } catch (e) {}
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || a.target === '_blank' || /^https?:/.test(href)) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    veil.classList.remove('is-fade', 'is-orange', 'is-intro');
    veil.style.background = 'transparent';
    dot.style.display = '';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    veil.classList.add('is-on', 'is-exit');
    try { sessionStorage.setItem('latent_nav', '1'); } catch (er) {}
    setTimeout(() => { location.href = href; }, 480);
  });
})();

/* ---------- CTA final · el punto se vuelve fondo con el scroll ---------- */
(function initCtaDot() {
  const sec = document.querySelector('.cta-final');
  const dot = sec && sec.querySelector('.cta-dot');
  if (!sec || !dot) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function update() {
    const r = sec.getBoundingClientRect();
    const vh = window.innerHeight;
    let p = (vh - r.top) / (vh * 0.55 + r.height * 0.5);
    p = Math.max(0, Math.min(1, p));
    const eased = p * p * (3 - 2 * p);
    const max = Math.hypot(r.width, r.height) * 2.1 / 14;
    dot.style.transform = `scale(${reduce ? max : 1 + eased * (max - 1)})`;
    sec.classList.toggle('is-orange', eased > 0.3 || reduce);
  }
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
})();

/* ---------- Ticker ---------- */
(function initTicker() {
  const el = document.getElementById('ticker');
  if (!el) return;
  const fill = () => {
    const items = t((document.documentElement.lang || 'es').slice(0, 2), 'ticker').split('·').map(x => x.trim());
    const html = items.map(x => `<span>${x}</span>`).join('');
    el.innerHTML = html + html + html + html;
  };
  fill();
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', fill));
})();
