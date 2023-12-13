import React, { useState } from "react";
import "./assets/dist/css/app.css"; // Hapus import file CSS yang tidak diperlukan

function App() {
  const [content, setContent] = useState("Ini adalah konten card.");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Card dengan Tailwind CSS</h1>
        <p className="text-gray-600">{content}</p>
        <div className="mt-4">
          <button
            onClick={() => setContent("Materi card telah diubah!")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Ubah Materi Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
