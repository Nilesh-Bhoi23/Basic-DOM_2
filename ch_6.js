// Attributes
// // * getAttribute(attr) // to get attribute value

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name); 

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// // * setAttribute(attr,value) // to set the attribute val th

// console.log(para.setAttribute("class","newClass"));//it use to change a class name or attribute name

// style 

// * node.style - it use to access style sheet to change color border height width .....etc.


// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// // div.style.visibility = "hidden"
// div.style.fontSize = "26px";
// div.innerText = "hello";

//============================

// Insert element :-

// 1) Create element 
// 2) add element-
/*      i)node.append(el) - adds at the end of node(inside)
        ii)node.prepend(el)- adds at the start of node (inside).
        iii)node.before(el)- adds before the node (outside)
        iv)node.after(el)- adds after the node (outside)
        v) node.remove()- removes the node.
*/


// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn); // add button(element) in last under the div.

// div.prepend(newBtn); // add element in first under the div.

// div.before(newBtn); 

// let p = document.querySelector("p");
// p.after(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>hi , i am new!</i>";

// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("para");
// para.remove();


