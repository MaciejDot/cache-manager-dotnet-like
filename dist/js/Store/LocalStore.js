export class LocalStore {
    getItem(key) {
        return new Promise((resolve) => resolve(JSON.parse(localStorage.getItem(key))));
    }
    exist(key) {
        return new Promise((resolve) => resolve(localStorage.getItem(key) !== null));
    }
    setItem(key, item) {
        return new Promise((resolve) => resolve(localStorage.setItem(key, JSON.stringify(item))));
    }
    getAllKeys() {
        return new Promise((resolve) => resolve(Object.keys(localStorage)));
    }
    deleteItem(key) {
        return new Promise((resolve) => resolve(localStorage.removeItem(key)));
    }
}
