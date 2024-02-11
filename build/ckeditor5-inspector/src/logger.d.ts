/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
export default class Logger {
    static group(...args: any[]): void;
    static groupEnd(...args: any[]): void;
    static log(...args: any[]): void;
    static warn(...args: any[]): void;
}
