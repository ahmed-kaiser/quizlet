import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/solid";

const Button = ({ children, clickHandler, has }) => {
  return (
    <button
      onClick={clickHandler}
      disabled={!has}
      className={`mx-1 py-2 px-8 rounded-md font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center ${
        has ? "text-white" : "text-gray-400"
      }`}
    >
      {children}
    </button>
  );
};

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const data = useLoaderData();
  const quiz = data.data;

  console.log(quiz);

  let hasPrev = index > 0;
  let hasNext = index < quiz.total - 1;

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="mt-16">
      <div className="sm:container mx-auto lg:max-w-7xl px-3">
        <h2 className="text-center font-bold text-xl text-slate-600">
          Quiz on {quiz.name}
        </h2>
        <QuizQuestion
          key={quiz.questions[index].id}
          question={quiz.questions[index]}
          questionNo={index + 1}
          answer={quiz.questions[index].correctAnswer}
        />
        <div className="flex justify-center">
          <Button clickHandler={handlePrevClick} has={hasPrev}>
            <ArrowSmallLeftIcon className="h-5 w-5 mr-1" />
            Prev
          </Button>
          {hasNext ? (
            <Button clickHandler={handleNextClick} has={hasNext}>
              Next
              <ArrowSmallRightIcon className="h-5 w-5 ml-1" />
            </Button>
          ) : (
            <Button clickHandler={handleNextClick} has={true}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
