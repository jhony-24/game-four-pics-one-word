/**
 * database in the user browser with a unique table called user
 */
export default class Indexed {
    constructor() {
        this.userTable = "user";
        this.type = null;
        this.db = window.indexedDB.open("game", 1);
        this.db.onupgradeneeded = (e) => {
            e.target.result.createObjectStore(this.userTable, { keyPath: "key" });
        }
    }

    /**
     * @param type type of transaction ( readonly or readwrite) 
     * @param callback return value 
     */
    transaction = (type, callback) => {
        this.db.onsuccess = (e) => {
            let request = e.target.result;
            let transaction = request.transaction([this.userTable], type);
            let store = transaction.objectStore(this.userTable);
            callback(store);
        }
    }

    /**
     * read the data 
     * @param key key of the value
     */
    read = (key, callback) => this.transaction("readonly", store => {
        let request = store.get(key);
        request.onsuccess = dataSuccess => callback(dataSuccess.target.result);
    });

    /**
     * update a value of table whit
     * @param data values to update, requred key
     */
    update = (data) => this.transaction("readwrite", store => {
        store.put(data);
    });

    /**
     * remove a item
     * @param key key of data value
     */
    remove = (key) => this.transaction("readwrite", store => {
        store.delete(key);
    });

    /**
     * create new data
     * @param data data to create in the database
     */
    create = (data) => this.transaction("readwrite", store => {
        store.add(data);
    });

}