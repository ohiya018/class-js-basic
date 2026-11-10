const mainImg = document.getElementById('main-img');
const captionText = document.getElementById('caption-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thumbImg = document.querySelectorAll('.thumb-img');

function changeImage() {
    const imageUrl = thumbImg[currentIndex].getAttribute('src');
    console.log(imageUrl);
    const imageText = thumbImg[currentIndex].getAttribute('alt');
    mainImg.setAttribute('src', imageUrl);
    mainImg.setAttribute('alt', imageText);
    captionText.textContent = `${currentIndex + 1} / ${thumbImg.length} : ${imageText}`;
    for (j = 0; j < thumbImg.length; j++) {
        thumbImg[j].classList.remove('is-active');
    }
    thumbImg[currentIndex].classList.add('is-active');
}

let currentIndex = 0;
for (let i = 0; i < thumbImg.length; i++) {
    thumbImg[i].addEventListener('click', () => {
        currentIndex = i;
        changeImage();
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= thumbImg.length) {
        currentIndex = 0;
    }
    changeImage();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = thumbImg.length - 1;
    }
    changeImage();
});
