document.addEventListener('DOMContentLoaded', () => {
  const moreServicebtn = document.getElementById('moreServicebtn');
  const container = document.getElementById('container');

  moreServicebtn.addEventListener('click', () => {
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
    moreServicebtn.textContent = container.style.display === 'none' ? "Show More Services": "Close";
  });
});
