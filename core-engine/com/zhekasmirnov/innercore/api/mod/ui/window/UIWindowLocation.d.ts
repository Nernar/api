declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            export interface IWindowLocation {
                                /**
                                 * X coordinate of the window in units.
                                 * @default 0
                                 */
                                x?: number,
                                /**
                                 * Y coordinate of the window in units.
                                 * @default 0
                                 */
                                y?: number,
                                /**
                                 * Width of the window in units, by default calculated to match right
                                 * screen bound.
                                 */
                                width?: number,
                                /**
                                 * Height of the window in units, by default calculated to match bottom
                                 * screen bound.
                                 */
                                height?: number,
                                /**
                                 * Defines scrollable window size along the X axis.
                                 */
                                scrollX?: number,
                                /**
                                 * Defines scrollable window size along the Y axis.
                                 */
                                scrollY?: number;
                            }
                            /**
                             * Object representing window location used in window content object and
                             * {@link com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation IWindowLocation} constructor.
                             */
                            export interface WindowLocationDescription extends IWindowLocation {
                                forceScrollX?: boolean, forceScrollY?: boolean,
                                /**
                                 * Determines whether the interface needs to be resized based
                                 * on its size or a global unit system should be used.
                                 * @since 2.3.1b115
                                 */
                                globalScale?: boolean,
                                /**
                                 * Paddings are distances from the window bounds to the elements in the
                                 * window.
                                 */
                                padding?: { top?: number, bottom?: number, left?: number, right?: number };
                            }
                            export class UIWindowLocation extends java.lang.Object {
                                static class: java.lang.Class<UIWindowLocation>;
                                /**
                                 * Constant used to represent bottom padding.
                                 */
                                static readonly PADDING_BOTTOM: number;
                                /**
                                 * Constant used to represent left padding.
                                 */
                                static readonly PADDING_LEFT: number;
                                /**
                                 * Constant used to represent right padding.
                                 */
                                static readonly PADDING_RIGHT: number;
                                /**
                                 * Constant used to represent top padding.
                                 */
                                static readonly PADDING_TOP: number;
                                forceScrollX: boolean;
                                forceScrollY: boolean;
                                /**
                                 * Determines whether the interface needs to be resized based
                                 * on its size or a global unit system should be used.
                                 * @since 2.3.1b115
                                 */
                                globalScale: boolean;
                                /**
                                 * Window height.
                                 */
                                height: number;
                                /**
                                 * Window scale.
                                 */
                                scale: number;
                                /**
                                 * Horizontal window scroll.
                                 */
                                scrollX: number;
                                /**
                                 * Vertical window scroll.
                                 */
                                scrollY: number;
                                /**
                                 * Window width.
                                 */
                                width: number;
                                /**
                                 * Window horizontal position.
                                 */
                                x: number;
                                /**
                                 * Window vertical position.
                                 */
                                y: number;
                                /**
                                 * Window position on layers.
                                 */
                                zIndex: number;
                                /**
                                 * Constructs new {@link com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation UIWindowLocation} instance with default position and
                                 * size (fullscreen window).
                                 */
                                constructor();
                                /**
                                 * Constructs new {@link com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation UIWindowLocation} instance with specified parameters.
                                 * @param params 
                                 */
                                constructor(params: WindowLocationDescription);
                                /**
                                 * Sets scrollable window size. Should be greater then window 
                                 * width/height for the changes to take effect.
                                 * @param x scrollable window size along the X axis
                                 * @param y scrollable window size along the Y axis
                                 */
                                setScroll(x: number, y: number): void;
                                /**
                                 * Sets the size of the window.
                                 * @param x window's width
                                 * @param y window's height
                                 */
                                setSize(x: number, y: number): void;
                                /**
                                 * @returns Window location as a js object. Note that paddings are not
                                 * included into the object.
                                 */
                                asScriptable(): IWindowLocation;
                                /**
                                 * Creates a copy of current {@link com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation UIWindowLocation} object.
                                 * @returns Newly created copy of the object.
                                 */
                                copy(): UIWindowLocation;
                                /**
                                 * Sets window location parameters.
                                 * @param x X coordinate of the window
                                 * @param y Y coordinate of the window
                                 * @param width width of the window
                                 * @param height height of the window
                                 */
                                set(x: number, y: number, width: number, height: number): void;
                                /**
                                 * Sets window location parameters from another {@link com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation UIWindowLocation}.
                                 * Note that paddings are not copied instance.
                                 * @param location another {@link com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation UIWindowLocation} instance to copy 
                                 * parameters from
                                 */
                                set(location: UIWindowLocation): void;
                                /**
                                 * Sets window's scroll size to the windows size to remove scroll.
                                 */
                                removeScroll(): void;
                                /**
                                 * Sets padding of the window.
                                 * @param padding one of the {@link com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation.PADDING_TOP UIWindowLocation.PADDING_TOP}, 
                                 * {@link com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation.PADDING_BOTTOM UIWindowLocation.PADDING_BOTTOM},
                                 * {@link com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation.PADDING_LEFT UIWindowLocation.PADDING_LEFT},
                                 * {@link com.zhekasmirnov.innercore.api.mod.ui.window.UIWindowLocation.PADDING_RIGHT UIWindowLocation.PADDING_RIGHT} constants
                                 * @param value value of the padding to be assigned to appropriate 
                                 * window bound
                                 */
                                setPadding(padding: 0 | 1 | 2 | 3, value: number): void;
                                /**
                                 * Sets the four paddings of the window for the appropriate bounds.
                                 */
                                setPadding(top: number, bottom: number, left: number, right: number): void;
                                /**
                                 * @returns Unit size (in pixels) in the fullscreen context (`<screen width> / 1000`).
                                 */
                                getScale(): number;
                                /**
                                 * @returns Unit size (in pixels) in the window's bounds.
                                 */
                                getDrawingScale(): number;
                                /**
                                 * @returns Window's rectangle in the {@link android.graphics.Rect} object.
                                 */
                                getRect(): android.graphics.Rect;
                                showPopupWindow(win: android.widget.PopupWindow): void;
                                updatePopupWindow(win: android.widget.PopupWindow): void;
                                getLayoutParams(a1: number, a2: number, a3: number): android.view.WindowManager.LayoutParams;
                                setupAndShowPopupWindow(win: android.widget.PopupWindow): void;
                                /**
                                 * Sets window's Z index. Z index determines how the window will be
                                 * displayed when several windows are open.
                                 * @param z window Z index
                                 */
                                setZ(z: number): void;
                                /**
                                 * @returns Window's width in units
                                 * (always 1000 by definition of the unit).
                                 */
                                getWindowWidth(): 1000;
                                /**
                                 * @returns Window's height in units.
                                 */
                                getWindowHeight(): number;
                                /**
                                 * Transforms dimension in fullscreen units to the dimension within
                                 * window's bounds.
                                 * @param val value to be transformed
                                 */
                                globalToWindow(val: number): number;
                                /**
                                 * Transforms dimension within window's bounds to the dimension in
                                 * fullscreen units.
                                 * @param val value to be transformed
                                 */
                                windowToGlobal(val: number): number;
                            }
                        }
                    }
                }
            }
        }
    }
}