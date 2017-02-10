chrome.browserAction.onClicked.addListener(function(tab) {
	alert("Information about this tab:" 
		+ tab.id 
		+"\n" + tab.windowId
		+"\n" + tab.active
		+"\n" + tab.title);
	});

chrome.tabs.onCreated.addListener(function(tab){
	// alert("New Tab Created:" +
	// 	+"\n" + tab.id 
	// 	+"\n" + "Hi"
	// 	+"\n" + tab.windowId
	// 	+"\n" + tab.active
	// 	+"\n" + tab.title
	// 	);

});

// //tab removed listener
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo){
	// alert("Tab deleted: "+tabId );
});

var data_test = "data test succsss";
// //tab updated listener
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
// 	// alert("Tab was updated"); 	
// });
//tab detached listener
// chrome.tabs.onDetached.addListener(function(tabId,detachInfo){
// 	alert("Tab: "+tabId" was detached"); //Alert box pops up once 
// });
// //tab attached listener
// chrome.tabs.onAttached.addListener(function(tabId,detachInfo){


// });

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
