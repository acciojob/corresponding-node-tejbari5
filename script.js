function correspondingNode(tree1, tree2, node1) {
    const pathToNode=getPath(tree1,node1)

    return getNodeFromPath(tree2, pathToNode);


}

function getPath(root, node) { const path = [];
while (node !== root) {
const parent = node.parentElement; const children = Array.from(parent.children); const nodeIndex = children.indexOf(node);
path.push(nodeIndex);
node = parent;
}
return path;
}
function getNodeFromPath(node, path) { while (path.length > 0) {
node = node.children[path.pop()];
}
return node;
}


  
module.exports=correspondingNode;