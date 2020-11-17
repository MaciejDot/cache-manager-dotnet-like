import "./IStore";
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
        return new Promise((resolve) => {
            const array = [];
            for (let index = 0; index < localStorage.length; index += 1) {
                array.push(localStorage.key(index));
            }
            resolve(array);
        });
    }
    deleteItem(key) {
        return new Promise((resolve) => resolve(localStorage.removeItem(key)));
    }
}
//# sourceMappingURL=LocalStore.js.map