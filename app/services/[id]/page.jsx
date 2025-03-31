"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import servicesData from "@/public/data/servicesData";

export default function ServiceDetail() {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the service with the matching ID
    const foundService = servicesData.find((s) => s.id === params.id);

    if (foundService) {
      setService(foundService);
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-6 text-gray-600">
            The service you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/about">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Back to Services
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/about">
          <button className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Services
          </button>
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src={`/images/${service.image}`}
              alt={service.heading}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 md:p-10 w-full">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {service.heading}
                </h1>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                {service.description}
              </p>

              {service.fullDescription && (
                <>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Overview</h2>
                  <p className="text-gray-700">{service.fullDescription}</p>
                </>
              )}

              {service.benefits && (
                <>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Benefits</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {service.technologies && (
                <>
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    Technologies We Use
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-gray-600 mb-6">
                Contact us today to discuss how our {service.heading} services
                can help your business.
              </p>
              <Link href="/consultation">
                <button className="bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg text-lg font-medium transition-colors">
                  Request a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
