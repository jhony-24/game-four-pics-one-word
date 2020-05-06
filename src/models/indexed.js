export default class Indexed {
    constructor() {
        this.types = {
            CREATE: "CREATE",
            UPDATE: "UPDATE",
            REMOVE: "REMOVE",
            READ: "READ",
        }
        this.userTable = "user";
        this.type = null;   
        this.db = window.indexedDB.open("game", 1);
        this.db.onupgradeneeded = (e) => {
            e.target.result.createObjectStore(this.userTable, { keyPath: "key" });
        }
    }

    operate = () => {
        this.db.onsuccess = (e) => {
            let request = e.target.result;
            switch (this.type) {
                case this.types.READ: this.read(request); break;
                case this.types.UPDATE: this.update(request); break;
                case this.types.REMOVE: this.remove(request); break;
                case this.types.CREATE: this.create(request); break;
            }
        }
    }

    defineAction = (type) => {
        this.type = type;
        return (data) => {
            this.data = data;
        }
    }

    transaction = (request,type) => {
        let transaction = request.transaction([this.userTable], type);
        let store = transaction.objectStore(this.userTable);
        return store;
    }

    read = (request) => {
        const store = this.transaction(request, "readonly");
        store.get(this.data);
    }

    update = (request) => {
        let store = this.transaction(request, "readwrite");
        store.put(this.data);
    }

    remove = (request) => {
        let store = this.transaction(request, "readwrite");
        store.delete(this.data);
    }

    create = (request) => {
        let store = this.transaction(request, "readwrite");
        store.add(this.data);
    }
}