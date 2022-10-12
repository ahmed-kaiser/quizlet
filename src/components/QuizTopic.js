import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const QuizTopic = ({ quiz }) => {

  return (
    <div className="max-w-xs border p-2 shadow-md rounded-md mx-auto">
      <img src={quiz.logo} alt="" className="w-full bg-green-50 rounded-md" />
      <div className="mt-3">
        <h4 className="font-bold text-xl text-slate-600">{quiz.name}</h4>
        <p className="py-1">
          <span className="font-bold text-slate-600 mr-2">Total Quiz:</span>
          {quiz.total}
        </p>
        <Link
          to={`/quiz/${quiz.id}`}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-blue-600 flex justify-center items-center cursor-pointer text-white rounded py-1 mt-2"
        >
          Start
          <ArrowLongRightIcon className="w-5 h-5 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default QuizTopic;
