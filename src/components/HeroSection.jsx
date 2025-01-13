import { Button } from "@/components/ui/button"; // Shadcn button

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
      <h1 className="text-5xl font-bold">Hi, I'm <span className="text-indigo-600">Chhel Chhempanha</span>!</h1>
      <p className="mt-4 text-lg text-gray-600">Full Stack Developer | Web Scraper</p>
      <div className="mt-8">
        <Button size="lg" className="mr-4">
          View Portfolio
        </Button>
        <Button size="lg" variant="outline">
          Contact Me
        </Button>
      </div>
    </section>
  );
}
