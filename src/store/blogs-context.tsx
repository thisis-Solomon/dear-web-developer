import { createContext, useEffect, useState } from "react";

export const BlogsContext = createContext({
  blogs: [],
  addNewBlog: (data) => {},
});

export default function BlogsContextProvider({ children }): JSX.Element {
  const [blogs, setBlogs] = useState(() => {
    const blogStored = localStorage.getItem("blogs");

    return blogStored ? JSON.parse(blogStored) : [];
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  function addNewBlog(data) {
    console.log(data);
    setBlogs((prevBlogs) => {
      return [data, ...prevBlogs];
    });
  }

  const valueCxt = {
    blogs,
    addNewBlog,
  };
  return (
    <BlogsContext.Provider value={valueCxt}>{children}</BlogsContext.Provider>
  );
}
