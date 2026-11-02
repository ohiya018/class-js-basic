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
