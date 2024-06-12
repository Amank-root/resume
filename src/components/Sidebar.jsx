import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside className="hidden text-white lg:flex h-screen fixed w-screen sm:w-[20%] z-30">
            <div className="toggle flex flex-col lg:m-5 w-full">
                <Link to='/' className="hidden lg:flex gap-2 p-5 pt-0">Aman Kushwaha</Link>
                <div className="flex relative flex-col h-full p-5 bg-[#1C1B23] text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5">
                    <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
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
                            className="text-primary"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </div>
                    <a
                        className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                        href="/"
                    >
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
                            className="lucide lucide-home"
                        >
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>{" "}
                        Home
                    </a>
                    <a
                        className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                        href="/"
                    >
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
                            className="lucide lucide-flame"
                        >
                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                        </svg>{" "}
                        Projects
                    </a>
                    <a
                        className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                        href="/"
                    >
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
                            className="lucide lucide-code"
                        >
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>{" "}
                        Current
                    </a>
                    <a
                        className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                        href="#skills"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            width={24}
                            height={24}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-video" 
                        >
                            <path fill='#fff' d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
                        </svg>

                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-video"
                        >
                            <path d="m22 8-6 4 6 4V8Z" />
                            <rect width={14} height={12} x={2} y={6} rx={2} ry={2} />
                        </svg>{" "} */}
                        Skills
                    </a>
                    <div className="mt-5">Socials</div>
                    <a
                        target="_blank"
                        className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                        href="https://www.instagram.com/amankushwaha_28/"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#b5179e"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-instagram"
                        >
                            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>{" "}
                        Instagram
                    </a>
                    <a
                        target="_blank"
                        className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                        href="https://github.com/Amank-root"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#2a9d8f"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>{" "}
                        Github
                    </a>
                    <a
                        target="_blank"
                        className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                        href="https://www.kaggle.com/amankroot"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="#74C0FC"
                                d="M304.2 501.5L158.4 320.3 298.2 185c2.6-2.7 1.7-10.5-5.3-10.5h-69.2c-3.5 0-7 1.8-10.5 5.3L80.9 313.5V7.5q0-7.5-7.5-7.5H21.5Q14 0 14 7.5v497q0 7.5 7.5 7.5h51.9q7.5 0 7.5-7.5v-109l30.8-29.3 110.5 140.6c3 3.5 6.5 5.3 10.5 5.3h66.9q5.3 0 6-3z"
                            />
                        </svg>{" "}
                        Kaggle
                    </a>
                    <a
                        target="_blank"
                        className="flex bg-transparent items-center placeholder:text-info transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-4"
                        href="https://www.linkedin.com/in/amank-root"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#0277b5"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-linkedin"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width={4} height={12} x={2} y={9} />
                            <circle cx={4} cy={4} r={2} />
                        </svg>{" "}
                        Linkedin
                    </a>
                </div>
            </div>
        </aside>

    )
}

export default Sidebar;