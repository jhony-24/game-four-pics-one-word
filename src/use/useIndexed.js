import { useState } from "react"

const useIndexed = () => {
    const [data, setData] = useState({});
    const [type, setType] = useState(null);

    const CREATE = "CREATE", UPDATE = "UPDATE", REMOVE = "REMOVE", READ = "READ";

    let db = window.indexedDB.open("game", 1);

    db.onupgradeneeded = (e) => {
        db.createObjectStore("user", { keyPath: "key" });
    }

    db.onsuccess = (e) => {
    }

    const read = (key) => {
        let transaction = db.transaction(["user"], "readonly");
        let store = transaction.objectStore("user");
        store.get(key);
    }

    const update = (data) => {
        let transaction = db.transaction(["user"], "readwrite");
        let store = transaction.objectStore("user");
        store.put(data);
    }

    const remove = (key) => {
        let transaction = db.transaction(["user"], "readwrite");
        let store = transaction.objectStore("user");
        store.remove(key);
    }
    const create = (data) => {
        let transaction = db.transaction(["user"], "readwrite");
        let store = transaction.objectStore("user");
        store.add(data);
    }

    // return {
    //     data,
    //     read,
    //     update,
    //     remove,
    //     create,
    // }
}

export default useIndexed;