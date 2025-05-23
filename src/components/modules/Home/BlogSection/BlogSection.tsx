import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    title: "Top 5 Immunity Boosters You Should Know",
    excerpt:
      "Discover natural ways to strengthen your immune system with supplements and daily habits that really work.",
    image:
      "https://www.drniveditadadu.com/nivedita-admin/uploads/Top_5_Immunity_Boosting_Food_Items.jpg",
    date: "May 20, 2025",
    link: "/blogs/immunity-boosters",
  },
  {
    id: 2,
    title: "Managing Diabetes: Essential Tips for Daily Control",
    excerpt:
      "Learn practical steps to manage your blood sugar levels and stay ahead of diabetes complications.",
    image:
      "https://media-blog.lalpathlabs.com/apis/8e23b844-792e-4c98-9d31-abe2f78329e3.jpg",
    date: "May 15, 2025",
    link: "/blogs/diabetes-tips",
  },
  {
    id: 3,
    title: "Why Hydration is More Important Than You Think",
    excerpt:
      "Explore the role of water in your health and how dehydration can silently affect your wellbeing.",
    image:
      "https://images.twnmm.com/c55i45ef3o2a/2HAItpqpud4xhtnToCUSoW/b13887556d410ec3aaea602d340e9f58/GETTY_IMAGES_-_man_drinking_bottled_water.jpg",
    date: "May 10, 2025",
    link: "/blogs/importance-of-hydration",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Latest Health Tips & Articles
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Stay informed with expert insights on health, wellness, and medicine
          curated by professionals.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all overflow-hidden text-left"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2 gap-2">
                    <CalendarDays className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
                <Button
                  variant="link"
                  className="px-0 text-primary w-fit"
                  asChild
                >
                  <Link href={blog.link} className="flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
