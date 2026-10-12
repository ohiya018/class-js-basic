// // console.log('success!');

// // // const mainTitle = document.getElementById('main-title');
// // // console.log(mainTitle);

// // // const title = document.querySelector('#main-title');
// // // console.dir(title);

// // // console.log(document.body);
// // // console.log(document.documentElement);

// // // const introText = document.getElementById('intro');
// // // console.log(introText);

// // // const changeBtn = document.querySelector('#change-btn');
// // // console.dir(changeBtn);

// // const mainTitle = document.getElementById('main-title');
// // console.log(mainTitle.textContent);

// // const day = 12;
// // const week = `月曜日`;
// // mainTitle.textContent = `今日は${day}日の${week}です。`;

// // const introText = document.querySelector('#intro');
// // console.log(mainTitle.innerHTML);

// // introText.innerHTML = `ようこそ!<strong>JS</strong>の正解へ！`;


// // console.log(document.body.textContent);
// // console.log(document.body.innerHTML);

// // introText.textContent = `ようこそ!<strong>JS</strong>の正解へ！`;

// //練習問題
// const mainTitle = document.getElementById('main-title');
// mainTitle.textContent = `今泉`;

// const introText = document.getElementById('#intro');
// intro.innerHTML = `途中で<br>改行がある文章です。`;

// const changeBtn = document.getElementById('change-btn');
// changeBtn.innerHTML = `<strong>内容を変更する</strong>`;


// mainTitle.style.color = '#ff3366';
// mainTitle.style.backgroundColor = `#333333`;

// let newSize = 50;
// mainTitle.style.fontSize = `${newSize}px`;

// changeBtn.addEventListener('click', () => {
//     intro.style.color = `#ff0000`;
//     intro.style.fontSize = `100px`;
//     intro.style.backgroundColor = `#00bbff`;
// });


//課題

//1
const btnText = document.getElementById('btn-autumn');
console.log(btnText);
btnText.textContent = '🍁オータム';

//2
const mainTitle = document.getElementById('theme-title');
const body = document.querySelector('body');
const changeBtnLight = document.getElementById('btn-light');
const changeBtnDark = document.getElementById('btn-dark');
const changeBtnAutumn = document.getElementById('btn-autumn');

changeBtnLight.addEventListener('click', () => {
    mainTitle.textContent = '今のテーマ：☀️ ライトモード';
    body.style.color = '#333333';
    body.style.backgroundColor = '#f0f4f8';
});

changeBtnDark.addEventListener('click', () => {
    mainTitle.textContent = '今のテーマ：🌙 ダークモード';
    body.style.color = '#e0e0e0';
    body.style.backgroundColor = '#1a1a2e';
});

changeBtnAutumn.addEventListener('click', () => {
    mainTitle.textContent = '今のテーマ：🍁オータムモード';
    body.style.color = '#F1CA1E';
    body.style.backgroundColor = '#F05E1C';
});
