import { CMS_NAME } from "../lib/constants";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
export default function Intro() {
  const IMG = "/assets/blog/authors/olamide.jpg";
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-10 mb-10 md:mb-12">
      <div className="flex justify-center pb-10">
        <img
          src={IMG}
          className="h-40 w-40 rounded-full object-cover"
          alt="cover-photo"
        />
        <div className="pl-4 mt-6">
          <h1 className="text md:text-5xl  font-semibold">Hey, I'm Olamide</h1>
          <span className="text-base">
            I practice software development, and in my free time, i enjoy
            listening to music, watching sports and playing video games.
          </span>
          <br />
          <div className="flex pt-4">
            <Link href="https://github.com/Sholamide">
              <a className="cursor-pointer bg-black dark:bg-white text-white dark:text-black border rounded-full px-3 py-3 border-black  hover:bg-white hover:text-black">
                <FaGithub />
              </a>
            </Link>
            <Link href="https://twitter.com/lordolamider">
              <a className="cursor-pointer bg-black dark:bg-white text-white dark:text-black border rounded-full px-3 py-3 border-black  hover:bg-white hover:text-black ml-4">
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/sholuade-olamide-148159174/">
              <a className="cursor-pointer bg-black dark:bg-white text-white dark:text-black rounded-full px-3 py-3 border-black border  hover:bg-white hover:text-black ml-4">
                <FaLinkedin />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
