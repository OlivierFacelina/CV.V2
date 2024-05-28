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
  data: [35,30,12,18,2.5,2.5],
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

// ------------ TRAVEL DATA ---------------
const travelData = {
  labels: ["Singapour", "Etats-Unis", "Japon", "Thaïlande", "Martinique", "Espagne", "Grèce"],
  data: [35,20,10,6,20,2,7],
  colors: ["#E62837", "#060E89", "#F7F7F7", "#231C4D", "#00A14D", "#F7BE00", "#044A83"],
}
const travelChart = document.querySelector('.travel-chart');
const travelUl = document.querySelector(".hobbies__content .details-travel ul")

new Chart(travelChart, {
  type: "doughnut",
  data: {
    labels: travelData.labels,
    datasets: [
      {
        label: "Loisirs de prédilection",
        data: travelData.data,
        backgroundColor: travelData.colors
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

const populateUlTravel = () => {
  travelData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML += ` ${l}: <span class='percentage'>${travelData.data[i]}%</span>`;
    travelUl.appendChild(li)
  })
}

populateUlTravel();

// ------------ LANGUAGE DATA ---------------
const languageData = {
  labels: ["Français", "Anglais", "Espagnol"],
  data: [70,20,10],
  colors: ["#002551", "#F7F7F7", "#F7BE00"],
}
const languageChart = document.querySelector('.language-chart');
const languageUl = document.querySelector(".hobbies__content .details-language ul")

new Chart(languageChart, {
  type: "doughnut",
  data: {
    labels: languageData.labels,
    datasets: [
      {
        label: "Loisirs de prédilection",
        data: languageData.data,
        backgroundColor: languageData.colors
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

const populateUlLanguage = () => {
  languageData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML += ` ${l}: <span class='percentage'>${languageData.data[i]}%</span>`;
    languageUl.appendChild(li)
  })
}

populateUlLanguage();