console.log(document.getElementById("name"));           // <h1 id="name">hii</h1>
console.log(document.querySelector("#name"));           // <h1 id="name">hii</h1>

console.log(document.getElementsByClassName("hero"));   // [div.hero, div.hero, div.hero]
console.log(document.querySelector(".hero"));           // <div class="hero">hello boys</div>
console.log(document.querySelectorAll(".hero"));        // NodeList(3) [div.hero, div.hero, div.hero]

console.log(document.getElementsByTagName("p"));        // [p, p, p, p]
console.log(document.querySelectorAll("p"));            // <p>p1</p>

console.log(document.querySelector("div.x").children);  // [h1, p]

console.log(document.querySelector("div").innerText); // "hello\nthis is the children of the div tag"
console.log(document.querySelector("div").innerText = "This is the changed value"); // "This is the changed value"

console.log(document.querySelector("div.x").innerHTML); // "<h1>hello</h1><p>this is the innertext</p>"
document.querySelector("div.x").innerHTML = "<h1>heelo</h1>"; // "<h1>heelo</h1>"   // Replace everything inside the div with a new <h1>

console.log(document.querySelector("h1#fame").textContent); // "hidden" (even though it's hidden)

console.log(document.querySelector("div.y").getAttribute("id"));    // "why"
console.log(document.querySelector("div.y").getAttribute("name"));  // "manan"

document.querySelector("div.z").setAttribute("class", "superman");  // Now div.z becomes <div class="superman"></div>

document.querySelector("div").style.backgroundColor = "red";        // The first <div> (which was changed to "This is the changed value") now has red background

let a1 = document.createElement("button");
a1.innerText = "click me (append)";
console.log(a1);     // <button>click me (append)</button>
let a2 = document.createElement("button");
a2.innerText = "click me (prepend)";    
console.log(a2);     // <button>click me (prepend)</button>
let div = document.querySelector(".batman");
div.append(a1);      // button goes at end inside .batman
div.prepend(a2);     // button goes at start inside .batman

let before = document.createElement("button");
before.innerText = "click me (start)";
console.log(before);    // <button>click me (start)</button>
let after = document.createElement("button");
after.innerText = "click me (end)";
console.log(after);     // <button>click me (end)</button>
let batmanDiv = document.querySelector(".batman");
batmanDiv.before(before);  // Appears just above .batman
batmanDiv.after(after);    // Appears just below .batman

let remove = document.querySelector("#remove");
remove.remove();          // Removes <p id="remove">hii i am going to be remove</p>
console.log(remove);      // <p id="remove">hii i am going to be remove</p>

let para = document.querySelector("p.one");
para.classList.add("two");     // class becomes: class="one two"
console.log(para);            // <p class="one two">hii i am the classlist</p>
para.classList.remove("two");  // class becomes: class="one"