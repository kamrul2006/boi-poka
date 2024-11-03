import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utility/AddToBL';
import { getStoreWishList } from '../../Utility/AddtoWish';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([])
    const allBooks = useLoaderData()
    useEffect(() => {
        const storedList = getStoreReadList();
        const Stored = storedList.map(id => parseInt(id))

        const ReadList = allBooks.filter(book =>  Stored.includes(parseInt(book.bookId)));
        setReadList( ReadList)
        // console.log(readList, ReadList, Stored, allBooks)
   
    }, [])

    useEffect(() => {
        const storedList = getStoreWishList();
        const Stored = storedList.map(id => parseInt(id))

        const wishList = allBooks.filter(book => Stored.includes(parseInt(book.bookId)))
        setWishList(wishList)
    }, [])


    return (
        <div className='mx-20 border py-5 rounded-lg my-10 px-10'>
            <h1 className="text-4xl font-bold  my-4 font-serif">Listed Books</h1>
            <Tabs>
                <TabList>
                    <Tab>Read List: 0{readList.length}</Tab>
                    <Tab>Wish List 0{wishList.length}</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-lg font-semibold'>Books I read:  0{readList.length}</h2>
                    <div>
                        {
                            readList.map(book => <div key={book.bookId}
                                className='mx-5  my-3 border py-2 px-4 rounded flex items-center gap-5'>
                                <div>
                                    <img src={book.image} className="w-10" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-bold">{book.bookName}</h1>
                                    <h1 className=" font-semibold italic">By: {book.author}</h1>
                                </div>


                            </div>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-lg font-semibold'>Wish listed Books:  0{wishList.length}</h2>
                    <div>
                        {
                            wishList.map(book => <div key={book.bookId}
                                className='mx-5  my-3 border py-2 px-4 rounded flex items-center gap-5'>
                                <div>
                                    <img src={book.image} className="w-10" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-bold">{book.bookName}</h1>
                                    <h1 className=" font-semibold italic">By: {book.author}</h1>
                                </div>


                            </div>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;