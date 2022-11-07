const shoppingList = [];

const listEl = document.querySelector(".my-list");


let i = 0;

while (shoppingList.length < 5) {

    let item = prompt("Inserisci cosa devi acquistare.");
    shoppingList.push(item);

    let listItemEl = document.createElement("li");
    listItemEl.innerHTML = shoppingList[i];
    listItemEl.classList.add("text-primary", "h3", "px-3", "py-1")
    listEl.append(listItemEl);


    if (shoppingList[i] === "") {
        listItemEl.classList.add("d-none")
    }

    i++;
}







