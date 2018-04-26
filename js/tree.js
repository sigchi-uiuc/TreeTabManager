var count = 0;
var treeData = [];
var rootNode;
// var rootNode = new Node("One", 23832, "test.com", 48248);


function Tree() {
    // alert("Tree created");
    treeData.push(rootNode);
    var treeDataParsed = JSON.stringify(treeData);
}

function Node(title, id, link, openerTabId) {
    this.name = title;
    this.history = [title];
    this.id = id;
    this.url = link;
    if (openerTabId == null) {
        this.parent = 2308;
    }
    else {
        this.parent = openerTabId;
    }
    this.children = [];
    this.active = true;

    // alert("New Node Object Created: "
    // +"\n title: " + title
    // +"\n id" + id
    // +"\n link: " + link
    // +"\n openerTabId: " + openerTabId
    // // +"\n children: " + children
    // );
    // this._children = children;
    // var children_counter=0;
    // this._openerTabId;

}

function addChild(openerTabId, tab){
    addChildHelper(openerTabId, rootNode, tab);
    // alert("Children added");
}

function addChildHelper(parentId, currTab, nTab) {
	var currChildren = currTab.children;

    if (currTab.id == parentId) {
		// use push
		currChildren.push(nTab);
	} else {
        console.log("False");
		for (var i = 0; i < currChildren.length; i++) {
			addChildHelper(parentId, currTab.children[i], nTab);
		}
	}
}

function removeTab(tabId) {
  console.log(treeData);
  removeTabHelper(tabId, rootNode);
  console.log(treeData);
  saveData();
}

function removeTabHelper(tabId, currTab) {
  if (tabId == currTab.id) {
    currTab.active = false;
  }
  else {
    for (var i = 0; i < currTab.children.length; i++) {
      removeTabHelper(tabId, currTab.children[i]);
    }
  }
}

function updateNodeName(tabId, newName, newUrl) {
    console.log(treeData);
    updateNodeNameHelper(rootNode, tabId, newName, newUrl);
    console.log(treeData);
    saveData();
}

function updateNodeNameHelper(currTab, tabId, newName, newUrl) {
    if (currTab.id == tabId) {
        if (newName != currTab.name && newUrl != currTab.url) {
            currTab.name = newName;
            currTab.history.push(newName);
            currTab.url = newUrl;
        }
        return;
    } else {
        var currChildren = currTab.children;
        for (var i = 0; i < currChildren.length; i++) {
            updateNodeNameHelper(currTab.children[i], tabId, newName, newUrl);
        }
    }
}

function saveData() {
    var myJson = JSON.stringify(treeData);
    console.log(myJson);
    localStorage.setItem("rootNode",myJson);
}

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
