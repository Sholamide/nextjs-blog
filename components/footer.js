import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-accent-3 border-t border-accent-2">
      <Container>
        <div className="py-2 flex flex-col lg:flex-row items-center">
          <h3 className="text-base lg:text-basel text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Handfully crafted with ❤️ using NextJS.
          </h3>
          <div className="flex flex-col font-semibold lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            Copyright © {new Date().getFullYear()}, all rights reserved.
            <a
              href="https://twitter.com/lordolamider"
              className="mx-3 bg-black hover:bg-white hover:text-black border rounded-full border-black text-white py-3 px-3 lg:px-3 duration-200 transition-colors mb-6 lg:mb-0"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/Sholamide"
              className="mx-3 bg-black hover:bg-white border rounded-full border-black text-white py-3 px-3 lg:px-3 duration-200 transition-colors mb-6 lg:mb-0"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sholuade-olamide-148159174/"
              className="mx-3 bg-black hover:bg-white border rounded-full border-black text-white py-3 px-3 lg:px-3 duration-200 transition-colors mb-6 lg:mb-0"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
