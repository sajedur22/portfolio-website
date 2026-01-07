"use client";

import { useParams } from "next/navigation";

export default function BlogDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl sm:text-4xl md:text-4xl font-serif text-primary-foreground"> My Blog Post {id}</h1>
      <p className="text-1xl sm:text-2xl md:text-2xl font-serif text-primary-foreground">Coming soon ........ {id}.</p>
    </div>
  );
}
