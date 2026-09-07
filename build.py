#!/usr/bin/env python3
"""Genera las páginas HTML del sitio a partir de bloques compartidos.
Los archivos resultantes son HTML plano, editables sin este script."""
import os, pathlib

OUT = pathlib.Path(__file__).parent
SITE = "https://wearelatent.com"

VIDEOS = [
    ("Our LATENT production", "videos/proyecto-01.mp4"),
    ("Wimbledon Animation", "videos/proyecto-02.mp4"),
    ("Real fut X LATENT", "videos/proyecto-03.mp4"),
    ("MokoTheCreator X LATENT", "videos/proyecto-04.mp4"),
    ("Blender production with LATENT", "videos/proyecto-05.mp4"),
]

PIXEL = """<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1010372847997913');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1010372847997913&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->"""

def head(title, desc, path):
    return f"""<!DOCTYPE html>
<html lang="es-AR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0A0A0A">
<meta name="color-scheme" content="dark">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="keywords" content="dirección creativa, producción de campañas, campañas publicitarias, talento digital, brand talent studio, Buenos Aires, Iberoamérica">
<meta name="author" content="LATENT">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<link rel="canonical" href="{SITE}{path}">
<meta name="geo.region" content="AR-C">
<meta name="geo.placename" content="Buenos Aires">
<meta property="og:type" content="website">
<meta property="og:site_name" content="LATENT">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{SITE}{path}">
<meta property="og:locale" content="es_AR">
<meta property="og:locale:alternate" content="en_US">
<meta property="og:locale:alternate" content="pt_BR">
<meta property="og:image" content="{SITE}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{SITE}/og-image.png">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230A0A0A'/%3E%3Ccircle cx='24' cy='22' r='5' fill='%23F5A623'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/styles.css">
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LATENT",
  "alternateName": "LATENT · Brand Talent Studio",
  "url": "{SITE}/",
  "description": "Estudio de dirección creativa y producción de campañas publicitarias, con un producto propio: el talento digital de marca.",
  "email": "wearelatentt@gmail.com",
  "address": {{"@type": "PostalAddress", "addressLocality": "Buenos Aires", "addressCountry": "AR"}},
  "founder": {{"@type": "Person", "name": "Franco Binaghi"}},
  "areaServed": ["Argentina", "Iberoamérica", "Latin America"],
  "sameAs": ["https://www.instagram.com/wearelatent/", "https://www.linkedin.com/company/wearelatent/"]
}}
</script>
{PIXEL}
</head>
<body>
<div class="veil" id="veil" aria-hidden="true"><span class="veil-dot"></span></div>
"""

NAV = """<nav class="nav" aria-label="Principal">
  <a href="/" class="nav-logo" aria-label="LATENT, inicio">LATENT<span class="dot-char" aria-hidden="true"></span></a>
  <div class="nav-links">
    <a href="/proyectos" data-i18n="nav.projects">Proyectos</a>
    <a href="/servicios" data-i18n="nav.services">Servicios</a>
    <a href="/talento" data-i18n="nav.talent">Talento digital</a>
    <a href="/studio" data-i18n="nav.studio">Studio</a>
    <a href="/contacto" data-i18n="nav.contact">Contacto</a>
  </div>
  <div class="nav-right">
    <div class="lang-switch" role="group" aria-label="Idioma">
      <button class="lang-btn active" data-lang="es">ES</button>
      <button class="lang-btn" data-lang="en">EN</button>
      <button class="lang-btn" data-lang="pt">PT</button>
    </div>
    <a href="/contacto" class="nav-cta" data-i18n="nav.cta">Hablemos</a>
    <button class="nav-burger" aria-label="Menú" aria-expanded="false"><span></span><span></span></button>
  </div>
</nav>
"""

