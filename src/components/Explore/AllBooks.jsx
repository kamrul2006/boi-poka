import { useEffect, useState } from "react";


const AllBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])



    return (
        <div>
            <h1 className="text-4xl font-serif font-semibold text-center my-3">All Books: 0{books.length}</h1>
            <div className="md:grid grid-cols-3 gap-5 border p-5 rounded-md">
                {books.map(book => <div key={book.bookId} className=" border-2 rounded-2xl my-1 md:my-0">
                    <div className="bg-slate-300 rounded-2xl m-2 p-5">
                        <div className="h-40 w-28 mx-auto">
                            <img src={book.image} className="h-full w-full mx-auto" />
                        </div>
                    </div>


                    <div className="mx-5">
                        {/* -------tags------------- */}
                        <div className="flex items-center justify-between">
                            {book.tags.map((tag, i) => <p key={i}
                            className="text-yellow-600 font-semibold font-mono py-1 px-4 my-2 rounded-full bg-yellow-100">{tag}</p>)}
                        </div>

                        <p className="text-3xl  my-3 font-serif">{book.bookName}</p>
                        <p className="text-xl mb-5">By: {book.author}</p>
                        <hr />
                        <div className="flex items-center justify-between my-2 px-2 text-sm">
                            <p>{book.category}</p>
                            <p>Ratings: 5.00</p>
                        </div>
                    </div>





                </div>)
                }



            </div>
        </div>
    );
};

export default AllBooks;