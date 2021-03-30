const dom = require('./dom');
const TitleBar = require('./titlebar');
const Sidebar = require('./sidebar');

dom.css('app')


function App() {
    return (
        dom.e('div',{className: 'App'},[
            TitleBar(),
            dom.e('div',{className: 'body'},[
                Sidebar()
            ])
        ])
    );
}



dom.ready(document,() => {
    let app = document.getElementById('app');

    app.appendChild(App());
});
