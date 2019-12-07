import foostring from "./foo.js";
import printMe from "./yolo.js";
import snow_mouse_icon from "./snow_mouse.jpg";
import "./style.css";   // to add the .css file as an asset that the html file can draw from even without having a <link> to it
import _ from "lodash"; // I HAVE NO IDEA how this css file is eventually imported into the html in a script tag
//console.log(bar);
console.log("wjok")

function component(){
    const element = document.createElement('div');
    // Using lodash for some weird reason, just to create a string.
    element.innerHTML = _.join(['hello', 'webpack'],  ' ');
    element.classList.add('hello');

    // Add a button that has a click event:
    const btn = document.createElement('button');
    btn.innerHTML = "Click me and check the console!"
    btn.onclick = printMe;

    element.appendChild(btn);

    // Add an image to our element
    const myIcon = new Image();
    myIcon.src = snow_mouse_icon;
    element.appendChild(myIcon);

    return element;
}
document.body.appendChild(component());