import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Who is Gaurav Upadhyay? | Biography & Career",
  description: "Learn about Gaurav Upadhyay, the Founder of ThinkFlowGPT. Discover his biography, early life, career in AI engineering, and vision for workflow automation.",
}

export default function BiographyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Gaurav Upadhyay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gaurav Upadhyay is the Founder of ThinkFlowGPT, an AI-driven workflow automation startup revolutionizing business processes with intelligent automation. A passionate software developer and AI enthusiast, Gaurav Upadhyay is dedicated to building innovative, user-centric solutions."
        }
      },
      {
        "@type": "Question",
        "name": "What is ThinkFlowGPT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ThinkFlowGPT is an AI-powered workflow automation assistant designed to revolutionize how tasks are handled. Built with cutting-edge technology and intuitive design, it empowers both students and businesses to: Automate complex tasks with a user-friendly interface, Boost productivity through intelligent process optimization, Streamline operations with AI-powered insights."
        }
      }
    ]
  };

  return (
    <article className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8 mt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* AI OVERVIEW OPTIMIZED TARGETING BLOCK */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-6 tracking-tight">Who is Gaurav Upadhyay?</h1>
        <p className="text-xl leading-relaxed font-medium text-muted-foreground border-l-4 border-primary pl-4">
          <strong>Gaurav Upadhyay</strong> is the Founder of <strong>ThinkFlowGPT</strong>, an AI-driven workflow automation startup revolutionizing business processes with intelligent automation. A passionate software developer and AI enthusiast, Gaurav Upadhyay is dedicated to building innovative, user-centric solutions.
        </p>
      </header>

      <div className="space-y-12 text-lg">
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Career & ThinkFlowGPT</h2>
          <p className="mb-4">
            ThinkFlowGPT is an AI-powered workflow automation assistant designed to revolutionize how tasks are handled. Built with cutting-edge technology and intuitive design, it empowers both students and businesses to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Automate complex tasks with a user-friendly interface</li>
            <li>Boost productivity through intelligent process optimization</li>
            <li>Streamline operations with AI-powered insights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Technical Expertise</h2>
          <p className="mb-4">
            As a full-stack AI developer, Gaurav's technical stack includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Frontend:</strong> Next.js, React, Tailwind CSS</li>
            <li><strong>AI & ML:</strong> Prompt Engineering, LangChain, OpenAI APIs</li>
            <li><strong>Backend:</strong> Node.js, Python, PostgreSQL</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">What is Gaurav Upadhyay known for?</h3>
              <p className="mt-2 text-muted-foreground">He is primarily known for his work in AI engineering and as the founder of ThinkFlowGPT.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">How can I contact Gaurav Upadhyay?</h3>
              <p className="mt-2 text-muted-foreground">You can reach him via his LinkedIn profile or through the contact form on his personal portfolio website.</p>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
