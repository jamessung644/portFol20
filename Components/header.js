import Link from "next/link";
import DarkModeToggleButton from "./dark-mode_toggle_button";

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href="/">
              <span className="cursor-pointer mr-5 hover:text-gray-900">Home</span>
            </Link>
            <Link href="/portfolio">
              <span className="cursor-pointer mr-5 hover:text-gray-900">PortFolio</span>
            </Link>
            <Link href="/ideabank">
              <span className="cursor-pointer mr-5 hover:text-gray-900">Idea Bank</span>
            </Link>
            <a href="https://www.instagram.com/hhash_suhan/" className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          <Link href="/">
            <span className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 dark:text-gray-300 lg:items-center lg:justify-center mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">SubPrime LAB</span>
            </span>
          </Link>

          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            {/*다크보드 토글 버튼*/}
            <DarkModeToggleButton/>
          </div>
        </div>
      </header>
    </div>
  );
}
