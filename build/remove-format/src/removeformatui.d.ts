/**
 * The remove format UI plugin. It registers the `'removeFormat'` button which can be
 * used in the toolbar.
 */
export default class RemoveFormatUI extends Plugin {
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
    /**
     * @inheritDoc
     */
    init(): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
