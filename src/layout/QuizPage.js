import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/solid";
import QuizResult from "../components/QuizResult";

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

const QuizPage = () => {
  const [index, setIndex] = useState(0);
  const [toggleTooltip, setToggleTooltip] = useState(undefined);
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const data = useLoaderData();
  const quiz = data.data;

  let hasPrev = index > 0;
  let hasNext = index < quiz.total - 1;

  const updateResult = () => {
    if (toggleTooltip === true) {
      setResult([...result, 1]);
    } else {
      setResult([...result, 0]);
    }
  }

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
      updateResult();
      setToggleTooltip(undefined);
    }
  };

  const handlePrevClick = () => {
    if (hasPrev) {
      setIndex(index - 1);
      setToggleTooltip(undefined);
      result.pop();
      setResult([...result]);
    }
  };

  const handleChange = (option) => {
    if (option === quiz.questions[index].correctAnswer) {
      setToggleTooltip(true);
    } else {
      setToggleTooltip(false);
    }
  };

  const handleSubmitClick = () => {
    updateResult();
    setShowResult(true);
  };

  console.log(result);

  return (
    <section className="my-16">
      <div className="sm:container mx-auto lg:max-w-7xl px-5">
        <h2 className="text-center font-bold text-xl text-slate-600">
          Quiz of {quiz.name}
        </h2>
        {!showResult ? (
          <>
            <QuizQuestion
              key={quiz.questions[index].id}
              question={quiz.questions[index]}
              questionNo={index + 1}
              answer={quiz.questions[index].correctAnswer}
              toggleTooltip={toggleTooltip}
              handleChange={handleChange}
              totalQuiz={quiz.total}
            />
            <div className="flex justify-center">
              <Button clickHandler={handlePrevClick} has={hasPrev}>
                <ArrowSmallLeftIcon className="h-5 w-5 mr-1" />
                Prev
              </Button>
              {hasNext ? (
                <Button
                  clickHandler={handleNextClick}
                  has={hasNext && toggleTooltip !== undefined}
                >
                  Next
                  <ArrowSmallRightIcon className="h-5 w-5 ml-1" />
                </Button>
              ) : (
                <Button
                  clickHandler={handleSubmitClick}
                  has={toggleTooltip !== undefined}
                >
                  Submit
                </Button>
              )}
            </div>
          </>
        ) : (
          <QuizResult result={result} total={quiz.total} />
        )}
      </div>
    </section>
  );
};

export default QuizPage;
