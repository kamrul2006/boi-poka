import { toast } from "react-toastify";

const getStoreReadList = () => {
    const stoRedListStr = localStorage.getItem('read-list')
    if (stoRedListStr) {
        const storedList = JSON.parse(stoRedListStr);
        return storedList;
    }
    else {
        return []
    }
}

const addToStoreReadList = (id) => {
    const storedList = getStoreReadList()
    if (storedList.includes(id)) {
        toast('Book Already exist in the  read list')
    }
    else {
        storedList.push(id);
        const stoRedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', stoRedListStr);
        toast('Book  Added  Read list')
    }
}

export { addToStoreReadList, getStoreReadList }