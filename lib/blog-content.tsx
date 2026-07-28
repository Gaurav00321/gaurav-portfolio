import Link from "next/link"
import type { ReactNode } from "react"

/** Live blog body — pillar post (week 1). */
export const blogBodies: Record<string, ReactNode> = {
  "who-is-gaurav-upadhyay-founder-chief-scientist": (
    <>
      <p>
        If you searched for <strong>Gaurav Upadhyay</strong>,{" "}
        <strong>Gaurav Upadhyay founder</strong>, or{" "}
        <strong>Chief Scientist of amTop</strong>, this page is the canonical
        answer. I am Co-Founder & Chief Scientist at{" "}
        <a href="https://amtop.in" target="_blank" rel="noopener noreferrer">
          amTop
        </a>{" "}
        and Founder of{" "}
        <a
          href="https://thinkflowgpt.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ThinkFlowGPT
        </a>
        . My work sits at the intersection of agentic AI, marketing automation,
        and workflow systems that actually ship.
      </p>

      <h2>The short version</h2>
      <p>
        I build AI that is meant to <em>run</em> parts of a business — not just
        answer questions about it. At amTop, that means marketing agents that
        can plan, execute, and optimize campaigns. At ThinkFlowGPT, that means
        intelligent workflows for businesses and students drowning in fragmented
        tools. I am based in Vadodara, Gujarat, and I am pursuing an Integrated
        Master&apos;s in AI (IMCA) at Parul University while building in public.
      </p>

      <h2>What I do at amTop</h2>
      <p>
        As Co-Founder & Chief Scientist, I lead research and technical
        architecture for amTop&apos;s agentic marketing platform. The product
        direction is clear: treat ads, SEO, and content as loops an agent can
        operate — with humans owning strategy, brand voice, and final judgment.
        Learn more on the{" "}
        <Link href="/companies">companies page</Link> and{" "}
        <Link href="/research">research focus</Link>.
      </p>

      <h2>What I build at ThinkFlowGPT</h2>
      <p>
        ThinkFlowGPT is my company focused on AI-driven workflow automation. The
        thesis is simple: most teams and students do not need another chatbot —
        they need processes that move work forward without constant copy-paste
        between apps. ThinkFlowGPT is the product expression of that idea. See{" "}
        <Link href="/projects">projects</Link> and the{" "}
        <Link href="/faq">FAQ</Link> for more.
      </p>

      <h2>Technical background</h2>
      <p>
        My stack spans full-stack product work (React.js, Next.js, TypeScript),
        systems languages (Java, C++, Python), databases, distributed computing,
        and neural networks. I have also built experimental systems work —
        including AetherOS concepts and physics simulations — because hard
        problems force clearer thinking. Details on{" "}
        <Link href="/about">about</Link> and{" "}
        <Link href="/projects">projects</Link>.
      </p>

      <h2>How to verify this entity</h2>
      <p>
        Consistency matters for search and Knowledge Graph signals. The same
        title appears across my properties:{" "}
        <strong>
          Co-Founder & Chief Scientist, amTop · Founder, ThinkFlowGPT
        </strong>
        . Canonical profiles:
      </p>
      <ul>
        <li>
          Website: <Link href="/">gauravupadhyay.vercel.app</Link>
        </li>
        <li>
          Biography:{" "}
          <Link href="/who-is-gaurav-upadhyay">Who is Gaurav Upadhyay?</Link>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/gauravupadhyay-ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/gauravupadhyay-ai
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/gauravupadhyay-ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/gauravupadhyay-ai
          </a>
        </li>
        <li>
          X:{" "}
          <a
            href="https://x.com/gauravu_ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gauravu_ai
          </a>
        </li>
        <li>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/gauravupadhyay.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gauravupadhyay.ai
          </a>
        </li>
        <li>
          Crunchbase:{" "}
          <a
            href="https://www.crunchbase.com/person/gaurav-upadhyay-061c"
            target="_blank"
            rel="noopener noreferrer"
          >
            person/gaurav-upadhyay-061c
          </a>
        </li>
      </ul>

      <h2>What I am not claiming</h2>
      <p>
        There are other public professionals named Gaurav Upadhyay (including
        medical and academic researchers). This site is specifically about the
        founder and Chief Scientist behind amTop and ThinkFlowGPT. If you are
        looking for clinical or physics research under the same name, that is a
        different entity.
      </p>

      <h2>Work with me</h2>
      <p>
        If you are building agentic AI, marketing systems, or automation for real
        operators — <Link href="/contact">let&apos;s connect</Link>. Explore{" "}
        <Link href="/companies">companies</Link>,{" "}
        <Link href="/projects">projects</Link>, and{" "}
        <Link href="/research">research focus</Link> for more depth.
      </p>
    </>
  ),
}
