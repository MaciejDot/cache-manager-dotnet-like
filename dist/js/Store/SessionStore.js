export class SessionStore {
    getItem(key) {
        return new Promise((resolve) => resolve(JSON.parse(sessionStorage.getItem(key))));
    }
    exist(key) {
        return new Promise((resolve) => resolve(sessionStorage.getItem(key) !== null));
    }
    setItem(key, item) {
        return new Promise((resolve) => resolve(sessionStorage.setItem(key, JSON.stringify(item))));
    }
    getAllKeys() {
        return new Promise((resolve) => resolve(Object.keys(sessionStorage)));
    }
    deleteItem(key) {
        return new Promise((resolve) => resolve(sessionStorage.removeItem(key)));
    }
}