FOOTER = """<footer class="site-footer">
  <div class="wrap">
    <div class="footer-top">
      <div>
        <span class="mono footer-sign" data-i18n="footer.sign">LATENT · Brand Talent Studio</span>
      </div>
      <div class="footer-col">
        <ul>
          <li><a href="/proyectos" data-i18n="nav.projects">Proyectos</a></li>
          <li><a href="/servicios" data-i18n="nav.services">Servicios</a></li>
          <li><a href="/talento" data-i18n="nav.talent">Talento digital</a></li>
          <li><a href="/studio" data-i18n="nav.studio">Studio</a></li>
          <li><a href="/contacto" data-i18n="nav.contact">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <ul>
          <li><a href="https://instagram.com/wearelatent" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://linkedin.com/company/wearelatent" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="mailto:wearelatentt@gmail.com">wearelatentt@gmail.com</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="lang-switch">
          <button class="lang-btn active" data-lang="es">ES</button>
          <button class="lang-btn" data-lang="en">EN</button>
          <button class="lang-btn" data-lang="pt">PT</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom mono">
      <span data-i18n="footer.legal">© 2026 LATENT · Buenos Aires</span>
      <span>Brand Talent Studio</span>
    </div>
  </div>
  <div class="wrap"><div class="footer-word" aria-hidden="true">LATENT<span class="dot-char"></span></div></div>
</footer>
<script src="/assets/main.js"></script>
</body>
</html>
"""

LIGHTBOX = """<div class="lightbox" id="lightbox" aria-hidden="true" role="dialog" aria-label="Reproductor">
  <button class="lightbox-close" aria-label="Cerrar">×</button>
  <button class="lightbox-nav lightbox-prev" aria-label="Anterior">‹</button>
  <video controls playsinline preload="none"></video>
  <button class="lightbox-nav lightbox-next" aria-label="Siguiente">›</button>
  <div class="lightbox-title"></div>
</div>
"""

PLAY = '<span class="g-play" aria-hidden="true"></span>'

def gallery(items, cls=""):
    out = [f'<div class="gallery {cls}">']
    for k, (title, src) in enumerate(items, 1):
        out.append(f'''  <button class="gallery-item" data-src="/{src}" data-title="{title}" aria-label="Reproducir {title}">
    <video src="/{src}" muted loop playsinline preload="metadata"></video>
    <span class="g-num mono">{k:02d}</span>
    {PLAY}
    <span class="g-title">{title}</span>
  </button>''')
    out.append('</div>')
    return "\n".join(out)

def cta_final():
    return """<section class="cta-final">
  <span class="cta-dot" aria-hidden="true"></span>
  <div class="wrap">
    <h2><span data-i18n="home.cta.title">Contanos qué necesitás producir</span><span class="hd" aria-hidden="true"></span></h2>
    <a href="/contacto" class="btn btn-primary"><span data-i18n="home.cta.btn">Hablemos</span><span class="btn-arrow">→</span></a>
  </div>
</section>
"""

