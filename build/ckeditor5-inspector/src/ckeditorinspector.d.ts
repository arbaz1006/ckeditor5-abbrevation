declare class CKEditorInspector {
    /**
     * Attaches the inspector to an editor instance.
     *
     *		ClassicEditor
     *			.create( ... )
     *			.then( editor => {
     *				CKEditorInspector.attach( editor );
     *			} )
     *			.catch( error => {
     *				console.error( error );
     *			} );
     *
     * **Note:** You can attach to multiple editors at a time under unique names:
     *
     *		CKEditorInspector.attach( {
     *			'header-editor': editor1,
     *			'footer-editor': editor2,
     *			// ...
     *		} );
     *
     * **Note:** You can pass global configuration options when attaching:
     *
     *		CKEditorInspector.attach( editor, { option: 'value', ... } );
     *		CKEditorInspector.attach( {
     *			'header-editor': editor1,
     *			'footer-editor': editor2
     *		}, { option: 'value', ... } );
     *
     * @param {Editor|Object} editorOrEditors If an editor instance is passed, the inspect will attach to the editor
     * with an auto–generated name. It is possible to pass an object with `name: instance` pairs to attach to
     * multiple editors at a time with unique names.
     * @param {CKEditorInspectorConfig} [options] An object of global configuration options controlling the
     * behavior of the inspector.
     * @returns {Array.<String>} Names of the editors the inspector attached to. Useful when using `CKEditorInspector.detach()`
     * with generated editor names.
     */
    static attach(...args: any[]): Array<string>;
    /**
     * Attaches the inspector to all CKEditor instances discovered in DOM.
     *
     * Editor instances are named `editor-1`, `editor-2`, etc..
     *
     * **Note:** This method requires CKEditor 12.3.0 or later.
     *
     * **Note:** You can pass global configuration options when attaching:
     *
     *		CKEditorInspector.attachToAll( { option: 'value', ... } );
     *
     * @param {CKEditorInspectorConfig} [options] An object of global configuration options controlling the
     * behavior of the inspector.
     * @returns {Array.<String>} Names of the editors the inspector attached to. Useful when using `CKEditorInspector.detach()`
     * with generated editor names.
     */
    static attachToAll(options?: any): Array<string>;
    /**
     * Detaches the inspector from an editor instance.
     *
     *		CKEditorInspector.attach( { 'my-editor': editor } );
     *
     *		// The inspector will no longer inspect the "editor".
     *		CKEditorInspector.detach( 'my-editor' );
     *
     * @param {String} string Name of the editor to detach.
     */
    static detach(name: any): void;
    /**
     * Destroys the entire inspector application and removes it from DOM.
     */
    static destroy(): void;
    static _updateEditorsState(): void;
    static _mount(options: any): void;
    static _isAttachedTo(editor: any): boolean;
}
declare namespace CKEditorInspector {
    const _editors: Map<any, any>;
    const _wrapper: any;
}
export default CKEditorInspector;
