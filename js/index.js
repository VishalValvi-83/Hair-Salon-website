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
