
function Node(alive, tab_id, url, title, favicon_url, parent, children) {
    this._alive = alive;
    this._tab_id = tab_id;
    this._url = url;
    this._title = title;
    this._favicon_url = favicon_url;
    this._parent = parent;
    this._children = children;
}
function Tree() {
    var node = new Node(true, -1, null, null, null, null, []);
    this._root = node;
}

//Note: Will most likely fail if called on root.
function deleteSelfAndChildren(node){
    if(node == null){
        return;
    }
    node._children.forEach(deleteSelfAndChildren);

    var index = node._parent._children.indexOf(node);
    if(index > -1){
        node._parent._children.splice(index,1);
    }
}
function AddChild(parent,child) {
    (parent._children).push(child);
    child._parent=parent;
}
function Traversal(node){
    console.log(node._title);
    for(var i=0;i<node._children.length;i++){
        Traversal(node._children[i]);
    }

}
var run = "hello";

// var roots = { 0:targetJson};


