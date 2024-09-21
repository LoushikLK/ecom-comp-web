import Image from "next/image";

const TeamMember = () => {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Jane Doe", role: "CEO" },
            { name: "John Smith", role: "CTO" },
            { name: "Emily Brown", role: "Head of Marketing" },
            { name: "Michael Johnson", role: "Lead Developer" },
          ].map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 group"
            >
              <div className="relative overflow-hidden rounded-full">
                <Image
                  alt={`${member.name} avatar`}
                  className="aspect-square object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  height={150}
                  src={`/ceo.jpg?height=150&width=150&text=${member.name}`}
                  width={150}
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
