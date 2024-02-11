export function getEditorCommandDefinition({ editors, currentEditorName }: {
    editors: any;
    currentEditorName: any;
}, currentCommandName: any): {
    currentCommandName: any;
    type: string;
    url: string;
    properties: {};
    command: any;
} | null;
export function getCommandsTreeDefinition({ editors, currentEditorName }: {
    editors: any;
    currentEditorName: any;
}): {
    name: any;
    type: string;
    children: never[];
    node: any;
    attributes: any[][];
    presentation: {
        isEmpty: boolean;
        cssClass: string;
    };
}[];
