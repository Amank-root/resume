import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex sticky shadow-md bg-[#14131A] top-0 z-20 bg-body p-5 text-info justify-between">
      <a className='text-xl cursor-pointer'># Home</a>
      <div className="flex items-center gap-5">
        <Link to="/contact" className="text-xl cursor-pointer">
        <button className="h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 active:scale-95 active:shadow-inner bg-[#2bd576] text-highlight text-xs py-2 px-4">
          Contact Me{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </button>
        </Link>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex lg:hidden cursor-pointer hover:text-primary transition-colors"
          >
            <line x1={4} x2={20} y1={12} y2={12} />
            <line x1={4} x2={20} y1={6} y2={6} />
            <line x1={4} x2={20} y1={18} y2={18} />
          </svg>
        </button>
      </div>
    </nav>

  )
}

export default Navbar