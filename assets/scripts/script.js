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

// ------------------------------ HOBBIES ------------------------------

// ------------ SPORTS DATA ---------------
const sportsData = {
  labels: ["Tennis", "Football", "Basketball", "Formule 1", "Hockey", "Football américain"],
  data: [35,30,15,15,2.5,2.5],
  colors: ["#3A9D23", "#000080", "#FF804E", "#FF1E04", "orange", "#724144"]
}
const sportsChart = document.querySelector('.sports-chart');
const ul = document.querySelector(".hobbies__content .details ul")

new Chart(sportsChart, {
  type: "doughnut",
  data: {
    labels: sportsData.labels,
    datasets: [
      {
        label: "Loisirs de prédilection",
        data: sportsData.data,
        backgroundColor: sportsData.colors
      }
    ]
  },
  options: {
    // borderWidth: 10,
    plugins: {
      legend: {
        display: false
      }
    }
  }

})

const populateUl = () => {
  sportsData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${sportsData.data[i]}%</span>`;
    ul.appendChild(li);
  })
}

populateUl();