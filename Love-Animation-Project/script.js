document.addEventListener('DOMContentLoaded', function () {
    const mainPage = document.getElementById('mainPage');
    const mainText = document.getElementById('mainText');
    const songPage = document.getElementById('songPage');
    const loveSong = document.getElementById('loveSong');
    const lyrics = document.getElementById('lyrics');
    const floatingElements = document.getElementById('floatingElements');

    // Song lyrics - word by word with emojis
    const songWords = [
        " ","Chahoge 🩷","tum 🙂", "jaisa ✨", "ho 💫", 
        "jaunga 🤍", "vaise 🤌", "Chahe 🤲", "to 🙂", 
        "waqt ⏳", "aaye 🌙", "lelo🤍","🫵"
    ];

    // Click anywhere to proceed
    mainPage.addEventListener('click', function () {
        // Add fade out animation to main text
        mainText.style.animation = 'fadeOut 1s ease-in-out forwards';

        // Wait for 1 second then switch to song page
        setTimeout(() => {
            mainPage.classList.add('hidden');
            songPage.classList.remove('hidden');
            startSongExperience();
        }, 1000);
    });

    function startSongExperience() {
        // Start playing song
        loveSong.volume = 0.8;
        loveSong.play().catch(e => {
            console.log("Audio will start after interaction");
        });

        // Start animated lyrics - WORD BY WORD
        startWordByWordAnimation();

        // Start floating elements
        startFloatingAnimation();

        // Add continuous floating elements
        setInterval(createFloatingElement, 300);
    }

    function startWordByWordAnimation() {
        let wordIndex = 0;
        
        function showNextWord() {
            if (wordIndex >= songWords.length) {
                wordIndex = 0; // Restart from beginning
                lyrics.innerHTML = ''; // Clear lyrics
            }

            // Clear previous content
            lyrics.innerHTML = '';
            
            // Show current word with animation
            const wordElement = document.createElement('span');
            wordElement.className = 'word';
            wordElement.textContent = songWords[wordIndex];
            wordElement.style.animation = 'wordPop 0.8s forwards';
            
            lyrics.appendChild(wordElement);

            wordIndex++;

            // Next word after short delay
            setTimeout(showNextWord, 800); // 800ms delay between words
        }

        // Start word animation immediately
        showNextWord();
    }

    function startFloatingAnimation() {
        // Create initial floating elements
        for (let i = 0; i < 15; i++) {
            setTimeout(createFloatingElement, i * 150);
        }
    }

    function createFloatingElement() {
        const elements = ['💖', '💕', '💝', '💓', '💗', '💘', '🎵', '🎶', '✨', '🌟'];
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        element.style.left = Math.random() * 100 + 'vw';
        element.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
        element.style.animationDuration = (Math.random() * 4 + 3) + 's';
        element.style.animationDelay = Math.random() * 1 + 's';

        floatingElements.appendChild(element);

        // Remove element after animation
        setTimeout(() => {
            if (element.parentNode) {
                element.remove();
            }
        }, 7000);
    }

    // Enable audio on any click
    document.addEventListener('click', function () {
        if (loveSong.paused) {
            loveSong.play().catch(e => console.log("Audio enabled"));
        }
    });

    // Add some initial floating elements on main page
    setInterval(() => {
        if (!mainPage.classList.contains('hidden')) {
            createFloatingElement();
        }
    }, 600);
});