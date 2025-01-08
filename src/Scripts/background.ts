chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes('https://chatgpt')) {
    // Perform your desired action here
    console.log('ChatGPT URL detected:', tab.url);
    
    // Example: Inject a content script
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['contentScriptGPT.js']
    });
  }
});