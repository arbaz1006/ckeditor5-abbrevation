/**
 * The remove format command.
 *
 * It is used by the {@link module:remove-format/removeformat~RemoveFormat remove format feature}
 * to clear the formatting in the selection.
 *
 * ```ts
 * editor.execute( 'removeFormat' );
 * ```
 */
export default class RemoveFormatCommand extends Command {
    /**
     * @inheritDoc
     */
    execute(): void;
    /**
     * Returns an iterable of items in a selection (including the selection itself) that have formatting model
     * attributes to be removed by the feature.
     *
     * @param schema The schema describing the item.
     */
    _getFormattingItems(selection: any, schema: any): Generator<any, void, unknown>;
    /**
     * Returns an iterable of formatting attributes of a given model item.
     *
     * **Note:** Formatting items have the `isFormatting` property set to `true`.
     *
     * @param schema The schema describing the item.
     * @returns The names of formatting attributes found in a given item.
     */
    _getFormattingAttributes(item: any, schema: any): Generator<any, void, unknown>;
}
import { Command } from "@ckeditor/ckeditor5-core";
