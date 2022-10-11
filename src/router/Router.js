import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Router;