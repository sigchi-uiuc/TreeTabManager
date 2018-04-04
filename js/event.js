chrome.tabs.onCreated.addListener(function(tab){
	// alert("Tab created");
	alert("New Tab Created");
	// Node.addNode(temp);
    // count++;
    if (tab.openerTabId == null) {
    	// rootNode = new Node ("test", count, "test.com", count+4);
        rootNode = new Node(tab.title, tab.id, tab.url, tab.openerTabId);
        console.log("New Tree Opened");
        // alert("New Window");
        // console.log(rootNode);
    	treeData.push(rootNode);
        // console.log(treeData);
    	alert("TreeData Pushed to");
    } 
    else {
        console.log("New Tab in tree");
        var temp = new Node(tab.title, tab.id, tab.url, tab.openerTabId);
        addChild(tab.openerTabId, temp);
    }
    var myJson = JSON.stringify(treeData);
    console.log(myJson);
    localStorage.setItem("rootNode",myJson);
    console.log(localStorage.getItem("rootNode"));
});
function handleCreation(tab){

}

// //tab removed listener
function handleRemoved(tabId, removeInfo) {
  // alert("Tab: " + tabId + " is closing \n Window ID: " + removeInfo.windowId + "\nWindow is closing: " + removeInfo.isWindowClosing);
}

chrome.tabs.onRemoved.addListener(handleRemoved);


// var data_test = "data test succsss";
// //tab updated listener

function handleUpdated(tabId, changeInfo) {
  // alert("Tab: " + tabId + " is updated \n Status: " 
  	// + changeInfo.status + "\nTitle: " + changeInfo.title + "\n URL: " + changeInfo.url );


}

chrome.tabs.onUpdated.addListener(handleUpdated);

// //message listener (from popup manipulation)
// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
// 		if(request.command == "shiftLevel"){
// 			var targetId = request.targetId;
// 			treeShiftLevel(targetId);	
// 			sendResponse({status: "success"});
// 		}
// 	}
// );
