import { Metadata } from "next";
import { siteConfig } from "@/app/metadata";
import ProfileCard from "@/components/profile-card";

export const metadata: Metadata = {
  title: "Who is Gaurav Upadhyay? | Biography & Career",
  description:
    "Gaurav Upadhyay is Co-Founder & Chief Scientist at amTop and Founder of ThinkFlowGPT, building agentic AI for marketing and business automation.",
  openGraph: {
    type: "profile",
    title: "Who is Gaurav Upadhyay? | Biography & Career",
    description: siteConfig.ogDescription,
    url: `${siteConfig.url}/who-is-gaurav-upadhyay`,
    firstName: siteConfig.givenName,
    lastName: siteConfig.familyName,
    username: "gauravu_ai",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Gaurav Upadhyay profile card — Chief Scientist at amTop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who is Gaurav Upadhyay?",
    description: siteConfig.ogDescription,
    images: ["/twitter-image"],
    creator: "@gauravu_ai",
  },
  alternates: {
    canonical: `${siteConfig.url}/who-is-gaurav-upadhyay`,
  },
  keywords: [
    "Who is Gaurav Upadhyay",
    "Gaurav Upadhyay biography",
    "Gaurav Upadhyay AI",
    "Chief Scientist amTop",
    "Founder ThinkFlowGPT",
  ],
};

export default function BiographyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Gaurav Upadhyay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gaurav Upadhyay is Co-Founder & Chief Scientist at amTop and Founder of ThinkFlowGPT, building agentic AI systems for marketing and business automation. He is pursuing an Integrated Master's in AI (IMCA) at Parul University.",
        },
      },
      {
        "@type": "Question",
        name: "What does Gaurav Upadhyay do at amTop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As Co-Founder and Chief Scientist at amTop, Gaurav Upadhyay leads the research and technical architecture behind autonomous marketing agents designed to plan, execute, and optimize campaigns for hundreds of startups simultaneously.",
        },
      },
      {
        "@type": "Question",
        name: "What is ThinkFlowGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ThinkFlowGPT is an AI-driven workflow automation startup founded by Gaurav Upadhyay, focused on giving businesses intelligent, self-operating processes that replace fragmented manual work.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Gaurav Upadhyay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can reach Gaurav Upadhyay via email at ${siteConfig.email}, on LinkedIn at ${siteConfig.links.linkedin}, or through the contact form on his portfolio at ${siteConfig.url}.`,
        },
      },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8 mt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="mb-12 grid md:grid-cols-[1fr_auto] gap-10 items-start">
        <div>
          <h1 className="text-4xl font-bold mb-6 tracking-tight">
            Who is Gaurav Upadhyay?
          </h1>
          <p className="text-xl leading-relaxed font-medium text-muted-foreground border-l-4 border-primary pl-4">
            <strong>Gaurav Upadhyay</strong> is Co-Founder & Chief Scientist at{" "}
            <strong>amTop</strong> and Founder of <strong>ThinkFlowGPT</strong>,
            building agentic AI systems for marketing and business automation. He
            is pursuing an Integrated Master&apos;s in AI at Parul University.
          </p>
        </div>
        <div className="justify-self-center md:justify-self-end w-full max-w-sm">
          <ProfileCard enableTilt={false} />
        </div>
      </header>

      <div className="space-y-12 text-lg">
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
            Long Biography
          </h2>
          <p className="mb-4 text-muted-foreground">
            Gaurav Upadhyay is a software engineer, AI researcher, and startup
            founder building at the intersection of agentic AI and business
            automation. As Co-Founder and Chief Scientist at amTop, he leads the
            research and technical architecture behind autonomous marketing
            agents designed to plan, execute, and optimize campaigns for
            hundreds of startups simultaneously — with the goal of making
            advanced marketing capability accessible to businesses of every
            size. He is also the Founder of ThinkFlowGPT, an AI-driven workflow
            automation startup focused on giving businesses intelligent,
            self-operating processes.
          </p>
          <p className="mb-4 text-muted-foreground">
            Gaurav&apos;s technical foundation spans data structures and
            algorithms, Java, C++, Python, React.js, Next.js, TypeScript, and
            database systems, with additional depth in neural networks,
            distributed computing, robotics, and operating systems. He is
            currently pursuing an Integrated Master&apos;s in AI (IMCA) at Parul
            University.
          </p>
          <p className="text-muted-foreground">
            He is driven by a single conviction: the best automation
            doesn&apos;t replace people — it multiplies what one person can
            achieve.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
            Career — amTop & ThinkFlowGPT
          </h2>
          <p className="mb-4 text-muted-foreground">
            At <strong>amTop</strong>, Gaurav leads the technical vision behind
            agentic marketing automation — AI systems built to independently
            manage campaigns for hundreds of startups at once, forecasting
            trends and optimizing ROI without constant human oversight.
          </p>
          <p className="mb-4 text-muted-foreground">
            At <strong>ThinkFlowGPT</strong>, he applies the same philosophy to
            broader business workflows: replace fragmented manual processes with
            AI that actually gets things done.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
            Technical Expertise
          </h2>
          <p className="mb-4 text-muted-foreground">
            Gaurav&apos;s stack and research depth include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Full-stack:</strong> React.js, Next.js, TypeScript
            </li>
            <li>
              <strong>Systems:</strong> Java, C++, Python, databases, operating
              systems
            </li>
            <li>
              <strong>AI & research:</strong> Neural networks, agentic systems,
              distributed computing, robotics
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">
                What is Gaurav Upadhyay known for?
              </h3>
              <p className="mt-2 text-muted-foreground">
                He is known as Co-Founder & Chief Scientist at amTop and Founder
                of ThinkFlowGPT, building agentic AI for marketing and business
                automation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium">
                How can I contact Gaurav Upadhyay?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </a>
                , connect on{" "}
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
                , or use the{" "}
                <a href="/#contact" className="text-primary hover:underline">
                  contact form
                </a>{" "}
                on this site.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
