import React, { useState, useContext } from "react";
import { Context } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";

const CreatePaper = () => {
  const {
    selectedBoard,
    selectedClass,
    selectedSubject,
    setSelectedBoard,
    setSelectedClass,
    setSelectedSubject,
    generateExamPaper,
  } = useContext(Context);
  const navigate = useNavigate();

  const boards = ["CBSE", "ICSE", "State Board", "IB", "Cambridge"];
  const classes = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const subjects = ["Math", "Science", "English", "Social Studies"];

  const [step, setStep] = useState(1);

  const handleBoardSelect = (board) => {
    setSelectedBoard(board);
    setStep(2);
  };

  const handleClassSelect = (cls) => {
    setSelectedClass(cls);
    setStep(3);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setStep(4);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      {step === 1 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800">Select Board</h2>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {boards.map((board, index) => (
              <button
                key={index}
                onClick={() => handleBoardSelect(board)}
                className="bg-blue-500 text-white p-4 rounded-lg cursor-pointer hover:bg-purple-600 transition-all w-40"
              >
                {board}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800">Select Class</h2>
          <div className="grid grid-cols-4 gap-4 mt-6">
            {classes.map((cls, index) => (
              <button
                key={index}
                onClick={() => handleClassSelect(cls)}
                className="bg-green-500 text-white p-4 rounded-lg cursor-pointer hover:bg-purple-600 transition-all w-20"
              >
                {cls}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800">
            Select Subject
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {subjects.map((subject, index) => (
              <button
                key={index}
                onClick={() => handleSubjectSelect(subject)}
                className="bg-yellow-500 text-white p-4 rounded-lg cursor-pointer hover:bg-purple-600 transition-all w-40"
              >
                {subject}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Selected:
          </h2>
          <p className="text-lg text-gray-600">
            📚 <strong>Board:</strong> {selectedBoard} | 🎓{" "}
            <strong>Class:</strong> {selectedClass} | 📖{" "}
            <strong>Subject:</strong> {selectedSubject}
          </p>

          <button
            onClick={() => {
              generateExamPaper();
              navigate("/generate");
            }}
            className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all"
          >
            Generate Paper
          </button>
        </>
      )}
    </div>
  );
};

export default CreatePaper;
