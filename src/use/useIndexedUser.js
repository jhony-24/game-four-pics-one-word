import { useState } from "react"

const useIndexed = () => {
    const [data, setData] = useState({});
    const [type, setType] = useState(null);
    const types = {
        CREATE: "CREATE",
        UPDATE: "UPDATE",
        REMOVE: "REMOVE",
        READ: "READ",
    }
    const table = "user";
    
    let db = window.indexedDB.open("game", 1);

    db.onupgradeneeded = () => {
        db.createObjectStore(table, { keyPath: "key" });
    }
    db.onsuccess = () => {
        switch (type) {
            case READ: read(); break;
            case UPDATE: update(); break;
            case REMOVE: remove(); break;
            case CREATE: create(); break;
        }
    }

    const read = () => {
        let transaction = db.transaction([table], "readonly");
        let store = transaction.objectStore(table);
        store.get(data);
    }
    const update = () => {
        let transaction = db.transaction([table], "readwrite");
        let store = transaction.objectStore(table);
        store.put(data);
    }
    const remove = () => {
        let transaction = db.transaction([table], "readwrite");
        let store = transaction.objectStore(table);
        store.remove(data);
    }
    const create = (data) => {
        let transaction = db.transaction([table], "readwrite");
        let store = transaction.objectStore(table);
        store.add(data);
    }

    const defineAction = (type) => {
        if (types[type]) {
            setType(type);
            return (data) => setData(data);
        }
    }
    return {
        types,
        defineAction
    }
}

export default useIndexed;