// ------------------------------ PROJECTS ------------------------------

function openModal(index) {
  document.getElementById('modal-' + index).style.display = 'block';
}

function closeModal(index) {
  document.getElementById('modal-' + index).style.display = 'none';
}

function showMore() {
  document.querySelectorAll('.project-button.hidden').forEach(button => {
      button.classList.remove('hidden');
  });
  document.getElementById('see-more-button').classList.add('hidden');
  document.getElementById('see-less-button').classList.remove('hidden');
}

function showLess() {
  document.querySelectorAll('.project-button').forEach((button, index) => {
      if (index >= 12) {
          button.classList.add('hidden');
      }
  });
  document.getElementById('see-more-button').classList.remove('hidden');
  document.getElementById('see-less-button').classList.add('hidden');
}