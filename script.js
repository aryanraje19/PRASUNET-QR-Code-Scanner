// script.js

function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    const resultElement = document.getElementById('result');
    const openLinkButton = document.getElementById('open-link');

    resultElement.textContent = decodedText;

    if (isValidURL(decodedText)) {
        openLinkButton.style.display = 'inline-block';
        openLinkButton.onclick = function() {
            window.open(decodedText, '_blank');
        };
    } else {
        openLinkButton.style.display = 'none';
    }
}

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);
