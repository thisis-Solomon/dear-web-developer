import Blogs from "../components/contents/Blogs";
import Sidebar from "../components/sidebar/Sidebar";

function HomePage(): JSX.Element {
  return (
    <>
      <Sidebar />
      <Blogs />
    </>
  );
}

export default HomePage;
