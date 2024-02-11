export default class MiniCKEditorInspector {
    /**
     * Attaches the mini inspector to an editor instance and renders it in the specified HTML element.
     *
     *		ClassicEditor
     *			.create( ... )
     *			.then( editor => {
     *				MiniCKEditorInspector.attach( editor, document.querySelector( '#inspector-render-element' ) );
     *			} )
     *			.catch( error => {
     *				console.error( error );
     *			} );
     *
     * @param {Editor} editor CKEditor 5 instance the mini inspector will attach to.
     * @param {Element} container HTML element in which the mini inspector will be rendered in.
     */
    static attach(editor: Editor, container: Element): void;
}
