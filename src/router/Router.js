import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../layout/Root';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Router;