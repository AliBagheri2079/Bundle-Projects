import writeHello from './module_1.js';
import writeBye from './module_2.js';
// import "../scss/style.scss";

const state = true;
// console.log("wirteHello");

if (state) {
    // console.log("wirteHello");
    writeHello();
} else {
    // console.log("writeBye");
    writeBye()
}