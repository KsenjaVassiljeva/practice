document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll("[data-animate]");

    function animateCards() {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", animateCards);
    animateCards(); // для случаев, если уже прокручено
});