window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("span.intro").innerHTML = require('../package.json').version
    setTimeout(hideDiv, 8000);
})


function hideDiv() {
    console.log("hiding");
    document.querySelector("div.intro").style.display = "none";
}