import ProjectDetail from "@/components/aiComponents/ProjectDetail";
import { aiProjects } from "@/public/data/projects";

export default function ProjectPage({ params }) {
  // Find the project with the matching ID
  const project = aiProjects.find((p) => p.id === params.id);

  // If no project is found, you could redirect or show an error
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">The project you're looking for doesn't exist.</p>
          <a href="/ai" className="bg-gray-900 text-white px-6 py-3 rounded-lg">
            Back to AI Projects
          </a>
        </div>
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}
