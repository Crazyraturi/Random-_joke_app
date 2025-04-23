import React, { useState } from "react";
import JokeFetcher from "./components/JokeFetcher";

const App = () => {
  const [showJoke, setShowJoke] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8 px-4 py-10 bg-gray-50">
      <h1 className="uppercase text-center font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        start laughing by clicking the button
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 mt-6">
        <div className="p-6 border-t-8 border-t-red-500 rounded-t-xl">
          <button
            onClick={() => setShowJoke(true)}
            className="bg-blue-500 border-red-500 border-4 rounded-full px-6 py-3 text-white font-bold hover:bg-blue-600 transition"
          >
            Show Joke
          </button>
        </div>

        <div className="p-6 border-t-8 border-t-red-500 rounded-t-xl">
          <button
            onClick={() => setShowJoke(false)}
            className="bg-blue-500 border-red-500 border-4 rounded-full px-6 py-3 text-white font-bold hover:bg-blue-600 transition"
          >
            Hide Joke
          </button>
        </div>
      </div>

      {/* Conditionally render joke */}
      {showJoke && <JokeFetcher />}

      <img
        src="./Amazon-Smile-Logo-PNG-Images.png"
        alt="Amazon Logo"
        className="w-48 sm:w-64 mt-10"
      />
    </div>
  );
};

export default App;
