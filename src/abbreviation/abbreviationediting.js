/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { Plugin } from "@ckeditor/ckeditor5-core";
import AbbreviationCommand from "./abbreviationcommand";
import AbbreviationRemoveCommand from "./abbreviationremovecommand";

export default class AbbreviationEditing extends Plugin {
  init() {
    this._defineSchema();
    this._defineConverters();

    this.editor.commands.add("addAbbreviation", new AbbreviationCommand(this.editor));
    this.editor.commands.add("removeAbbreviation", new AbbreviationRemoveCommand(this.editor));
  }
  _defineSchema() {
    const schema = this.editor.model.schema;

    // Extend the text node's schema to accept the abbreviation attribute.
    schema.extend("$text", {
      allowAttributes: ["abbreviation"],
    });
  }
  _defineConverters() {
    const conversion = this.editor.conversion;

    // Conversion from a model attribute to a view element
    conversion.for("downcast").attributeToElement({
      model: "abbreviation",

      // Callback function provides access to the model attribute value
      // and the DowncastWriter
      view: (modelAttributeValue, conversionApi) => {
        const { writer } = conversionApi;
        if (modelAttributeValue) {
          return writer.createAttributeElement("abbr", {
            title: modelAttributeValue.title,
            class: "marker-yellow",
            id: modelAttributeValue.id,
          });
        }
      },
    });

    // Conversion from a view element to a model attribute
    conversion.for("upcast").elementToAttribute({
      view: {
        name: "abbr",
        attributes: ["title", "id"],
      },
      model: {
        key: "abbreviation",

        // Callback function provides access to the view element
        value: (viewElement) => {
          const title = viewElement.getAttribute("title");
          const id = viewElement.getAttribute("id");
          return { title: title, id: id };
        },
      },
    });
  }
}
