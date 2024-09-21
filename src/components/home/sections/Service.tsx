import { Globe, Users, TrendingUp } from "lucide-react";
import React from "react";

const Service = () => {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              title: "Global Reach",
              description:
                "Expand your business worldwide with our international e-commerce solutions.",
            },
            {
              icon: Users,
              title: "Customer Insights",
              description:
                "Gain valuable insights into your customers' behavior with our advanced analytics.",
            },
            {
              icon: TrendingUp,
              title: "Growth Strategies",
              description:
                "Accelerate your business growth with our tailored e-commerce strategies.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white dark:bg-gray-950 shadow-lg transition-all duration-200 ease-in-out hover:shadow-xl hover:-translate-y-1"
            >
              <service.icon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
