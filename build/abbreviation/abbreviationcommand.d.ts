export default class AbbreviationCommand extends Command {
    execute({ abbr, title }: {
        abbr: any;
        title: any;
    }, id: any): void;
}
import { Command } from "@ckeditor/ckeditor5-core";
