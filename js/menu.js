const dom = require('./dom');



const getSub = () => document.querySelector('.submenu');

function fix(key) {
    const label = ['file','edit','view'];

    for(let i = 0;i < label.length; i++){
        if(key !== label[i]){
            let l = document.querySelector(`.${label[i]}`);
            l.classList.remove('visible');
            let sub = l.querySelector('.submenu');
            l.querySelector('.label').removeAttribute('style');
            if(sub !== null){
                l.removeChild(sub);
                
            }
        }
        
    }
}

function submenuFile() {
    let file = document.querySelector('.file');
    let visible = file.classList.toggle('visible');

    if(visible){
        fix('file');
        file.querySelector('.label').style.color = '#bbb';
        file.appendChild(
            dom.e('div',{className: 'submenu'},[
                dom.e('span',{className: 'item click'},'New File'),
                dom.e('div',{className: 'separator'},''),
                dom.e('span',{className: 'item click'},'Open File'),
                dom.e('span',{className: 'item click'},'Open Folder'),
                dom.e('div',{className: 'separator'},''),
                dom.e('span',{className: 'item click'},'Save'),
                dom.e('span',{className: 'item click'},'Save As...'),
            ])
        );    
    }else{
        let sub = file.querySelector('.submenu');
        file.removeChild(sub);
        file.querySelector('.label').removeAttribute('style')
    }
}


function submenuEdit() {
    let edit = document.querySelector('.edit');
    let visible = edit.classList.toggle('visible');

    if(visible){
        fix('edit');
        edit.querySelector('.label').style.color = '#bbb';
        edit.appendChild(
            dom.e('div',{className: 'submenu'},[
                dom.e('span',{className: 'item click'},'Undo'),
                dom.e('span',{className: 'item click'},'Redo'),
                dom.e('div',{className: 'separator'},''),
                dom.e('span',{className: 'item click'},'Cut'),
                dom.e('span',{className: 'item click'},'Copy'),
            ])    
        );    
    }else{
        let sub = edit.querySelector('.submenu');
        edit.removeChild(sub);
        edit.querySelector('.label').removeAttribute('style');
    }
}




function submenuView() {
    let view = document.querySelector('.view');
    let visible = view.classList.toggle('visible');

    if(visible){
        fix('view');
        view.querySelector('.label').style.color = '#bbb';
        view.appendChild(
            dom.e('div',{className: 'submenu'},[
                dom.e('span',{className: 'item click'},'Explorer'),
            ])    
        );    
    }else{
        let sub = view.querySelector('.submenu');
        view.removeChild(sub);
        view.querySelector('.label').removeAttribute('style');
    }
}

module.exports = {
    submenuFile,
    submenuEdit,
    submenuView
}