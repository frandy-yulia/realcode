const dom = require('./dom');
const {minimize,maximize,close} = require('./actions');
const {submenuFile,submenuEdit,submenuView} = require('./menu');


dom.css('titlebar');

function TitleBar() {
    return (
        dom.e('div',{className: 'TitleBar'},[
            // left
            dom.e('div',{className: 'left section'},[
                dom.e('div',{className: 'menu item'}, [
                    dom.e('div',{className: 'menu-item file'},[
                        dom.e('span',{className: 'label click',click: submenuFile},'File'),
                    ]),
                    dom.e('div',{className: 'menu-item edit'},[
                        dom.e('span',{className: 'label click',click: submenuEdit}, 'Edit'),
                    ]),
                    dom.e('div',{className: 'menu-item view'},[
                        dom.e('span',{className: 'label click',click: submenuView},'View')
                    ])
                ])
            ]),
            dom.e('div',{className: 'right section'},[
                minimize(),
                maximize(),
                close()
            ])
        ])
    );
}


module.exports = TitleBar;