# ------------------------------------------------------------ HOME
home = head("LATENT · Brand Talent Studio",
            "Dirigimos y producimos campañas publicitarias para marcas de Iberoamérica. Con un producto propio: el talento digital de marca.", "/") + NAV + f"""
<header class="hero">
  <video class="hero-video" src="/videos/showreel.mp4" autoplay muted loop playsinline poster="/videos/showreel-poster.jpg"></video>
  <div class="hero-content">
    <div>
      <h1><span data-i18n="home.h1">Dirigimos<br>y producimos</span><span class="hd hd-lg" aria-hidden="true"></span></h1>
      <p class="hero-sub" data-i18n="home.sub">Campañas publicitarias con dirección integral. Y un producto propio: el talento digital.</p>
      <span class="mono hero-sign">LATENT · Brand Talent Studio</span>
      <div class="hero-ctas">
        <a href="/proyectos" class="btn btn-primary"><span data-i18n="home.cta1">Ver proyectos</span><span class="btn-arrow">→</span></a>
        <a href="/contacto" class="btn btn-secondary"><span data-i18n="home.cta2">Hablemos</span></a>
      </div>
    </div>
    <button class="hero-sound" aria-label="Sonido" aria-pressed="false">
      <svg class="off" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6h3l4-3v10l-4-3H2z"/><path d="M11 6l3 4M14 6l-3 4"/></svg>
      <svg class="on" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6h3l4-3v10l-4-3H2z"/><path d="M11 5.5a3.5 3.5 0 010 5M12.5 3a6 6 0 010 10"/></svg>
    </button>
  </div>
</header>

<div class="ticker mono" aria-hidden="true"><div class="ticker-track" id="ticker"></div></div>

<section class="section">
  <div class="wrap grid-2">
    <div>
      <span class="mono sec-label" data-i18n="home.do.label">Qué hacemos</span>
      <h2 class="sec-title"><span data-i18n="home.do.title">Campañas publicitarias, de principio a fin</span><span class="hd" aria-hidden="true"></span></h2>
    </div>
    <div>
      <p class="sec-text" data-i18n="home.do.text">Dirección creativa y producción de la campaña completa: la pieza principal y todo lo que la rodea.</p>
      <div class="tags mono"><span data-i18n="home.do.tag1">Contenido y versiones</span><span data-i18n="home.do.tag2">Archivo a movimiento</span></div>
      <p style="margin-top:2.5rem"><a href="/servicios" class="link-arrow"><span data-i18n="home.do.link">Ver servicios</span><span class="btn-arrow">→</span></a></p>
    </div>
  </div>
</section>

<section class="section talent">
  <div class="wrap talent-grid">
    <div class="talent-stage" aria-label="Talento digital en distintos escenarios">
      <div class="talent-scene is-active" data-scene="0"><div class="placeholder"></div><img src="/assets/talento/escenario-01.jpg" alt=""></div>
      <div class="talent-scene" data-scene="1"><div class="placeholder"></div><img src="/assets/talento/escenario-02.jpg" alt=""></div>
      <div class="talent-scene" data-scene="2"><div class="placeholder"></div><img src="/assets/talento/escenario-03.jpg" alt=""></div>
      <div class="talent-scene" data-scene="3"><div class="placeholder"></div><img src="/assets/talento/escenario-04.jpg" alt=""></div>
      <span class="mono scene-name">Estudio</span>
    </div>
    <div>
      <span class="mono sec-label" data-i18n="home.talent.label">Producto propio</span>
      <h2 class="sec-title"><span data-i18n="home.talent.title">El rostro digital de tu marca</span><span class="hd" aria-hidden="true"></span></h2>
      <p class="sec-text" data-i18n="home.talent.text">Digitalizamos el talento que tu marca ya contrató, o diseñamos uno desde cero. A partir de ahí, producimos en cualquier escenario el contenido que necesites.</p>
      <div class="talent-controls">
        <button class="talent-btn is-active" data-i18n="scene.0">Estudio</button>
        <button class="talent-btn" data-i18n="scene.1">Ciudad</button>
        <button class="talent-btn" data-i18n="scene.2">Playa</button>
        <button class="talent-btn" data-i18n="scene.3">Nieve</button>
      </div>
      <div class="tags mono"><span>Extension</span><span>Creation</span><span>Campaign</span></div>
      <p style="margin-top:2.5rem"><a href="/talento" class="link-arrow"><span data-i18n="home.talent.link">Conocer el talento digital</span><span class="btn-arrow">→</span></a></p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <span class="mono sec-label" data-i18n="home.projects.label">Proyectos</span>
    {gallery(VIDEOS[:4], "gallery-home")}
    <p style="margin-top:2.5rem"><a href="/proyectos" class="link-arrow"><span data-i18n="home.projects.link">Ver todos</span><span class="btn-arrow">→</span></a></p>
  </div>
</section>
{LIGHTBOX}
{cta_final()}
""" + FOOTER

