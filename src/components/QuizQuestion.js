import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import RadioButton from "./RadioButton";
import Tooltip from "./Tooltip";

const QuizQuestion = ({ questionNo, question, answer, toggleTooltip, handleChange, totalQuiz }) => {
  const [show, setShow] = useState(false);

  const handleShowClick = () => {
    setShow(!show);
  };

  return (
    <div className="mx-auto border border-blue-300 my-10 px-4 py-6 max-w-3xl md:min-w-3xl shadow-md rounded-md min-h-[350px] cursor-pointer">
      <div className="text-cyan-500">
        <span className="mr-2 font-bold bg-slate-100 py-1 px-2 rounded-md relative">
          Quiz-{questionNo} / {totalQuiz}
          <Tooltip toggle={toggleTooltip} />
        </span>
        <br />
        <p className="mt-2 font-semibold text-xl">{question.question}</p>
      </div>
      <div className="mt-3 pl-2 mb-8">
        {question.options.map((option) => (
          <RadioButton
            key={option}
            questionId={question.id}
            option={option}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div className="flex items-center text-cyan-500">
        <button onClick={handleShowClick} className="h-5 w-5 min-w-[20px] mr-2">
          {show ? <EyeIcon /> : <EyeSlashIcon />}
        </button>
        {show ? (
          <p>
            <span className="font-semibold">Answer:</span> {answer}
          </p>
        ) : (
          <p>Show Answer</p>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
