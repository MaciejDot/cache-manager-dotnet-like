import "./IStore";
export class InMemoryStore {
    _map = new Map();
    getItem(key) {
        return new Promise(() => this._map.get(key));
    }
    exist(key) {
        return new Promise(() => this._map.has(key));
    }
    setItem(key, item) {
        return new Promise(() => this._map.set(key, item));
    }
    getAllKeys() {
        return new Promise(() => {
            const keys = [];
            this._map.forEach((_, key) => keys.push(key));
            return keys;
        });
    }
    deleteItem(key) {
        return new Promise(() => this._map.delete(key));
    }
}
//# sourceMappingURL=InMemoryStore.js.map