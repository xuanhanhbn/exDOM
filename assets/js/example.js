var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('Nguyễn Thị Thúy');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('Trương Công Tuấn');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li');

var i;
for (i = 0; i < listItems.length; i++) {
    listItems[2].className = 'cool';
}

var heading = document.querySelector('h2');
var totalItems = listItems.length;
heading.innerHTML += totalItems + ' Thành viên: ';

function Yes(){
    alert("CHÚC MỪNG BẠN ĐÃ BỊ LỪA!");
}