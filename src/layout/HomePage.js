import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import QuizTopic from '../components/QuizTopic';

const HomePage = () => {
    const data = useLoaderData();
    const quizTopics = data.data;

    return (
        <main>
            <Header />
            <section className="my-16">
                <div className="sm:container mx-auto">
                    <h2 className="pb-16 font-bold text-2xl text-center">Quiz Topic</h2>
                    <div className="grid grid-cols-4 gap-5">
                        {
                            quizTopics.map(quiz => <QuizTopic key={quiz.id} quiz={quiz} />)
                        }
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;