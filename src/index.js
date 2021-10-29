import { BinarySearchTreeNode, drawBinaryTree, VisualizationType } from 'binary-tree-visualizer';

const root = new BinarySearchTreeNode(100);
[50, 145, 150, 130, 120, 140, 30, 70, 75].forEach((num) => root.insert(num));

drawBinaryTree(root, document.querySelector('canvas'), {
  type: VisualizationType.EXPANDABLE,
});