# ------------------------------------------------------------ PROYECTOS
proyectos = head("Proyectos · LATENT", "Campañas y piezas dirigidas y producidas por LATENT.", "/proyectos") + NAV + f"""
<section class="page-head"><div class="wrap"><h1><span data-i18n="projects.h1">Proyectos</span><span class="hd hd-lg" aria-hidden="true"></span></h1></div></section>
<section style="padding-bottom: clamp(5rem,10vw,9rem)">
  <div class="wrap">
    {gallery(VIDEOS)}
  </div>
</section>
{LIGHTBOX}
{cta_final()}
""" + FOOTER

# ------------------------------------------------------------ SERVICIOS
servicios = head("Servicios · LATENT", "Dirección creativa y producción de campañas publicitarias. Dirección integral y diseño de talento.", "/servicios") + NAV + """
<section class="page-head"><div class="wrap">
  <h1><span data-i18n="services.h1">Dirección creativa y producción</span><span class="hd hd-lg" aria-hidden="true"></span></h1>
  <p data-i18n="services.lead">Desde el brief hasta el último formato. Dirigimos con criterio y producimos con herramientas de última generación, para que el número cierre sin que la pieza se resienta.</p>
</div></section>

<section class="service-block"><div class="wrap grid-2">
  <div class="sticky"><h3><span data-i18n="services.camp.title">Campañas publicitarias</span><span class="hd" aria-hidden="true"></span></h3></div>
  <div>
    <p class="sec-text" data-i18n="services.camp.text">La pieza principal y el set completo de entregables: formatos, duraciones, versiones y gráfica derivada. Una dirección, todos los formatos.</p>
    <div class="sublist">
      <div><h4 data-i18n="services.camp.s1.t">Contenido y versiones</h4><p data-i18n="services.camp.s1.d">Adaptaciones por mercado, temporada o línea de producto. Un origen, muchas salidas.</p></div>
      <div><h4 data-i18n="services.camp.s2.t">Archivo a movimiento</h4><p data-i18n="services.camp.s2.d">Fotografía de campañas anteriores, convertida en contenido en movimiento. Sin producción nueva.</p></div>
      <div><h4 data-i18n="services.camp.s3.t">Piezas sueltas</h4><p data-i18n="services.camp.s3.d">Cuando la campaña necesita una pieza más, sin volver a empezar.</p></div>
    </div>
    <span class="mono note" data-i18n="services.camp.note">Cotizamos por entregable y por rondas de revisión. Nunca por hora.</span>
  </div>
</div></section>

<section class="service-block"><div class="wrap grid-2">
  <div class="sticky"><h3><span data-i18n="services.dir.title">Dirección integral</span><span class="hd" aria-hidden="true"></span></h3></div>
  <div><p class="sec-text" data-i18n="services.dir.text">Dirigimos la campaña completa: concepto, guion, referencias, style frames, producción y entrega. Antes de producir un frame, la pieza ya está diseñada. Una sola dirección de principio a fin, para que todos los formatos hablen igual.</p></div>
</div></section>

<section class="service-block"><div class="wrap grid-2">
  <div class="sticky"><h3><span data-i18n="services.tal.title">Diseño de talento</span><span class="hd" aria-hidden="true"></span></h3></div>
  <div>
    <p class="sec-text" data-i18n="services.tal.text">Diseñamos el talento específico para tu marca: un rostro con carácter definido, guía de uso y consistencia a lo largo del tiempo. Digitalizado a partir del talento que ya tenés, o creado desde cero. Después, produce con él en cualquier escenario.</p>
    <p style="margin-top:2rem"><a href="/talento" class="link-arrow"><span data-i18n="services.tal.link">Ver los tres pilares</span><span class="btn-arrow">→</span></a></p>
  </div>
</div></section>

<section class="section"><div class="wrap">
  <span class="mono sec-label" data-i18n="process.label">Proceso</span>
  <div class="steps">
    <div class="step"><span class="mono">01</span><h4 data-i18n="process.1.t">Brief</h4><p data-i18n="process.1.d">Entendemos el objetivo, la marca y los entregables. Definimos alcance y calendario.</p></div>
    <div class="step"><span class="mono">02</span><h4 data-i18n="process.2.t">Dirección</h4><p data-i18n="process.2.d">Antes de producir una imagen, la pieza ya está diseñada: guion, referencias, style frames.</p></div>
    <div class="step"><span class="mono">03</span><h4 data-i18n="process.3.t">Producción</h4><p data-i18n="process.3.d">Dirigimos las herramientas bajo una visión coherente. Cada frame pasa por criterio.</p></div>
    <div class="step"><span class="mono">04</span><h4 data-i18n="process.4.t">Entrega</h4><p data-i18n="process.4.d">Todos los formatos, rondas acordadas, iteración hasta dar en el clavo.</p></div>
  </div>
</div></section>
""" + cta_final() + FOOTER

