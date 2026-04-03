function typeText(element, text, speed = 40) {
    let i = 0;
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

function sideConfetti() {
    const duration = 1800;
    const animationEnd = Date.now() + duration;

    const defaults = {
        startVelocity: 30,
        spread: 65,
        ticks: 70,
        zIndex: 999
    };

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }

        confetti({
            ...defaults,
            particleCount: 8,
            angle: 60,
            origin: { x: 0, y: 1 }
        });

        confetti({
            ...defaults,
            particleCount: 8,
            angle: 120,
            origin: { x: 1, y: 1 }
        });
    }, 180);
}

function startExperience() {
    const startScreen = document.getElementById("startScreen");
    const mainContent = document.getElementById("mainContent");
    const music = document.getElementById("music");

    startScreen.classList.add("hidden");
    mainContent.classList.remove("hidden");

    sideConfetti();

    music.volume = 0.3;
    music.play().catch(() => {
        console.log("Music could not play");
    });
}

function showSurprise() {
    const surprise = document.getElementById("surprise");
    const typedText = document.getElementById("typedText");

    surprise.classList.remove("hidden");
    surprise.style.opacity = "0";

    setTimeout(() => {
        surprise.style.opacity = "1";
    }, 50);

    const message = `You’re a really good friend 👍
Glad to have you in my life 😊
Thanks for always being there 😄
Enjoy your day 🎂🎊`;

    typeText(typedText, message, 40);
    sideConfetti();
}