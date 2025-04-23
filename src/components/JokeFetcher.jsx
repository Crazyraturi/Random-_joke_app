import React, { useEffect, useState } from "react";

const JokeFetcher = () => {
  const [joke, setJoke] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await response.json();
        const newJoke = `${data.setup} 🤣 ${data.punchline}`;
        setJoke(newJoke);
      } catch (error) {
        setJoke("Failed to load joke 😢");
      }
    };

    fetchData(); // initial call

    const interval = setInterval(() => {
      fetchData(); // wrapped async call
    }, 15000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="w-200 rounded-lg h-52 flex items-center justify-center bg-gray-100">
      <p className="bg-yellow-100 text-gray-800 rounded-2xl shadow-lg p-6 text-xl max-w-xl text-center">
        {joke}
      </p>
      
    </div>
  );
};

export default JokeFetcher;
