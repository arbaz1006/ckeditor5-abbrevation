/**
 * Command for opening the MathType editor
 */
export class MathTypeCommand extends Command {
    execute(options?: {}): void;
    integration: any;
    /**
       * Sets the appropriate custom editor, if any, or disables them.
       */
    setEditor(): void;
    /**
       * Checks whether we are editing an existing formula or a new one and opens the editor.
       */
    openEditor(): void;
    /**
       * Gets the currently selected formula image
       * @returns {Element} selected image, if any, undefined otherwise
       */
    _getSelectedImage(): Element;
}
/**
 * Command for opening the ChemType editor
 */
export class ChemTypeCommand extends MathTypeCommand {
}
import Command from "@ckeditor/ckeditor5-core/src/command";
