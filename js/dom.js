const path = require('path');


const ready = (doc,cb) => {
    doc.addEventListener('DOMContentLoaded',cb);
}

const css = (name) => {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path.resolve('css',`${name}.css`);

    ready(document,() => {
        document.head.appendChild(link);
    })

}

const e = (tagname,props,childrens) => {
    let el = document.createElement(tagname);
    if(typeof props === 'object'){
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                switch (key) {
                    case 'className':
                        el.className = props[key];
                        break;
                    case 'click': 
                        el.addEventListener('click',props[key]);
                        break;
                
                    default:
                        el.setAttribute(key,props[key])
                        break;
                }
            }
        }
    }



    if(Array.isArray(childrens)){
        for (let i = 0; i < childrens.length; i++) {
            el.appendChild(childrens[i]);
        }
    }else{
        el.innerHTML = childrens;
    }



    return el;
}

module.exports = {
    ready,
    css,
    e
}