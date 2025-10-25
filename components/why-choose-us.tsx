"use client";

import {
  Zap,
  Layers,
  Rocket,
  Award,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "AI-First Approach",
    description:
      "Every solution designed with intelligence built-in from the ground up",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Future-proof systems that grow with your business needs",
  },
  {
    icon: Rocket,
    title: "End-to-End Service",
    description: "From strategy to deployment and ongoing support",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Experience across multiple sectors and use cases",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description: "Always leveraging the latest AI advancements",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Measurable impact on business growth and efficiency",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Tekkd Solutions
          </h2>
          <p className="text-base sm:text-lg text-foreground/70">
            What sets us apart from the competition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-foreground/70">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
