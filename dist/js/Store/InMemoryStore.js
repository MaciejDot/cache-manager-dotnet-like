export class InMemoryStore {
    constructor() {
        this._map = {};
    }
    getItem(key) {
        return new Promise((resolve) => resolve(this._map.get(key)));
    }
    exist(key) {
        return new Promise((resolve) => resolve(this._map.has(key)));
    }
    setItem(key, item) {
        return new Promise((resolve) => resolve(this._map.set(key, item)));
    }
    getAllKeys() {
        return new Promise((resolve) => resolve(Object.keys(this._map)));
    }
    deleteItem(key) {
        return new Promise((resolve) => resolve(this._map.delete(key)));
    }
}
