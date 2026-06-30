import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  MessageCircle,
  Video,
  Gift,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Brain,
  Sparkles,
  ShieldCheck,
  Mail,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4GO Academy — Plan Black Friday para Don Guz" },
      { name: "description", content: "Estrategia integral de Black Friday para Don Guz (@donguz17). Presentación exclusiva por 4GO Academy." },
      { property: "og:title", content: "4GO Academy — Plan Black Friday para Don Guz" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[image:var(--gradient-line)]">
        <span className="text-white font-bold text-xs font-display">4GO</span>
      </div>
      <span className="font-display text-lg font-bold tracking-tight hidden sm:block">
        4GO <span className="brand-line">Academy</span>
      </span>
    </a>
  );
}

function BrandLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="bl" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.55 0.25 274)" />
          <stop offset="55%" stopColor="oklch(0.55 0.25 274)" />
          <stop offset="100%" stopColor="oklch(0.69 0.21 35)" />
        </linearGradient>
      </defs>
      <path
        d="M0 40 C 200 0, 350 80, 550 40 S 900 0, 1200 40"
        stroke="url(#bl)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

const stats4go = [
  { v: "100K+", l: "Estudiantes impactados", icon: Users },
  { v: "$12M+", l: "Facturados en ventas digitales", icon: TrendingUp },
  { v: "180+", l: "Lanzamientos desde 2018", icon: Star },
  { v: "Top 5", l: "Mayor facturación Black Friday 2025 — Hotmart", icon: Zap },
];

const services = [
  { n: "01", title: "Estrategia comprobada", desc: "Metodologías validadas con más de 100 clientes en 12 países de LATAM.", icon: ShieldCheck },
  { n: "02", title: "Data-driven", desc: "Decisiones basadas en datos reales, métricas de conversión y ROI medible.", icon: BarChart3 },
  { n: "03", title: "Enfoque humano", desc: "Entendemos la marca personal y la conexión emocional con la audiencia.", icon: Heart },
  { n: "04", title: "Lanzamientos", desc: "Expertos en Black Friday, lanzamientos y campañas de alta conversión.", icon: Target },
];

const contentTypes = [
  { icon: Video, label: "Reels cortos y reflexiones frente a cámara" },
  { icon: MessageCircle, label: "Storytelling personal y testimonios" },
  { icon: Brain, label: "Explicaciones sobre mente, emociones y cuerpo" },
  { icon: Heart, label: "Fragmentos de meditaciones guiadas" },
  { icon: Sparkles, label: "Invitaciones a cursos y programas" },
];

const triggers = ["Autoridad", "Transformación", "Curiosidad", "Esperanza", "Identificación", "Prueba social", "Comunidad", "Dolor > Solución"];

const hooks = [
  '"¿Sabías que...?"',
  '"La mayoría de las personas..."',
  '"Lo que nadie te explicó..."',
  '"Si quieres cambiar tu vida..."',
  '"Esto está enfermando tu cuerpo..."',
];

const channels = [
  { channel: "Instagram Reels", pct: 40, desc: "Contenido viral de alto impacto emocional con CTA directo" },
  { channel: "Stories + Stickers", pct: 25, desc: "Urgencia diaria, countdown, encuestas, testimonios en tiempo real" },
  { channel: "Email Marketing", pct: 20, desc: "Secuencia de 7 emails: anticipación, apertura, recordatorios, cierre" },
  { channel: "WhatsApp Broadcast", pct: 10, desc: "Mensajes directos a lista segmentada de leads calificados" },
  { channel: "Lives / Webinar", pct: 5, desc: "Masterclass gratuita pre-BF con pitch al final" },
];

