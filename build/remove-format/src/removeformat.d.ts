/**
 * The remove format plugin.
 *
 * This is a "glue" plugin which loads the {@link module:remove-format/removeformatediting~RemoveFormatEditing}
 * and {@link module:remove-format/removeformatui~RemoveFormatUI} plugins.
 *
 * For a detailed overview, check out the {@glink features/remove-format remove format} feature documentation.
 */
export default class RemoveFormat extends Plugin {
    /**
     * @inheritDoc
     */
    static get requires(): (typeof RemoveFormatEditing | typeof RemoveFormatUI)[];
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import RemoveFormatEditing from "./removeformatediting";
import RemoveFormatUI from "./removeformatui";
