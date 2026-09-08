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
  en: {
    "nav.projects": "Work", "nav.services": "Services", "nav.talent": "Digital talent", "nav.studio": "Studio", "nav.contact": "Contact", "nav.cta": "Let's talk",

    "home.h1": "We direct<br>and produce",
    "home.sub": "Advertising campaigns with full creative direction. And a product of our own: digital talent.",
    "home.cta1": "See work", "home.cta2": "Let's talk",
    "home.do.label": "What we do",
    "home.do.title": "Advertising campaigns, start to finish",
    "home.do.text": "Creative direction and production of the whole campaign: the hero piece and everything around it.",
    "home.do.tag1": "Content and versions", "home.do.tag2": "Archive to motion",
    "home.do.link": "See services",
    "home.talent.label": "Our own product",
    "home.talent.title": "Your brand's digital face",
    "home.talent.text": "We digitize the talent your brand already signed, or design one from scratch. From there, we produce the content you need in any setting.",
    "home.talent.link": "Explore digital talent",
    "scene.0": "Studio", "scene.1": "City", "scene.2": "Beach", "scene.3": "Snow",
    "home.projects.label": "Work", "home.projects.link": "See all",
    "home.cta.title": "Tell us what you need to produce", "home.cta.btn": "Let's talk",
    "ticker": "Advertising campaigns · Content and versions · Archive to motion · Talent Extension · Talent Creation · Talent Campaign",

    "projects.h1": "Work",

    "services.h1": "Creative direction and production",
    "services.lead": "From the brief to the last format. We direct with judgment and produce with the latest tools, so the numbers add up without the work suffering for it.",
    "services.camp.title": "Advertising campaigns",
    "services.camp.text": "The hero piece and the full set of deliverables: formats, durations, versions and derived graphics. One direction, every format.",
    "services.camp.s1.t": "Content and versions", "services.camp.s1.d": "Adaptations by market, season or product line. One origin, many outputs.",
    "services.camp.s2.t": "Archive to motion", "services.camp.s2.d": "Photography from past campaigns, turned into moving content. No new production.",
    "services.camp.s3.t": "Standalone pieces", "services.camp.s3.d": "When the campaign needs one more piece, without starting over.",
    "services.camp.note": "We quote by deliverable and by rounds of revision. Never by the hour.",
    "services.dir.title": "Full direction",
    "services.dir.text": "We direct the whole campaign: concept, script, references, style frames, production and delivery. Before a single frame is produced, the piece is already designed. One direction from start to finish, so every format speaks the same.",
    "services.tal.title": "Talent design",
    "services.tal.text": "We design the talent specific to your brand: a face with defined character, a usage guide and consistency over time. Digitized from the talent you already have, or created from scratch. Then produce with it in any setting.",
    "services.tal.link": "See the three pillars",
    "process.label": "Process",
    "process.1.t": "Brief", "process.1.d": "We understand the goal, the brand and the deliverables. We define scope and calendar.",
    "process.2.t": "Direction", "process.2.d": "Before a single image is produced, the piece is already designed: script, references, style frames.",
    "process.3.t": "Production", "process.3.d": "We direct the tools under a coherent vision. Every frame passes through judgment.",
    "process.4.t": "Delivery", "process.4.d": "Every format, agreed rounds, iteration until we nail it.",

    "talent.h1": "Your talent in any setting",
    "talent.lead": "Digital talent is a face the brand controls: with a usage guide, technical permanence and consistency over time. Talent as installed capacity, not a cost per campaign.",
    "talent.seq": "You start with Extension or Creation. Campaign is what comes after.",
    "talent.p1.label": "Starting point A", "talent.p1.title": "Talent Extension",
    "talent.p1.text": "We digitize the talent your brand already signed. Ambassador, signed model, campaign face. In three weeks, the brand produces what it needs without recalling them, with no physical set and no clashing schedules.",
    "talent.p1.for": "Brands with active talent", "talent.p1.time": "3 weeks",
    "talent.p2.label": "Starting point B", "talent.p2.title": "Talent Creation",
    "talent.p2.text": "We design a face of your own from scratch. Photorealistic or stylized, with defined character and a usage guide. Under exclusive license or full handover of the technical package.",
    "talent.p2.for": "Brands with no signed talent", "talent.p2.time": "4 to 6 weeks",
    "talent.p3.label": "What comes after", "talent.p3.title": "Talent Campaign",
    "talent.p3.text": "With the talent already digitized or designed, we produce the campaigns: one face across every format, in any setting, without recalling them.",
    "talent.p3.for": "Brands with active Extension or Creation",
    "talent.for": "For", "talent.time": "Onboarding",
    "talent.cta": "Let's talk about your talent",

    "studio.h1": "A studio that directs and produces",
    "studio.lead": "LATENT is a creative-direction studio with production capacity of its own. We work with brands across Ibero-America from Buenos Aires. And we develop a product no production house has: brand digital talent.",
    "studio.q.title": "<b>Technology is the engine.</b> Direction is the wheel",
    "studio.q.text": "We direct the tools, not the other way around. Before a frame is produced, the piece is already designed. It's what separates a studio from a generator.",
    "studio.link": "Franco Binaghi on LinkedIn",

    "contact.h1": "Tell us what you need to produce",
    "contact.lead": "We reply in under 24 business hours. If you prefer, we book twenty minutes before quoting.",
    "contact.email": "Mail", "contact.base": "Based in", "contact.base.v": "Buenos Aires · Ibero-America", "contact.social": "Social",
    "form.name": "Name", "form.email": "Mail", "form.company": "Brand or company", "form.message": "Tell us",
    "form.check": "I'd rather book twenty minutes before receiving a proposal.",
    "form.submit": "Send",
    "form.sent": "Sent. We'll reply in under 24 business hours.",

    "footer.sign": "LATENT · Brand Talent Studio",
    "footer.nav": "Navigation", "footer.follow": "Social", "footer.lang": "Language",
    "footer.legal": "© 2026 LATENT · Buenos Aires"
  },
  pt: {
    "nav.projects": "Projetos", "nav.services": "Serviços", "nav.talent": "Talento digital", "nav.studio": "Studio", "nav.contact": "Contato", "nav.cta": "Vamos conversar",

    "home.h1": "Dirigimos<br>e produzimos",
    "home.sub": "Campanhas publicitárias com direção integral. E um produto próprio: o talento digital.",
    "home.cta1": "Ver projetos", "home.cta2": "Vamos conversar",
    "home.do.label": "O que fazemos",
    "home.do.title": "Campanhas publicitárias, do início ao fim",
    "home.do.text": "Direção criativa e produção da campanha completa: a peça principal e tudo o que a cerca.",
    "home.do.tag1": "Conteúdo e versões", "home.do.tag2": "Arquivo em movimento",
    "home.do.link": "Ver serviços",
    "home.talent.label": "Produto próprio",
    "home.talent.title": "O rosto digital da sua marca",
    "home.talent.text": "Digitalizamos o talento que sua marca já contratou, ou criamos um do zero. A partir daí, produzimos em qualquer cenário o conteúdo que você precisa.",
    "home.talent.link": "Conhecer o talento digital",
    "scene.0": "Estúdio", "scene.1": "Cidade", "scene.2": "Praia", "scene.3": "Neve",
    "home.projects.label": "Projetos", "home.projects.link": "Ver todos",
    "home.cta.title": "Conte-nos o que você precisa produzir", "home.cta.btn": "Vamos conversar",
    "ticker": "Campanhas publicitárias · Conteúdo e versões · Arquivo em movimento · Talent Extension · Talent Creation · Talent Campaign",

    "projects.h1": "Projetos",

    "services.h1": "Direção criativa e produção",
    "services.lead": "Do brief ao último formato. Dirigimos com critério e produzimos com ferramentas de última geração, para que o número feche sem que a peça se ressinta.",
    "services.camp.title": "Campanhas publicitárias",
    "services.camp.text": "A peça principal e o conjunto completo de entregáveis: formatos, durações, versões e gráfica derivada. Uma direção, todos os formatos.",
    "services.camp.s1.t": "Conteúdo e versões", "services.camp.s1.d": "Adaptações por mercado, temporada ou linha de produto. Uma origem, muitas saídas.",
    "services.camp.s2.t": "Arquivo em movimento", "services.camp.s2.d": "Fotografia de campanhas anteriores, convertida em conteúdo em movimento. Sem produção nova.",
    "services.camp.s3.t": "Peças avulsas", "services.camp.s3.d": "Quando a campanha precisa de mais uma peça, sem recomeçar.",
    "services.camp.note": "Orçamos por entregável e por rodadas de revisão. Nunca por hora.",
    "services.dir.title": "Direção integral",
    "services.dir.text": "Dirigimos a campanha completa: conceito, roteiro, referências, style frames, produção e entrega. Antes de produzir um frame, a peça já está desenhada. Uma só direção do início ao fim, para que todos os formatos falem igual.",
    "services.tal.title": "Design de talento",
    "services.tal.text": "Desenhamos o talento específico para sua marca: um rosto com caráter definido, guia de uso e consistência ao longo do tempo. Digitalizado a partir do talento que você já tem, ou criado do zero. Depois, produza com ele em qualquer cenário.",
    "services.tal.link": "Ver os três pilares",
    "process.label": "Processo",
    "process.1.t": "Brief", "process.1.d": "Entendemos o objetivo, a marca e os entregáveis. Definimos escopo e calendário.",
    "process.2.t": "Direção", "process.2.d": "Antes de produzir uma imagem, a peça já está desenhada: roteiro, referências, style frames.",
    "process.3.t": "Produção", "process.3.d": "Dirigimos as ferramentas sob uma visão coerente. Cada frame passa por critério.",
    "process.4.t": "Entrega", "process.4.d": "Todos os formatos, rodadas combinadas, iteração até acertar em cheio.",

    "talent.h1": "Seu talento em qualquer cenário",
    "talent.lead": "O talento digital é um rosto que a marca controla: com guia de uso, permanência técnica e consistência ao longo do tempo. Talento como capacidade instalada, não como gasto por campanha.",
    "talent.seq": "Começa-se por Extension ou por Creation. Campaign é o que vem depois.",
    "talent.p1.label": "Ponto de partida A", "talent.p1.title": "Talent Extension",
    "talent.p1.text": "Digitalizamos o talento que sua marca já contratou. Embaixador, modelo assinado, rosto de campanha. Em três semanas, a marca produz o que precisa sem voltar a convocá-lo, sem set físico e sem agenda cruzada.",
    "talent.p1.for": "Marcas com talento vigente", "talent.p1.time": "3 semanas",
    "talent.p2.label": "Ponto de partida B", "talent.p2.title": "Talent Creation",
    "talent.p2.text": "Desenhamos um rosto próprio do zero. Fotorrealista ou estilizado, com caráter definido e guia de uso. Em licença exclusiva ou em cessão completa do pacote técnico.",
    "talent.p2.for": "Marcas sem talento assinado", "talent.p2.time": "4 a 6 semanas",
    "talent.p3.label": "O que vem depois", "talent.p3.title": "Talent Campaign",
    "talent.p3.text": "Com o talento já digitalizado ou desenhado, produzimos as campanhas: um só rosto em todos os formatos, em qualquer cenário, sem voltar a convocá-lo.",
    "talent.p3.for": "Marcas com Extension ou Creation ativo",
    "talent.for": "Para", "talent.time": "Onboarding",
    "talent.cta": "Vamos falar do seu talento",

    "studio.h1": "Um estúdio que dirige e produz",
    "studio.lead": "LATENT é um estúdio de direção criativa com capacidade de produção própria. Trabalhamos com marcas de toda a Ibero-América desde Buenos Aires. E desenvolvemos um produto que nenhuma produtora tem: o talento digital de marca.",
    "studio.q.title": "<b>A tecnologia é o motor.</b> A direção é o volante",
    "studio.q.text": "Dirigimos as ferramentas, não o contrário. Antes de produzir um frame, a peça já está desenhada. É o que separa um estúdio de um gerador.",
    "studio.link": "Franco Binaghi no LinkedIn",

    "contact.h1": "Conte-nos o que você precisa produzir",
    "contact.lead": "Respondemos em menos de 24 horas úteis. Se preferir, marcamos vinte minutos antes de orçar.",
    "contact.email": "Mail", "contact.base": "Base", "contact.base.v": "Buenos Aires · Ibero-América", "contact.social": "Redes",
    "form.name": "Nome", "form.email": "Mail", "form.company": "Marca ou empresa", "form.message": "Conte-nos",
    "form.check": "Prefiro marcar vinte minutos antes de receber uma proposta.",
    "form.submit": "Enviar",
    "form.sent": "Enviado. Respondemos em menos de 24 horas úteis.",

    "footer.sign": "LATENT · Brand Talent Studio",
    "footer.nav": "Navegação", "footer.follow": "Redes", "footer.lang": "Idioma",
    "footer.legal": "© 2026 LATENT · Buenos Aires"
  },
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
