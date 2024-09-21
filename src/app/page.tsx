import Hero from "@/components/home/sections/Hero";
import About from "@/components/home/sections/About";
import Service from "@/components/home/sections/Service";
import Partnership from "@/components/home/sections/Partnership";
import TeamMember from "@/components/home/sections/TeamMember";
import NewsInsight from "@/components/home/sections/NewsInsight";
import Contact from "@/components/home/sections/Contact";

export default function CompanyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="flex-1">
        <Hero />
        <About />
        <Service />
        <TeamMember />
        <Partnership />
        <NewsInsight />
        <Contact />
      </main>
    </div>
  );
}
