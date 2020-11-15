import { IStore } from "./IStore";
export declare class LocalStore implements IStore {
    getItem<T>(key: string): Promise<T>;
    exist(key: string): Promise<boolean>;
    setItem(key: string, item: any): Promise<void>;
    getAllKeys(): Promise<string[]>;
    deleteItem(key: string): Promise<void>;
}
