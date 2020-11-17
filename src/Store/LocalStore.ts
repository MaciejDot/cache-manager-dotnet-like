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
      return new Promise<string[]>((resolve) => {
        const array : string[] = [];
        for(let index =0; index < localStorage.length; index +=1)
        {
          array.push(localStorage.key(index) as string);
        }
        resolve(array)
      }
      )
    }
    deleteItem(key: string) {
      return new Promise<void>((resolve) => resolve(localStorage.removeItem(key)))
    }
  }