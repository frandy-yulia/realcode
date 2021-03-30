const dom = require('./dom');

dom.css('sidebar');

function Sidebar() {
    return (
        dom.e('div',{className: 'Sidebar'},[
            dom.e('div',{className: 'container'},'Sidebar')
        ])
    );
    
}


module.exports = Sidebar;