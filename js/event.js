chrome.browserAction.onClicked.addListener(function(tab) {
	alert("Information about this tab:" + tab.id );
	});

//    //chrome event listeners (create tab, delete tab, etc)
// chrome.extension.getBackgroundPage().console.log('foo');

// //new tab listener
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){



// });
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

// //tab updated listener
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
// 	// alert("Tab was updated"); 
// 	console.log("Hello");
// 	/*This alert box pops up 4 times 
// 	when you go to a new webpage, not sure why, maybe this is 
// 	just how chrome is programmed.
// 	*/

// 	 Update:
// 		I have a hunch that it depends on how a certain page is programmed.
// 		For example, loading webpage will allow the alert box to pop up 4 times
// 		It alerts immediately to right when it loads, then three more times. 
// 		I'm assuming it's alerting as files properly load (css, scripts, etc)
	
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
