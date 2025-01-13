import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Web Scraper App",
    description: "A web scraping tool using Scrapy and BeautifulSoup.",
  },
  {
    title: "Next.js E-Commerce",
    description: "A full-stack e-commerce app with Shadcn UI.",
  },
];

export default function PortfolioSection() {
  return (
    <section id="projects" className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-2xl transition-shadow">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>{project.description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
