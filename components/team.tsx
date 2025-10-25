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
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-lg overflow-hidden mb-6 border-2 border-accent/30">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-accent font-semibold mb-4 text-center">
                {member.role}
              </p>
              <p className="text-foreground/70 text-center max-w-2xl">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
