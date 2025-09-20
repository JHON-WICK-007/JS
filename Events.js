let btn1 = document.querySelector("#btn1");
// Only the last onclick runs, earlier is overwritten
btn1.onclick = () => {
    console.log("priority of first function");
};
btn1.onclick = () => {
    console.log("priority of last function");
};


let btn2 = document.querySelector("#btn2");
// ondblclick using both direct and event listener (both work)
btn2.ondblclick = () => {
    console.log("button 2 is clicked by JS");
};
// An event listener is a function that waits for an event to happen and responds to it.
btn2.addEventListener("dblclick", () => {
    console.log("button 2 on a EventListener");
});


let btn3 = document.querySelector("#btn3");
// Only last onmouseover runs, prints event details
btn3.onmouseover = () => {
    console.log("button 3");
};
btn3.onmouseover = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};


let btn4 = document.querySelector("#btn4");
// Multiple click listeners, except hand3 (removed)
// You can add multiple event listeners to the same element and same event.
// All listeners will run in the order they were added.
btn4.addEventListener("click", () => {
    console.log("button 4 at a 1");     
});
btn4.addEventListener("click", () => {
    console.log("button 4 at a 2");
});
const hand3 = () => {
    console.log("button 4 at a 3");
};
btn4.addEventListener("click", hand3);
btn4.addEventListener("click", () => {
    console.log("button 4 at a 4");
});
btn4.removeEventListener("click", hand3);  // removes hand3 listener