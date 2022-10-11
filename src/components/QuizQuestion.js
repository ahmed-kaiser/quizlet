import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const RadioButton = ({ questionId, option }) => {
  return (
    <div className="p-2 flex items-center hover:border hover:p-2 hover:rounded-md hover:shadow-sm duration-100">
      <input
        type="radio"
        name={questionId}
        id={questionId}
        value={option}
        className="h-4 w-4 focus:bg-gray-300 cursor-pointer"
      />
      <label htmlFor={questionId} className="ml-1 font-medium text-slate-600">
        {option}
      </label>
      <br />
    </div>
  );
};

const QuizQuestion = ({ question, questionNo, answer }) => {
  // console.log(question);
  const [show, setShow] = useState(false);

  const handleShowClick = () => {
    setShow(!show);
  };

  return (
    <div className="mx-auto border border-blue-300 my-10 px-4 py-6 max-w-3xl md:min-w-3xl shadow-md rounded-md min-h-[350px] relative">
      <div className="text-cyan-500">
        <span className="mr-2 font-bold text-lg bg-slate-100 py-1 px-2 rounded-md">
          Quiz-{questionNo}
        </span>
        <br />
        <p className="mt-2 font-semibold text-xl">{question.question}</p>
      </div>
      <div className="mt-3 pl-2">
        {question.options.map((option) => (
          <RadioButton key={option} questionId={question.id} option={option} />
        ))}
      </div>
      <div className="absolute bottom-3 flex items-center text-cyan-500">
        <button onClick={handleShowClick} className="h-5 w-5 mr-2">
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
