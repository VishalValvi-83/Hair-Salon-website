document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleHighlightsButton');
    const highlightsSection = document.getElementById('highlights');

    toggleButton.addEventListener('click', () => {
        if (highlightsSection.style.display === 'none' || highlightsSection.style.display === '') {
            highlightsSection.style.display = 'block';
        } else {
            highlightsSection.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleHighlightsButton');
    const highlightsSection = document.getElementById('highlights');

    toggleButton.addEventListener('click', () => {
        highlightsSection.classList.toggle('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});