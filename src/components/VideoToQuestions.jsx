import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { Context } from "../Context/ContextProvider";

const VideoToQuestions = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { generateExamPaperFromVideo } = useContext(Context);
  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const generate = async () => {
    if (!url) {
      alert("Please enter a valid URL.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3005/download?url=${url}`
      );

      if (response?.data?.message) {
        await generateExamPaperFromVideo(response.data.message);
        navigate("/generate"); // Redirect to Generate page after completion
      } else {
        alert("No text generated from the video.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("There was an error while generating questions.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Generate Questions from Video</h2>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter YouTube Video URL"
        value={url}
        className="border border-gray-400 p-2 rounded w-full max-w-md"
      />
      <button
        onClick={generate}
        disabled={loading}
        className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
      >
        {loading ? "Generating..." : "Generate Questions"}
      </button>
    </div>
  );
};

export default VideoToQuestions;
