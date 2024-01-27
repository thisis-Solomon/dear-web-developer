import { useContext } from "react";
import BlogListItem from "./BlogListItem";
import { Link } from "react-router-dom";
import { BlogsContext } from "../../store/blogs-context";

export default function BlogList(): JSX.Element {
  const blogCxt = useContext(BlogsContext);
  const { blogs } = blogCxt;

  if (blogs.length === 0) {
    return (
      <h1 className="font-bold uppercase text-2xl text-center">
        All the blogs where cleared please contact the Admin
      </h1>
    );
  }

  return (
    <section className="flex flex-col gap-y-10 pt-5 mx-3 max-w-2xl">
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
