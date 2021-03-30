const dom = require('./../dom');
const {remote} = require('electron');


// hendle to close window
function hendleClick() {
    const win = remote.getCurrentWindow();
    win.close();
}

// close element
function close() {
    return (
        dom.e('i',{className: 'close action click',click: hendleClick},`
            <?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-window-close" width="16" height="16" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
        `)
    );
}

module.exports = close;