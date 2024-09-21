import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import React from "react";

const NewsInsight = () => {
  return (
    <section id="news" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Latest News & Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "The Future of E-commerce in 2023",
              excerpt:
                "Explore the trends shaping the e-commerce landscape this year.",
              date: "June 15, 2023",
            },
            {
              title: "Maximizing Conversion Rates: A Guide",
              excerpt:
                "Learn strategies to boost your online store's conversion rates.",
              date: "May 28, 2023",
            },
            {
              title: "Adfolios Software Launches New AI-Powered Analytics Tool",
              excerpt:
                "Our latest tool helps e-commerce businesses make data-driven decisions.",
              date: "May 10, 2023",
            },
          ].map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <Button variant="outline" size="sm" className="group">
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInsight;
