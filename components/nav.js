import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <nav className=" z-50 flex p-8 md:my-8 mx-auto bg-white dark:bg-black">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="rounded p-3 h-10 w-10"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <div class="flex">
          <Link href="https://twitter.com/lordolamider">
            <a className="mx-3 bg-black dark:bg-white hover:bg-white dark:text-black border rounded-full border-black text-white py-3 px-3 lg:px-3 duration-200 transition-colors lg:mb-0">
              <FaTwitter />
            </a>
          </Link>
          <Link href="https://github.com/Sholamide">
            <a className="mx-3 bg-black hover:bg-white dark:bg-white border rounded-full border-black text-white dark:text-black py-3 px-3 lg:px-3 duration-200 transition-colors lg:mb-0">
              <FaGithub />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/sholuade-olamide-148159174/">
            <a className="mx-3 bg-black dark:bg-white hover:bg-white border dark:text-black rounded-full border-black text-white py-3 px-3 lg:px-3 duration-200 transition-colors lg:mb-0">
              <FaLinkedin />
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
}
