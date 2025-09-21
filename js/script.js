// Rotating slogans
const slogans = [
    "Eat well, live well.",
    "Your body deserves the best fuel.",
    "Healthy mind, healthy life.",
    "Balance is the key to wellness.",
    "Small steps lead to big changes."
];

let sloganIndex = 0;
const heroSlogan = document.getElementById('hero-slogan');

function rotateSlogan() {
    heroSlogan.textContent = slogans[sloganIndex];
    sloganIndex = (sloganIndex + 1) % slogans.length;
}

setInterval(rotateSlogan, 4000);
rotateSlogan();

// Daily health tip
const healthTips = [
    "Drink at least 8 glasses of water today.",
    "Take a 20-minute walk to boost your mood.",
    "Add a serving of vegetables to every meal.",
    "Practice 5 minutes of mindfulness breathing.",
    "Swap sugary drinks for herbal tea."
];

const dailyTip = document.getElementById('daily-tip');
const dayIndex = new Date().getDate() % healthTips.length;
dailyTip.textContent = healthTips[dayIndex];
