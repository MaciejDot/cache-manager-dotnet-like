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
        return new Promise((resolve) => {
            const array = [];
            for (let index = 0; index < sessionStorage.length; index += 1) {
                array.push(sessionStorage.key(index));
            }
            resolve(array);
        });
    }
    deleteItem(key) {
        return new Promise((resolve) => resolve(sessionStorage.removeItem(key)));
    }
}
//# sourceMappingURL=SessionStore.js.map