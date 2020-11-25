import { IStore } from "./IStore";

export class LocalStore implements IStore {
  getItem(key: string) {
    return new Promise((resolve) => resolve(JSON.parse(localStorage.getItem(key) as string)))
  }
  exist(key: string) {
    return new Promise<boolean>((resolve) => resolve(localStorage.getItem(key) !== null))
  }
  setItem(key: string, item: any) {
    return new Promise<void>((resolve) => resolve(localStorage.setItem(key, JSON.stringify(item))))
  }
  getAllKeys() {
    return new Promise<string[]>((resolve) => 
      resolve(Object.keys(localStorage))
    )}
  deleteItem(key: string) {
    return new Promise<void>((resolve) => resolve(localStorage.removeItem(key)))
  }
}