const timeline = [
  {
    phase: "Semana 1–2",
    tag: "Conciencia",
    title: "Despertar el dolor y el deseo",
    desc: "Contenido enfocado en hacer que la audiencia identifique sus problemas emocionales y físicos.",
    items: [
      'Reels: "5 señales de que tu cuerpo te está pidiendo ayuda"',
      "Stories: Encuestas sobre hábitos de bienestar y meditación",
      "Carruseles educativos sobre neurociencia y emociones",
      "Testimonios de alumnos transformados (video corto)",
      "Live semanal: Q&A sobre sanación emocional",
    ],
  },
  {
    phase: "Semana 3",
    tag: "Anticipación",
    title: "Anunciar que algo grande viene",
    desc: "Crear curiosidad y registros para lista VIP con acceso anticipado.",
    items: [
      '"Algo grande está por llegar..." — teaser en reels y stories',
      "Formulario de registro para lista de espera VIP",
      "Countdown en stories (faltan X días)",
      "Behind the scenes: preparando el programa especial",
      "Email de anticipación a base de datos existente",
    ],
  },
  {
    phase: "Semana 4",
    tag: "Pre-lanzamiento",
    title: "Abrir carrito para VIPs",
    desc: "Acceso anticipado exclusivo para la lista VIP con bonus extra.",
    items: [
      "Apertura exclusiva 24h antes para lista VIP",
      "Bonus adicional solo para primeros 50 compradores",
      "Email secuencia de apertura: historia + oferta + urgencia",
      "Stories: capturas de ventas en tiempo real (prueba social)",
      "Reel emotivo: Por qué creé este programa especial",
    ],
  },
  {
    phase: "Semana 5",
    tag: "Black Friday",
    title: "Lanzamiento público masivo",
    desc: "Máxima presión de ventas con urgencia real y cierre automático.",
    items: [
      "Apertura general con countdown de 7 días",
      "1 reel diario con ángulos diferentes (dolor, transformación, testimonios, urgencia)",
      "3–5 stories diarios: FAQ, objeciones, prueba social, countdown",
      "Email diario: recordatorio + nuevo ángulo + cierre",
      "Live de cierre: últimas horas con Q&A en vivo",
      "WhatsApp broadcast a leads calificados",
    ],
  },
  {
    phase: "Semana 6",
    tag: "Post-venta",
    title: "Recuperación y fidelización",
    desc: "Maximizar ingresos con carritos abandonados y crear embajadores.",
    items: [
      "Secuencia de recuperación de carritos abandonados (email + DM)",
      '"Last Chance" de 48h para indecisos',
      "Onboarding excepcional para nuevos alumnos",
      "Solicitar testimonios y reviews tempranos",
      "Planificar upsell para enero (siguiente programa)",
    ],
  },
];

const projections = [
  { value: "462K", label: "Seguidores actuales", sub: "Base de audiencia cálida" },
  { value: "2–4%", label: "Tasa de conversión estimada", sub: "De leads a compradores" },
  { value: "3–5x", label: "ROI esperado", sub: "Retorno sobre inversión" },
  { value: "7 días", label: "Ventana de ventas", sub: "Black Friday + Cyber Monday" },
];

