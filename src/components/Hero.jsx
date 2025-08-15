import React from 'react'
import Img from '../assets/Hero.jpg'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/create-paper')
  }
    return (
        <section className="flex flex-col md:flex-row px-2 md:px-5 lg:px-40  justify-between">
          <div className="w-full md:w-1/2 mt-15 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-black-900">
            Generate Customized Exam <span className="text-purple-600">  Papers in Minutes</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-black-900 py-2">
            Tailor assessments to your curriculum with our 
              <span className="text-purple-600"> user-friendly platform.</span>
            </p>
            <p className="text-base md:text-lg  font-normal text-black-900">
            ​Revolutionize your assessment creation process with our intuitive exam paper generator.  Save valuable time and enhance the assessment experience with our user-friendly tool.
            </p>
            <button onClick={handleClick} className="mt-8 cursor-pointer md:mb-4 rounded-md px-3 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold">
              Create Now
            </button>
          </div>
    
          <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 md:ml-10">
            <img
              src={Img}
              alt="Learning"
              className="w-3/4 md:w-[280px] lg:w-[340px] h-auto object-cover rounded-lg"
            />
            
          </div>
        </section>
      );
}

export default Hero
