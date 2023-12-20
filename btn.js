const btn_1 = document.getElementById("btn_1");

let start_1 = 0;

const colors_1 = ["maroon", "blue"];

btn_1.addEventListener("click", function onClick() {
  console.log('btn_1');
  btn_1.style.backgroundColor = 'black'
  //const curColor = btn_1.style.backgroundColor
  //console.log('curColor=', curColor);
   
});

const btn_2 = document.getElementById("btn_2");

let curColor = 'pink';


btn_2.addEventListener("click", function onClick() {
  if (curColor === 'pink'){
    curColor = 'orange'
  } else {
    curColor = 'pink'
  }
  btn_2.style.backgroundColor = curColor
  
});

const btn_3 = document.getElementById("btn_3");

let start_3 = 0;

const colors_3 = ["yellowgreen", "yellow"];

btn_3.addEventListener("click", function onClick() {
  btn_3.style.backgroundColor = colors_3[start_3];
  start_3 = start_3 >= colors_3.length - 1 ? 0 : start_3 + 1;
});
