"use client";

import { Button } from "@/components/ui/button"; // Import Shadcn button
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-end items-center px-6 py-3 shadow-sm bg-white sticky top-0 z-10">
      {/* <div className="text-2xl font-bold">My Portfolio</div> */}
      <div className="flex space-x-4">
        <Link href="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href="#projects">
          <Button variant="ghost">Projects</Button>
        </Link>
        <Link href="#contact">
          <Button variant="outline">Contact</Button>
        </Link>
      </div>
    </nav>
  );
}
