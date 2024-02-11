export default class TestEditor extends Editor {
    static create(element: any, config?: {}): Promise<any>;
    /**
     * @inheritDoc
     */
    constructor(element: any, config: any);
    element: any;
    ui: ClassicTestEditorUI;
}
export class FooCommand extends Command {
}
import Editor from "@ckeditor/ckeditor5-core/src/editor/editor";
declare class ClassicTestEditorUI {
    constructor(editor: any, view: any);
    _elementReplacer: ElementReplacer;
    _view: any;
    get view(): any;
    init(element: any): void;
    destroy(): void;
}
import Command from "@ckeditor/ckeditor5-core/src/command";
import ElementReplacer from "@ckeditor/ckeditor5-utils/src/elementreplacer";
export {};
