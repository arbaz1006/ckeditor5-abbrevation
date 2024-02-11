/**
 * This class represents the MathType integration for CKEditor5.
 * @extends {IntegrationModel}
 */
export default class CKEditor5Integration {
    /** @inheritdoc */
    static getCorePath(): null;
    constructor(ckeditorIntegrationModelProperties: any);
    /**
     * Folder name used for the integration inside CKEditor plugins folder.
     */
    integrationFolderName: string;
    /**
       * @inheritdoc
       * @returns {string} - The CKEditor instance language.
       * @override
       */
    override getLanguage(): string;
    /**
       * Adds callbacks to the following CKEditor listeners:
       * - 'focus' - updates the current instance.
       * - 'contentDom' - adds 'doubleclick' callback.
       * - 'doubleclick' - sets to null data.dialog property to avoid modifications for MathType formulas.
       * - 'setData' - parses the data converting MathML into images.
       * - 'afterSetData' - adds an observer to MathType formulas to avoid modifications.
       * - 'getData' - parses the data converting images into selected save mode (MathML by default).
       * - 'mode' - recalculates the active element.
       */
    addEditorListeners(): void;
    /**
       * Checks the current container and assign events in case that it doesn't have them.
       * CKEditor replaces several times the element element during its execution,
       * so we must assign the events again to editor element.
       */
    checkElement(): void;
    /**
       * @inheritdoc
       * @param {HTMLElement} element - HTMLElement target.
       * @param {MouseEvent} event - event which trigger the handler.
       */
    doubleClickHandler(element: HTMLElement, event: MouseEvent): void;
    /** @inheritdoc */
    callbackFunction(): void;
    openNewFormulaEditor(): any;
    /**
       * Replaces old formula with new MathML or inserts it in caret position if new
       * @param {String} mathml MathML to update old one or insert
       * @returns {module:engine/model/element~Element} The model element corresponding to the inserted image
       */
    insertMathml(mathml: string): any;
    /**
       * Finds the text node corresponding to given DOM text element.
       * @param {element} viewElement Element to find corresponding text node of.
       * @returns {module:engine/model/text~Text|undefined} Text node corresponding to the given element or undefined if it doesn't exist.
       */
    findText(viewElement: any): any;
    /** @inheritdoc */
    insertFormula(focusElement: any, windowTarget: any, mathml: any, wirisProperties: any): {
        latex: any;
        node: any;
    };
    /**
       * Function called when the content submits an action.
       */
    notifyWindowClosed(): void;
}
