export function getEditorViewRoots(editor: any): any[];
export function getEditorViewRanges(editor: any, currentRootName: any): {
    type: string;
    start: {
        path: any[];
        offset: any;
        isAtEnd: any;
        isAtStart: any;
        parent: any;
    };
    end: {
        path: any[];
        offset: any;
        isAtEnd: any;
        isAtStart: any;
        parent: any;
    };
}[];
export function getEditorViewTreeDefinition({ currentEditor, currentRootName, ranges }: {
    currentEditor: any;
    currentRootName: any;
    ranges: any;
}): {}[] | null;
export function getEditorViewNodeDefinition(node: any): {
    editorNode: any;
    properties: {};
    attributes: {};
    customProperties: {};
};
export const DOCS_URL_PREFIX: "https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view";
