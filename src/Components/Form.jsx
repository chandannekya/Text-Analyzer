import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");

  const uppr = () => {
    setText(text.toUpperCase());
  };

  const lwr = () => {
    setText(text.toLowerCase());
  };

  const removePunctuation = () => {
    const modified = text.replace(/[^\w\s]/g, ""); // Regular expression to remove punctuation
    setText(modified);
  };

  const clearText = () => {
    setText("");
  };

  const wordsCount = () => {
    const words = text.trim().split(/\s+/); // Split text by spaces to get words
    const letters = text.replace(/\s+/g, "").length; // Count letters (remove spaces)
    return { words: words.length, letters };
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="m-10">
      <div className="flex justify-center mt-10">
        <textarea
          className="bg-[#4B3993] bg-opacity-20 placeholder:text-black border-[2px] border-zinc-500 text-black text-opacity-70 drop-shadow-md w-3/4 rounded-xl p-2 focus:outline-none"
          placeholder="Enter your text here"
          value={text}
          onChange={handleChange}
          name="enter text"
          cols="30"
          rows="8"
        />
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
        <button
          className="p-2 mt-3 bg-gradient-to-br from-[#C5BBDF] to-[#c08ed8]/40 text-black rounded-xl  "
          onClick={uppr}
        >
          Uppercase
        </button>
        <button
          className="p-2 mt-3 bg-gradient-to-br from-[#C5BBDF] to-[#c08ed8]/40 text-black rounded-xl "
          onClick={lwr}
        >
          Lowercase
        </button>

        <button
          className="p-2 mt-3 bg-gradient-to-br from-[#C5BBDF] to-[#c08ed8]/40 text-black rounded-xl drop-shadow-sm"
          onClick={removePunctuation}
        >
          Remove Punctuation
        </button>
        <button
          className="p-2 mt-3 bg-red-700 text-white rounded-md bg-gradie"
          onClick={clearText}
        >
          Clear
        </button>
      </div>
      <div className="flex justify-center gap-3">
        <p className=" bg-gradient-to-br from-[#C5BBDF] to-[#c08ed8] w-fit p-2 text-center mt-5 rounded-md">
          Total Words <br /> {wordsCount().words}
        </p>
        <p className=" bg-gradient-to-br from-[#C5BBDF] to-[#c08ed8] mt-5 w-fit p-2 rounded-md text-center">
          Total Letters <br /> {wordsCount().letters}
        </p>
      </div>
      <h1 className="font-bold text-2xl">Preview Text</h1>
      <p>{text}</p>
    </div>
  );
};

export default Form;
