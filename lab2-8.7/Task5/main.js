document.addEventListener('keydown', function (event) {
    const key = event.key;

    let asciiCode = '';
    if (key.length === 1) {
        asciiCode = key.charCodeAt(0);
    }

    let message = `Key: "${key}"`;

    if (asciiCode) {
        message += `\nASCII Code: ${asciiCode}`;
    }

    if (event.altKey) {
        message += '\nALT KEY detected!';
    }

    if (event.ctrlKey) {
        message += '\nCTRL KEY detected!';
    }

    if (event.shiftKey) {
        message += '\nSHIFT KEY detected!';
    }

    alert(message);
});
