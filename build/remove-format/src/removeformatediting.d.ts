/**
 * The remove format editing plugin.
 *
 * It registers the {@link module:remove-format/removeformatcommand~RemoveFormatCommand removeFormat} command.
 */
export default class RemoveFormatEditing extends Plugin {
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
