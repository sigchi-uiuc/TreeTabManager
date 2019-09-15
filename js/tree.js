var count = 0;
var forest = {};

function Node(title, id, link, openerTabId, windowid) {
    this.name = title;
    this.history = [title];
    this.id = id;
    this.windowid = windowid;
    this.url = link;
    if (openerTabId == null) {
        this.parent = 1111;
    }
    else {
        this.parent = openerTabId;
    }
    this.children = [];
    this.active = true;

}


function addChild(startNode, openerTabId, addNode){
    var temp = findNodeByID(startNode, openerTabId);
    temp.children.push(addNode);
    return;
}

function findNodeByID(currNode, id) { //Startnode, id to match
    console.log("************** findNodeByID BLOCK **************");
    console.log("currNode: " + currNode);
    if(currNode == null){
        return;
    }

    console.log("id: " + id);
    console.log("************** findNodeByID BLOCK END **************");

    if (currNode.id == id){
        return currNode;
    }
    if (currNode.children) {
        for (var k in currNode.children) {
            if (currNode.children[k].id == id) {
                return currNode.children[k];
            }
            else if (currNode.children[k].children) {
                result = findNodeByID(currNode.children[k], id);
                if (result) {
                    return result;
                }
            }
        }
    }
}