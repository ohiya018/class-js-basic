console.log('04_conditions ready!');

const score = `80`;
if (score === 80) {
    console.log('合格');
} else if (score >= 50) {
    console.log('もう少し');
} else {
    console.log('不合格');
}

const age = 22;
const hasLicense = true;

// 18歳以上、かつ運転免許を持っているか?
if (age >= 18 && hasLicense) {
    console.log(`運転できる`);
} else {
    console.log('運転できない');
}


const btn = document.getElementById('btn');
const message = document.getElementById('message');


const countDisplay = document.getElementById('count');
let count = 0;

message.textContent = 'ボタンをクリックしてカウントを増やそう！';

btn.addEventListener('click', () => {

    count++;
    countDisplay.textContent = count;

    if (count >= 30) {
        message.textContent = '30回達成！ゲームクリアです！';
        message.style.color = '#e74c3c';
    } else if (count % 10 === 0) {
        message.textContent = `${count}回達成！あと少し！`;
        message.style.color = '#0066cc';
    } else {
        message.textContent = 'ボタンをクリックしてカウントを増やそう！';
        message.style.color = '#333333';
    }

});

const top = document.getElementById('page-top');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        top.classList.add('is-active');
    } else {
        top.classList.remove('is-active');
    }
});
