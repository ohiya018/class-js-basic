console.log('success!');

const btn = document.getElementById('btn');
const mainTitle = document.querySelector('#main-title');

btn.addEventListener('click', () => {
    mainTitle.textContent = 'ボタンがクリックされました。';
    mainTitle.style.color = '#e67e22';
});

// btn.addEventListener('mouseover', () => {
//     mainTitle.textContent = 'ボタンがクリックされました。';
//     mainTitle.style.color = '#e67e22';
// });

// btn.addEventListener('mouseout', () => {
//     mainTitle.textContent = 'ボタンがクリックされました。';
//     mainTitle.style.color = '#e67e22';
// });

window.addEventListener('scroll', () => {
    console.log(`現在のスクロール量:${window.scrollY}px`);
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

window.addEventListener('load', () => {
    btn.style.transform = `rotate(${window.scrollY}deg)`;
    document.body.style.backgroundImage = `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

const windowWidth = document.getElementById('window-width');
const windowHeight = document.getElementById('window-height');

// 画面を開いた瞬間の幅と高さを表示
windowWidth.textContent = window.innerWidth;
windowHeight.textContent = window.innerHeight;

// ウィンドウがリサイズされるたびに数値を更新
window.addEventListener('resize', () => {
    windowWidth.textContent = window.innerWidth;
    windowHeight.textContent = window.innerHeight;
});
