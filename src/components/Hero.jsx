import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/profile.jpg';
const Hero = () => {
  return (
    <section>
      <div className='w-full h-[90vh] flex items-center justify-between content-center p-8'>
        <div className="mytext">
          <h1 className="text-6xl font-bold text-white">Hello, I'm </h1>
          <TypeAnimation sequence={["Aman Kushwaha", 1000]} repeat={0} wrapper='h2' className="text-[#2bd576] text-6xl font-bol" />
          <p className="text-lg text-white">I'm a {" "}
            <TypeAnimation
              sequence={['Web Developer', 1000, 'Designer', 1000, 'Freelancer', 1000]}
              wrapper='span'
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </p>
          <button className="bg-[#2bd576] text-white px-5 py-2 rounded-md mt-5">View Projects</button>
        </div>
        <div className="image">
          <img src={profile} alt="" className='rounded-full' />
        </div>
      </div>
    </section>
  )
}

export default Hero;
