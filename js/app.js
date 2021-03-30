const dom = require('./dom');
const TitleBar = require('./titlebar');


dom.css('app')


function App() {
    return (
        dom.e('div',{className: 'App'},[
            TitleBar(),
            dom.e('div',{className: 'body'},'body')
        ])
    );
}



dom.ready(document,() => {
    let app = document.getElementById('app');

    app.appendChild(App());
});
