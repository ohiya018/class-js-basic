// [] 角括弧、ブラケット
const fruits = ['りんご', 'ばなな', 'みかん'];
fruits[3] = 'いちご';
fruits.push('ぶどう');
console.log(fruits);
// 変数の値自体を変更するとエラー

const steps = [
    'ようこそ！まずはアカウント登録を始めましょう。',
    'お名前とメールアドレスを入力してください。',
    '入力内容を確認し、利用規約に同意してください。',
    '登録が完了しました！サービスをお楽しみください🎉'
];
let currentIndex = 0;
const stepIndicator = document.getElementById('step-indicator');
const stepMessege = document.getElementById('step-message');
const nextBtn = document.getElementById('next-btn');

stepMessege.textContent = steps[currentIndex];
stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;

nextBtn.addEventListener('click', () => {
    currentIndex++;
    stepMessege.textContent = steps[currentIndex];
    if (currentIndex >= steps.length) {
        currentIndex = 0;
    }
    console.log(steps[currentIndex]);
    stepMessege.textContent = steps[currentIndex];
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
});


const newStepInput = document.getElementById('new-step-input');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    const newStepText = newStepInput.value;
    /*
    const newStepText = newStepInput.value.length
    if (newStepText > 0){
    }
    */
    if (newStepText !== '') {
        steps.push(newStepText);
        stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
        newStepInput.value = '';
    }
});

const removeBtn = document.getElementById('remove-btn');
removeBtn.addEventListener('click', () => {
    steps.pop();
    stepIndicator.textContent = `STEP ${currentIndex + 1} / ${steps.length}`;
});

for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(`${i}回目の処理です。`);
    }
}

/*
for(let i = 2; i <= 10; i += 2){
    console.log(`${i}回目の処理です。`);
}
    //汎用性がない
*/

let j = 0;
for (let i = 1; i < 11; i++) {
    j = j + i;
    /*
    // j += i;
    // console.log(`${j}`); ← 一回だけだからここに入れない
    */
}
console.log(`${j}`);


for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}番目:${fruits[i]}`);
}

const menuList = document.getElementById('menu-list');
const menus = ['ホーム', 'サービス紹介', '制作実績', '会社概要', 'お問い合わせ'];
let text = '';

for (let i = 0; i < menus.length; i++) {
    text += `<li>${menus[i]}</li>`;
}
console.log(text);
menuList.innerHTML = text;
// innerTextはテキストそのまま挿入
