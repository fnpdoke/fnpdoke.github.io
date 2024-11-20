let delay = () => {
    return new Promise((resolve, reject) => { setTimeout(resolve, 4000); });
}
let p = (e) => {
    go(e, document.querySelectorAll('p a'), document.querySelectorAll('b a'));
}
let b = (e) => {
    go(e, document.querySelectorAll('b a'));
}
async function go(e, list, addl) {
    let win = window.open('', 'go', 'width=400,height=300,left=' + e?.screenX + ',top=' + e?.screenY);
    let len = list.length;
    let cnt = 1;
    for(let item of list) {
        if (win.closed) break;
        win.location.href = item.getAttribute("href");
        await delay();
        cnt++;
        if (cnt > len) {
            win.close();
            if (addl) go(e, addl);
        }
    }
}
