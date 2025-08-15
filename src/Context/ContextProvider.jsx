import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext(); // Ensure this is correctly exported

const ContextProvider = ({ children }) => {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [examPaper, setExamPaper] = useState("");
  const [loading, setLoading] = useState(false);
  const generateExamPaperFromVideo = async (videoText) => {
    setLoading(true);
    const prompt = `Generate questions based on the following transcript: "${videoText}". Format it as an exam paper with proper numbering.`;
    const response = await run(prompt);
    console.log(response);
    setExamPaper(response);
    setLoading(false);
  };
  const generateExamPaper = async () => {
    if (!selectedBoard || !selectedClass || !selectedSubject) {
      alert("Please select Board, Class, and Subject first.");
      return;
    }

    setLoading(true);
    const prompt = `Generate an exam paper for ${selectedBoard}, Class ${selectedClass}, Subject ${selectedSubject},According to this format and also add numbering to questions "Generate a CBSE-style question paper  following the official format. The question paper should include a header section with a placeholder for the CBSE logo, the title “CENTRAL BOARD OF SECONDARY EDUCATION (CBSE),” class ${selectedClass}and Subject ${selectedSubject} ,” time allowed as 60 minutes, maximum marks as 80, and general instructions such as all questions being compulsory and the need to read carefully. Section A should consist of at least six multiple-choice questions (MCQs), each with four options, and a clearly indicated format for selecting the correct answer. Section B should contain at least four subjective questions requiring written answers, with each question explicitly stating the marks allocated.All questions should be filled no placeholders should be ther  "`;
    const response = await run(prompt);
    console.log(response);
    setExamPaper(response);
    setLoading(false);
  };
  const generateExamPaperFromPyq = async (pyqText) => {
    setLoading(true);
    const prompt = `Generate an exam paper based on the following previous year questions:\n\n"${pyqText}"`;
    const response = await run(prompt);
    setExamPaper(response);
    setLoading(false);
  };

  return (
    <Context.Provider
      value={{
        selectedBoard,
        setSelectedBoard,
        selectedClass,
        setSelectedClass,
        selectedSubject,
        setSelectedSubject,
        generateExamPaper,
        generateExamPaperFromVideo,
        generateExamPaperFromPyq,
        examPaper,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
