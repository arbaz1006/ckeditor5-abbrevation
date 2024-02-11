export default class Annotations extends Plugin {
    static get requires(): (typeof AnnotationsEditing | typeof AnnotationsUI)[];
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import AnnotationsEditing from "./annotationsediting";
import AnnotationsUI from "./annotationsui";
