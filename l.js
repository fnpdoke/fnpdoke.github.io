let delay = () => {
    return new Promise((resolve, reject) => { setTimeout(resolve, 1000); });
}

let p = () => {
    document.querySelectorAll('p a').forEach(e => e.click())
}

async function b(e) {
    let win = window.open('', 'b', 'width=100,height=100,left=' + e?.screenX + ',top=' + e?.screenY);
    let list = document.querySelectorAll('b a');
    let len = list.length;
    let cnt = 1;
    for(let item of list) {
        if (win.closed) break;
        win.location.href = item.getAttribute("href");
        await delay();
        cnt++;
        if (cnt > len) {
            win.close();
        }
    }
}
