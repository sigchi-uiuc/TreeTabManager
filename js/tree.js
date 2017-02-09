//Lifted from https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393

function Node(data) {
    this.alive = true;
    this.tab_id = -1;
    this.url = null;
    this.title = null;
    this.favicon_url = null;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

var tree = new Tree('Base');

tree._root;





