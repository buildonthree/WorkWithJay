"use client";

import ContactBentoCard from "@/components/cards/contact-form";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Get in Touch
        </h1>
        <ContactBentoCard />
      </div>
    </main>
  );
}