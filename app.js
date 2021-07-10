// MENU

const item = document.querySelectorAll(".item");
const bt = document.querySelectorAll(".bt");

bt[0].addEventListener("click", function () {
    for (let i = 0; i < item.length + 1; i++) {
        item[i].classList.remove("hide-item");
    }
})

//café da manhã
bt[1].addEventListener("click", function () {
    for (let i = 0; i < item.length + 1; i++) {
        item[i].classList.remove("hide-item");
        if (item[i].classList.contains("bf") === false) {
            item[i].classList.add("hide-item");
        }
    }
})

//almoço
bt[2].addEventListener("click", function () {
    for (let i = 0; i < item.length + 1; i++) {
        item[i].classList.remove("hide-item");
        if (item[i].classList.contains("lc") === false) {
            item[i].classList.add("hide-item");
        }
    }
})

//milkshakes
bt[3].addEventListener("click", function () {
    for (let i = 0; i < item.length + 1; i++) {
        item[i].classList.remove("hide-item");
        if (item[i].classList.contains("ms") === false) {
            item[i].classList.add("hide-item");
        }
    }
})

//jantar
bt[4].addEventListener("click", function () {
    for (let i = 0; i < item.length + 1; i++) {
        item[i].classList.remove("hide-item");
        if (item[i].classList.contains("dn") === false) {
            item[i].classList.add("hide-item");
        }
    }
})



