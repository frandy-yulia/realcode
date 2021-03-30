const dom = require('./dom');
const Explorer = require('./explorer');

dom.css('sidebar');

function Sidebar() {
    return (
        dom.e('div',{className: 'Sidebar'},[
            dom.e('div',{className: 'container'},[Explorer()])
        ])
    );
    
}


module.exports = Sidebar;