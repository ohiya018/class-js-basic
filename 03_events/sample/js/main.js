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

/*
window.addEventListener('DOMContentLoaded', () => { });
DOMツリーが完成したら実行する(ブラウザにはまだ表示されてない)
*/

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

// 画面を開いた瞬間の文字サイズを設定（画面幅の1/25）
mainTitle.style.fontSize = `${window.innerWidth / 25}px`;

// リサイズされるたびに文字サイズを更新
window.addEventListener('resize', () => {
    mainTitle.style.fontSize = `${window.innerWidth / 25}px`;
});

btn.classList.add('is-active', 'is-open');
btn.classList.remove('is-active');

btn.addEventListener('click', () => {
    btn.classList.toggle('is-active');
    if (btn.classList.contains('is-active')) {
        btn.textContent = 'アクティブ';
    } else {
        btn.textContent = '通常';
    }
});
