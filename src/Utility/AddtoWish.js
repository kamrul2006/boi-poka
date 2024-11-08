import { toast } from "react-toastify";

const getStoreWishList = () => {
    const stoRedListStr = localStorage.getItem('Wish-list')
    if (stoRedListStr) {
        const storedList = JSON.parse(stoRedListStr);
        return storedList;
    }
    else {
        return []
    }
}

const addToStoreWishList = (id) => {
    const storedList = getStoreWishList()
    if (storedList.includes(id)) {
        toast('Book Already exist in the  Wish list')
    }
    else {
        storedList.push(id);
        const stoRedListStr = JSON.stringify(storedList);
        localStorage.setItem('Wish-list', stoRedListStr);
        toast('Book Added in Wish list')
    }
}

export { addToStoreWishList, getStoreWishList }