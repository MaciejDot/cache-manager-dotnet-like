import { IStore } from "./IStore";

export class SessionStore implements IStore {
    getItem<T>(key: string) {
      return new Promise<T>((resolve) => resolve(JSON.parse(sessionStorage.getItem(key) as string) as T))
    }
    exist(key: string) {
      return new Promise<boolean>((resolve) => resolve(sessionStorage.getItem(key) !== null))
    }
    setItem(key: string, item: any) {
      return new Promise<void>((resolve) => resolve(sessionStorage.setItem(key, JSON.stringify(item))))
    }
    getAllKeys() {
      return new Promise<string[]>((resolve) => {
        const array : string[] = [];
        for(let index =0; index < sessionStorage.length; index +=1)
        {
          array.push(sessionStorage.key(index) as string);
        }
        resolve(array)
      }
      )
    }
    deleteItem(key: string) {
      return new Promise<void>((resolve) => resolve(sessionStorage.removeItem(key)))
    }
  }