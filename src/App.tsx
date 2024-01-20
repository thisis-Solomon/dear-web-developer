import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import BlogDetails from "./components/contents/BlogDetails";
import AdminPage from "./pages/AdminPage";
import BlogsContextProvider from "./store/blogs-context";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]);

function App() {
  return (
    <BlogsContextProvider>
      <RouterProvider router={routes} />;
    </BlogsContextProvider>
  );
}

export default App;
