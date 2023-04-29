import figma from "../tokens.json" assert { type: 'json' };

// console.log(figma,"testing");
var op_color = document.getElementById("output-color");
var form = document.getElementById("form");
var colorPicker = document.getElementById("favcolor");
colorPicker.addEventListener("change", get_val, false);
function get_val(e){
    console.log(e.target.value);
    console.log("hello");
}
console.log(figma);

// let obj = Object.entries(figma.global.color.globalTextColor);
// console.log(obj);
// console.log(Object.entries(obj));
// let new_val = Object.keys(figma);
// console.log(new_val);
var next_line = document.getElementById("next-line");
for (let i in figma.global.color) {
    var ele_colorpicker = document.createElement("input");
    ele_colorpicker.setAttribute("type", "color");
    ele_colorpicker.setAttribute("value", figma.global.color[i].value);
    ele_colorpicker.setAttribute("id", i);
    // ele_colorpicker.setAttribute("class","col-12 col-sm-3");
   
    form.appendChild(ele_colorpicker);
  
    document.getElementById("form").appendChild(ele_colorpicker);
    
    console.log(figma.global.color[i].value);
}


let abcde = [];
var update_color = document.getElementsByTagName("input");
for (let j in figma.global.color) {
    update_color[j].addEventListener("change", get_val, false);
    function get_val(e) {
        console.log(e.target.value);
        console.log("hello");
        figma.global.color[j].value = e.target.value;
        abcde.push(figma);
    }
}

for (let l in figma.global.buttons) {
    var ele_colorpicker_buttons = document.createElement("input");
    ele_colorpicker_buttons.setAttribute("type", "color");
    ele_colorpicker_buttons.setAttribute("value", figma.global.buttons[l].value);
    ele_colorpicker_buttons.setAttribute("id", l);
   
    form.appendChild(ele_colorpicker_buttons);
  
    document.getElementById("form").appendChild(ele_colorpicker_buttons);

    console.log(figma.global.buttons[l].value);
}

console.log(figma, "figma data");
function loadDoc(figmadata) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://localhost:3001/posting")
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(figmadata));
    console.log(JSON.stringify(figmadata),"final data")
  }
document.getElementById('abhishek').addEventListener("click", () => {
    loadDoc(abcde[0]);
})
