let delay = () => {
    return new Promise((resolve, reject) => { setTimeout(resolve, 2500); });
};

async function p(e) {
    let win = window.open('', 'p', 'width=100,height=100,left=' + e?.screenX + ',top=' + e?.screenY);
    let list = document.querySelectorAll('p a');
    let len = list.length;
    let cnt = 1;
    for(let item of list) {
        if (win.closed) break;
        win.location.href = item.getAttribute("href");
        await delay();
        cnt++;
        if (cnt > len) win.close();
    }
}

let b = () => {
    document.querySelectorAll('b a').forEach(e => e.click())
}
