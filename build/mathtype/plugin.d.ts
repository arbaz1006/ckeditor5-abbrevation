export let currentInstance: null;
export default class MathType extends Plugin {
    static get requires(): (typeof Widget)[];
    static get pluginName(): string;
    init(): void;
    /**
     * Create the MathType API Integration object
     * @returns {CKEditor5Integration} the integration object
     */
    _addIntegration(): CKEditor5Integration;
    /**
     * Add the MathType and ChemType commands to the editor
     */
    _addCommands(): void;
    /**
     * Add the buttons for MathType and ChemType
     * @param {CKEditor5Integration} integration the integration object
     */
    _addViews(integration: CKEditor5Integration): void;
    /**
     * Registers the <mathml> element in the schema
     */
    _addSchema(): void;
    /**
     * Add the downcast and upcast converters
     */
    _addConverters(): void;
    /**
     * Expose the WirisPlugin variable to the window
     */
    _exposeWiris(): void;
}
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import CKEditor5Integration from "./integration";
import Widget from "@ckeditor/ckeditor5-widget/src/widget";
