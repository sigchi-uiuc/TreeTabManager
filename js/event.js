chrome.tabs.onCreated.addListener(function(tab){

    var temp = new Node(tab.title, tab.id, tab.url, tab.openerTabId, tab.windowId);
    if (forest[tab.windowId] == null) {
      console.log("forest is empty");
      console.log(tab.windowId);
      forest[tab.windowId] = temp;
      console.log(forest);
    }
    else {
      addChild(forest[tab.windowId],tab.openerTabId, temp);      
      console.log("new tree in the forest");
      console.log(forest);
    }
   
});

chrome.tabs.onRemoved.addListener(handleRemoved);

function handleRemoved(tabId, removeInfo) {
  // alert("Tab: " + tabId + " is closing \n Window ID: " + removeInfo.windowId + "\nWindow is closing: " + removeInfo.isWindowClosing);
    var winId = removeInfo.windowId;
    if(removeInfo.isWindowClosing){
      delete forest[winId];
    }
    var temp = findNodeByID(forest[winId], tabId);
    if(temp == null) {
      return;
    }
    console.log("removing: ");
    console.log(temp);
    temp.active = false;
}


chrome.tabs.onUpdated.addListener(handleUpdated);

function handleUpdated(tabId, changeInfo, tab) { 
  if(forest[tab.windowId] == null){ 
  // Test fix: this can throw errors if the extension is relaunched with windows not already in the data structure.
    return;
  }
  var newName = changeInfo.title;
  if (newName != undefined) {
      var temp = findNodeByID(forest[tab.windowId], tabId);
      console.log("Before:");
      console.log(temp);
      //find the tab to update
      if (newName != temp.name && tab.url != temp.url) {
          temp.name = newName;
          temp.history.push(newName);
          temp.url = tab.url;
      }
      console.log("Updated Info: ");
      console.log(temp);
  }
}






// function handleUpdated(tabId, changeInfo, tab) {
//   // alert("Tab: " + tabId + " is updated \n Status: "
//   //  + changeInfo.status + "\nTitle: " + changeInfo.title + "\n URL: " + changeInfo.url );
//         // console.log("windowid: " + tab.windowId);
//       // console.log("tabid: " + tabId);
//       console.log("*********** Updated: ***********");
//       console.log(changeInfo);
//       // console.log("status: " + changeInfo.status);
//   if(forest[tab.windowId] == null){ 
//   // Test fix: this can throw errors if the extension is relaunched with windows not already in the data structure.
//     return;
//   }
//   // if(changeInfo.status != null){
//     // if(changeInfo.status.localeCompare("complete") == 0){
//   //Debugger: update listener can update multiple times, this allows it only to run after it is truly complete.

//       var temp = findNodeByID(forest[tab.windowId], tabId);
//       //find the tab to update
//       if(changeInfo.title != null){ //only runs if the title isn't undefined.
//         temp.name = changeInfo.title; 
//         if(changeInfo.title.localeCompare("New Tab") != 0){ // New Tab can update multiple times for extensions.
//           temp.history.push(changeInfo.title);
//         }

//       }
//       console.log(tab);
//       console.log("Break");
//       console.log(tab.url);
//       if(tab.url != null){
//         temp.url = tab.url;
//       }
//       console.log("Updated Info: ");
//       console.log(temp);
//       // console.log(forest);
//     // }
//   // }
// }