# ------------------------------------------------------------ TALENTO
def pillar(n, extra=""):
    return f"""<div class="pillar {extra}">
      <span class="mono" data-i18n="talent.p{n}.label"></span>
      <h3><span data-i18n="talent.p{n}.title"></span><span class="hd" aria-hidden="true"></span></h3>
      <p data-i18n="talent.p{n}.text"></p>
      <div class="meta">
        <span><span data-i18n="talent.for">Para</span> · <b data-i18n="talent.p{n}.for"></b></span>
        {'' if n == 3 else f'<span><span data-i18n="talent.time">Onboarding</span> · <b data-i18n="talent.p{n}.time"></b></span>'}
      </div>
    </div>"""

talento = head("Talento digital · LATENT", "Tu talento en cualquier escenario. Talent Extension, Talent Creation y Talent Campaign.", "/talento") + NAV + f"""
<section class="page-head"><div class="wrap">
  <h1><span data-i18n="talent.h1">Tu talento en cualquier escenario</span><span class="hd hd-lg" aria-hidden="true"></span></h1>
  <p data-i18n="talent.lead">El talento digital es un rostro que la marca controla: con guía de uso, permanencia técnica y consistencia a lo largo del tiempo. Talento como capacidad instalada, no como gasto por campaña.</p>
</div></section>

<section style="padding-bottom: clamp(5rem,10vw,9rem)"><div class="wrap">
  <span class="mono sec-label" data-i18n="talent.seq">Se empieza por Extension o por Creation. Campaign es lo que viene después.</span>
  <div class="pillars-seq">
    <div class="pillars-top">
      {pillar(1)}
      {pillar(2)}
    </div>
    <div class="pillars-join" aria-hidden="true"><span></span><span></span></div>
    <div class="pillars-bottom">
      {pillar(3)}
    </div>
  </div>
  <p style="margin-top:3rem"><a href="/contacto" class="btn btn-primary"><span data-i18n="talent.cta">Hablemos de tu talento</span><span class="btn-arrow">→</span></a></p>
</div></section>
""" + FOOTER

# ------------------------------------------------------------ STUDIO
studio = head("Studio · LATENT", "Un estudio que dirige y produce, con un producto propio: el talento digital de marca.", "/studio") + NAV + """
<section class="page-head"><div class="wrap">
  <h1><span data-i18n="studio.h1">Un estudio que dirige y produce</span><span class="hd hd-lg" aria-hidden="true"></span></h1>
  <p data-i18n="studio.lead">LATENT es un estudio de dirección creativa con capacidad de producción propia. Trabajamos con marcas de toda Iberoamérica desde Buenos Aires. Y desarrollamos un producto que ninguna productora tiene: el talento digital de marca.</p>
</div></section>

<section class="statement rule"><div class="wrap">
  <p><span data-i18n="studio.q.title"><b>La tecnología es el motor.</b> La dirección es el volante</span><span class="hd" aria-hidden="true"></span></p>
</div></section>

<section style="padding-bottom: clamp(5rem,10vw,9rem)"><div class="wrap grid-2">
  <div></div>
  <div>
    <p class="sec-text" data-i18n="studio.q.text">Dirigimos las herramientas, no al revés. Antes de producir un frame, la pieza ya está diseñada. Es lo que separa a un estudio de un generador.</p>
    <p style="margin-top:2.5rem"><a href="https://www.linkedin.com/in/francobinaghi" target="_blank" rel="noopener" class="link-arrow"><span data-i18n="studio.link">Franco Binaghi en LinkedIn</span><span class="btn-arrow">↗</span></a></p>
  </div>
</div></section>
""" + cta_final() + FOOTER

