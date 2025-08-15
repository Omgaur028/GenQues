import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../Context/ContextProvider";

const SERVER_URI = `http://localhost:3002/api/questions`;

const Pyq = ({ board, className, subject, year }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { generateExamPaperFromPyq } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    

    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(SERVER_URI, {
          params: {
            board,
            class: className,
            subject,
            year,
          },
        });

        if (response.data.length > 0) {
          setQuestions(response.data);
        } else {
          alert("No previous year questions found for the selected filters.");
        }
      } catch (error) {
        console.error("Error fetching previous year questions:", error);
      }
      setLoading(false);
    };

    fetchQuestions();
  }, [board, className, subject, year]);

  const handleGenerate = async () => {
    if (questions.length === 0) {
      alert("No questions available to generate an exam paper.");
      return;
    }

    setLoading(true);
    try {
      const formattedQuestions = questions.map((q) => q.Question).join("\n");
      await generateExamPaperFromPyq(formattedQuestions);
      navigate("/generate"); // Redirect to Generate page
    } catch (error) {
      console.error("Error generating exam paper:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 flex flex-col items-center min-h-screen">
      <h2 className="text-xl font-bold mb-4">Previous Year Questions</h2>

      {loading ? (
        <p>Loading questions...</p>
      ) : questions.length > 0 ? (
        <ul className="list-disc pl-5 text-left">
          {questions.map((q, index) => (
            <li key={index} className="mb-2">
              {q.Question}
            </li>
          ))}
        </ul>
      ) : (
        <p>No questions found for the selected filters.</p>
      )}

      <button
        onClick={handleGenerate}
        disabled={loading || questions.length === 0}
        className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
      >
        {loading ? "Generating..." : "Generate Exam Paper"}
      </button>
    </div>
  );
};

export default Pyq;
