import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center p-8 rounded-lg bg-gray-800 shadow-lg max-w-md mx-auto">
                <h1 className="text-6xl font-bold text-yellow-600 mb-4">404</h1>
                <p className="text-2xl font-semibold mb-4">Page Not Found</p>
                <p className="text-lg text-gray-300 mb-6">
                    Oops! It looks like you have wandered off the page. But do not worry, your next great read awaits!
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-yellow-600 text-lg font-semibold rounded-lg hover:bg-yellow-700 transition duration-300"
                >
                    Return to Boi Poka
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
