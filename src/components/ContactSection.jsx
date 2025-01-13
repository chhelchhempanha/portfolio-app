import { Input } from "@/components/ui/input"; // Shadcn input
import { Button } from "@/components/ui/button"; // Shadcn button

export default function ContactSection() {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" type="email" />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-md p-3"
          rows={5}
        />
        <Button size="lg" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  );
}
