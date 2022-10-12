import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogPage from '../layout/BlogPage';
import ErrorPage from '../layout/ErrorPage';
import HomePage from '../layout/HomePage';
import QuizPage from '../layout/QuizPage';
import Root from '../layout/Root';
import StatisticsPage from '../layout/StatisticsPage';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <ErrorPage />,
            children:[
                {
                    path: '/',
                    element: <HomePage />,
                    loader: async() => {
                        return await fetch('https://openapi.programming-hero.com/api/quiz')
                    }
                },
                {
                    path: 'quiz/:quizId',
                    element: <QuizPage />,
                    loader: async({ params }) => {
                        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                    }
                },
                {
                    path: '/statistics',
                    element: <StatisticsPage />,
                    loader: async() => {
                        return await fetch('https://openapi.programming-hero.com/api/quiz')
                    }
                },
                {
                    path: '/blog',
                    element: <BlogPage />
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Router;