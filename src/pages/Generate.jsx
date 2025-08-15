import { useContext, useRef } from "react";
import { Context } from "../Context/ContextProvider";
import ReactMarkdown from "react-markdown";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Generate = () => {
  const { examPaper, loading } = useContext(Context);
  const contentRef = useRef(null);

  // Extract answers from the examPaper text
  const extractAnswers = (text) => {
    const lines = text.split("\n");
    const questions = [];
    const answers = [];

    lines.forEach((line, index) => {
      if (line.toLowerCase().includes("answer:")) {
        answers.push(line);
      } else {
        questions.push(line);
      }
    });

    return { questions: questions.join("\n"), answers: answers.join("\n") };
  };

  const { questions, answers } = extractAnswers(examPaper);

  const handleDownloadPDF = () => {
    if (!contentRef.current) return;

    html2canvas(contentRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("Exam_Paper_with_Answers.pdf");
    });
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Generated Exam Paper
      </h1>

      {loading ? (
        <div className="flex flex-col items-center justify-center h-40">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-3 text-gray-600 text-lg">Generating Exam Paper...</p>
        </div>
      ) : (
        <>
          <div
            ref={contentRef}
            className="p-6 bg-white border border-gray-300 rounded w-full max-w-3xl"
          >
            <h2 className="text-xl font-bold">Exam Paper</h2>
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="break-words whitespace-pre-wrap">{children}</p>
                ),
              }}
            >
              {questions}
            </ReactMarkdown>

            <hr className="my-4" />

            <h2 className="text-xl font-bold mt-6 text-green-600">Answers</h2>
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="text-gray-700">{children}</p>
                ),
              }}
            >
              {answers || "Answers will be provided separately."}
            </ReactMarkdown>
          </div>

          <button
            onClick={handleDownloadPDF}
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
          >
            Download PDF
          </button>
        </>
      )}
    </div>
  );
};

export default Generate;
