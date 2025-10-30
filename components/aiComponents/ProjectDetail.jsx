"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Code } from "lucide-react";

export default function ProjectDetail({ project }) {
  if (!project) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Link href="/ai#ai-projects">
          <button className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="relative h-80 md:h-96">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 md:p-10 w-full">
                <div className="inline-block bg-gray-900 text-white text-sm py-1 px-3 rounded-full mb-4">
                  {project.status}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h1>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <span>Team: {project.team.join(", ")}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              {project.fullDescription.split("\n").map((paragraph, index) => (
                <p
                  key={index}
                  className={paragraph.trim().startsWith("-") ? "ml-4" : ""}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Code className="h-5 w-5 mr-2 text-gray-700" />
                <h3 className="text-xl font-semibold">Technologies Used</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <Link href="/consultation">
                <button className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg text-lg font-medium transition-colors">
                  Inquire About This Project
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
