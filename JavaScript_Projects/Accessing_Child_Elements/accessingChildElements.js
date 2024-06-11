let parent = document.getElementById("parent");

let firstChild = parent.firstElementChild;
let nextSibling = firstChild.nextElementSibling;
let lastChild = parent.lastElementChild;

console.log(firstChild.textContent);
console.log(nextSibling.textContent);
console.log(lastChild.textContent);