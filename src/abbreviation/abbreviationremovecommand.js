/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { Command } from "@ckeditor/ckeditor5-core";
import { findAttributeRange } from "@ckeditor/ckeditor5-typing";
import { toMap } from "@ckeditor/ckeditor5-utils";
import getRangeText from "./utils.js";

export default class AbbreviationRemoveCommand extends Command {
  refresh() {
    const model = this.editor.model;
    const selection = model.document.selection;
    const firstRange = selection.getFirstRange();

    // When the selection is collapsed, the command has a value if the caret is in an abbreviation.
    if (firstRange.isCollapsed) {
      if (selection.hasAttribute("abbreviation")) {
        const attributeValue = selection.getAttribute("abbreviation");

        // Find the entire range containing the abbreviation under the caret position.
        const abbreviationRange = findAttributeRange(
          selection.getFirstPosition(),
          "abbreviation",
          attributeValue,
          model
        );

        this.value = {
          abbr: getRangeText(abbreviationRange),
          title: attributeValue,
          range: abbreviationRange,
        };
      } else {
        this.value = null;
      }
    }
    // When the selection is not collapsed, the command has a value if the selection contains a subset of a single abbreviation
    // or an entire abbreviation.
    else {
      if (selection.hasAttribute("abbreviation")) {
        const attributeValue = selection.getAttribute("abbreviation");

        // Find the entire range containing the abbreviation under the caret position.
        const abbreviationRange = findAttributeRange(
          selection.getFirstPosition(),
          "abbreviation",
          attributeValue,
          model
        );

        if (abbreviationRange.containsRange(firstRange, true)) {
          this.value = {
            abbr: getRangeText(firstRange),
            title: attributeValue,
            range: firstRange,
          };
        } else {
          this.value = null;
        }
      } else {
        this.value = null;
      }
    }

    // The command is enabled when the "abbreviation" attribute can be set on the current model selection.
    this.isEnabled = model.schema.checkAttributeInSelection(selection, "abbreviation");
  }

  execute() {
    const model = this.editor.model;
    const { abbr, range, title } = this.value;
    model.change((writer) => {
      writer.removeAttribute("abbreviation", range);
    });

    //api call
    const { syncData } = this.editor.config.get("customCalls");
    syncData("metaTag", "remove", abbr, title.title, title.id);
  }
}
