import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Navbar, Hero, Project, Sidebar, Contact } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='bg-[#14131A] container text-white mx-auto w-full flex'>
        <Sidebar />
        <main className='flex-1 pl-0 lg:pl-[20%] w-[calc(100% - 20%)]'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Hero /> */}
          <Project />

        </main>

      </div>
    </BrowserRouter>
  )
}

export default App
