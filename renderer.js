const fs = require('fs');
const path = require('path');
const wraper = require('./components/wraper')

// load css
fs.readdir(path.join(__dirname,'components','css'), (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
    files.forEach(file => {
      let css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = path.resolve(__dirname,'components','css',file)

      document.head.appendChild(css);
    })
  }
})





// render component
const app = document.getElementById('app');
app.appendChild(wraper());


const initeditor = () => {
  let edit = document.getElementById('code');
  fs.readdir(path.join(__dirname,'lib','codemirror','theme'), (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        let css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = path.join(__dirname,'lib','codemirror','theme',file)
  
        document.head.appendChild(css);
      })
    }
  })
  
  let editor = CodeMirror(edit, {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'dracula',
    smartIndent: true,
    tabSize: 3,
    autocorrect: true,
    autoCloseBrackets: true,
    autoCloseTags: true
  });
}

initeditor();

let toggler = document.getElementsByClassName("caret");
let i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}