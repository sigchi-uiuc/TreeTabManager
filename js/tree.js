var count = 0;

var treeData = [];
var rootNode;

function Tree() {
    alert("Tree created");
    return treeData;
}
// function setRoot(title,)

function Node(title, id, link, openerTabId) {
    this.name = title;
    this.id = id;
    this.url = link;
    this.parent = openerTabId;
    this.children = {};
    alert("New Node Created");


    // alert("New Node Object Created: " +
    //     title + "\n id: " + id +
    //     "\n link: " + link +
    //     "\n openerTabId: " + openerTabId
    // );

    
}

function addChild(openerTabId, tab) {
    addChildHelper(openerTabId, rootNode, tab);
    alert("Children added");
}

function addChildHelper(targetID, currTab, nTab) {
    if (currTab.id == targetID) {
        // use push
        var temp = currTab.children;
        // console.log(temp);
        temp[0] = nTab;
    } else {
        for (var i = 0; i < currTab.children.length; i++) {
            addChildHelper(targetID, currTab.children[i], nTab);
        }
    }
}
console.log("TEST");
console.log(treeData);
// function (parent, child) {
// (parent._children).push(child);
// }


// function Traversal(node){
//     console.log(node._title);
//     for(var i=0;i<node._children.length;i++){
//         Traversal(node._children[i]);
//     }

// }
// var run = "hello";

// var roots = { 0:targetJson};

    console.log("TEST BEFORE JQUERY:");
    console.log(rootNode);