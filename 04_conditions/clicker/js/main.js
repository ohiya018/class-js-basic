const MAX_HP = 100;
const DAMAGE = 25;

let currentHP = MAX_HP;

const BEFORE_IMG = 'https://picsum.photos/id/1025/400/250';
const AFTER_IMG = 'https://picsum.photos/id/1062/400/250';

const EnemyImg = document.getElementById('enemy-img');
const hpText = document.getElementById('hp-display');
const battleMessegeText = document.getElementById('battle-message');
const attackBtn = document.getElementById('attack-btn');
const resetBtn = document.getElementById('reset-btn');

attackBtn.addEventListener('click', () => {
    currentHP -= DAMAGE;
    hpText.textContent = `HP: ${currentHP} / 100`;
    battleMessegeText.textContent = '効果的なダメージを与えた！';
    if (currentHP === 0) {
        battleMessegeText.textContent = 'モンスターをたおした！ゲームクリア！';
        attackBtn.setAttribute('disabled', 'true');
        EnemyImg.setAttribute('src', AFTER_IMG);
        EnemyImg.setAttribute('alt', `倒れたモンスター`);
    } else if (currentHP <= 50) {
        battleMessegeText.textContent = '相手はふらふらだ！あと少し！';
    } else {
        battleMessegeText.textContent = '効果的なダメージを与えた！';
    }
})

resetBtn.addEventListener('click', () => {
    currentHP = MAX_HP;
    hpText.textContent = `HP: ${MAX_HP} / 100`;
    EnemyImg.setAttribute('src', BEFORE_IMG);
    EnemyImg.setAttribute('alt', `元気なモンスター`);
    battleMessegeText.textContent = '「こうげき」ボタンを押してダメージを与えよう！';
    attackBtn.removeAttribute('disabled');
})
