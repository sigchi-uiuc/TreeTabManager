//Lifted from https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393

function Node(data) {
    this.data = data;
    this.url = "";
    this.title = "";
    this.favicon_url = "";
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

var tree = new Tree('Base');

tree._root;





