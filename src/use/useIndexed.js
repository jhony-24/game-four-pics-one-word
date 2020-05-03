import { useState } from "react"

const useIndexed = () => {
    const [data, setData] = useState();
    let db = window.indexedDB.open("game", 1);

    db.onupgradeneeded = (e) => {

    }
    db.onsuccess = (e) => {

    }

    const read = () => {

    }
    const update = () => {

    }
    const remove = () => {

    }

    return {
        data,
        read,
        update,
        remove,
    }
}

export default useIndexed;