const request = indexedDB.open("createBudget", 1);

let db;

request.onupgradeneeded = function(e) {
    const db = request.result;
    db.createObjectStore( "awaiting", { autoIncrement = true });
};

request.onerror = function(e) {
    console.log("There was an error");
};

request.onsuccess = function(e) {
    db = e.target.result;
    const transaction = db.transaction(["awaiting"], "readwrite");
    const store = transaction.objectStore("awaiting");
    store.add(record)
}

