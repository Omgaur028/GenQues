import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-screen fixed top-0 py-4 bg-white z-50 flex items-center justify-between px-10 shadow-md">
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-purple-600 text-2xl">
          ☰
        </button>
      </div>

      <div className="hidden md:flex">
        <h1 className="font-bold text-2xl text-purple-600">Gen-Ques</h1>
      </div>

      <div className="hidden md:flex space-x-6">
        {["Home", "Services", "FAQs", "About Us"].map((item, index) => (
          <button
            key={index}
            className="font-semibold relative p-1 text-gray-900 transition duration-300 hover:text-purple-600 hover:underline"
            onClick={() => handleClick(`/${item.toLowerCase().replace(" ", "")}`)}
          >
            {item}
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-10 space-y-4">
          {["Home", "Services", "FAQs", "About Us"].map((item, index) => (
            <button
              key={index}
              className="font-semibold block w-full text-left p-2 text-gray-900 transition duration-300 hover:text-purple-600 hover:underline"
              onClick={() => handleClick(`/${item.toLowerCase().replace(" ", "")}`)}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <div>
        <button
          onClick={() => handleClick("/login")}
          className="border rounded px-5 py-2 border-purple-700 bg-purple-500 text-white font-semibold transition duration-300 hover:text-purple-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