const reasons = [
  "Experiencia comprobada lanzando Black Fridays para creadores de contenido en LATAM",
  "Equipo dedicado de estrategia, copywriting, diseño y media buying",
  "Metodología de lanzamiento validada con más de $12M en ventas digitales",
  "Entendemos el nicho de bienestar, desarrollo personal y educación online",
  "Soporte en tiempo real durante toda la campaña de Black Friday",
  "Equipo de ventas dedicado para maximizar la conversión de leads",
  "Análisis post-campaña con insights accionables para futuras ventas",
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#nosotros" className="hover:text-foreground transition">Nosotros</a>
            <a href="#analisis" className="hover:text-foreground transition">Análisis</a>
            <a href="#estrategia" className="hover:text-foreground transition">Método</a>
            <a href="#resultados" className="hover:text-foreground transition">Resultados</a>
            <a href="#contacto" className="hover:text-foreground transition">Contacto</a>
          </nav>
          <a href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition">
            Contactar
            <span aria-hidden>
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-primary mb-16">
          <span>Presentación exclusiva · 2026</span>
          <span className="text-muted-foreground hidden sm:inline">4GO Academy · Agencia Digital</span>
        </div>

        <h1 className="font-display font-bold text-balance text-[clamp(2.75rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em]">
          Plan de{" "}
          <span className="brand-line">Black Friday</span>
          <br />
          <span className="text-muted-foreground/70">para Don Guz.</span>
        </h1>

        <div className="mt-10 -mx-2">
          <BrandLine className="w-full h-16 md:h-20" />
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="font-display text-2xl md:text-3xl tracking-tight max-w-xl">
            La mayor temporada comercial del año merece la mejor estrategia.
          </p>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Una propuesta diseñada por 4GO Academy, una de las mayores agencias digitales
            de América Latina, para maximizar tus resultados este Black Friday.
          </p>
        </div>

        <div className="mt-12">
          <a href="https://form.fillout.com/t/uqdFLgKjN7us"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-accent text-white px-10 py-5 text-lg font-bold hover:opacity-90 transition-all shadow-[0_8px_30px_-4px_oklch(0.69_0.21_35/0.4)]">
            <ArrowRight className="w-5 h-5" />
            Llenar el formulario para Black Friday
          </a>
        </div>
      </section>

      {/* STATS 4GO */}
      <section id="nosotros" className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats4go.map((s) => (
            <div key={s.l} className="py-10 px-4 first:pl-0">
              <s.icon className="w-5 h-5 text-primary mb-3" />
              <div className="font-display text-4xl md:text-5xl font-bold tracking-tight">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">
              Quiénes somos
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-2xl">
              Una de las mayores agencias digitales de <span className="brand-line">América Latina.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Fernando, Daniel y Gabi — tres fundadores brasileños que crearon un
            ecosistema digital que transformó las estrategias de toda América Latina.
            Pioneros en cruzar la frontera del portugués para apostar por el mercado
            hispanohablante, donde hoy lideran lanzamientos en más de 12 países.
          </p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-16">
          {[
            { name: "Fernando Gemeo", role: "Co-fundador & Estrategia", img: "/founders/fernando.jpg" },
            { name: "Gabi", role: "Co-fundadora & Operaciones", img: "/founders/gabi.jpg" },
            { name: "Daniel Gemeo", role: "Co-fundador & Growth", img: "/founders/daniel.jpg" },
          ].map((f) => (
            <div key={f.name} className="text-center">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-secondary">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-display font-bold text-lg tracking-tight">{f.name}</h3>
              <p className="text-sm text-muted-foreground">{f.role}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-foreground/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold tracking-tight mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="text-center mb-16">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
              Portafolio
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Lanzamientos realizados
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {[
              { name: "Carolina Smart Pro", ig: "@smartproacademy", img: "/partners/carolina.jpg" },
              { name: "Praxis", ig: "@praxisstudio.co", img: "/partners/praxis.jpg" },
              { name: "Lucho", ig: "@luchoorozcoconsultor", img: "/partners/lucho.jpg" },
              { name: "Inge Francisco", ig: "@elingefrancisco", img: "/partners/inge.jpg" },
              { name: "Ruben Dias", ig: "@espanhol_pro", img: "/partners/ruben.jpg" },
              { name: "Marina Viabone", ig: "@marinaviabone", img: "/partners/marina.jpg" },
              { name: "Eduardo Ronchetti", ig: "@eduardo_ronchetti", img: "/partners/eduardo.jpg" },
              { name: "Mika Serur", ig: "@mikaserur", img: "/partners/mika.jpg" },
              { name: "Baby Nutri", ig: "@babyNutri", img: "/partners/baby.jpg" },
              { name: "Vencendo Enxaqueca", ig: "@vencendoaenxaqueca", img: "/partners/enxaqueca.jpg" },
              { name: "Maykon Mello", ig: "@omaykowmelo", img: "/partners/maykon.jpg" },
              { name: "4GO Academy", ig: "@4goacademy", img: "/partners/4go.svg" },
            ].map((p) => (
              <div key={p.ig} className="text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-2 border-background/20 mb-4">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-bold text-sm md:text-base">{p.name}</h3>
                <p className="text-background/40 text-xs mt-1">{p.ig}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE DON GUZ */}
      <section id="analisis" className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="flex items-center gap-8">
              <img
                src="/founders/donguz.png"
                alt="Don Guz"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-accent shadow-lg shrink-0"
              />
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                  Por qué Don Guz
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-2xl">
                  Lo que vimos en ti desde el <span className="brand-line">primer momento.</span>
                </h2>
              </div>
            </div>
            <p className="text-background/50 max-w-sm leading-relaxed">
              No elegimos socios por números. Elegimos personas que viven lo que
              enseñan. Guz, eso es exactamente lo que vimos en ti.
            </p>
          </div>

          {/* Profile quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-background/10 border border-background/10 rounded-2xl mb-16">
            {[
              { v: "462K", l: "Seguidores en Instagram" },
              { v: "2.1K+", l: "Publicaciones" },
              { v: "1K+", l: "Alumnos en vivo conectados" },
              { v: "@donguz17", l: "Instagram", href: "https://www.instagram.com/donguz17/" },
            ].map((s) => (
              <div key={s.l} className="py-8 px-5 text-center">
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-display text-2xl md:text-3xl font-bold hover:text-accent transition-colors">{s.v}</a>
                ) : (
                  <div className="font-display text-2xl md:text-3xl font-bold">{s.v}</div>
                )}
                <div className="mt-2 text-xs uppercase tracking-widest text-background/40">{s.l}</div>
              </div>
            ))}
          </div>

          {/* 5 razones - layout sequencial limpo */}
          <ol className="space-y-px">
            {[
              {
                n: "01",
                title: "Un avatar transformado",
                highlight: "Guz vive lo que enseña.",
                body: "Vivió en Suiza, aprendió su metodología directamente de maestros americanos. Leyó, estudió, pero sobre todo — lo vivió en carne propia. Y hay algo que nos tocó profundamente: la historia de su abuela. Guz no comenzó este camino para vender nada. Comenzó porque quería sanarla. Quería transformar el mundo, empezando por la persona que más amaba. Ese nivel de humanidad no se fabrica.",
              },
              {
                n: "02",
                title: "Hubo un match real",
                highlight: "Conexión genuina desde el primer momento.",
                body: "En nuestra conversación, Guz nos miró a los ojos. Su lenguaje corporal se mostró abierto, genuino, listo para nuevas alianzas. Nosotros sentimos lo mismo. Fue una conexión real — de valores, de visión, de propósito. No siempre pasa. Con Guz, pasó.",
              },
              {
                n: "03",
                title: "Comunidad que vive la transformación",
                highlight: "1.000+ alumnos conectados en una sola live.",
                body: "Eso no se logra con marketing. Se logra con una metodología que realmente transforma vidas. La prueba social de Don Guz es real, masiva y orgánica. Su comunidad no solo consume contenido — la vive.",
              },
              {
                n: "04",
                title: "Un comunicador excepcional",
                highlight: "Postura, alma y verdad.",
                body: "Guz mira a los ojos cuando habla. Transmite verdad. Es de esas personas que no necesitan gritar para que todo el mundo quiera escuchar. Su presencia habla antes que sus palabras. Eso es un diferencial imposible de copiar.",
              },
              {
                n: "05",
                title: "Valores alineados con los nuestros",
                highlight: '"No buscamos clientes. Buscamos aliados."',
                body: "Lo que más nos importa al elegir con quién trabajar es la alineación de valores. Guz nos transmitió una impresión verdadera, honesta, humana. Sus valores son muy parecidos a los nuestros. Por eso estamos aquí.",
              },
            ].map((item, i) => (
              <li key={item.n} className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 py-10 border-t border-background/15 first:border-t-0">
                <div className="pt-1">
                  <span className="font-display text-4xl md:text-5xl font-bold text-accent/30">{item.n}</span>
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="brand-line font-display font-semibold text-lg mb-4">
                    {item.highlight}
                  </p>
                  <p className="text-background/55 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* METODO BLACK 4GO */}
      <section id="estrategia" className="bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                Nuestra metodología
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance">
                Método Black <span className="brand-line">4GO</span>
              </h2>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                Cinco pilares que transforman cualquier Black Friday en un evento
                histórico de ventas. Validado con más de 180 lanzamientos y $12M+ facturados.
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                No es solo una campaña de descuentos. Es un sistema completo que prepara
                tu audiencia, construye deseo, y convierte seguidores en compradores —
                con una experiencia que los transforma en embajadores de tu marca.
              </p>
            </div>
          </div>

          <ol className="space-y-px">
            {[
              {
                n: "01",
                title: "Claridad",
                highlight: "Saber exactamente qué vender, a quién y por qué.",
                body: "Definimos tu oferta core, el precio ideal, los bonos que multiplican el valor percibido y el mensaje que conecta con el dolor real de tu audiencia. Sin claridad, no hay conversión. Con claridad, cada acción tiene propósito.",
              },
              {
                n: "02",
                title: "Audiencia",
                highlight: "Construir y calentar la base antes de vender.",
                body: "Segmentamos tu comunidad, creamos listas VIP, activamos leads fríos y construimos una base de datos calificada. Tu audiencia de 462K seguidores es oro — pero solo si está preparada para comprar cuando llegue el momento.",
              },
              {
                n: "03",
                title: "Anticipación",
                highlight: "Crear deseo antes de abrir el carrito.",
                body: "Semanas antes del Black Friday, tu audiencia ya sabe que algo grande viene. Teasers, countdowns, behind the scenes, lista de espera — cuando la oferta se abre, la gente ya está lista para comprar. La venta se cierra antes de empezar.",
              },
              {
                n: "04",
                title: "Oferta Irresistible",
                highlight: "Una propuesta que sería irracional rechazar.",
                body: "Precio especial + bonos exclusivos + escasez real + garantía de transformación. Cada elemento está diseñado para eliminar objeciones y multiplicar el valor percibido. No es un descuento — es una oportunidad única.",
              },
              {
                n: "05",
                title: "Movimiento",
                highlight: "Una narrativa que lo cambia todo.",
                body: "Tu audiencia tiene que sentir que algo diferente está pasando: colores nuevos, ángulos distintos, una energía que nunca vieron antes. El Movimiento es una Big Idea — una narrativa central que amarra toda la campaña, desde el contenido hasta la oferta. Como el 'Plano Perfeito' de Primo Rico, creamos un concepto único para Don Guz que transforma la Black Friday en un evento con identidad propia. No es solo una promoción — es un momento que tu audiencia va a recordar.",
              },
            ].map((item) => (
              <li key={item.n} className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 py-10 border-t border-border first:border-t-0">
                <div className="pt-1">
                  <span className="font-display text-5xl md:text-6xl font-bold text-primary/15">{item.n}</span>
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="brand-line font-display font-semibold text-lg md:text-xl mb-5">
                    {item.highlight}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-4">
              Proyección de resultados
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-2xl">
              Lo que puedes <span className="brand-line">esperar.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Un ejemplo basado en nuestra experiencia. Los números finales dependen
            del precio del lead y el nivel de inversión.
          </p>
        </div>

        {/* Example scenario */}
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 mb-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="font-display text-5xl md:text-6xl font-bold tracking-tight brand-line">20.000</div>
              <div className="mt-2 text-sm font-medium">Leads captados</div>
              <div className="mt-1 text-xs text-muted-foreground">Base estimada para la campaña</div>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block" />
              <div className="md:hidden w-full h-px bg-border" />
            </div>
            <div className="text-center md:text-left">
              <div className="font-display text-5xl md:text-6xl font-bold tracking-tight brand-line">1.000–2.000</div>
              <div className="mt-2 text-sm font-medium">Ventas estimadas</div>
              <div className="mt-1 text-xs text-muted-foreground">Conversión del 5% al 10% sobre leads</div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Los resultados finales dependen de dos variables principales: el costo por lead
              (que varía según el nicho y la plataforma) y el monto total de inversión en medios.
              Estos números son un escenario conservador basado en campañas similares que hemos ejecutado.
            </p>
          </div>
        </div>

        {/* Why 4GO */}
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8">
            Por qué trabajar con <span className="brand-line">4GO Academy</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELO DE NEGOCIO */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                Modelo de negocio
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Piel en el <span className="brand-line">juego.</span>
              </h2>
              <p className="mt-6 text-background/50 max-w-md leading-relaxed">
                No somos una agencia que cobra y se va. Entramos en el riesgo
                contigo porque creemos en el proyecto.
              </p>
            </div>

            <div className="lg:col-span-7">
              {/* 50/50 visual */}
              <div className="rounded-2xl border border-background/15 p-8 md:p-10 mb-8">
                <div className="grid grid-cols-2 gap-px bg-background/10 rounded-xl overflow-hidden mb-8">
                  <div className="bg-foreground p-8 text-center">
                    <div className="font-display text-5xl md:text-6xl font-bold text-accent">50%</div>
                    <div className="mt-2 font-display font-bold text-lg">4GO Academy</div>
                  </div>
                  <div className="bg-foreground p-8 text-center">
                    <div className="font-display text-5xl md:text-6xl font-bold brand-line">50%</div>
                    <div className="mt-2 font-display font-bold text-lg">Don Guz</div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Inversión compartida: cada parte invierte 50% en medios y producción",
                    "Gastos compartidos: todos los gastos del lanzamiento se dividen por igual",
                    "Ganancias compartidas: los beneficios también se reparten 50/50",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-background/70">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACTO */}
      <section id="contacto" className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-10 md:p-16 lg:p-20">
          <div className="absolute inset-x-0 bottom-0 opacity-80">
            <BrandLine className="w-full h-24" />
          </div>

          <div className="relative max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-6">
              Siguiente paso
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-balance">
              Hagamos tu mayor <span className="brand-line">Black Friday</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl text-lg leading-relaxed">
              Agenda una reunión con nuestro equipo para personalizar esta estrategia
              y comenzar a preparar tu campaña.
            </p>

            <div className="mt-10">
              <a
                href="https://form.fillout.com/t/uqdFLgKjN7us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-accent text-white px-10 py-5 text-lg font-bold hover:opacity-90 transition-all shadow-[0_8px_30px_-4px_oklch(0.69_0.21_35/0.4)]"
              >
                <ArrowRight className="w-5 h-5" />
                Llenar el formulario para Black Friday
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Logo />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground hidden md:inline">
              Siempre adelante · 2026
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; 2026 4GO Academy. Presentación exclusiva y confidencial para Don Guz.
          </p>
        </div>
      </footer>
    </div>
  );
}
