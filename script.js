const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const message = document.getElementById('message');
const statusImg = document.getElementById('status-img');
const heartContainer = document.getElementById('heart-container');

// 1. Function to make the "No" button run away
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth)) - 100;
    const j = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight)) - 100;
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

// 2. Success state when clicking "Yes"
yesBtn.addEventListener('click', () => {
    question.innerHTML = "Yay! You're the best! ❤️";
    message.innerHTML = "I promise to make it up to you. I'm so happy you forgave me!";
    statusImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmtuYTZuaWF6ZzM5dzF5ZW94ZnN6bnZpZWQ1ZW9yam56eGZ3Y3ZoeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.gif"; // Happy cat
    
    noBtn.style.display = 'none';
    yesBtn.style.transform = 'scale(1.2)';
    
    // Create extra celebration hearts
    for(let i=0; i<30; i++) {
        createHeart();
    }
});

// 3. Background Heart Generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    
    heartContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);