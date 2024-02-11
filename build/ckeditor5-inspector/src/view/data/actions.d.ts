export function setViewCurrentRootName(currentRootName: any): {
    type: string;
    currentRootName: any;
};
export function setViewCurrentNode(currentNode: any): {
    type: string;
    currentNode: any;
};
export function setViewActiveTab(tabName: any): {
    type: string;
    tabName: any;
};
export function toggleViewShowElementTypes(): {
    type: string;
};
export function updateViewState(): {
    type: string;
};
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
export const SET_VIEW_CURRENT_ROOT_NAME: "SET_VIEW_CURRENT_ROOT_NAME";
export const SET_VIEW_CURRENT_NODE: "SET_VIEW_CURRENT_NODE";
export const SET_VIEW_ACTIVE_TAB: "SET_VIEW_ACTIVE_TAB";
export const TOGGLE_VIEW_SHOW_ELEMENT_TYPES: "TOGGLE_VIEW_SHOW_ELEMENT_TYPES";
export const UPDATE_VIEW_STATE: "UPDATE_VIEW_STATE";
