import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/akiva/Header";
import {
  Hero,
  WhoWeHelp,
  Pillars,
  MortgageSolutions,
  Staffing,
} from "@/components/akiva/SectionsTop";
import {
  LeadGeneration,
  DigitalMarketing,
  HowItWorks,
  WhyAkiva,
  GlobalTeam,
  Proof,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/akiva/SectionsBottom";

const TITLE =
  "Akiva Solutions | Staffing, Lead Generation & Digital Marketing for Australian Businesses";
const DESCRIPTION =
  "Akiva Solutions helps Australian businesses — especially mortgage brokers — build capable offshore teams, generate qualified leads and run digital marketing without extra overhead.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeHelp />
        <Pillars />
        <MortgageSolutions />
        <Staffing />
        <LeadGeneration />
        <DigitalMarketing />
        <HowItWorks />
        <WhyAkiva />
        <GlobalTeam />
        <Proof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
