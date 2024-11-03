import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../Utility/AddToBL";
import { addToStoreWishList } from "../../Utility/AddtoWish";


const BookDatail = () => {

    const { bookId } = useParams()
    // console.log(bookId)
    const data = useLoaderData()
    // console.log(data)
    const book = data.find(book => book.bookId == bookId)
    // console.log(book)
    const { bookName, author, review, totalPages, rating, tags, publisher, yearOfPublishing, image } = book

    const HandleAddRead = (id) => {
        addToStoreReadList(id)
    }
    const HandleAddWish = (id) => {
        addToStoreWishList(id)
    }

    return (
        <div className=" mx-20 bg-white rounded-xl shadow-md  my-4 px-10">
            <div className="flex items-center gap-5">
                <div className="w-1/4 py-10">
                    <img
                        className=" w-full object-cover rounded-2xl shadow-xl"
                        src={image}
                        alt={`${bookName} cover`}
                    />
                </div>
                <div className="p-8 w-[75%]">
                    <h3 className="uppercase tracking-wide text-lg md:text-2xl font-serif font-semibold text-indigo-500">
                        {book.bookName}
                    </h3>
                    <p className="mt-2 text-gray-500">{review}</p>
                    <div className="mt-4">
                        <span className="text-sm font-semibold text-gray-700">Author:</span> {author}
                    </div>
                    <div className="mt-2">
                        <span className="text-sm font-semibold text-gray-700">Publisher:</span> {publisher}
                    </div>
                    <div className="mt-2">
                        <span className="text-sm font-semibold text-gray-700">Year of Publishing:</span> {yearOfPublishing}
                    </div>
                    <div className="mt-2">
                        <span className="text-sm font-semibold text-gray-700">Total Pages:</span> {totalPages}
                    </div>
                    <div className="mt-2 flex items-center">
                        <span className="text-sm font-semibold text-gray-700">Rating:</span>
                        <div className="ml-2 text-yellow-500">
                            {"⭐".repeat(Math.round(rating))}
                        </div>
                    </div>
                    <div className="mt-4 flex gap-2 space-x-2">
                        Tag:
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs font-semibold inline-block py-1 px-2 rounded text-indigo-600 bg-indigo-100 last:mr-0"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-5 mt-5">
                        <Link to={'/explore'}>
                            <button className="px-3 py-2 rounded-xl flex items-center gap-2  border-2 border-yellow-500 font-mono text-lg hover:bg-yellow-100">
                                <img className="w-7" src="https://img.icons8.com/nolan/64/circled-left--v1.png" alt="circled-left--v1" />
                                Go Back
                            </button>
                        </Link>

                        <button onClick={() => HandleAddRead(book.bookId)} className="px-3 py-2 rounded-xl flex items-center gap-2  border-2 border-green-500 font-mono text-lg hover:bg-green-100">
                            <img className="w-7" src="https://img.icons8.com/nolan/64/read.png" alt="read" />
                            Mark as read
                        </button>

                        <button onClick={() => HandleAddWish(book.bookId)} className="px-3 py-2 rounded-xl flex items-center gap-2  border-2 border-red-500 font-mono text-lg hover:bg-red-100">
                            <img className="w-7" src="https://img.icons8.com/nolan/64/wish-list.png" alt="wish-list" />
                            Wish List
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default BookDatail;