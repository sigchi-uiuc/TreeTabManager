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
        this.id = id;
        this.url = link;
        if(openerTabId==null) {
            this.parent = 2308;
        }
        else {
            this.parent = openerTabId;
        }
        this.children = [];

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
    	var temp = currTab.children;
        if (currTab.id == parentId) {
    		// use push
    		temp.push(nTab);
    	} else {
            console.log("False");
    		for (var i = 0; i < temp.length; i++) {
    			addChildHelper(parentId, currTab.children[i], nTab);
    		}
    	}
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





