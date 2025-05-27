import { Button } from "@/components/ui/button";
import { TBlogPost } from "@/types/blog.types";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ blog }: { blog: TBlogPost }) => {
  return (
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
          <Link href={`/health-tips/${blog.slug}`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogItem;
