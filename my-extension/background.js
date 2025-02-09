chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'authenticate') {
        authenticateUser(message.userId)
            .then(response => {
                sendResponse({ success: true, data: response });
            })
            .catch(error => {
                sendResponse({ success: false, error: error.message });
            });

        // Keep the message channel open for async response
        return true;
    }
});

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension Installed');
});

async function authenticateUser(userId) {
    // Your authentication logic here (example)
    return { token: 'example-token', userId };  // Replace with actual logic
}
