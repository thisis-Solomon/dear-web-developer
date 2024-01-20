import { useContext } from "react";
import BlogListItem from "./BlogListItem";
import { Link } from "react-router-dom";
import { BlogsContext } from "../../store/blogs-context";

export default function BlogList(): JSX.Element {
  const blogCxt = useContext(BlogsContext);
  const { blogs } = blogCxt;

  return (
    <section className="flex flex-col gap-y-10 pt-5 mx-10">
      {blogs.map((blog) => (
        <Link to={`/blog/${blog.id}`} key={blog.id}>
          <BlogListItem
            title={blog.title}
            date={blog.date}
            content={blog.content}
          />
        </Link>
      ))}
    </section>
  );
}
