/**
 * Finds the root node (document, shadowDOM root) of the given element
 */
export function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}
//# sourceMappingURL=getRoot.js.map