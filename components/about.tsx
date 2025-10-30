"use client";

import { useEffect, useRef, useState } from "react";

interface Counter {
  label: string;
  value: number;
  suffix: string;
}

const counters: Counter[] = [
  { label: "Projects Completed", value: 11, suffix: "+" },
  { label: "AI Models Deployed", value: 4, suffix: "+" },
  { label: "Industries Served", value: 5, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-accent">
      {count}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Intelligent Solutions for
            <span className="block text-accent">Modern Businesses</span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Tekkd Solutions is a premier IT and digital services company
            specializing in AI-integrated software development. We serve diverse
            industries by infusing artificial intelligence into custom
            applications, transforming how businesses operate.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter) => (
            <div key={counter.label} className="text-center">
              <AnimatedCounter target={counter.value} suffix={counter.suffix} />
              <p className="text-foreground/60 mt-2">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
