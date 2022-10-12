import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="max-w-xl mx-auto mt-20 text-center p-3">
      <h1 className="font-bold text-3xl py-2">Oops!</h1>
      <p className="font-bold text-xl py-3 text-slate-700">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-blue-500 mt-2">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
