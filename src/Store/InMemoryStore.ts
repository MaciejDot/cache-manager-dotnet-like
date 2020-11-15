import { IStore } from "./IStore"

export class InMemoryStore implements IStore {
    private _map: Map<string, any> = new Map<string, any>()
    getItem(key: string) {
      return new Promise<any>(() => this._map.get(key))
    }
    exist(key: string) {
      return new Promise<boolean>(() => this._map.has(key))
    }
    setItem(key: string, item: any) {
      return new Promise<void>(() => this._map.set(key, item))
    }
    getAllKeys() {
      return new Promise<string[]>(() => {
        const keys: string[] = []
        this._map.forEach((value, key) => keys.push(key))
        return keys
      })
    }
    deleteItem(key: string) {
      return new Promise<void>(() => this._map.delete(key))
    }
  }
  