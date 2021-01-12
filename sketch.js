// use parent/chiled to put evertthing in a div that has padding ???

let arr = ["a", "b", "c", "d", "e"]
let arrFunc =[
  funca,
  funcb,
  funcc,
  funcd
  
]

let E;
let B;
function setup() {
  //createCanvas(400, 400);
  noCanvas();
  for(var i =0; i < 4; i++){
    createElement("button", "this is a button");
    //B.class("button");
    // ADD A CLASS TO EACH 
  }
  
  E = createElement("h3", "");
  E.position(300,300);
  
  
}
let num = 0;

function draw() {
  var thing = selectAll("button");
  
  for(var i = 0; i < thing.length ; i++){
    
    num = i;
    
    thing[i].mouseClicked(arrFunc[i]);
    
    thing[i].class(arr[i]);
    
    
  }

}

// make new line work 


function funca() {
  let str = " .name{ <br/>color:  red <br/> font-size: 20px;<br/>  background-color: #008CBA;<br/>padding: 5px 5px;<br/> box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);<br/> }"
  E.remove();
  E = createElement("h3",str);
  E.position(300,300);
}


function funcb() {
  let str = " .name{ <br/>color:  green <br/>padding: 15px 32px;<br/>}"
  E.remove();
  E = createElement("h3",str);
  E.position(300,300);
}

function funcc() {
  let str = " .name{ <br/>color: red <br/> background-color: #f44336<br/> padding: 15px 32px;<br/>} <br/> .name:hover{<br/> box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); </br> }"
  E.remove();
  E = createElement("h3",str);
  E.position(300,300);
}
function funcd(){
    let str = ".name{ <br/>color: #000099; <br/> background-color: #ff0000; <br/> padding: 5px 5px; <br/> font-size: 20px; <br/>box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); }"
  E.remove(); 
  E = createElement("h3",str);
  E.position(300,300);
}











