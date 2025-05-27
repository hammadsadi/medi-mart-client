"use client";

import { notFound, useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { MediBlogPosts } from "@/faker";
import MyContainer from "@/components/modules/shared/MyContainer/MyContainer";

export default function BlogDetailsPage() {
  const { slug } = useParams();
  const blog = MediBlogPosts.find((post) => post.slug === slug);

  if (!blog) return notFound();

  return (
    <MyContainer>
      <div className="space-y-3">
        <Badge className="text-sm px-3 py-1 bg-purple-100 hover:bg-purple-100 text-primary">
          {format(new Date(blog.date), "MMMM dd, yyyy")}
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {blog.title}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">{blog.excerpt}</p>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-md max-w-4xl mx-auto my-6">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      <Separator className="my-6" />

      <div className="prose prose-lg prose-purple max-w-none text-gray-800">
        <p className="font-medium text-xl mb-4">{blog?.excerpt}</p>
        <p>{blog.longDescription}</p>
      </div>
    </MyContainer>
  );
}
