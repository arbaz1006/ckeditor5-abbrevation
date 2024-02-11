export function toggleIsCollapsed(): {
    type: string;
};
export function setHeight(newHeight: any): {
    type: string;
    newHeight: any;
};
export function setSidePaneWidth(newWidth: any): {
    type: string;
    newWidth: any;
};
export function setEditors(editors: any): {
    type: string;
    editors: any;
};
export function setCurrentEditorName(editorName: any): {
    type: string;
    editorName: any;
};
export function setActiveTab(tabName: any): {
    type: string;
    tabName: any;
};
export function updateCurrentEditorIsReadOnly(): {
    type: string;
};
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
export const TOGGLE_IS_COLLAPSED: "TOGGLE_IS_COLLAPSED";
export const SET_HEIGHT: "SET_HEIGHT";
export const SET_SIDE_PANE_WIDTH: "SET_SIDE_PANE_WIDTH";
export const SET_EDITORS: "SET_EDITORS";
export const SET_CURRENT_EDITOR_NAME: "SET_CURRENT_EDITOR_NAME";
export const UPDATE_CURRENT_EDITOR_IS_READ_ONLY: "UPDATE_CURRENT_EDITOR_IS_READ_ONLY";
export const SET_ACTIVE_INSPECTOR_TAB: "SET_ACTIVE_INSPECTOR_TAB";
