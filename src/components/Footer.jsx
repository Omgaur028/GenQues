
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
  import React from 'react'
  
  const Footer = () => {
    return (
        <footer className="bg-gradient-to-r  from-purple-700 to-blue-400 text-white py-5 mt-10 px-5">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Use Cases</h3>
              <ul className="space-y-2 text-sm">
                <li>For Educators</li>
                <li>For Schools</li>
                <li>For Coaching Institutes</li>
                <li>Online Exams</li>
                <li>Automated Paper Generation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>Exam Generator</li>
                <li>Question Bank</li>
                <li>Automated Grading</li>
                <li>Customizable Tests</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>Help Center</li>
                <li>Blog</li>
                <li>Guides</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
    
          <div className="max-w-6xl mx-auto mt-10 border-t border-purple-400 pt-5 flex flex-col md:flex-row justify-between items-center">
          
    
            <div className="flex space-x-4 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-gray-300" />
              <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
           
            </div>
          </div>
    
          <div className="text-center text-sm text-gray-300 mt-5">© 2025 ExamGen. All rights reserved.</div>
        </footer>
      );
  }
  
  export default Footer
  
 