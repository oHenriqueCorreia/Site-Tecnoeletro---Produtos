import { assetUrl } from "@/lib/asset-url";
import { useEffect, useState } from "react";
import {
  Scale,
  Droplets,
  ScanEye,
  Bot,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Cog,
  Gauge,
  Sparkles,
  TrendingUp,
  X,
  MessageCircle,
} from "lucide-react";


import prodBalanca from "@/assets/prod-balanca.png";
import prodSensor from "@/assets/prod-sensor.png";
import prodVisao from "@/assets/prod-visao.png";
import prodRobo from "@/assets/prod-robo.png";
import tecnoeletroLogo from "@/assets/tecnoeletro-logo.png";
import heroFacade from "@/assets/tecnoeletro-facade.jpg";
import galBalanca01 from "@/assets/gallery/balanca-01.jpg";
import galBalanca03 from "@/assets/gallery/balanca-03.jpg";
import galBalanca04 from "@/assets/gallery/balanca-04.jpg";
import galRobo02 from "@/assets/gallery/robo-02.jpg";
import galRobo03 from "@/assets/gallery/robo-03.jpg";
import galSensor01 from "@/assets/gallery/sensor-01.jpg";
import cliAnjo from "@/assets/clients/anjo.png";
import cliAmboni from "@/assets/clients/amboni.png";
import cliAmformaturas from "@/assets/clients/amformaturas.png";
import cliArrozcelia from "@/assets/clients/arrozcelia.png";
import cliDalon from "@/assets/clients/dalon.png";
import cliRampinelli from "@/assets/clients/rampinelli.png";
import cliSicredi from "@/assets/clients/sicredi.png";
import cliCooperja from "@/assets/clients/cooperja.png";
import cliBenoit from "@/assets/clients/benoit.png";
import cliBistek from "@/assets/clients/bistek.png";
import cliBrasquil from "@/assets/clients/brasquil.png";
import cliCentershoping from "@/assets/clients/centershoping.png";
import cliRealengo from "@/assets/clients/realengo.png";
import cliFarben from "@/assets/clients/farben.png";
import cliSantacatarina from "@/assets/clients/santacatarina.png";
import cliManentti from "@/assets/clients/manentti.png";
import cliMatiola from "@/assets/clients/matiola.png";
import cliSicob from "@/assets/clients/sicob.png";
import cliMetalenge from "@/assets/clients/metalenge.png";
import cliPanelaco from "@/assets/clients/panelaco.png";


type Product = {
  id: string;
  name: string;
  tagline: string;
  icon: typeof Scale;
  image: string;
  differentials: string[];
  performance: string[];
  smartOperation: string;
  result: string;
};

