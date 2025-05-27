import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MyContainer from "../../shared/MyContainer/MyContainer";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { MediBlogPosts } from "@/faker";
import BlogItem from "./BlogItem";

export default function BlogSection() {
  return (
    <MyContainer>
      <div className="">
        <SectionTitle
          sectionSubTitle="Stay informed with expert insights on health, wellness, and medicine
          curated by professionals."
          sectionTitle="Latest Health Tips & Articles"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {MediBlogPosts?.slice(0, 3)?.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </MyContainer>
  );
}
