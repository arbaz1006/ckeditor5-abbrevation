export function setModelCurrentRootName(currentRootName: any): {
    type: string;
    currentRootName: any;
};
export function setModelCurrentNode(currentNode: any): {
    type: string;
    currentNode: any;
};
export function setModelActiveTab(tabName: any): {
    type: string;
    tabName: any;
};
export function toggleModelShowMarkers(): {
    type: string;
};
export function toggleModelShowCompactText(): {
    type: string;
};
export function updateModelState(): {
    type: string;
};
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
export const SET_MODEL_CURRENT_ROOT_NAME: "SET_MODEL_CURRENT_ROOT_NAME";
export const SET_MODEL_CURRENT_NODE: "SET_MODEL_CURRENT_NODE";
export const SET_MODEL_ACTIVE_TAB: "SET_MODEL_ACTIVE_TAB";
export const TOGGLE_MODEL_SHOW_MARKERS: "TOGGLE_MODEL_SHOW_MARKERS";
export const TOGGLE_MODEL_SHOW_COMPACT_TEXT: "TOGGLE_MODEL_SHOW_COMPACT_TEXT";
export const UPDATE_MODEL_STATE: "UPDATE_MODEL_STATE";
