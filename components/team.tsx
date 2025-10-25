"use client";

import { useEffect, useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface TeamData {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export default function Team() {
  const [teamData, setTeamData] = useState<TeamData | null>(null);

  useEffect(() => {
    fetch("/data/team.json")
      .then((res) => res.json())
      .then((data) => setTeamData(data))
      .catch((err) => console.error("Error loading team data:", err));
  }, []);

  if (!teamData) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {teamData.title}
          </h2>
          <p className="text-base sm:text-lg text-foreground/70">
            {teamData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {teamData.members.map((member, index) => (
            <div key={index} className="group relative flex justify-center">
              <div className="w-[80%] h-80 rounded-lg overflow-hidden border-2 border-accent/30 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-foreground/90 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
              {/* Fixed blur background at bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] p-4 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
                <div className="backdrop-blur-md bg-background/30 rounded-lg p-3">
                  <h3 className="text-lg font-bold mb-1 text-white">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
