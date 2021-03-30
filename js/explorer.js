const dom = require('./dom');

dom.css('explorer');

function Explorer() {
    return (
        dom.e('div',{className: 'Explorer'},[
            dom.e('div',{className: 'title'},[
                dom.e('span',null,'Explorer')
            ])
        ])
    );
    
}


module.exports = Explorer;