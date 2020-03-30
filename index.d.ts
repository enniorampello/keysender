// import { EventEmitter } from "events";
declare type keyboardRegularButton = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "+" | "-" | "." | "," | "?" | "~" | "[" | "]" | "|" | "'" | "backspace" | "delete" | "enter" | "tab" | "escape" | "up" | "down" | "right" | "left" | "home" | "end" | "pageup" | "pagedown" | "f1" | "f2" | "f3" | "f4" | "f5" | "f6" | "f7" | "f8" | "f9" | "f10" | "f11" | "f12" | "f13" | "f14" | "f15" | "f16" | "f17" | "f18" | "f19" | "f20" | "f21" | "f22" | "f23" | "f24" | "capslock" | "space" | "prntscrn" | "insert" | "numlock" | "num0" | "num0" | "num1" | "num2" | "num3" | "num4" | "num5" | "num6" | "num7" | "num8" | "num9" | "num+" | "num-" | "num*" | "num/" | "num.";
declare type keyboardSpecButton = "alt" | "ctrl" | "shift";
declare type keyboardSpecSideButton = "lshift" | "rshift" | "lctrl" | "rctrl" | "lalt" | "ralt";
declare type keyboardButton = keyboardRegularButton | keyboardSpecButton | keyboardRegularButton;
declare type mouseButton = "left" | "right" | "middle";
declare type keyboardEvent = "beforePrintText" | "beforeToggleKey" | "beforeSendKey" | "beforeSendKeys" | "afterPrintText" | "afterToggleKey" | "afterSendKey" | "afterSendKeys";
declare type mouseEvent = "beforeToggle" | "beforeClick" | "beforeMoveTo" | "beforeMoveCurveTo" | "beforeMove" | "beforeScrollWheel" | "afterToggle" | "afterClick" | "afterMoveTo" | "afterMoveCurveTo" | "afterMove" | "afterScrollWheel";
declare interface windowInfo {
    x: number;
    y: number;
    width: number;
    eight: number;
}
declare type hex = string;
declare interface img {
    data: Buffer;
    height: number;
    width: number;
    /** @returns pixel color in [x, y] from captured image. */
    colorAt(x: number, y: number): hex;
}
declare interface windowData {
    handle: number;
    className: string;
    title: string;
}
declare type hotkeyMode = "once" | "hold" | "toggle";
declare type from = number;
declare type to = number;
declare type randomFromRange = [from, to];
declare type screenSize = {
    width: number;
    height: number;
}
declare type coords = {
    x: number;
    y: number;
}
declare interface EventEmitter<event> {
    addListener(event: event | string, listener: (...args: any[]) => void): this;
    on(event: event | string, listener: (...args: any[]) => void): this;
    once(event: event | string, listener: (...args: any[]) => void): this;
    removeListener(event: event | string, listener: (...args: any[]) => void): this;
    off(event: event | string, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: event | string): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: event | string): Function[];
    rawListeners(event: event | string): Function[];
    emit(event: event | string, ...args: any[]): boolean;
    listenerCount(type: event | string): number;
    prependListener(event: event | string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: event | string, listener: (...args: any[]) => void): this;
    eventNames(): Array<event | string>;
}
declare interface keyboard extends EventEmitter<keyboardEvent> {
    keyTogglerDelay: number | randomFromRange;
    keySenderDelay: number | randomFromRange;
    /** Prints text.
     * @param text - string to print.
     * @param afterTypeDelay - milliseconds to sleep after each char typed excluding last,
     * if not provided defaults to 0.
     */
    printText(text: string, afterTypeDelay?: number | randomFromRange): void;
    /** Prints text async.
     * @param text - string to print.
     * @param afterTypeDelay - milliseconds to await after each char typed excluding last,
     * if not provided defaults to 0.
     */
    printTextAsync(text: string, afterTypeDelay?: number | randomFromRange): Promise<void>;
    /**
     * Toggles key or combination of keys to provided state.
     * @param key - key or array with combination of keys.
     * @param state - key state selection: true for press, false for release,
     * if not provided defaults to true.
     * @param delay - milliseconds to sleep after key toggled,
     * if not provided defaults to keyboard.keyTogglerDelay.
     */
    toggleKey(key: keyboardButton | keyboardButton[], state?: boolean, delay?: number | randomFromRange): void;
    /**
     * Toggles key or combination of keys to provided state async.
     * @param key - key or array with combination of keys.
     * @param state - key state selection: true for press, false for release,
     * if not provided defaults to true.
     * @param delay -milliseconds to await after key toggled,
     * if not provided defaults to keyboard.keyTogglerDelay.
     */
    toggleKeyAsync(key: keyboardButton | keyboardButton[], state?: boolean, delay?: number | randomFromRange): Promise<void>,
    /**
     * Press and release key or combination of keys.
     * @param key - key or array with combination of keys.
     * @param afterPressDelay - milliseconds to sleep after key pressed,
     * if not provided defaults to keyboard.keyTogglerDelay.
     * @param afterReleaseDelay - milliseconds to sleep after key released,
     * if not provided defaults to 0.
     */
    sendKey(key: keyboardButton | keyboardButton[], afterPressDelay?: number | randomFromRange, afterReleaseDelay?: number | randomFromRange): void;
    /**
     * Press and release key or combination of keys async.
     * @param key - key or array with combination of keys.
     * @param afterPressDelay - milliseconds to await after key pressed,
     * if not provided defaults to keyboard.keyTogglerDelay.
     * @param afterReleaseDelay - milliseconds to await after key released,
     * if not provided defaults to 0.
     */
    sendKeyAsync(key: keyboardButton | keyboardButton[], afterPressDelay?: number | randomFromRange, afterReleaseDelay?: number | randomFromRange): Promise<void>,
    /**
     * Press and release array of keys.
     * @param keys - array with keys.
     * @param afterPressDelay - milliseconds to sleep after each key pressed,
     * if not provided defaults to keyboard.keyTogglerDelay.
     * @param afterReleaseDelay - delay in milliseconds to sleep after each key released excluding last,
     * if not provided defaults to {afterPressDelay}, if {afterPressDelay} not provided defaults to keyboard.keySenderDelay.
     */
    sendKeys(keys: keyboardButton[], afterPressDelay?: number | randomFromRange, afterReleaseDelay?: number | randomFromRange): void,
    /**
     * Press and release array of keys async.
     * @param keys - array with keys.
     * @param afterPressDelay - milliseconds to await after each key pressed,
     * if not provided defaults to keyboard.keyTogglerDelay.
     * @param afterReleaseDelay - delay in milliseconds to await after each key released excluding last,
     * if not provided defaults to {afterPressDelay}, if {afterPressDelay} not provided defaults to keyboard.keySenderDelay.
     */
    sendKeysAsync(keys: keyboardButton[], afterPressDelay?: number | randomFromRange, afterReleaseDelay?: number | randomFromRange): Promise<void>
}
declare interface mouse extends EventEmitter<mouseEvent> {
    buttonTogglerDelay: number | randomFromRange;
    /** If saveMod is true every mouse method first back to mouse.lastCoords, by default to false. */
    saveMod: boolean;
    /** Last coordinates of mouse, this value changes after every mouse move method execution, by default to {x: 0, y: 0}. */
    lastCoords: coords;
    /** Get current cursor position at screen for Hardware class or position at current workwindow for Virtual class. */
    getPos(): coords;
    /**
     * Switch mouse button state.
     * @param state - key state selection: true for press, false for release.
     * @param button - name of mouse button.
     * @param delay - milliseconds to sleep after switching mouse button state,
     * if not provided defaults to mouse.buttonTogglerDelay.
     */
    toggle(state: boolean, button?: mouseButton, delay?: number | randomFromRange): void;
    /**
     * Switch mouse button state async.
     * @param state - key state selection: true for press, false for release.
     * @param button - name of mouse button.
     * @param delay - milliseconds to await after switching mouse button state,
     * if not provided defaults to mouse.buttonTogglerDelay.
     */
    toggleAsync(state: boolean, button?: mouseButton, delay?: number | randomFromRange): Promise<void>;
    /**
     * Click mouse button
     * @param button - name of mouse button.
     * @param afterPressDelay - milliseconds to sleep after mouse button pressed,
     * if not provided defaults to mouse.buttonTogglerDelay.
     * @param afterReleaseDelay - milliseconds to sleep after mouse button released,
     * if not provided defaults to 0.
     */
    click(button?: mouseButton, afterPressDelay?: number | randomFromRange, afterReleaseDelay?: number | randomFromRange): void;
    /**
     * Click mouse button async
     * @param button - name of mouse button.
     * @param afterPressDelay - milliseconds to await after mouse button pressed,
     * if not provided defaults to mouse.buttonTogglerDelay.
     * @param afterReleaseDelay - milliseconds to await after mouse button released,
     * if not provided defaults to 0.
     */
    clickAsync(button?: mouseButton, afterPressDelay?: number | randomFromRange, afterReleaseDelay?: number | randomFromRange): Promise<void>;
    /**
     * Move mouse to [x, y].
     * @param delay - milliseconds to sleep after mouse movement,
     * if not provided defaults to 0.
     */
    moveTo(x: number, y: number, delay?: number | randomFromRange): void;
    /**
     * Move mouse to [x, y] async.
     * @param delay - milliseconds to await after mouse movement,
     * if not provided defaults to 0.
     */
    moveToAsync(x: number, y: number, delay?: number | randomFromRange): Promise<void>;
    /**
     * Simulate human similar mouse movement from {lastCoords} to [x, y].
     * @param speed - move speed, if not provided defaults to 5,
     * if speed equals to "max" - immediate movement.
     * @param deviation - movement curvature, if not provided defaults to 30.
     */
    moveCurveTo(x: number, y: number, speed?: number | "max", deviation?: number): void;
    /**
     * Simulate human similar mouse movement from {lastCoords} to [x, y] async.
     * @param speed - move speed, if not provided defaults to 5,
     * if speed equals to "max" - immediate movement.
     * @param deviation - movement curvature, if not provided defaults to 30.
     */
    moveCurveToAsync(x: number, y: number, speed?: number | "max", deviation?: number): Promise<void>;
    /**
     * Move mouse from current position by [x, y] relatively.
     * @param delay - milliseconds to sleep after mouse movement,
     * if not provided defaults to 0.
     */
    move(x: number, y: number, delay?: number | randomFromRange): void;
    /**
     * Move mouse from current position by [x, y] relatively async.
     * @param delay - milliseconds to await after mouse movement,
     * if not provided defaults to 0.
     */
    moveAsync(x: number, y: number, delay?: number | randomFromRange): Promise<void>;
    /**
     * Scroll mouse wheel.
     * @param amount - the amount of wheel movement. A positive value indicates that the wheel was rotated forward, away from the user,
     * a negative value indicates that the wheel was rotated backward, toward the user.
     * @param wheelTogglerDelay - delay in milliseconds to sleep after wheel scroll,
     * if not provided defaults to 0.
     */
    scrollWheel(amount: number, wheelTogglerDelay?: number | randomFromRange): void;
    /**
     * Scroll mouse wheel async.
     * @param amount - the amount of wheel movement. A positive value indicates that the wheel was rotated forward, away from the user,
     * a negative value indicates that the wheel was rotated backward, toward the user.
     * @param wheelTogglerDelay - delay in milliseconds to await after wheel scroll,
     * if not provided defaults to 0.
     */
    scrollWheelAsync(count: number, wheelTogglerDelay?: number | randomFromRange): Promise<void>
}
declare interface workwindow extends EventEmitter<"capture"> {
    /** Set current workwindow by {handle}. */
    set(handle: number): void;
    /** @returns object with {handle}, {title} and {className} of workwindow. */
    get(): windowData;
    /** Set workwindow position and(or) size.
     * @param info - object {x, y, width, height}
     */
    setInfo(info: Partial<windowInfo>): void;
    /** @returns object {x, y, width, height} */
    getInfo(): windowInfo;
    /** Adds the {listener} after event {eventName}. */
    on(eventName: "capture", listener: (...args: any[]) => void): this;
    /** Set current workwindow foreground. */
    setForeground(): void;
    isForeground(): boolean;
    isOpen(): boolean;
    /** capture part of current workwindow (or screen if {handle} is 0) from [x, y] to [x+width,y+height]. */
    capture(x: number, y: number, width: number, height: number): img;
    /** capture current workwindow (or screen if {handle} is 0). */
    capture(): img;
    /** @returns pixel color in [x, y] from current workwindow (or screen if {handle} is 0). */
    colorAt(x: number, y: number): hex;
    /** Terminate current workwindow by killing it's thread.*/
    kill(): void;
    /** Close current workwindow by sending close message. */
    close(): void;
}

