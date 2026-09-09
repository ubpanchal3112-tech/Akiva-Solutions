import {
  Users,
  TrendingUp,
  Settings2,
  Home,
  Building2,
  Briefcase,
  Sprout,
} from "lucide-react";
import heroArt from "@/assets/hero-abstract.jpg";
import { Reveal } from "./Reveal";
import {
  CTAButton,
  FlowStrip,
  Pill,
  Section,
  SectionHeading,
  CONTACT_URL,
  SOLUTIONS_URL,
} from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 size-[36rem] rounded-full bg-sand/80 blur-3xl"
      />
      <div className="container-editorial relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-evergreen">
              People · Growth · Operations
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 text-4xl leading-[1.02] font-extrabold text-forest sm:text-5xl lg:text-6xl">
              The people behind
              <span className="block text-evergreen">your next stage of growth.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Akiva Solutions helps Australian businesses build capable teams,
              generate qualified opportunities and operate more efficiently —
              without the overhead of building everything in-house.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CTAButton href={CONTACT_URL}>Let's Talk</CTAButton>
              <CTAButton href={SOLUTIONS_URL} variant="outline">
                Explore Solutions
              </CTAButton>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-14 grid max-w-lg gap-6 border-t border-forest/12 pt-8 sm:grid-cols-3">
              {[
                ["Staffing", "Dedicated professionals in your workflow"],
                ["Lead Generation", "Qualified conversations, not vanity metrics"],
                ["Digital Marketing", "Capability without the full-time overhead"],
              ].map(([term, desc]) => (
                <div key={term}>
                  <dt className="text-sm font-bold text-forest">{term}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-forest/10 bg-warm-white shadow-lift">
            <img
              src={heroArt}
              alt="Abstract mark of two forms converging and rising, representing partnership and growth"
              width={1280}
              height={1280}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-forest/10 bg-forest px-6 py-5 shadow-lift sm:left-10 sm:right-auto sm:max-w-xs">
            <p className="text-sm leading-relaxed text-sand/90">
              An extension of your business — Australian business understanding,
              global delivery capability.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const INDUSTRIES = [
  {
    icon: Home,
    title: "Mortgage & Finance",
    body: "Specialised staffing, operational support, lead generation and digital marketing for mortgage broking businesses — from solo brokers to growing brokerages.",
    tags: ["Broker assistants", "Loan processing support", "CRM & follow-up", "Lead generation"],
    feature: true,
  },
  {
    icon: Building2,
    title: "Real Estate",
    body: "Back-office, administration, lead generation and marketing support for agencies and property teams.",
    tags: ["Back-office", "Virtual assistants", "Marketing"],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    body: "Flexible people and growth capability for Australian professional businesses.",
    tags: ["Admin", "Customer support", "Appointment setting"],
  },
  {
    icon: Sprout,
    title: "Growing Businesses",
    body: "Custom staffing and digital growth solutions built around your specific requirements.",
    tags: ["Custom teams", "Digital growth"],
  },
];

export function WhoWeHelp() {
  return (
    <Section id="industries" surface="sand">
      <SectionHeading
        eyebrow="Who we help"
        title="Built for Australian businesses that need people and momentum."
        intro="We work most deeply with mortgage and finance businesses, and support other Australian businesses that need reliable people and stronger growth capability."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {INDUSTRIES.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 80}
            className={item.feature ? "lg:col-span-2 lg:row-span-2" : ""}
          >
            <article
              className={
                item.feature
                  ? "flex h-full flex-col justify-between rounded-3xl border border-forest/10 bg-forest p-8 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-10"
                  : "flex h-full flex-col justify-between rounded-3xl border border-forest/10 bg-warm-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
              }
            >
              <div>
                <item.icon
                  className={
                    item.feature ? "size-7 text-gold" : "size-6 text-evergreen"
                  }
                  aria-hidden="true"
                />
                <h3
                  className={
                    item.feature
                      ? "mt-6 text-2xl font-extrabold text-warm-white sm:text-3xl"
                      : "mt-5 text-xl font-bold text-forest"
                  }
                >
                  {item.title}
                </h3>
                <p
                  className={
                    item.feature
                      ? "mt-4 max-w-xl text-base leading-relaxed text-sand/85"
                      : "mt-3 text-sm leading-relaxed text-muted-foreground"
                  }
                >
                  {item.body}
                </p>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className={
                      item.feature
                        ? "rounded-full border border-sage/25 px-3.5 py-1.5 text-xs font-medium text-sand/90"
                        : "rounded-full border border-forest/8 bg-sand px-3 py-1.5 text-xs font-medium text-forest/80"
                    }
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const PILLARS = [
  {
    icon: Users,
    n: "01",
    title: "People",
    body: "Build a capable team around your business. Dedicated professionals who learn your systems and work as part of your day.",
  },
  {
    icon: TrendingUp,
    n: "02",
    title: "Growth",
    body: "Generate better opportunities and strengthen your digital acquisition with campaigns, follow-up and marketing capability.",
  },
  {
    icon: Settings2,
    n: "03",
    title: "Operations",
    body: "Reduce administrative pressure and improve day-to-day efficiency with reliable back-office and support functions.",
  },
];

export function Pillars() {
  return (
    <Section id="solutions" surface="ivory">
      <SectionHeading
        eyebrow="Our framework"
        title="People. Growth. Operations."
        intro="Three connected capabilities. Start with the one that's holding your business back — and extend from there."
        align="center"
      />
      <div className="relative mt-16">
        <div
          aria-hidden="true"
          className="absolute top-16 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-evergreen/35 to-transparent lg:block"
        />
        <div className="relative grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <article className="group h-full rounded-3xl border border-forest/10 bg-warm-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-forest/20 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-sand text-evergreen transition-colors duration-500 group-hover:bg-evergreen group-hover:text-warm-white">
                    <p.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="eyebrow text-gold">{p.n}</span>
                </div>
                <h3 className="mt-7 text-2xl font-extrabold text-forest">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function MortgageSolutions() {
  const support = [
    "Administration",
    "Loan processing support",
    "Document collection",
    "CRM management",
    "Client follow-up",
    "Appointment setting",
    "Lead generation",
    "Marketing & digital advertising",
    "Marketing administration",
  ];

  return (
    <Section id="mortgage" surface="forest">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          tone="light"
          eyebrow="Mortgage & finance"
          title="Built around the way mortgage brokers work."
          intro="From first enquiry to settlement support, Akiva provides the operational, administrative and marketing capability that keeps a broking business moving — so brokers can spend their time with clients."
        />
        <div>
          <Reveal>
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {support.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-sage/12 pb-3 text-sm text-sand/90"
                >
                  <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <p className="eyebrow text-gold">Where we support the journey</p>
            <div className="mt-4">
              <FlowStrip
                tone="light"
                steps={[
                  "Lead",
                  "Enquiry",
                  "Qualification",
                  "Application support",
                  "Follow-up",
                  "Settlement support",
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={200} className="mt-10">
            <p className="max-w-xl text-xs leading-relaxed text-sand/60">
              Akiva provides operational, administrative and marketing support
              functions only. We do not provide financial advice or credit advice,
              and our team does not hold Australian financial or credit licensing.
            </p>
            <div className="mt-7">
              <CTAButton href={CONTACT_URL} variant="light">
                Build My Mortgage Team
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

const ROLES = [
  ["Mortgage Assistant", "Support brokers across day-to-day client and file activity."],
  ["Loan Processing Support", "Keep applications organised, complete and moving."],
  ["Virtual Assistant", "Handle the recurring work that fills your calendar."],
  ["Admin Assistant", "Reliable administration and document management."],
  ["Customer Support", "Responsive, professional client communication."],
  ["Appointment Setter", "Turn interest into booked conversations."],
  ["Sales Support", "Pipeline hygiene, quotes and follow-up."],
  ["Marketing Assistant", "Execute campaigns, content and reporting."],
];

export function Staffing() {
  return (
    <Section surface="ivory">
      <SectionHeading
        eyebrow="Pillar 01 — Staffing & offshore teams"
        title="The right people. Built around your business."
        intro="Start with one specialist or build a complete support team. Your Akiva professionals work inside your existing tools, processes and rhythm."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ROLES.map(([title, body], i) => (
          <Reveal key={title} delay={(i % 4) * 70}>
            <article className="group h-full rounded-2xl border border-forest/10 bg-warm-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-evergreen/40 hover:shadow-soft">
              <h3 className="text-base font-bold text-forest">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120} className="mt-12 flex flex-wrap items-center justify-between gap-8 rounded-3xl border border-forest/10 bg-sand p-8">
        <div>
          <p className="eyebrow text-evergreen">How a team comes together</p>
          <div className="mt-4">
            <FlowStrip steps={["Define", "Match", "Integrate", "Scale"]} />
          </div>
        </div>
        <CTAButton href={CONTACT_URL}>Find Your Team</CTAButton>
      </Reveal>
      <Reveal delay={160} className="mt-10 flex flex-wrap gap-2">
        {["Custom team solutions", "CRM & data support", "Real estate support", "Digital marketing specialists"].map(
          (t) => (
            <Pill key={t}>{t}</Pill>
          ),
        )}
      </Reveal>
    </Section>
  );
}
