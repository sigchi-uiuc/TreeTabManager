chrome.tabs.onCreated.addListener(function(tab){
	// alert("Tab created");
	var tab = new Node(tab.title, tab.id, tab.url, tab.openerTabId);
	
});

// //tab removed listener
function handleRemoved(tabId, removeInfo) {
  alert("Tab: " + tabId + " is closing \n Window ID: " + removeInfo.windowId + "\nWindow is closing: " + removeInfo.isWindowClosing);
}

chrome.tabs.onRemoved.addListener(handleRemoved);


// var data_test = "data test succsss";
// //tab updated listener

function handleUpdated(tabId, changeInfo) {
  // alert("Tab: " + tabId + " is updated \n Status: " 
  // 	+ changeInfo.status + "\nTitle: " + changeInfo.title + "\n URL: " + changeInfo.url );
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
