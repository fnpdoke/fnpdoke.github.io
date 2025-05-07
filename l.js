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
    win = [];
    for(let item of list) {
        let a = window.open(item.getAttribute('href'));
        if (a) win.push(a);
    }
}
function closeAll() {
    win.forEach(w => {
        if (w && !w.closed) w.close();
    });
    win = [];
}
