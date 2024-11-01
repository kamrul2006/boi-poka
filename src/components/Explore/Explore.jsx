import AllBooks from "./AllBooks";

const Explore = () => {
    return (
        <div className="md:mx-20 mx-2 my-10">
            {/* ----------Banner--------------------------- */}
            <div className="md:flex items-center border  justify-between  bg-slate-50 rounded-3xl shadow-xl px-10 mx-auto py-16">
                <div className="md:flex flex-col items-center justify-evenly gap-10 md:w-1/2">
                    <h1 className="md:text-6xl text-2xl font-serif text-center ">Books to freshen up your bookshelf</h1>
                    <a href="#book" className="mx-[35%] my-2 text-2xl"><button className="btn btn-warning btn-sm md:btn-md text-center mx-auto  md:px-5">See All Books</button></a>
                </div>
                <div className="">
                    <img src="https://www.transparentpng.com/thumb/book/Q2LR8F-books-transparent.png" className="md:w-full " />
                </div>
            </div>

            {/* ------------all books------------------- */}


            <div id="book" className="mt-32 ">
            <AllBooks></AllBooks>
            </div>

        </div>
    );
};

export default Explore;