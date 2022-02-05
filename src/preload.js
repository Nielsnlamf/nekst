window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("span.intro").innerHTML = require('../package.json').version
})
