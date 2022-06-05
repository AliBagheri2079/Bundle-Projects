import writeHello from './module_1.js';
import writeBye from './module_2.js';
import "../scss/style.scss";

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

const state = true;
if (state) {
    // console.log("wirteHello");
    writeHello();
} else {
    // console.log("writeBye");
    writeBye()
}