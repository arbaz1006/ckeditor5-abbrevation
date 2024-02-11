export default class SetEditorDataButton extends Component<any, any, any> {
    constructor(props: any);
    state: {
        isModalOpen: boolean;
        editorDataValue: string;
    };
    textarea: any;
    render(): JSX.Element[];
    _setEditorDataAndCloseModal(): void;
    _closeModal(): void;
    _handlDataChange(evt: any): void;
    _handleModalAfterOpen(): void;
}
import { Component } from "react";
