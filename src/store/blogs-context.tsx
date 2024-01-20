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
}

export const BlogsContext = createContext<ContextValueIF>({
  blogs: [],
  addNewBlog: () => {},
});

export default function BlogsContextProvider({
  children,
}: BlogsContextProviderIF): JSX.Element {
  const [blogs, setBlogs] = useState(() => {
    const blogStored = localStorage.getItem("blogs");

    return blogStored ? JSON.parse(blogStored) : [];
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  function addNewBlog(data: BlogIF) {
    console.log(data);
    setBlogs((prevBlogs: BlogIF[]) => {
      return [data, ...prevBlogs];
    });
  }

  const valueCxt: ContextValueIF = {
    blogs,
    addNewBlog,
  };
  return (
    <BlogsContext.Provider value={valueCxt}>{children}</BlogsContext.Provider>
  );
}
