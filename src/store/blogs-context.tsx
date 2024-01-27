import { ReactNode, createContext, useEffect, useState } from "react";

interface BlogsContextProviderIF {
  children: ReactNode;
}

interface BlogIF {
  id: string;
  title: string;
  content: string;
}

interface ContextValueIF {
  blogs: BlogIF[];
  addNewBlog: (data: BlogIF) => void;
  removeABlog: (id: string) => void;
  updateABlog: (id: string) => void;
  isEditing: boolean;
}

export const BlogsContext = createContext<ContextValueIF>({
  blogs: [],
  addNewBlog: () => {},
  removeABlog: () => {},
  updateABlog: () => {},
  isEditing: false,
});

export default function BlogsContextProvider({
  children,
}: BlogsContextProviderIF): JSX.Element {
  const [blogs, setBlogs] = useState(() => {
    const blogStored = localStorage.getItem("blogs");
    return blogStored ? JSON.parse(blogStored) : [];
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  function addNewBlog(data: BlogIF) {
    setBlogs((prevBlogs: BlogIF[]) => {
      return [data, ...prevBlogs];
    });
  }

  function removeABlog(id: string): void {
    setTimeout(() => {
      const filterdBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(filterdBlogs);
    }, 1000);
  }

  function updateABlog(identifier: string, data: BlogIF) {
    let blog = blogs.find((item) => item.id === identifier);

    if (blog) {
      blog = {
        ...blog,
        title: data.title,
        content: data.content,
        // date: data.date, // Include the date in the update
      };

      setBlogs((prevState) => {
        return [blog, ...prevState.filter((item) => item.id !== identifier)];
      });
    }
  }

  const valueCxt: ContextValueIF = {
    blogs,
    addNewBlog,
    removeABlog,
    updateABlog,
    isEditing,
    setIsEditing,
  };
  return (
    <BlogsContext.Provider value={valueCxt}>{children}</BlogsContext.Provider>
  );
}
