import { Quote } from "lucide-react";
import teamPhoto from "@/assets/global-team.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AkivaLogo } from "./Logo";
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

export function LeadGeneration() {
  const capabilities = [
    "Paid advertising",
    "Landing pages",
    "Lead capture",
    "Lead qualification",
    "CRM integration",
    "Follow-up & nurturing",
    "Appointment setting",
    "Retargeting",
  ];

  return (
    <Section surface="sand">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
        <SectionHeading
          eyebrow="Pillar 02 — Lead generation"
          title="More conversations. Better opportunities."
          intro="We build acquisition around business outcomes: the right audience, a clear offer, and disciplined follow-up that turns attention into qualified enquiries."
        />
        <Reveal delay={100}>
          <ul className="grid gap-2 sm:grid-cols-2">
            {capabilities.map((c) => (
              <li
                key={c}
                className="rounded-xl border border-forest/10 bg-warm-white px-4 py-3 text-sm font-medium text-forest/85"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Reveal delay={160} className="mt-12 rounded-3xl border border-forest/10 bg-warm-white p-8">
        <p className="eyebrow text-evergreen">The process</p>
        <div className="mt-4">
          <FlowStrip
            steps={["Target", "Attract", "Capture", "Qualify", "Nurture", "Convert"]}
          />
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Campaign performance depends on market, offer and budget. We report on
          real outcomes and optimise continuously — we don't promise guaranteed
          lead volumes.
        </p>
      </Reveal>
    </Section>
  );
}

export function DigitalMarketing() {
  const services = [
    "Google Ads",
    "Meta Ads",
    "Social media management",
    "Content creation",
    "SEO",
    "Email marketing",
    "Website management",
    "CRM & automation",
    "Analytics & reporting",
    "Marketing strategy",
  ];

  return (
    <Section surface="ivory">
      <SectionHeading
        eyebrow="Pillar 03 — Digital marketing"
        title="Marketing capability without the full-time overhead."
        intro="Akiva works as an external marketing function that integrates with your existing team — planning, executing and reporting on the work that grows your brand."
      />
      <Reveal delay={100} className="mt-12 flex flex-wrap gap-2.5">
        {services.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {[
          ["Plan", "Clear priorities based on your business goals and market."],
          ["Execute", "Campaigns, content and channels managed end to end."],
          ["Report", "Straightforward reporting on what's working and what's next."],
        ].map(([title, body], i) => (
          <Reveal key={title} delay={i * 90}>
            <article className="h-full rounded-3xl border border-forest/10 bg-warm-white p-8 transition-shadow duration-500 hover:shadow-soft">
              <h3 className="text-xl font-bold text-forest">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const STEPS = [
  ["01", "Discover", "We understand your business, workflow, goals and requirements."],
  ["02", "Build", "We identify the right people, services and systems for the job."],
  ["03", "Integrate", "Your Akiva team becomes part of your everyday workflow."],
  ["04", "Grow", "We keep improving operations, marketing and capacity as you scale."],
];

export function HowItWorks() {
  return (
    <Section id="process" surface="sand">
      <SectionHeading
        eyebrow="How it works"
        title="A considered start, then steady momentum."
        align="center"
      />
      <ol className="mt-16 space-y-4">
        {STEPS.map(([n, title, body], i) => (
          <Reveal key={n} delay={i * 110}>
            <li className="group grid items-baseline gap-4 rounded-3xl border border-forest/10 bg-warm-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft sm:grid-cols-[7rem_1fr_1.2fr] sm:gap-8">
              <span className="text-3xl font-extrabold text-gold transition-colors duration-500 group-hover:text-evergreen">
                {n}
              </span>
              <h3 className="text-xl font-extrabold text-forest sm:text-2xl">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

const REASONS = [
  ["Australian business focus", "Solutions designed around how Australian businesses actually operate."],
  ["Flexible teams", "Start with the support you need and expand as the business grows."],
  ["More than staffing", "People, marketing, lead generation and operational support in one partner."],
  ["Integrated approach", "Your Akiva team works alongside your existing business, not apart from it."],
  ["Cost-efficient scaling", "Increase capability without automatically increasing local overhead."],
  ["Long-term partnership", "We build a team that grows with your business over time."],
];

export function WhyAkiva() {
  return (
    <Section id="about" surface="ivory">
      <SectionHeading
        eyebrow="Why Akiva"
        title="A partner, not a provider."
        intro="Akiva Solutions is built to be a strategic extension of your business — dependable people, sound process and a genuine interest in how your business performs."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-forest/10 bg-forest/8 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map(([title, body], i) => (
          <Reveal key={title} delay={(i % 3) * 80}>
            <article className="h-full bg-warm-white p-8 transition-colors duration-500 hover:bg-sand/70">
              <h3 className="text-lg font-bold text-forest">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function GlobalTeam() {
  return (
    <Section surface="forest">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <SectionHeading
          tone="light"
          eyebrow="Our team"
          title="Different locations. One team."
          intro="Skilled professionals working with Australian businesses across shared hours, shared tools and shared standards. Collaborative, accountable and easy to work with."
        />
        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[2rem] border border-sage/20 shadow-lift">
            <img
              src={teamPhoto}
              alt="Professionals from different backgrounds collaborating around a table in a warm, modern office"
              width={1440}
              height={960}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Proof() {
  const placeholders = [
    ["Client testimonial", "Mortgage broking · Australia"],
    ["Client testimonial", "Real estate · Australia"],
    ["Client testimonial", "Professional services · Australia"],
  ];

  return (
    <Section surface="sand">
      <SectionHeading
        eyebrow="Client experience"
        title="Client stories, coming soon."
        intro="Akiva Solutions is a new business, so we won't publish testimonials we haven't earned. This space is reserved for the words of our first clients."
        align="center"
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {placeholders.map(([title, meta], i) => (
          <Reveal key={meta} delay={i * 90}>
            <figure className="flex h-full flex-col justify-between rounded-3xl border border-dashed border-forest/18 bg-warm-white/70 p-8">
              <Quote className="size-6 text-gold" aria-hidden="true" />
              <blockquote className="mt-6 text-base leading-relaxed text-forest/60 italic">
                Reserved for a verified client testimonial.
              </blockquote>
              <figcaption className="mt-8 border-t border-forest/10 pt-5">
                <span className="block text-sm font-bold text-forest">{title}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{meta}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const FAQS = [
  [
    "What types of professionals can Akiva provide?",
    "Administration and virtual assistants, mortgage broker assistants, loan processing support, customer support, appointment setters, sales support, CRM and data support, marketing assistants and digital marketing specialists. We can also build a custom role around your requirements.",
  ],
  [
    "Can Akiva support mortgage brokers?",
    "Yes. Mortgage and finance is our primary focus. We support brokers with administration, loan processing support, document collection, CRM management, client follow-up, appointment setting, lead generation and marketing. These are operational and marketing support functions — not financial or credit advice.",
  ],
  [
    "Can I hire a dedicated team member?",
    "Yes. Team members work with your business consistently so they learn your systems, clients and expectations.",
  ],
  [
    "Can I start with one person?",
    "Yes. Many clients begin with a single specialist and add roles as capacity and confidence grow.",
  ],
  [
    "Do you provide lead generation?",
    "Yes. We manage paid advertising, landing pages, lead capture, qualification, nurturing and appointment setting, integrated with your CRM.",
  ],
  [
    "Do you provide digital marketing?",
    "Yes. Google Ads, Meta Ads, social media, content, SEO, email, website management, CRM and automation, plus analytics and reporting.",
  ],
  [
    "Can Akiva support businesses outside mortgage broking?",
    "Yes. We also work with real estate, professional services and other growing Australian businesses.",
  ],
  [
    "How does the onboarding process work?",
    "We start with a discovery conversation, define the role or service scope, match the right people, then integrate them into your workflow with an agreed handover and check-in rhythm.",
  ],
  [
    "How do Australian clients communicate with their team?",
    "Through the tools you already use — email, phone, video calls and messaging — within agreed working hours that overlap with your business day.",
  ],
];

export function FAQ() {
  return (
    <Section surface="ivory">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="FAQ" title="Questions, answered plainly." />
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map(([q, a], i) => (
              <AccordionItem key={q} value={`item-${i}`} className="border-forest/12">
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-forest hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-forest py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 size-[32rem] rounded-full bg-evergreen/45 blur-3xl"
      />
      <div className="container-editorial relative text-center">
        <Reveal>
          <span
            aria-hidden="true"
            className="mx-auto mb-9 block h-px w-16 bg-gold/70"
          />
          <h2 className="mx-auto max-w-3xl text-4xl leading-[1.05] font-extrabold text-warm-white sm:text-5xl lg:text-6xl">
            Ready to build a smarter business?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-sand/85 sm:text-lg">
            Whether you need one skilled professional, a complete support team,
            more qualified opportunities or ongoing digital marketing capability,
            Akiva Solutions can build a solution around your business.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href={CONTACT_URL}>Let's Talk</CTAButton>
            <a
              href={SOLUTIONS_URL}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-warm-white/30 px-6 py-3 text-sm font-semibold text-warm-white transition-colors duration-300 hover:border-warm-white/60 hover:bg-warm-white/10"
            >
              Explore Solutions <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    [
      "Solutions",
      [
        ["Staffing & Offshore Teams", "#solutions"],
        ["Lead Generation", "#solutions"],
        ["Digital Marketing", "#solutions"],
      ],
    ],
    [
      "Company",
      [
        ["Mortgage Brokers", "#mortgage"],
        ["Industries", "#industries"],
        ["About", "#about"],
        ["Contact", "#contact"],
      ],
    ],
    [
      "More",
      [
        ["LinkedIn", "#linkedin"],
        ["Privacy Policy", "#privacy"],
        ["Terms", "#terms"],
      ],
    ],
  ] as const;

  return (
    <footer className="bg-forest pt-16 pb-10 text-sand">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="text-warm-white">
              <AkivaLogo />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-sand/70">
              Akiva Solutions provides staffing, offshore team solutions, lead
              generation and digital marketing capability to Australian
              businesses — with a focus on mortgage and finance.
            </p>
          </div>
          {cols.map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <h3 className="eyebrow text-gold">{title}</h3>
              <ul className="mt-5 space-y-3">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-sand/75 transition-colors hover:text-warm-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-sand/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-sand/60">
            © {new Date().getFullYear()} Akiva Solutions. All rights reserved.
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-sand/50">
            Akiva Solutions provides administrative, operational and marketing
            support services. We do not provide financial advice or credit advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
