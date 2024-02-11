/**
 * A base class for nodes in the tree.
 */
export default class TreeNode extends Component<any, any, any> {
    constructor(props: any);
    handleClick(evt: any): void;
    getChildren(): any;
    get definition(): any;
    get globalTreeProps(): any;
    get isActive(): boolean;
    shouldComponentUpdate(nextProps: any): boolean;
}
import { Component } from "react";
