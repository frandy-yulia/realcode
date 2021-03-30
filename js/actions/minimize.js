const dom = require('./../dom');
const {remote} = require('electron');

function hendleClick() {
    const win = remote.getCurrentWindow();
    win.minimize();
}


function minimize() {
    return (
        dom.e('i',{className: 'minimize action click',click: hendleClick},`
            <?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="mdi-window-minimize" width="16px" height="16px" viewBox="0 0 24 24"><path d="M20,14H4V10H20" /></svg>
        `)
    );
}


module.exports = minimize;