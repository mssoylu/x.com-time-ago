// ==UserScript==
// @name         Double Click Link Opener for Long Text
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Open a new tab with a custom URL based on double-clicked text, if it's longer than 16 characters
// @author       You
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Çift tıklama olayını dinle
    document.addEventListener('dblclick', function (event) {
        // Seçili metni al
        const selectedText = window.getSelection().toString().trim();

        // Eğer metin 16 karakterden uzunsa işleme devam et
        if (selectedText.length > 16) {
            console.log(`Selected text: ${selectedText}`);

            // URL oluştur
            const url = `https://jup.ag/swap/USDC-${encodeURIComponent(selectedText)}`;

            // Yeni sekmede URL'yi aç
            window.open(url, '_blank');
        }
    });
})();
