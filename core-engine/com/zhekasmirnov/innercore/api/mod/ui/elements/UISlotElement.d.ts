declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface SlotElementDescription extends BasicElementDescription {
                                type: "slot",
                                bitmap?: string,
                                size?: number,
                                maxStackSize?: number,
                                visual?: boolean,
                                darken?: boolean,
                                isDarkenAtZero?: boolean,
                                /**
                                 * @since 2.0.4b42
                                 */
                                text?: string,
                                source?: ItemInstance,
                                /**
                                 * @deprecated In 2.0.4b43, not needed anymore.
                                 */
                                isTransparentBackground?: boolean,
                                /**
                                 * @deprecated In 2.0.4b43, not needed anymore.
                                 */
                                needClean?: boolean,
                                /**
                                 * @default 0.82
                                 * @since 2.2.1b96
                                 */
                                iconScale?: number,
                                /**
                                 * @default false
                                 * @since 2.2.1b96
                                 */
                                disablePixelPerfect?: boolean,
                                onItemChanged?: (container: container.UiAbstractContainer, oldId: number, oldCount: number, oldData: number) => void,
                                isValid?: (id: number, count: number, data: number, container: container.Container, item: ItemInstance) => boolean;
                            }
                            export class UISlotElement extends UIElement {
                                static class: java.lang.Class<UISlotElement>;
                                background: types.Texture;
                                curCount: number;
                                curData: number;
                                curExtra: Nullable<NativeItemInstanceExtra>;
                                curId: number;
                                isDarken: boolean;
                                isDarkenAtZero: boolean;
                                isVisual: boolean;
                                maxStackSize: number;
                                size: number;
                                slotName: string;
                                source: container.UiVisualSlotImpl;
                                textOverride: Nullable<string>;
                                constructor(win: window.UIWindow, desc: SlotElementDescription);
                                onSetup<UISlotElement>(desc: UISlotElement): void;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onBindingUpdated<T>(name: string, val: T): void;
                                setupInitialBindings(container: container.UiAbstractContainer, elementName: string): void;
                                onRelease(): void;
                                onReset(): void;
                                getMaxStackSize(): number;
                                isValidItem(id: number, count: number, data: number, extra: Nullable<NativeItemInstanceExtra>): boolean;
                                getMaxItemTransferAmount(slot: UISlotElement): number;
                                onTouchEvent(event: types.TouchEvent): void;
                            }
                        }
                    }
                }
            }
        }
    }
}