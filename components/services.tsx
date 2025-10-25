"use client";

import {
  Zap,
  Code,
  Lightbulb,
  Smartphone,
  TrendingUp,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "AI-Powered Software Development",
    description:
      "We build intelligent applications that learn, adapt, and evolve. Our expertise includes machine learning integration, predictive analytics, natural language processing, and computer vision implementations.",
  },
  {
    icon: Lightbulb,
    title: "Custom AI Solutions & Integration",
    description:
      "Transform your existing systems with artificial intelligence. We seamlessly integrate AI capabilities into your current infrastructure, from chatbots to recommendation engines.",
  },
  {
    icon: Code,
    title: "IT Consulting & Strategy",
    description:
      "Expert guidance on leveraging AI and emerging technologies for competitive advantage. Strategic planning for digital transformation and intelligent automation roadmaps.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Development",
    description:
      "Responsive, scalable applications built with modern frameworks and AI-enhanced features for superior user experiences.",
  },
  {
    icon: TrendingUp,
    title: "Digital & Social Media Marketing",
    description:
      "Data-driven marketing strategies powered by AI analytics. Reach and engage your target audience with intelligent campaign optimization and predictive insights.",
  },
  {
    icon: Layers,
    title: "Project Management",
    description:
      "Agile project delivery with AI-assisted planning and resource optimization. We ensure your projects are completed on time and within budget.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-foreground/70">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
