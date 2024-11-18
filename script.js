// ==UserScript==
// @name         X Tarih Formatı (Gün, Saat, Dakika, Saniye - Koşullu Gösterim)
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  X tarihlerini "gün, saat, dakika, saniye önce" olarak gösterir ve gereksiz birimleri gizler.
// @author       Siz
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Tweet tarihlerini düzenler
    setInterval(() => {
        document.querySelectorAll('time').forEach(time => {
            // Eğer daha önce düzenlenmişse tekrar ekleme yapmaz
            if (!time.dataset.modified) {
                let date = new Date(time.getAttribute('datetime'));
                let diff = Date.now() - date.getTime();

                let seconds = Math.floor(diff / 1000);
                let minutes = Math.floor(seconds / 60);
                let hours = Math.floor(minutes / 60);
                let days = Math.floor(hours / 24);

                let timeAgoText = "";

                if (days > 0) {
                    // 1 günden fazla geçmişse gün, saat, dakika ve saniyeyi göster
                    timeAgoText = `${days} gün, ${hours % 24} saat, ${minutes % 60} dakika, ${seconds % 60} saniye önce`;
                } else if (hours > 0) {
                    // 1 saatten fazla geçmişse, saat, dakika ve saniyeyi göster
                    timeAgoText = `${hours} saat, ${minutes % 60} dakika, ${seconds % 60} saniye önce`;
                } else if (minutes > 0) {
                    // 1 dakikadan fazla geçmişse, dakika ve saniyeyi göster
                    timeAgoText = `${minutes} dakika, ${seconds % 60} saniye önce`;
                } else {
                    // 1 dakikadan azsa sadece saniyeyi göster
                    timeAgoText = `${seconds} saniye önce`;
                }

                // Mevcut tarih bilgisinin sonuna ekle
                time.textContent += ` (${timeAgoText})`;
                // İşaretle ki tekrar işleme yapmasın
                time.dataset.modified = "true";
            }
        });
    }, 1000); // Sürekli çalışır
})();
