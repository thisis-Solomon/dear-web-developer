import { Outlet } from "react-router-dom";
import MainHeader from "../components/header/MainHeader";

export default function RootLayout(): JSX.Element {
  return (
    <>
      <MainHeader />
      <main className="flex gap-x-5 mt-10 container mx-auto max-w-[70%]">
        <Outlet />
      </main>
    </>
  );
}
