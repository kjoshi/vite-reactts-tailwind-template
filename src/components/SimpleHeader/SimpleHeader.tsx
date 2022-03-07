import { FC } from "react";

const SimpleHeader: FC = () => {
  return (
    <nav className="container p-4 mx-auto">
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-lg text-black font-bold">Zeus</div>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex gap-10 text-sm">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <button className="px-8 py-3 rounded-md border font-medium hover:bg-red-700 hover:text-white text-xs">
            Log in
          </button>
          <button className="px-8 py-3 rounded-md border font-medium text-white bg-red-500 hover:bg-red-700 text-xs">
            Sign Up
          </button>
        </div>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default SimpleHeader;
