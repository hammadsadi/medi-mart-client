"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import MyContainer from "@/components/modules/shared/MyContainer/MyContainer";
import SectionTitle from "@/components/modules/shared/SectionTitle/SectionTitle";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Immunity Boosters You Should Know",
    excerpt:
      "Discover natural ways to strengthen your immune system with supplements and daily habits that really work.",
    image: "/images/blogs/immunity.jpg",
    date: "May 20, 2025",
    slug: "immunity-boosters",
  },
  {
    id: 2,
    title: "Managing Diabetes: Essential Tips for Daily Control",
    excerpt:
      "Learn practical steps to manage your blood sugar levels and stay ahead of diabetes complications.",
    image: "/images/blogs/diabetes.jpg",
    date: "May 15, 2025",
    slug: "diabetes-tips",
  },
  {
    id: 3,
    title: "Why Hydration is More Important Than You Think",
    excerpt:
      "Explore the role of water in your health and how dehydration can silently affect your wellbeing.",
    image: "/images/blogs/hydration.jpg",
    date: "May 10, 2025",
    slug: "importance-of-hydration",
  },
  {
    id: 4,
    title: "Common Cold vs Flu: Know the Difference",
    excerpt:
      "Symptoms overlap but knowing what you're dealing with helps you treat it better. Here's how to spot the difference.",
    image: "/images/blogs/cold-vs-flu.jpg",
    date: "May 5, 2025",
    slug: "cold-vs-flu",
  },
];

export default function BlogPage() {
  return (
    <MyContainer>
      {/* Page Header */}

      <SectionTitle
        sectionSubTitle="Expert-written insights on health, medicine, wellness, and more — to
          keep you informed and empowered."
        sectionTitle=" Health Tips & Articles"
      />
      {/* Blog Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex items-center text-sm text-muted-foreground mb-2 gap-2">
                <CalendarDays className="w-4 h-4" />
                {blog.date}
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              <Button variant="link" className="px-0 text-primary" asChild>
                <Link href={`/blogs/${blog.slug}`}>Read More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </MyContainer>
  );
}
