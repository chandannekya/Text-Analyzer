import React from "react";

const About = () => {
  return (
    <div className="m-10 p-6 text-slate-800 font-roboto   bg-gradient-to-br from-[#F3E5F5] to-[#E1BEE7] rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-[#4B3993] text-center mb-6">
        About Text Analyzer
      </h1>
      <div className="flex justify-center mb-6">
        <p className="text-lg  max-w-3xl text-center">
          Welcome to <strong>Text Analyzer</strong>, your go-to tool for
          transforming and analyzing text with ease. Our application is designed
          to help you manipulate text, making it simpler to work with various
          text formats and prepare your data for further use.
        </p>
      </div>
      <h2 className="text-2xl font-semibold text-[#674e8e] mb-4">
        Key Features
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li className="text-lg  mb-2">
          <strong>Word and Character Counting:</strong> Quickly get the number
          of words and characters in your text for accurate analysis and
          reporting.
        </li>
        <li className="text-lg  mb-2">
          <strong>Case Conversion:</strong> Easily convert your text to
          uppercase or lowercase to meet your formatting needs.
        </li>
        <li className="text-lg text-slate-800 mb-2">
          <strong>Remove Punctuation:</strong> Clean up your text by removing
          unnecessary punctuation marks, making it ready for further analysis.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-[#674e8e] mb-4">
        Our Mission
      </h2>
      <p className="text-lg text-slate-800 mb-6">
        Our mission at Text Analyzer is to provide a user-friendly tool that
        simplifies text manipulation and analysis. We strive to make text
        processing accessible and efficient, helping you focus on your core
        tasks without the hassle of manual text handling.
      </p>
      <h2 className="text-2xl font-semibold text-[#674e8e] mb-4">
        Why Use Text Analyzer?
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li className="text-lg text-slate-800 mb-2">
          <strong>Efficiency:</strong> Save time with automated text
          transformations and analyses.
        </li>
        <li className="text-lg text-slate-800 mb-2">
          <strong>Accuracy:</strong> Ensure reliable results with precise text
          counting and formatting.
        </li>
        <li className="text-lg text-slate-800 mb-2">
          <strong>User-Friendly:</strong> Enjoy an intuitive interface designed
          for ease of use.
        </li>
      </ul>
      <p className="text-lg text-center">
        Thank you for choosing Text Analyzer. We are excited to support your
        text processing needs and look forward to helping you streamline your
        workflow.
      </p>
    </div>
  );
};

export default About;
