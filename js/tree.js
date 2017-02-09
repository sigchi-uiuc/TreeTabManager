//Lifted from https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393

function Node(alive, tab_id, url, title, favicon_url, parent, children) {
    this._alive = alive;
    this._tab_id = tab_id;
    this._url = url;
    this._title = title;
    this._favicon_url = favicon_url;
    this._parent = parent;
    this._children = children;
}

function Tree(data) {
    var node = new Node(true, -1, null, null, null, null, []);
    this._root = node;
}

var tree = new Tree();







