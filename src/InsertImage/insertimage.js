import { Plugin } from "@ckeditor/ckeditor5-core";
import { ButtonView } from "@ckeditor/ckeditor5-ui";

import imageIcon from "@ckeditor/ckeditor5-core/theme/icons/image.svg";
import sliderIcon from "./img/slide.svg";

export default class InsertImage extends Plugin {
  openReactPopup = function (para) {
    para = true;
  };

  putMe = function (imageSrc, editor) {
    editor.model.change((writer) => {
      if (imageSrc.match("(https?://.*.(?:png|jpg))")) {
        const imageUtils = editor.plugins.get("ImageUtils");
        imageUtils.insertImage({ src: imageSrc });
      } else {
        const filename = imageSrc.split("/").pop();
        const link = writer.createText(filename);
        writer.setAttribute("linkHref", imageSrc, link);
        editor.model.insertContent(link, editor.model.document.selection);
      }
    });
  };

  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("insertImage", (locale) => {
      const view = new ButtonView(locale);
      view.bind("isEnabled").to(editor, "isReadOnly", (isReadOnly) => !isReadOnly);

      view.set({
        label: "Insert media",
        icon: sliderIcon,
        tooltip: true,
      });

      // Callback executed once the image is clicked.
      view.on("execute", () => {
        //const imageUrl = prompt( 'Image URL' );
        const { handleVisibleDialog } = editor.config.get("customCalls");
        handleVisibleDialog(this.putMe, editor);
      });

      return view;
    });
  }
}
