import writeHello from './module_1'
import writeBye from './module_2'
import "../scss/style.scss"

const state = true;

if (state) {
    // console.log("wirteHello");
    writeHello();
} else {
    // console.log("writeBye");
    writeBye()
}