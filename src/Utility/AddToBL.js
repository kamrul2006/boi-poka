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
        alert(id + ' ' + 'Already exist in the  book list')
    }
    else {
        storedList.push(id);
        const stoRedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', stoRedListStr);
    }
}

export { addToStoreReadList, getStoreReadList }