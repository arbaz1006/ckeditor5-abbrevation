export function getCurrentEditor(globalState: any): any;
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
export default class EditorListener {
    constructor(config: any);
    _config: any;
    startListening(currentEditor: any): void;
    stopListening(currentEditor: any): void;
}
