import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogsContext } from "../../store/blogs-context";
import { FiArrowLeft } from "react-icons/fi";

export default function BlogDetails(): JSX.Element {
  const params = useParams();

  const blogsCxt = useContext(BlogsContext);
  const { blogs } = blogsCxt;

  const blog = blogs.find((blog) => blog.id === params.id);

  return (
    <>
      <section className="w-[60%] mx-auto">
        <Link to="/" className="underline flex items-center gap-1 text-lg">
          <FiArrowLeft />
          Blogs
        </Link>
        <h1 className="text-2xl font-bold py-5">{blog.title}</h1>
        <p className="text-stone-500 pb-1 border-b">{blog.date}</p>
        <article className="whitespace-pre-line break-words py-10">
          {blog.content}
        </article>
      </section>
    </>
  );
}
