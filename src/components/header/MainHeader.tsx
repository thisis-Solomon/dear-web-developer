import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function MainHeader(): JSX.Element {
  return (
    <header className="bg-sky-300/30 mx-auto w-full">
      <section className="container flex place-items-center justify-between max-w-[70%] mx-auto">
        <h1 className="text-2xl py-3 font-bold">
          <Link to="/">Dear Web Developer...</Link>
        </h1>
        <nav>
          <p className="text-center py-2">Follow us</p>
          <ul className="flex text-2xl gap-x-4 pb-5">
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>

            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>

            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default MainHeader;
