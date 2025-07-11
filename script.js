let box2 =document.querySelector('.box2');

let ul = document.querySelector('ul');
let box = document.querySelector('.box')
let btn = document.querySelector('.btn');
let input = document.querySelector('input');
btn.addEventListener("click",function () {
 
 let boxes = document.querySelectorAll('.box')
 boxes.forEach(box => {
    box.remove();
});
 let list = document.createElement('li');
 list.classList.add('list');
 let text =document.createElement('div')
 text.classList.add('text');
 list.appendChild(text);
 let task =document.createElement('div')
 task.classList.add('task');
 
 task.innerText = input.value;
 text.appendChild(task);
 let time = document.createElement('div');
 time.classList.add('time');
 text.appendChild(time);
let dlt = document.createElement('button')
dlt.innerText= "delete";
dlt.classList.add('dlt');
list.appendChild(dlt);
ul.appendChild(list);
 
});
ul.addEventListener("click", function (e) {
    if(e.target.tagName === 'BUTTON' && e.target.innerText == "delete") {
        e.target.parentElement.remove();
    }
});