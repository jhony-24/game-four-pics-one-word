import { useState } from "react";

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

    db.onupgradeneeded = (e) => {
        e.target.result.createObjectStore(table, { keyPath: "key" });
    }
    db.onsuccess = (e) => {
        let request = e.target.result;
        switch (type) {
            case types.READ: read(request); break;
            case types.UPDATE: update(request); break;
            case types.REMOVE: remove(request); break;
            case types.CREATE: create(request); break;
        }
    }

    const transaction = (database, type) => {
        let transaction = database.transaction([table], type);
        let store = transaction.objectStore(table);
        return store;
    }

    const read = (request) => {
        const store = transaction(request, "readonly");
        store.get(data);
    }
    const update = (request) => {
        let store = transaction(request, "readwrite");
        store.put(data);
    }
    const remove = (request) => {
        let store = transaction(request, "readwrite");
        store.delete(data);
    }
    const create = (request) => {
        let store = transaction(request, "readwrite");
        store.add(data);
    }

    const defineAction = (type) => {
        setType(type);
        return (data) => setData(data);
    }
    return {
        types,
        defineAction
    }
}

export default useIndexed;