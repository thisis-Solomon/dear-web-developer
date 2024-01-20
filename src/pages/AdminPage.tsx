import { FormEvent, useContext, useRef } from "react";
import { BlogsContext } from "../store/blogs-context";
import slugify from "slugify";

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
      <section className="border w-full">
        <form onSubmit={handleSubmitBlog} className="w-[80%] mx-4">
          <div>
            <label className="block" htmlFor="title">
              Title
            </label>
            <input
              className="border border-stone-300 w-full"
              type="text"
              placeholder="Title"
              required
              ref={titleRef}
            />
          </div>
          <div>
            <label className="block" htmlFor="title">
              Content
            </label>
            <textarea
              className="border border-stone-300 w-full h-[60vh]"
              rows={5}
              placeholder="Title"
              required
              ref={inputBlog}
            ></textarea>
          </div>
          <button>Publish</button>
        </form>
      </section>
      <div>
        {blogs.map((blog) => (
          <p key={blog.id}>{blog.title}</p>
        ))}
      </div>
    </>
  );
}
