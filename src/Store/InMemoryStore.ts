import { IStore } from "./IStore"

export class InMemoryStore implements IStore {
  private _map: Record<string, any> = {};
  getItem(key: string) {
    return new Promise<any>((resolve) => resolve(this._map.get(key)))
  }
  exist(key: string) {
    return new Promise<boolean>((resolve) => resolve(this._map.has(key)))
  }
  setItem(key: string, item: any) {
    return new Promise<void>((resolve) => resolve(this._map.set(key, item)))
  }
  getAllKeys() {
    return new Promise<string[]>((resolve) => resolve(Object.keys(this._map)))
  }
  deleteItem(key: string) {
    return new Promise<void>((resolve) => resolve(this._map.delete(key)))
  }
}
