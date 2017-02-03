   //chrome event listeners (create tab, delete tab, etc)

console.log("Helo");
//new tab listener
chrome.tabs.onCreated.addListener(function(tab){
	alert("Hello! I am an alert box!!");
});

//tab removed listener
chrome.tabs.onRemoved.addListener(function(tabId, removeInfo){
	
});

//tab updated listener
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	
});
//tab detached listener
chrome.tabs.onDetached.addListener(function(tabId,detachInfo){


});
//tab attached listener
chrome.tabs.onAttached.addListener(function(tabId,detachInfo){


});

//message listener (from popup manipulation)
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.command == "shiftLevel"){
			var targetId = request.targetId;
			treeShiftLevel(targetId);	
			sendResponse({status: "success"});
		}
	}
);
