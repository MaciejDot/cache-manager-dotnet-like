import { IStore } from "./IStore";
export declare class SessionStore implements IStore {
    getItem(key: string): Promise<unknown>;
    exist(key: string): Promise<boolean>;
    setItem(key: string, item: any): Promise<void>;
    getAllKeys(): Promise<string[]>;
    deleteItem(key: string): Promise<void>;
}
