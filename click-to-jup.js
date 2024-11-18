// ==UserScript==
// @name         Double Click URL Opener
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Open a custom URL based on selected text longer than 16 characters on double-click
// @author       Mehmet
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Event listener for double-click
    document.addEventListener('dblclick', function (event) {
        // Get the selected text
        const selectedText = window.getSelection().toString().trim();

        // Validate the selected text
        if (selectedText.length > 16) {
            console.log(`Selected text: ${selectedText}`);

            // Build the URL
            const url = `https://jup.ag/swap/USDC-${encodeURIComponent(selectedText)}`;

            // Open the URL in a new tab
            window.open(url, '_blank');
        } else {
            console.log("Selected text is too short or invalid.");
        }
    });
})();
