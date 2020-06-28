const contextMenuID ="acmid" // anchor context menu id 

const createLink = (info, tab) => {
    if (info.menuItemId !== contextMenuID){
        return;
    }
    let selectionText = info.selectionText;
    let pageUrl = info.pageUrl;
    alert(`selected text: ${selectionText}, page url: ${pageUrl}`);
};

chrome.contextMenus.create({
    id: contextMenuID,
    title: "Create link",
    contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
    chrome.tabs.executeScript(tab.id, {file: "selection.js"})
});