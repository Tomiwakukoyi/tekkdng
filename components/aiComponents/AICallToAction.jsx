"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AICallToAction() {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Whether you're looking to implement one of our existing AI solutions
            or need a custom AI system developed for your specific needs, our
            team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Schedule a Consultation
              </button>
            </Link>
            <button
              onClick={() => {
                const projectsSection = document.getElementById("ai-projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-2 border-white text-white hover:bg-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Explore Our Projects
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
