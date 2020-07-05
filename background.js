const contextMenuID ="acmid" // anchor context menu id 

chrome.contextMenus.create({
    id: contextMenuID,
    title: "Create link",
    contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    chrome.tabs.executeScript(tab.id, {file: "selection.js"})
});

// TODO: have a content script not a function here
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
        if (changeInfo.status === "complete" && tab.active){
            chrome.tabs.executeScript(tab.id, {file: "scroll.js"});
        }
});