// Examine doc obj //
// console.debug(...Audio: history[]): void;
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.URL);

console.log(document.images);
console.log(document.doctype);
console.log(document.all);
console.log(document.all[9].textContent='Please text');

getElementById//
console.log(document.getElementById('header title'));
console.log(headerTitle);
headerTitle.textContent='plant a tree';
headerTitle.innerText='Please contribute';
console.log(headerTitle.innerText);

// GET ELEMENTS BY CLASSNAME //
var my_goal= document.getElementsByClassName('it');
for (var r = 0; r < FileList.length; r++){
    div[r].style.backgroundColor='#eee';
}

//GET ELEMENTS BY TAG NAME//
var a=document.getElementsByTagName('a');
console.log(a);
console.log(a[1]);
a[1].textContent='your price';
a[1].style.fontFamily='Times New Roman';
a[1].style.alignContent='centre';

//Query selector//
var header= document.querySelector('h1');
header.style.backgroundColor='light green';
var iput= document.querySelector('input');
input.value='contribution';

let volunteer = {
    name: "Melisa",
    age: 22,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  
  alert(volunteer);