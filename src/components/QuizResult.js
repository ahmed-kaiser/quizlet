import React from "react";

const QuizResult = ({ result, total }) => {
  let getTotal = result.reduce((prev, present) => prev + present, 0 );

  return (
    <div className="text-center mt-16 border border-blue-300 max-w-xl md:min-w-xl shadow-md rounded-md mx-auto py-10">
      <h3 className="font-serif font-bold text-3xl text-slate-600">Result</h3>
      <p className="font-serif font-extrabold text-4xl text-cyan-500 my-4">
        {getTotal} / {total}
      </p>
    </div>
  );
};

export default QuizResult;
