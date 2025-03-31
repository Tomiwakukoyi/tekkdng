"use client"
import { motion } from "framer-motion"
import { Brain, Microscope, Heart, Mail, Bot, Database } from "lucide-react"

export default function AIServices() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const services = [
    {
      icon: <Brain className="h-12 w-12 text-gray-800" />,
      title: "AI Consultation",
      description: "Expert guidance on implementing AI solutions tailored to your business needs and challenges.",
    },
    {
      icon: <Microscope className="h-12 w-12 text-gray-800" />,
      title: "Medical Imaging Analysis",
      description: "Advanced AI systems for analyzing medical images to assist in diagnosis and treatment planning.",
    },
    {
      icon: <Heart className="h-12 w-12 text-gray-800" />,
      title: "Predictive Healthcare",
      description: "AI-powered predictive models for early detection and prevention of health issues.",
    },
    {
      icon: <Mail className="h-12 w-12 text-gray-800" />,
      title: "Intelligent Email Management",
      description:
        "Smart email systems that summarize, prioritize, and automate responses to streamline communication.",
    },
    {
      icon: <Bot className="h-12 w-12 text-gray-800" />,
      title: "Custom AI Development",
      description: "Bespoke AI solutions designed and developed to address your specific business challenges.",
    },
    {
      icon: <Database className="h-12 w-12 text-gray-800" />,
      title: "Data Analysis & Insights",
      description: "Transform your raw data into actionable insights with our advanced AI analytics tools.",
    },
  ]

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our AI Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of AI services designed to transform your business operations and create
            innovative solutions for complex problems.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariant}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

