import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quiz from '../components/Quiz';
import HomePage from '../layout/HomePage';
import Root from '../layout/Root';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
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
                    element: <Quiz />,
                    loader: async({ params }) => {
                        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                    }
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Router;