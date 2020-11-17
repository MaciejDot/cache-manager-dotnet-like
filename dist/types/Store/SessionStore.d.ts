import { IStore } from "./IStore";
export declare class SessionStore implements IStore {
    getItem<T>(key: string): Promise<T>;
    exist(key: string): Promise<boolean>;
    setItem(key: string, item: any): Promise<void>;
    getAllKeys(): Promise<string[]>;
    deleteItem(key: string): Promise<void>;
}
//# sourceMappingURL=SessionStore.d.ts.map