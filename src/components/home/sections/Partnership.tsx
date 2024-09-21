import Image from "next/image";

const partnerArray = [
  {
    name: "Facebook",
    image: "/facebook.png?height=80&width=180&text=facebook",
  },
  {
    name: "Google",
    image: "/google.webp?height=80&width=180&text=google",
  },
  {
    name: "Amazon",
    image: "/amazon.webp?height=80&width=180",
  },
  {
    name: "Infosys",
    image: "/infosys.png?height=80&width=180&text=infosys",
  },
];

const Partnership = () => {
  return (
    <section
      id="partnerships"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Our Partnerships & Integrations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partnerArray.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={partner.image}
                alt={`${partner?.name} logo`}
                width={180}
                height={80}
                className="h-20 object-contain transition-all duration-300 filter grayscale hover:filter-none hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
