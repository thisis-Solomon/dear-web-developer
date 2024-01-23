import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogsContext } from "../../store/blogs-context";
import { FiArrowLeft } from "react-icons/fi";

export default function BlogDetails(): JSX.Element {
  const params = useParams();

  const blogCxt = useContext(BlogsContext);
  const { blogs, removeABlog, updateABlog, isEditing, setIsEditing } = blogCxt;

  const blog = blogs.find((blog) => blog.id === params.id);
  const [updateBlog, setUpdateBlog] = useState({
    title: blog?.title,
    content: blog?.content,
  });

  function updatingHandler(identifier, value) {
    setUpdateBlog({
      ...updateBlog,
      [identifier]: value,
    });
  }

  const handleSubmitBlog = (event: FormEvent): void => {
    event.preventDefault();
    updateABlog(params.id, updateBlog);
    setIsEditing(false);
  };

  return (
    <>
      <section className="w-[70%] mx-auto">
        <Link to="/" className="underline flex items-center gap-1 text-lg">
          <FiArrowLeft />
          Blogs
        </Link>
        {!isEditing && (
          <>
            <h1 className="text-2xl font-bold py-5">{blog.title}</h1>
            <p className="text-stone-500 pb-1 border-b">{blog.date}</p>
            <article className="whitespace-pre-line break-words py-10">
              {blog.content}
            </article>
          </>
        )}
        {isEditing && (
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
                value={updateBlog.title}
                onChange={(event) =>
                  updatingHandler("title", event.target.value)
                }
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
                value={updateBlog.content}
                onChange={(event) =>
                  updatingHandler("content", event.target.value)
                }
              ></textarea>
            </div>
            <button>Save</button>
          </form>
        )}
        {!isEditing && (
          <>
            <button onClick={() => removeABlog(params.id)}>Delete</button>
            <button onClick={() => setIsEditing(!isEditing)}>Edit blog</button>
          </>
        )}
      </section>
    </>
  );
}
