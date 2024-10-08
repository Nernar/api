declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                /**
                 * Class representing item extra data. Used to store additional information
                 * about item other then just item ID and data.
                 */
                export class NativeItemInstanceExtra extends java.lang.Object {
                    static class: java.lang.Class<NativeItemInstanceExtra>;
                    static constructClone(pointer: number): number;
                    static initSaverId(): void;
                    isFinalizableInstance(): boolean;
                    /**
                     * Creates an {@link com.zhekasmirnov.innercore.api.NativeItemInstanceExtra NativeItemInstanceExtra} Java object instance
                     * from given native item extra data object pointer,
                     * represented as 64-bit integer (long).
                     */
                    constructor(pointer: number);
                    /**
                     * Creates an empty {@link com.zhekasmirnov.innercore.api.NativeItemInstanceExtra NativeItemInstanceExtra} instance.
                     */
                    constructor();
                    /**
                     * Creates a new {@link com.zhekasmirnov.innercore.api.NativeItemInstanceExtra NativeItemInstanceExtra} instance
                     * and copies all data from another extra object given.
                     */
                    constructor(other: NativeItemInstanceExtra);

                    asJson(): org.json.JSONObject;
                    /**
                     * Creates a copy of current {@link com.zhekasmirnov.innercore.api.NativeItemInstanceExtra NativeItemInstanceExtra} object.
                     * @returns A created copy of the data.
                     */
                    copy(): NativeItemInstanceExtra;
                    getValue(): number;
                    /**
                     * @returns `true`, if item extra exists and is not empty.
                     */
                    isEmpty(): boolean;
                    applyTo(item: ItemInstance): void;
                    /**
                     * @returns `true` if the item is enchanted, `false` otherwise.
                     */
                    isEnchanted(): boolean;
                    /**
                     * Adds a new enchantment to the item.
                     * @param type enchantment ID, one of the {@link EEnchantment} constants
                     * @param level enchantment level, generally between 1 and 5
                     */
                    addEnchant(type: number, level: number): void;
                    /**
                     * @param type enchantment ID, one of the {@link EEnchantment} constants
                     * @returns Level of the specified enchantment.
                     */
                    getEnchantLevel(type: number): number;
                    /**
                     * Removes enchantments by it's ID.
                     * @param type enchantment ID, one of the {@link EEnchantment} constants
                     */
                    removeEnchant(type: number): void;
                    /**
                     * Removes all the enchantments of the item.
                     */
                    removeAllEnchants(): void;
                    /**
                     * @returns Amount of enchantments applied to the item.
                     */
                    getEnchantCount(): number;
                    /**
                     * @param id enchantment ID, one of the {@link EEnchantment} constants
                     * @param level enchantment level, generally between 1 and 5
                     * @returns Enchantment name by it's ID and level.
                     * @since 2.2.1b94 (not worked before)
                     */
                    getEnchantName(id: number, level: number): string;
                    getRawEnchants(): number[][];
                    getEnchants(): {[id: number]: number};
                    /**
                     * @returns All enchantments names separated by line breaks.
                     */
                    getAllEnchantNames(): string;
                    getAllCustomData(): string;
                    setAllCustomData(data: string): void;
                    /**
                     * @returns Item's custom name.
                     */
                    getCustomName(): string;
                    /**
                     * Sets item's custom name.
                     */
                    setCustomName(name: string): void;
                    /**
                     * @returns Compound tag for the specified item.
                     * @since 2.0.5b44
                     */
                    getCompoundTag(): Nullable<NBT.CompoundTag>;
                    /**
                     * Sets compound tag for the specified item.
                     * @since 2.0.5b44
                     */
                    setCompoundTag(ent: number, tag: NBT.CompoundTag): void;
                    /**
                     * @returns Reference to itself to be used in sequential calls.
                     */
                    putObject(name: string, value: java.lang.Object): NativeItemInstanceExtra;
                    /**
                     * Puts some custom string parameter to the extra data of the item.
                     * @param name parameter name
                     * @param value parameter value
                     * @returns Reference to itself to be used in sequential calls.
                     */
                    putString(name: string, value: string): NativeItemInstanceExtra;
                    /**
                     * Puts some custom integer parameter to the extra data of the item.
                     * @param name parameter name
                     * @param int parameter value
                     * @returns Reference to itself to be used in sequential calls.
                     */
                    putInt(name: string, int: number): NativeItemInstanceExtra;
                    /**
                     * Puts some custom long integer parameter to the extra data of the item.
                     * @param name parameter name
                     * @param long parameter value
                     * @returns Reference to itself to be used in sequential calls.
                     */
                    putLong(name: string, long: number): NativeItemInstanceExtra;
                    /**
                     * Puts some custom floating point number parameter to the extra data of the item.
                     * @param name parameter name
                     * @param float parameter value
                     * @returns Reference to itself to be used in sequential calls.
                     */
                    putFloat(name: string, float: number): NativeItemInstanceExtra;
                    /**
                     * Puts some custom boolean parameter to the extra data of the item.
                     * @param name parameter name
                     * @param bool parameter value
                     * @returns Reference to itself to be used in sequential calls.
                     */
                    putBoolean(name: string, bool: boolean): NativeItemInstanceExtra;
                    /**
                     * @param name parameter name
                     * @param fallback default value to be returned if item extra data doesn't
                     * contain a parameter with specified name
                     * @returns Custom string parameter value if extra data of the item contains
                     * one, fallback value otherwise. If fallback was not specified, `null` is returned.
                     */
                    getString(name: string, fallback?: string): Nullable<string>;
                    /**
                     * @param name parameter name
                     * @param fallback default value to be returned if item extra data doesn't 
                     * contain a parameter with specified name
                     * @returns Custom integer parameter value if extra data of the item contains
                     * one, fallback value otherwise. If fallback was not specified, `null` is returned.
                     */
                    getInt(name: string, fallback?: number): Nullable<number>;
                    /**
                     * @param name parameter name
                     * @param fallback default value to be returned if item extra data doesn't
                     * contain a parameter with specified name
                     * @returns Custom long integer parameter value if extra data of the item contains
                     * one, fallback value otherwise. If fallback was not specified, `null` is returned.
                     */
                    getLong(name: string, fallback?: number): Nullable<number>;
                    /**
                     * @param name parameter name
                     * @param fallback default value to be returned if item extra data doesn't
                     * contain a parameter with specified name
                     * @returns Custom float parameter value if extra data of the item contains
                     * one, fallback value otherwise. If fallback was not specified, `null` is returned.
                     */
                    getFloat(name: string, fallback?: number): Nullable<number>;
                    /**
                     * @param name parameter name
                     * @param fallback default value to be returned if item extra data doesn't
                     * contain a parameter with specified name
                     * @returns Custom boolean parameter value if extra data of the item contains
                     * one, fallback value otherwise. If fallback was not specified, `null` is returned.
                     */
                    getBoolean(name: string, fallback?: boolean): Nullable<boolean>;
                    /**
                     * @returns Reference to itself to be used in sequential calls.
                     */
                    putSerializable(name: string, serializableObject: any): NativeItemInstanceExtra;
                    getSerializable(name: string): any;
                    /**
                     * Removes all custom parameters from item extra data.
                     */
                    removeCustomData(): void;
                    toString(): string;
                    static unwrapObject(extra: any): Nullable<NativeItemInstanceExtra>;
                    static unwrapValue(extra: any): number;
                    static getValueOrNullPtr(extra: NativeItemInstanceExtra): number;
                    static getExtraOrNull(extraPointer: number): Nullable<NativeItemInstanceExtra>;
                    static cloneExtra(extra: Nullable<NativeItemInstanceExtra>): Nullable<NativeItemInstanceExtra>;
                    static fromJson(json: org.json.JSONObject): Nullable<NativeItemInstanceExtra>;
                }
            }
        }
    }
}