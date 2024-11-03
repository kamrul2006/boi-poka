import { Link } from "react-router-dom";


const HomeBanner = () => {
    return (

        <div className="md:mt-5 m-5 ">
            <section className="bg-cover bg-center h-screen rounded-3xl" style={{ backgroundImage: 'url(https://wallpapercave.com/dwp1x/wp12765897.jpg)' }}>
                <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center text-center text-white px-6 rounded-3xl">
                <img src="https://img.icons8.com/nolan/64/books-1.png" className="bg-white/50 p-4  w-32 rounded-full" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Welcome to Boi Poka
                    </h1>
                    <p className="text-lg md:text-2xl max-w-2xl mb-6">
                        Dive into a world of stories, knowledge, and endless adventures. Explore thousands of books and discover your next favorite read.
                    </p>
                    <Link to={'/explore'}>
                        <button className="px-8 py-3 bg-yellow-600 text-lg font-semibold rounded-lg hover:bg-yellow-700 focus:ring focus:ring-yellow-400 transition duration-300">    Explore the Collection </button>
                    </Link>
         
                </div>
            </section>
        </div>

    );
};

export default HomeBanner;
