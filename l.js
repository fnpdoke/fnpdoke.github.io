let win = [];
let p1 = (e) => {
    go(e, document.querySelectorAll('.p1 p a'));
}
let p2 = (e) => {
    go(e, document.querySelectorAll('.p2 p a'));
}
let b = (e) => {
    go(e, document.querySelectorAll('b a'));
}
function go(e, list) {
    for(let item of list) {
        let a = window.open(item.getAttribute('href'));
        win.push(a);
    }
}
function close() {
    win.forEach(w => w.close());
}