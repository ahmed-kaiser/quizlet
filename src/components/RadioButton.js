const RadioButton = ({ questionId, option, handleChange }) => {
  return (
    <div className="box-border p-2 my-1 flex items-center border hover:rounded-lg hover:shadow-md duration-200">
      <input
        type="radio"
        name={questionId}
        id={questionId}
        value={option}
        onChange={() => handleChange(option)}
        className="h-4 w-4 focus:bg-gray-300 cursor-pointer"
      />
      <label className="ml-1 font-medium text-slate-600 cursor-pointer">
        {option}
      </label>
      <br />
    </div>
  );
};

export default RadioButton;
