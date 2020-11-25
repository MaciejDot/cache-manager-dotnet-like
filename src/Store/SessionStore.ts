import { IStore } from "./IStore";

export class SessionStore implements IStore {
  getItem(key: string) {
    return new Promise((resolve) => resolve(JSON.parse(sessionStorage.getItem(key) as string)))
  }
  exist(key: string) {
    return new Promise<boolean>((resolve) => resolve(sessionStorage.getItem(key) !== null))
  }
  setItem(key: string, item: any) {
    return new Promise<void>((resolve) => resolve(sessionStorage.setItem(key, JSON.stringify(item))))
  }
  getAllKeys() {
    return new Promise<string[]>((resolve) =>
      resolve(Object.keys(sessionStorage))

    )
  }
  deleteItem(key: string) {
    return new Promise<void>((resolve) => resolve(sessionStorage.removeItem(key)))
  }
}