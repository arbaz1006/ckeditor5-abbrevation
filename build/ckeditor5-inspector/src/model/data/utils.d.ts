export function getEditorModelRoots(editor: any): any[];
export function getEditorModelRanges(editor: any, currentRootName: any): {
    type: string;
    start: {
        path: any;
        stickiness: any;
        index: any;
        isAtEnd: any;
        isAtStart: any;
        offset: any;
        textNode: any;
    };
    end: {
        path: any;
        stickiness: any;
        index: any;
        isAtEnd: any;
        isAtStart: any;
        offset: any;
        textNode: any;
    };
}[];
export function getEditorModelMarkers(editor: any, currentRootName: any): {
    type: string;
    marker: any;
    name: any;
    affectsData: any;
    managedUsingOperations: any;
    presentation: {
        color: string;
    };
    start: {
        path: any;
        stickiness: any;
        index: any;
        isAtEnd: any;
        isAtStart: any;
        offset: any;
        textNode: any;
    };
    end: {
        path: any;
        stickiness: any;
        index: any;
        isAtEnd: any;
        isAtStart: any;
        offset: any;
        textNode: any;
    };
}[];
export function getEditorModelTreeDefinition({ currentEditor, currentRootName, ranges, markers }: {
    currentEditor: any;
    currentRootName: any;
    ranges: any;
    markers: any;
}): {}[];
export function getEditorModelNodeDefinition(currentEditor: any, node: any): {
    editorNode: any;
    properties: {};
    attributes: {};
};