const products: Product[] = [
  {
    id: "balanca",
    name: "Balança de fluxo",
    tagline: "Medição contínua com precisão e controle em tempo real",
    icon: Scale,
    image: prodBalanca,
    differentials: [
      "Ideal para automação de processos",
      "Monitoramento contínuo do fluxo",
      "Alta precisão na pesagem",
    ],
    performance: [
      "Até 40 toneladas por hora",
      "Operação contínua e automatizada",
      "Controle eficiente de entrada e saída",
    ],
    smartOperation:
      "Pesagem automática com controle, garantindo exatidão e repetibilidade.",
    result:
      "Aquisição de dados em tempo real para aumentar a produtividade, reduzir perdas, aprimorar a tomada de decisões e ampliar o controle operacional.",
  },
  {
    id: "sensor",
    name: "Sensor de umidade",
    tagline: "Medição contínua de umidade e temperatura em grãos",
    icon: Droplets,
    image: prodSensor,
    differentials: [
      "Monitoramento contínuo",
      "Alta precisão nas medições",
      "Preservação da qualidade dos grãos",
      "Integração com sistemas de gestão",
    ],
    performance: [
      "Leitura contínua e automatizada",
      "Controle do fluxo de material",
      "Medição simultânea de umidade e temperatura",
    ],
    smartOperation:
      "Sistema com fluxo controlado por helicoide, garantindo distribuição uniforme dos grãos e maior precisão na leitura.",
    result:
      "Mais controle da qualidade, redução de perdas e decisões mais assertivas no armazenamento.",
  },
  {
    id: "visao",
    name: "Sistema de visão",
    tagline: "Inspeção inteligente com precisão e controle em tempo real",
    icon: ScanEye,
    image: prodVisao,
    differentials: [
      "Inspeção automática",
      "Alta precisão na detecção de falhas",
      "Padronização do controle de qualidade",
      "Redução de erros operacionais",
    ],
    performance: [
      "Processamento em tempo real",
      "Alta velocidade de análise",
      "Identificação de padrões e defeitos",
      "Integração com sistemas industriais",
    ],
    smartOperation:
      "Captura e análise de imagens com algoritmos avançados, garantindo detecção rápida, confiável e repetível.",
    result:
      "Mais qualidade, menos retrabalho e maior eficiência produtiva.",
  },
  {
    id: "robo",
    name: "Robô industrial",
    tagline: "Automação inteligente com alta precisão, velocidade e flexibilidade",
    icon: Bot,
    image: prodRobo,
    differentials: [
      "Alta precisão no controle de movimento",
      "Estrutura compacta e instalação flexível",
      "Operação intuitiva e fácil integração",
      "Aplicação em diversos processos industriais",
    ],
    performance: [
      "Alto desempenho e ciclos rápidos",
      "Alta repetibilidade e eficiência",
      "Múltiplas interfaces de comunicação",
      "Operação contínua e confiável",
    ],
    smartOperation:
      "Sistema com detecção de colisão e rastreamento dinâmico, garantindo segurança, adaptação e precisão nas aplicações.",
    result:
      "Mais produtividade, padronização e redução de custos operacionais.",
  },
];

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Challenges />
      <Highlights />
      <ProductsList />
      <Gallery />
      <Sectors />
      <Clients />
      <CTASection />
      <ContactForm />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center group" aria-label="Tecnoeletro Início">
          <img
            src={tecnoeletroLogo}
            alt="Tecnoeletro"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#produtos" className="text-sm font-medium text-muted-foreground transition hover:text-primary">
            Produtos
          </a>
          <a href="#diferenciais" className="text-sm font-medium text-muted-foreground transition hover:text-primary">
            Diferenciais
          </a>
          <a href="#galeria" className="text-sm font-medium text-muted-foreground transition hover:text-primary">
            Galeria
          </a>
          <a href="#setores" className="text-sm font-medium text-muted-foreground transition hover:text-primary">
            Setores
          </a>
          <a href="#clientes" className="text-sm font-medium text-muted-foreground transition hover:text-primary">
            Clientes
          </a>
          <a href="#formulario" className="text-sm font-medium text-muted-foreground transition hover:text-primary">
            Contato
          </a>
        </nav>
        <a
          href="https://wa.me/5548988131813"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
        >
          Solicitar orçamento
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <img
        src={heroFacade}
        alt="Sede Tecnoeletro"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/65 to-primary/85" />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 text-center lg:pt-32 lg:pb-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Nossos produtos
        </div>
        <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
          Transforme sua empresa com <span className="text-white/90 underline decoration-white/40 decoration-2 underline-offset-8">automação inteligente</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
          Oferecemos soluções industriais completas para automação e controle de processos.
          Nossos equipamentos são desenvolvidos para garantir precisão, eficiência operacional e
          confiabilidade, atendendo às demandas da indústria moderna.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#produtos"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-glow transition hover:bg-white/90"
          >
            Conhecer produtos
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/5548988131813"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Falar com engenheiro
          </a>
        </div>
      </div>
    </section>
  );
}


