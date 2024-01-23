import { FormEvent, useContext, useRef } from "react";
import { BlogsContext } from "../store/blogs-context";
import slugify from "slugify";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";

interface BlogIF {
  id: string;
  title: string;
  content: string;
  date: string;
}

export default function AdminPage(): JSX.Element {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const inputBlog = useRef<HTMLTextAreaElement | null>(null);

  const blogCxt = useContext(BlogsContext);
  const { addNewBlog, blogs } = blogCxt;

  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formatedDate = currentDate.toLocaleDateString("en-US", options);

  const handleSubmitBlog = (event: FormEvent): void => {
    event.preventDefault();

    if (titleRef.current && inputBlog.current) {
      const title = titleRef.current.value;
      const content = inputBlog.current.value;

      const data: BlogIF = {
        id: slugify(title, { lower: true }),
        title,
        content,
        date: formatedDate,
      };

      addNewBlog(data);
    }
  };

  return (
    <>
      <section className="w-[80%]">
        <form onSubmit={handleSubmitBlog} className="max-w-full">
          <FormInput label="Title" inputValue={titleRef} />
          <FormInput label="Content" inputValue={inputBlog} />
          <button className="px-4 py-2 border border-stone-200 w-full font-bold uppercase rounded-md shadow-sm shadow-neutral-400/20">
            Publish
          </button>
        </form>
      </section>
      <ul className="mt-5">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="mb-2 p-2 bg-stone-100 rounded-md font-semibold"
          >
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
