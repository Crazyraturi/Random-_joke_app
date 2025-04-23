import React from "react";
import JokeFetcher from "./components/JokeFetcher";
import { useState } from "react";

const App = () => {
  const [showJoke, setshowJoke] = useState(false);
  return (
    <div className=" w-full h-scree flex  items-center gap-5justify-center m-20 p-5  flex-col    ">
      <h1 className="uppercase font-sans   text-3xl">
        start laughing by click the button
      </h1>
      <div className=" mt-10  flex gap-10">
        <div className="p-10 border-t-8 border-t-red-500 rounded-t-xl
  ">
          <button
            onClick={() => {
              setshowJoke(true);
            }}
            className="bg-blue-500 border-red-500 border-8 rounded-full px-6 py-3 text-white font-bold"
           >
            Show Joke
          </button>
        </div>
        <div className="p-10 border-t-8 border-t-red-500 rounded-t-xl">
          <button
            onClick={() => {
              setshowJoke(false);
            }}
            className="bg-blue-500  border-red-500 border-8 rounded-full px-6 py-3 text-white font-bold"
          >
            Hide Joke
          </button>
        </div>
      </div>

      {showJoke && <JokeFetcher />}
      <img className="w-100" src="./Amazon-Smile-Logo-PNG-Images.png" alt="" />
    </div>
  );
};

export default App;
