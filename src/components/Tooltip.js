const Tooltip = ({ toggle }) => {
  return (
    <div
      className={`absolute -right-20 top-0 font-semibold text-sm ${
        toggle === undefined ? "hidden" : toggle ? "bg-green-400" : "bg-red-500"
      } py-1 px-3 text-white rounded`}
    >
      {toggle ? <p>Correct</p> : <p>Wrong</p>}
    </div>
  );
};

export default Tooltip;
