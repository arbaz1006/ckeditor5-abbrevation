export function getSchemaDefinition({ editors, currentEditorName }: {
    editors: any;
    currentEditorName: any;
}, currentSchemaDefinitionName: any): {
    currentSchemaDefinitionName: any;
    type: string;
    urls: {
        general: string;
        allowAttributes: string;
        allowChildren: string;
        allowIn: string;
    };
    properties: {};
    allowChildren: {};
    allowIn: {};
    allowAttributes: {};
    definition: any;
} | null;
export function getSchemaTreeDefinition({ editors, currentEditorName }: {
    editors: any;
    currentEditorName: any;
}): {
    name: string;
    type: string;
    children: never[];
    node: string;
    attributes: never[];
    presentation: {
        isEmpty: boolean;
        cssClass: string;
    };
}[];
