let delay = () => {
    return new Promise((resolve, reject) => { setTimeout(resolve, 1500); });
};

async function p() {
    let win = window.open('', 'p', 'width=100, height=100');
    let list = document.querySelectorAll('p a:not([href=""])');
    let len = list.length;
    let cnt = 1;
    for(let item of list) {
        win.location.href = item.getAttribute("href");
        await delay();
        cnt++;
        if (cnt > len) {
            win.close();
            alert('done');
        }
    }
}