# ------------------------------------------------------------ CONTACTO
contacto = head("Contacto · LATENT", "Contanos qué necesitás producir. Respondemos en menos de 24 horas hábiles.", "/contacto") + NAV + """
<section class="page-head"><div class="wrap">
  <h1><span data-i18n="contact.h1">Contanos qué necesitás producir</span><span class="hd hd-lg" aria-hidden="true"></span></h1>
  <p data-i18n="contact.lead">Respondemos en menos de 24 horas hábiles. Si preferís, agendamos veinte minutos antes de cotizar.</p>
</div></section>

<section style="padding-bottom: clamp(5rem,10vw,9rem)"><div class="wrap contact-grid">
  <div class="contact-info">
    <div><span class="mono" data-i18n="contact.email">Mail</span><a href="mailto:wearelatentt@gmail.com">wearelatentt@gmail.com</a></div>
    <div><span class="mono" data-i18n="contact.base">Base</span><span data-i18n="contact.base.v">Buenos Aires · Iberoamérica</span></div>
    <div><span class="mono" data-i18n="contact.social">Redes</span><a href="https://instagram.com/wearelatent" target="_blank" rel="noopener">Instagram</a> &nbsp;·&nbsp; <a href="https://linkedin.com/company/wearelatent" target="_blank" rel="noopener">LinkedIn</a></div>
  </div>

  <form class="contact-form" action="https://formspree.io/f/xaqadqdg" method="POST" id="contactForm">
    <input type="hidden" name="_subject" value="Nuevo lead desde wearelatent.com">
    <input type="hidden" name="_next" value="https://wearelatent.com/contacto?sent=true">
    <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
    <div class="form-row">
      <div class="form-group"><label for="name" class="mono"><span data-i18n="form.name">Nombre</span> <span class="req">*</span></label><input type="text" id="name" name="Nombre" required autocomplete="name"></div>
      <div class="form-group"><label for="email" class="mono"><span data-i18n="form.email">Mail</span> <span class="req">*</span></label><input type="email" id="email" name="Email" required autocomplete="email"></div>
    </div>
    <div class="form-group"><label for="company" class="mono"><span data-i18n="form.company">Marca o empresa</span> <span class="req">*</span></label><input type="text" id="company" name="Marca" required autocomplete="organization"></div>
    <div class="form-group"><label for="message" class="mono"><span data-i18n="form.message">Contanos</span> <span class="req">*</span></label><textarea id="message" name="Mensaje" required></textarea></div>
    <label class="form-check"><input type="checkbox" name="Agendar reunión" value="Sí"><span data-i18n="form.check">Prefiero agendar veinte minutos antes de recibir una propuesta.</span></label>
    <button type="submit" class="btn btn-primary form-submit"><span data-i18n="form.submit">Enviar</span><span class="btn-arrow">→</span></button>
    <div class="form-status" id="formStatus" role="status"></div>
  </form>
</div></section>
""" + FOOTER

pages = {
    "index.html": home, "proyectos.html": proyectos, "servicios.html": servicios,
    "talento.html": talento, "studio.html": studio, "contacto.html": contacto,
}
for name, html in pages.items():
    (OUT / name).write_text(html, encoding="utf-8")
    print("ok", name)
