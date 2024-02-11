/**
 * A class which instances represent elements in the tree.
 */
export default class TreeElement extends TreeNode {
    render(): JSX.Element;
    getAttributes(): JSX.Element[];
}
import TreeNode from "./treenode";
