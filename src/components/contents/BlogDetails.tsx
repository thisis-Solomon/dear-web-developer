import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BlogsContext } from "../../store/blogs-context";
import { FiArrowLeft } from "react-icons/fi";
import FormInput from "../FormInput";

export default function BlogDetails(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();

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

  function deleteBlogHandler() {
    removeABlog(params.id);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

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
            <FormInput
              label="Title"
              value={updateBlog.title}
              onChange={(event) => updatingHandler("title", event.target.value)}
            />
            <FormInput
              label="Content"
              value={updateBlog.content}
              onChange={(event) =>
                updatingHandler("content", event.target.value)
              }
            />
            <button className="py-3 border font-bold uppercase w-full mt-4 rounded-md shadow-md shadow-stone-300/25">
              Save
            </button>
          </form>
        )}
        {!isEditing && (
          <div className="flex justify-between border-t-2 border-stone-200/60">
            <button
              className="py-3 border font-bold uppercase w-[40%] mt-4 rounded-md shadow-md shadow-stone-300/25"
              onClick={deleteBlogHandler}
            >
              Delete
            </button>
            <button
              className="py-3 border font-bold uppercase w-[40%] mt-4 rounded-md shadow-md shadow-stone-300/25"
              onClick={() => setIsEditing(!isEditing)}
            >
              Edit blog
            </button>
          </div>
        )}
      </section>
    </>
  );
}
