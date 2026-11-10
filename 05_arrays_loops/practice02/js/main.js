const colorBtns = document.querySelectorAll('.color-btn');
console.log(colorBtns);
console.log(colorBtns.length);
console.log(colorBtns[0]);

// for (let i = 0; i < colorBtns.length; i++) {
//     colorBtns[i].addEventListener('click', () => {
//         console.log(colorBtns[i]);
//         console.log(colorBtns[i].textContent);
//         console.log(colorBtns[i].getAttribute('type'));
//         console.log(colorBtns[i].className);
//     })
// }


const links = document.querySelectorAll('a[href^="http"]');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        links[i].setAttribute('target', '_blank');
        links[i].setAttribute('rel', 'noopener noreferrer');
        // links[i].textContent.push('↗️');
        // ↑ 配列に追加なので違う
        links[i].textContent += '↗️';
    });
}

const colorPreview = document.getElementById('color-preview');
const colorCodes = ['#e74c3c', '#27ae60', '#2980b9', '#8e44ad'];

for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', () => {
        const colorName = colorBtns[i].textContent;
        const colorCode = colorCodes[i];

        for (j = 0; j < colorBtns.length; j++) {
            colorBtns[j].classList.remove('is-active');
        }
        colorBtns[i].classList.add('is-active');

        colorPreview.style.backgroundColor = colorCode;
        colorPreview.style.color = '#fff';
        colorPreview.textContent = `${colorName} (${colorCode})`;
    });
}

const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener('click', () => {
        for (let j = 0; j < tabBtns.length; j++) {
            tabBtns[j].classList.remove('is-active');
            tabPanels[j].classList.remove('is-active');
        }
        tabBtns[i].classList.add('is-active');
        tabPanels[i].classList.add('is-active');
    });
}
