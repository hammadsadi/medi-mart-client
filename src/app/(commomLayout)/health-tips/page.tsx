"use client";
import MyContainer from "@/components/modules/shared/MyContainer/MyContainer";
import SectionTitle from "@/components/modules/shared/SectionTitle/SectionTitle";
import { MediBlogPosts } from "@/faker";
import BlogItem from "@/components/modules/Home/BlogSection/BlogItem";

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
        {MediBlogPosts.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </MyContainer>
  );
}
