let p = (e) => {
    go(e, document.querySelectorAll('p a'));
}
let b = (e) => {
    go(e, document.querySelectorAll('b a'));
}
function go(e, list) {
    for(let item of list) {
        window.open(item.getAttribute('href'));
    }
}
