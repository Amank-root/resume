import React from 'react'

const Project = () => {
  return (
    <div>
      <section className="flex flex-col gap-8 p-8 mt-5 ">
        <div class="text-xl font-medium text-zinc-200">Projects</div>
        <div className='flex flex-wrap w-full'>
          <div className="projects flex w-[70%] gap-8 flex-wrap">
            <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis w-[40%]">
              <img
                alt="spotify"
                loading="lazy"
                width={700}
                height={700}
                decoding="async"
                data-nimg={1}
                className="aspect-video object-cover"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=750&q=75 1x, /_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75 2x"
                src="/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75"
              />
              <div className="flex flex-col px-4 py-2 h-24">
                <div className="flex font-bold">Computer Vision Attendence System</div>
                <div className="flex text-info text-xs">
                  python, opencv, numpy, face_recognition, dlib, pandas, tkinter
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis w-[40%]">
              <img
                alt="spotify"
                loading="lazy"
                width={700}
                height={700}
                decoding="async"
                data-nimg={1}
                className="aspect-video object-cover"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=750&q=75 1x, /_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75 2x"
                src="/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75"
              />
              <div className="flex flex-col px-4 py-2 h-24">
                <div className="flex font-bold">Discord Clone</div>
                <div className="flex text-info text-xs">
                  Next.js 13, React Hook Form, Zustand, Shadcn, Typescript
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis w-[40%]">
              <img
                alt="spotify"
                loading="lazy"
                width={700}
                height={700}
                decoding="async"
                data-nimg={1}
                className="aspect-video object-cover"
                style={{ color: "transparent" }}
                srcSet="/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=750&q=75 1x, /_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75 2x"
                src="/_next/image?url=%2Fprojects%2Fdiscord-clone.jpeg&w=1920&q=75"
              />
              <div className="flex flex-col px-4 py-2 h-24">
                <div className="flex font-bold">Discord Clone</div>
                <div className="flex text-info text-xs">
                  Next.js 13, React Hook Form, Zustand, Shadcn, Typescript
                </div>
              </div>
            </div>


          </div>









          {/* <div className="flex flex-col gap-8 w-[20%]"> */}
          <div className="sideprojects flex flex-col gap-8 w-[30%]">
            <div className="grid bg-cardPrimary gap-6 p-6 shadow-lg">
              <div className="text-xl font-medium mt-2 text-zinc-200">More projects</div>
              <div className="grid grid-cols-1 gap-4 rounded-lg">
                <a target="_blank" href="https://github.com/Amank-root/">
                  <div className="flex items-center gap-1 text-primary rounded-lg">
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
                      className="lucide lucide-shirt"
                    >
                      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                    </svg>
                    <div className="flex flex-1 flex-col px-4 py-2">
                      <div className="flex text-sm font-medium">Coming soon</div>
                      <div className="flex text-info text-xs">
                        {/* Next.js 13, Drizzle, PostgreSql, Docker, ShadCn */}
                        TechStack
                      </div>
                    </div>
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
                      className="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </a>
                <a target="_blank" href="https://github.com/Amank-root/">
                  <div className="flex items-center gap-1 text-primary rounded-lg">
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
                      className="lucide lucide-shirt"
                    >
                      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                    </svg>
                    <div className="flex flex-1 flex-col px-4 py-2">
                      <div className="flex text-sm font-medium">Coming soon</div>
                      <div className="flex text-info text-xs">
                        {/* Next.js 13, Drizzle, PostgreSql, Docker, ShadCn */}
                        TechStack
                      </div>
                    </div>
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
                      className="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </a>
                <a target="_blank" href="https://github.com/Amank-root/">
                  <div className="flex items-center gap-1 text-primary rounded-lg">
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
                      className="lucide lucide-shirt"
                    >
                      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                    </svg>
                    <div className="flex flex-1 flex-col px-4 py-2">
                      <div className="flex text-sm font-medium">Coming soon</div>
                      <div className="flex text-info text-xs">
                        {/* Next.js 13, Drizzle, PostgreSql, Docker, ShadCn */}
                        TechStack
                      </div>
                    </div>
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
                      className="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </a>
                <a target="_blank" href="https://github.com/Amank-root/">
                  <div className="flex items-center gap-1 text-primary rounded-lg">
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
                      className="lucide lucide-shirt"
                    >
                      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                    </svg>
                    <div className="flex flex-1 flex-col px-4 py-2">
                      <div className="flex text-sm font-medium">Coming soon</div>
                      <div className="flex text-info text-xs">
                        {/* Next.js 13, Drizzle, PostgreSql, Docker, ShadCn */}
                        TechStack
                      </div>
                    </div>
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
                      className="lucide lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </a>
                
                
                
              </div>
            </div>

          </div>
        </div>


      </section>


    </div>
  )
}

export default Project