export const aiProjects = [
  {
    id: "pneumonia-detection",
    title: "Pneumonia Detection System",
    description:
      "An AI-powered system currently being trained to detect pneumonia from chest X-ray images with high accuracy. This tool aims to assist radiologists in making faster and more accurate diagnoses.",
    image: "/ai/pneumonia.jpeg",
    status: "In Training",
    fullDescription: `
      Our Pneumonia Detection System uses deep learning algorithms to analyze chest X-ray images and identify signs of pneumonia with high accuracy. The system is currently being trained on a diverse dataset of X-ray images to ensure it can detect pneumonia across different patient demographics and varying stages of the disease.
      
      Key features:
      - High accuracy detection of pneumonia markers in chest X-rays
      - Rapid analysis to support timely diagnosis
      - Heatmap visualization to highlight areas of concern
      - Integration capabilities with existing hospital PACS systems
      
      The system is designed to serve as an assistant to radiologists, helping them prioritize cases and providing a second opinion to improve diagnostic accuracy. Early tests show promising results with detection rates comparable to experienced radiologists.
    `,
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "CNN",
      "Transfer Learning",
    ],
    team: ["Dr. Sarah Johnson", "Michael Chen", "Dr. Robert Williams"],
    timeline: "Expected completion: Q2 2024",
  },
  {
    id: "malaria-detection",
    title: "Malaria Detection System",
    description:
      "A deep learning model being trained to identify malaria parasites in blood cell microscope images. This system will help healthcare providers in regions with limited access to pathology expertise.",
    image: "/ai/malaria.jpg",
    status: "In Training",
    fullDescription: `
      Our Malaria Detection System is an AI-powered tool designed to automatically detect malaria parasites in blood smear microscopy images. This system is particularly valuable for regions with limited access to trained pathologists or in high-volume screening scenarios.
      
      The system uses advanced computer vision and deep learning techniques to identify the characteristic appearance of malaria parasites within red blood cells. By automating this detection process, we can significantly increase the speed and scale of malaria screening while maintaining high accuracy.
      
      Key features:
      - Automated detection of Plasmodium parasites in thin and thick blood smears
      - Quantification of parasite density to assess infection severity
      - Low computational requirements for deployment in resource-limited settings
      - Offline functionality for areas with limited connectivity
      
      The system is being trained on a diverse dataset of blood smear images from different geographic regions to ensure robust performance across various malaria strains and imaging conditions.
    `,
    technologies: [
      "Deep Learning",
      "Image Segmentation",
      "MobileNet",
      "Edge Computing",
    ],
    team: ["Dr. Lisa Nguyen", "James Okafor", "Emily Rodriguez"],
    timeline: "Expected completion: Q3 2024",
  },
  {
    id: "heart-rate-prediction",
    title: "Heart Rate Prediction System",
    description:
      "An advanced AI system designed to predict potential heart issues based on various health metrics and historical data. This preventive tool helps identify risks before they become serious problems.",
    image: "/ai/heart.jpg",
    status: "In Development",
    fullDescription: `
      Our Heart Rate Prediction System is a preventive healthcare tool that uses machine learning to analyze patterns in heart rate data and other vital signs to predict potential cardiac issues before they manifest as serious problems.
      
      The system integrates data from various sources including wearable devices, electronic health records, and patient-reported symptoms to create a comprehensive risk assessment model. By identifying subtle patterns that precede cardiac events, the system can alert healthcare providers to intervene early.
      
      Key features:
      - Real-time monitoring and analysis of heart rate variability
      - Integration with popular wearable devices and health monitoring systems
      - Personalized risk assessment based on individual health history
      - Early warning system for potential cardiac events
      - Longitudinal tracking of cardiac health metrics
      
      The system is currently in development with initial testing showing promising results in identifying precursors to arrhythmias and other cardiac abnormalities.
    `,
    technologies: [
      "Machine Learning",
      "Time Series Analysis",
      "IoT Integration",
      "Predictive Analytics",
    ],
    team: ["Dr. Carlos Mendez", "Aisha Patel", "Dr. Thomas Berg"],
    timeline: "Expected completion: Q4 2024",
  },
  {
    id: "ai-email-assistant",
    title: "AI Email Assistant",
    description:
      "A sophisticated email agent that summarizes incoming emails, generates appropriate replies automatically, and sends AI-generated follow-ups for priority messages that haven't received responses.",
    image: "/ai/email.jpg",
    status: "Active",
    fullDescription: `
      Our AI Email Assistant is a productivity tool designed to help professionals manage their email workload more efficiently. The system uses natural language processing to understand the content and context of emails, allowing it to provide intelligent assistance.
      
      Key features:
      - Email summarization: Condenses long emails into concise summaries highlighting key points and action items
      - Automated reply generation: Creates contextually appropriate responses that can be sent as-is or edited before sending
      - Priority follow-up: Tracks important emails that haven't received replies and automatically generates follow-up messages
      - Smart categorization: Organizes emails based on content, urgency, and required actions
      - Meeting scheduling: Identifies meeting requests and suggests available times based on calendar integration
      
      The system is currently active and being used by several organizations, with continuous improvements being made based on user feedback and performance metrics. It integrates with popular email platforms including Gmail, Outlook, and custom SMTP servers.
      
      Our AI Email Assistant respects privacy and security concerns, with all processing done in compliance with data protection regulations and with strong encryption protocols.
    `,
    technologies: [
      "NLP",
      "GPT Models",
      "Sentiment Analysis",
      "Email API Integration",
    ],
    team: ["Jennifer Wu", "Alex Kowalski", "Sophia Martinez"],
    timeline: "Launched Q1 2024, ongoing development",
  },
];
