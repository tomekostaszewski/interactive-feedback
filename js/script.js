const emoji = document.querySelectorAll('.far');
const stars = document.querySelectorAll('.fas');
const p = document.querySelector('p');

const clearEmoji = () => {
    for (const el of emoji) {
        el.style.display = 'none';
    }
    for (const st of stars) {
        st.style.color = '';
    }
    p.style.opacity = '1';
}

const oneStars = () => {
    clearEmoji();
    for(let i = 0; i < stars.length - 4; i++){
        stars[i].style.color = "yellow";
    }
    emoji[1].style.display = 'block';
}

const twoStars = () => {
    clearEmoji();
    for(let i = 0; i < stars.length - 3; i++){
        stars[i].style.color = "yellow";
    }
    emoji[2].style.display = 'block';
}

const threeStars = () => {
    clearEmoji();
    for(let i = 0; i < stars.length - 2; i++){
        stars[i].style.color = "yellow";
    }
    emoji[3].style.display = 'block';
}

const fourStars = () => {
    clearEmoji();
    for(let i = 0; i < stars.length - 1; i++){
        stars[i].style.color = "yellow";
    }
    emoji[4].style.display = 'block';
}

const fiveStars = () => {
    clearEmoji();
    for(let i = 0; i < stars.length; i++){
        stars[i].style.color = "yellow";
    }
    emoji[5].style.display = 'block';
    p.style.display = 'block';
}

const reset = () => {
    clearEmoji();
    emoji[0].style.display = 'block'
    p.style.opacity = '0';
}

stars[0].addEventListener('click', oneStars)
stars[1].addEventListener('click', twoStars)
stars[2].addEventListener('click', threeStars)
stars[3].addEventListener('click', fourStars)
stars[4].addEventListener('click', fiveStars)
stars.forEach(re => re.addEventListener('dblclick', reset))