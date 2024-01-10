import { useState } from "react";
import BlogListItem from "./BlogListItem";

type blogT = {
  title: string;
  date: string | null;
  content: string;
};

export default function BlogList(): JSX.Element {
  const [blogs, setBlogs] = useState<blogT[]>([
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      date: "Jan 09, 2024",
      content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur suscipit est impedit illum optio et sequi dolor
            voluptatum ratione doloribus quaerat, nisi, sit corrupti quas
            obcaecati. Incidunt porro atque totam, omnis nulla necessitatibus
            magnam nihil blanditiis iste vero deserunt? Fugiat?`,
    },
  ]);

  return (
    <section className="flex flex-col gap-y-10 pt-5 mx-10">
      {blogs.map((blog) => (
        <BlogListItem
          title={blog.title}
          date={blog.date}
          content={blog.content}
        />
      ))}
    </section>
  );
}
