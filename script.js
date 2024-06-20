const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let item = document.createElement("li");
    if (inputBox.value === ''){
        alert("kuch kaam nhi hai kya?");
    } else {
        let content = inputBox.value;
        item.innerText = content;
        listContainer.appendChild(item);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        item.appendChild(span);
    }
    saveData();
});

listContainer.addEventListener("click",  (e) => {
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

let saveData = ()=>{
    localStorage.setItem("data", listContainer.innerHTML);
}

let showData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();