import _continue from "./continue.js";
const main = document.querySelector("#main");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch (window.location.hash) {
            case "#continue":
                main.appendChild(_continue())
                console.log("AAAAAAAAAAAAAAA")
                break;
        }
    })
};
init();