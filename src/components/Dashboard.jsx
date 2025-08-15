import React from "react";
import { Link } from "react-router-dom";
import {
  FaRegFileAlt,
  FaClipboardList,
  FaFileInvoice,
  FaGraduationCap,
} from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineManageAccounts } from "react-icons/md";

const Dashboard = () => {
  const menuItems = [
    {
      name: "Create Paper",
      icon: <FaRegFileAlt />,
      bg: "bg-green-600",
      route: "/create-paper",
    },
    {
      name: "My Papers",
      icon: <FaClipboardList />,
      bg: "bg-teal-500",
      route: "/my-papers",
    },
    {
      name: "Pdf-Too-Questions",
      icon: <FaFileInvoice />,
      bg: "bg-yellow-500",
      route: "/ptq",
    },
    {
      name: "video-to-questions",
      icon: <HiOutlineDocumentText />,
      bg: "bg-orange-400",
      route: "/video-to-questions",
    },
    {
      name: "Dynamic Blueprint",
      icon: <HiOutlineDocumentText />,
      bg: "bg-orange-500",
      route: "/dynamic-blueprint",
    },
    {
      name: "Evaluate",
      icon: <FaGraduationCap />,
      bg: "bg-red-500",
      route: "/evaluate",
    },
    {
      name: "Syllabus",
      icon: <MdOutlineManageAccounts />,
      bg: "bg-orange-300",
      route: "/syllabus",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-5 border-r">
        <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>
        <nav className="mt-5 space-y-3">
          <p className="font-semibold text-gray-600">EXAMS</p>
          <ul className="space-y-2">
            {menuItems.slice(0, 5).map((item, index) => (
              <li key={index}>
                <Link
                  to={item.route}
                  className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-all cursor-pointer"
                >
                  {item.icon} {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <p className="font-semibold text-gray-600 mt-4">INSTITUTE</p>
          <ul className="space-y-2">
            {[
              { name: "My Institute", route: "/my-institute" },
              { name: "Batches", route: "/batches" },
              { name: "Students", route: "/students" },
              { name: "Teachers", route: "/teachers" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.route}
                  className="text-gray-700 hover:text-purple-600 transition-all cursor-pointer flex items-center"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-800">Exams</h2>
        <div className="grid grid-cols-4 gap-6 mt-6">
          {menuItems.map((item, index) => (
            <Link
              to={item.route}
              key={index}
              className={`p-5 rounded-lg text-white text-center ${item.bg} shadow-md cursor-pointer hover:scale-105 transition-all`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