function Challenges() {
  const challenges = [
    "Falta de monitoramento em tempo real",
    "Perdas operacionais e retrabalho",
    "Baixa padronização de qualidade",
    "Processos pouco automatizados",
  ];
  const solutions = [
    "Monitoramento em tempo real",
    "Automação de processos críticos",
    "Controle de qualidade automatizado",
    "Integração com sistemas industriais",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Desafios da indústria atual
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Processos que exigem <span className="text-primary">precisão e controle</span>
          </h2>
          <ul className="mt-6 space-y-3">
            {challenges.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Nossas soluções
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Automação que <span className="text-primary">gera resultado</span>
          </h2>
          <ul className="mt-6 space-y-3">
            {solutions.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: Cog, label: "Engenharia própria", desc: "Projeto, fabricação e integração feitos in-house." },
    { icon: ShieldCheck, label: "Confiabilidade industrial", desc: "Produtos validados em campo há mais de 20 anos." },
    { icon: Zap, label: "Suporte especializado", desc: "Time técnico dedicado do PoC ao pós-venda." },
  ];
  return (
    <section id="diferenciais" className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
        {items.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary shadow-glow">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display text-lg font-semibold text-foreground">{label}</div>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductsList() {
  return (
    <section id="produtos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Linha de produtos
        </span>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Quatro soluções, uma <span className="text-primary">indústria mais inteligente</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Cada produto é desenhado para se integrar ao seu processo produtivo — do sensor no campo
          ao controle da linha de produção.
        </p>
      </div>

      <div className="mt-16 space-y-24">
        {products.map((product, idx) => {
          const Icon = product.icon;
          const reverse = idx % 2 === 1;
          return (
            <article
              key={product.id}
              id={product.id}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              <div className={reverse ? "lg:order-2" : ""}>
                <div className="relative">
                  <div className="absolute -inset-2 rounded-3xl bg-primary/10 blur-2xl" />
                  <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card min-h-[380px] lg:min-h-[460px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="max-h-[460px] w-auto max-w-full object-contain transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
              <div className={reverse ? "lg:order-1" : ""}>
                <div className="inline-flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-glow">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-primary">{product.tagline}</span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {product.name}
                </h3>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                      <Sparkles className="h-4 w-4" />
                      Diferenciais
                    </div>
                    <ul className="mt-3 space-y-2">
                      {product.differentials.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                      <Gauge className="h-4 w-4" />
                      Desempenho
                    </div>
                    <ul className="mt-3 space-y-2">
                      {product.performance.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    <Cog className="h-4 w-4" />
                    Operação inteligente
                  </div>
                  <p className="mt-2 text-sm text-foreground">{product.smartOperation}</p>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                  <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Resultado para sua operação
                    </div>
                    <p className="mt-1 text-sm text-foreground">{product.result}</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/5548988131813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-80"
                >
                  Solicitar informações
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Gallery() {
  const photos = [
    { src: galBalanca01, alt: "Balança de fluxo em fabricação na Tecnoeletro", label: "Balança de fluxo — Fabricação" },
    { src: galSensor01, alt: "Sensor de umidade instalado em linha industrial", label: "Sensor de umidade em linha" },
    { src: galRobo02, alt: "Robô industrial Inovance com sistema de visão e sensor óptico", label: "Robô industrial + Visão" },
    { src: galRobo03, alt: "Sistema de visão e robô industrial em demonstração na feira", label: "Demonstração na feira" },
    { src: galBalanca04, alt: "Balança de fluxo em exposição durante o dia na feira", label: "Balança de fluxo — Exposição" },
    { src: galBalanca03, alt: "Estande Tecnoeletro na feira industrial", label: "Estande Tecnoeletro" },
  ];
  // Duplicate list for seamless infinite marquee
  const loop = [...photos, ...photos];

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isOpen = openIdx !== null;
  const current = isOpen ? photos[openIdx! % photos.length] : null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpenIdx((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, photos.length]);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            Galeria
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Nossos produtos <span className="text-primary">em ação</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Imagens reais da nossa fábrica, feiras e instalações.
          </p>
        </div>
      </div>

      <div
        className="group/marquee relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max gap-5 px-6 animate-[marquee_45s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpenIdx(i % photos.length)}
              className="group relative h-[280px] w-[380px] md:h-[340px] md:w-[460px] shrink-0 overflow-hidden rounded-2xl border border-border shadow-card focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Ampliar imagem: ${p.label}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {p.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setOpenIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIdx(null); }}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIdx((openIdx! - 1 + photos.length) % photos.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
            aria-label="Anterior"
          >
            <ArrowRight className="h-6 w-6 rotate-180" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIdx((openIdx! + 1) % photos.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
            aria-label="Próxima"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
          <figure className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={current.src}
              alt={current.alt}
              className="mx-auto max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {current.label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function Clients() {
  const clients = [
    { name: "Anjo Tintas", src: cliAnjo },
    { name: "Amboni Alimentos", src: cliAmboni },
    { name: "AM Formaturas", src: cliAmformaturas },
    { name: "Arroz Célia", src: cliArrozcelia },
    { name: "Dalon Alimentos", src: cliDalon },
    { name: "Rampinelli Alimentos", src: cliRampinelli },
    { name: "Sicredi", src: cliSicredi },
    { name: "Cooperja", src: cliCooperja },
    { name: "Lojas Benoit", src: cliBenoit },
    { name: "Bistek Supermercados", src: cliBistek },
    { name: "Brasquil Química Maragno", src: cliBrasquil },
    { name: "Center Shopping", src: cliCentershoping },
    { name: "Arroz Realengo", src: cliRealengo },
    { name: "Farben Tintas", src: cliFarben },
    { name: "Cervejaria Santa Catarina", src: cliSantacatarina },
    { name: "Supermercados Manentti", src: cliManentti },
    { name: "Matiola Alimentos", src: cliMatiola },
    { name: "Sicoob Credija", src: cliSicob },
    { name: "Metalenge Construções Industrializadas", src: cliMetalenge },
    { name: "Arroz Panelaço", src: cliPanelaco },
  ];
  return (
    <section id="clientes" className="border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Clientes
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Empresas que <span className="text-primary">confiam em nós</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex aspect-square items-center justify-center rounded-2xl md:rounded-3xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-md"
            >
              <img
                src={c.src}
                alt={`Logotipo ${c.name} — Cliente Tecnoeletro`}
                loading="lazy"
                className="max-h-full max-w-full object-contain transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sectors() {
  const sectors = [
    "Agronegócio",
    "Indústria",
    "Armazenagem e logística",
    "Linhas de produção industrial",
    "Controle de qualidade",
  ];
  return (
    <section id="setores" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Onde atuamos
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Setores atendidos pelas <span className="text-primary">nossas soluções</span>
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {sectors.map((s) => (
            <span
              key={s}
              className="rounded-full border border-primary/20 bg-card px-5 py-2.5 text-sm font-medium text-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-secondary/60 p-10 md:p-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, oklch(0.42 0.16 258 / 0.12) 0%, transparent 45%), radial-gradient(circle at 85% 80%, oklch(0.42 0.16 258 / 0.10) 0%, transparent 45%)",
          }}
        />
        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Vamos <span className="text-primary">transformar</span> sua operação?
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Conte para nossos engenheiros o desafio da sua indústria. Retornamos com uma proposta
              técnica sob medida.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground">
              <li>
                <span className="font-semibold text-primary">WhatsApp:</span>{" "}
                <a href="https://wa.me/5548988131813" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                  (48) 98813-1813
                </a>
              </li>
              <li>
                <span className="font-semibold text-primary">Site:</span>{" "}
                <a href="https://www.tecnoeletro.com" className="hover:opacity-80">
                  www.tecnoeletro.com
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="https://wa.me/5548988131813"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-90"
            >
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


function ContactForm() {
  useEffect(() => {
    const scriptId = "trafegon-form-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://api.trafegon.com.br/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="formulario" className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Fale Conosco
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Entre em <span className="text-primary">contato</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Preencha o formulário e nossa equipe retornará com uma proposta técnica sob medida para o seu negócio.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm" style={{ minHeight: 600 }}>
          <iframe
            src="https://api.trafegon.com.br/widget/form/qV198tU7ftsScA1rFuil"
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "12px", minHeight: 600 }}
            id="inline-qV198tU7ftsScA1rFuil"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Formulário landing page"
            data-height="undefined"
            data-layout-iframe-id="inline-qV198tU7ftsScA1rFuil"
            data-form-id="qV198tU7ftsScA1rFuil"
            title="Formulário landing page"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-card/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <a href="/" className="flex items-center" aria-label="Tecnoeletro Início">
            <img
              src={tecnoeletroLogo}
              alt="Tecnoeletro"
              className="h-10 w-auto object-contain"
            />
          </a>
          <p className="text-xs text-muted-foreground max-w-sm text-center md:text-left">
            Soluções inteligentes em engenharia, automação e controle para a indústria.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1.5 text-center md:items-end md:text-right">
          <p>© {new Date().getFullYear()} Tecnoeletro — Soluções em Engenharia, Automação e Energia.</p>
          <p className="text-xs text-muted-foreground">
            Turvo - SC | WhatsApp: (48) 98813-1813
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/5548988131813?text=Ol%C3%A1%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20e%20servi%C3%A7os%2C%20consegue%20me%20ajudar%3F"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:bottom-7 md:right-7"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
