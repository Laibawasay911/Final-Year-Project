import React, { useState } from 'react';

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: "Which subject do you enjoy the most?",
      options: ["Math", "Biology", "Art", "Computer Science"]
    },
    {
      question: "What type of work environment do you prefer?",
      options: ["Office", "Lab", "Studio", "Remote Tech Teams"]
    },
    {
      question: "What are your strengths?",
      options: ["Problem Solving", "Empathy", "Creativity", "Logical Thinking"]
    }
  ];

  const handleOptionClick = (option) => {
    setAnswers({ ...answers, [step]: option });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      alert("Based on your answers, we suggest: Computer Science!");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4">Degree Suggestion Quiz</h1>
      <p className="text-lg mb-4">{questions[step].question}</p>
      <div className="space-y-2">
        {questions[step].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(opt)}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
