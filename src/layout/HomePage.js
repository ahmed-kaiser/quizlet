import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import QuizTopic from "../components/QuizTopic";

const HomePage = () => {
  const data = useLoaderData();
  const quizTopics = data.data;

  return (
    <>
      <Header />
      <section className="my-16 mb-24">
        <div className="sm:container mx-auto lg:max-w-7xl px-5">
          <h2 className="pb-16 font-bold text-2xl text-center">Quiz Topic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quizTopics.map((quiz) => (
              <QuizTopic key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