declare class Worker {
    /** @param handle - handle of workwindow. */
    constructor(handle: number);
    /** Provides methods to synthesize keystrokes */
    declare keyboard: keyboard;
    /** Provides methods to synthesize mouse motions, and button clicks */
    declare mouse: mouse;
    /** Provides methods to work with workwindow */
    declare workwindow: workwindow;
}

/** Provides methods implementations on hardware level. */
export declare class Hardware extends Worker { }

/** Provides methods implementations on virtual level. */
export declare class Virtual extends Worker { }

export declare class GlobalHotkey {
    /**
     * Register hotkey.
     * @param func - function that calls after hotkey pressed.
     * @param mode - if "once" - {func} will repeat one time for each {hotkey} press, if "hold" - {func} will repeat while {hotkey} is pressed, if "toggle" - {func} start repeat after {hotkey} first time pressing and end repeat after {hotkey} second time pressing, by default = "once".
     * @param delay - if {mode} is "hold" or "toggle" - set delay between {func} calls, by default = 1.
     */
    static register(hotkey: keyboardRegularButton | (keyboardSpecButton | keyboardRegularButton)[] | [keyboardRegularButton], hotkeyName: string, func: () => void, mode?: hotkeyMode, delay?: number): void;
    /** Unregister hotkey by name. */
    static unregister(hotkeyName: string): void;
    /** Unregister all hotkeys. */
    static unregisterAll(): void;
    /** @returns name of {hotkey} or null if {hotkey} is not registered. */
    static findHotkeyName(hotkey: keyboardRegularButton | (keyboardSpecButton | keyboardRegularButton)[] | [keyboardRegularButton]): string | null
}

/** @returns object {width, height} with screen size. */
export declare function getScreenSize(): screenSize;

/** Get array with objects {handle, title, className} of all open windows. */
export declare function getWindow(): windowData[];
/** Get window {handle} by {title} and(or) {className}. */
export declare function getWindow(title: string | null, className?: string | null): number;

/** Get array with objects {handle, title, className} of all {parentHandle} children. */
export declare function getWindowChild(parentHandle: number): windowData[];
/** Get {handle} of {parentHandle} child by {className} and(or) {title}. */
export declare function getWindowChild(parentHandle: number, className: string | null, title?: string | null): number;

/** Pause current thread for {ms} milliseconds. */
export declare function sleep(ms: number | randomFromRange): void;