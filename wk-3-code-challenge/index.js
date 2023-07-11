const URL = 'http://localhost:3000';

function fetchData(url) {
  return fetch(url).then(response => response.json());
}

function displayFilms() {
  const filmsContainer = document.getElementById('films-container');

  fetchData(`${URL}/films`)
    .then(films => {
      films.forEach(film => {
        const filmCard = createFilmCard(film);
        filmsContainer.appendChild(filmCard);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function createFilmCard(film) {
  const filmCard = document.createElement('div');
  filmCard.className = 'film-card';

  const filmPoster = document.createElement('img');
  filmPoster.src = film.poster;
  filmPoster.alt = film.title;
  filmCard.appendChild(filmPoster);

  const filmDetails = document.createElement('div');
  filmDetails.className = 'film-details';

  const filmTitle = document.createElement('h2');
  filmTitle.textContent = film.title;
  filmDetails.appendChild(filmTitle);

  const filmRuntime = document.createElement('p');
  filmRuntime.textContent = `Runtime: ${film.runtime} minutes`;
  filmDetails.appendChild(filmRuntime);

  const filmCapacity = document.createElement('p');
  filmCapacity.textContent = `Capacity: ${film.capacity}`;
  filmDetails.appendChild(filmCapacity);

  const filmShowtime = document.createElement('p');
  filmShowtime.textContent = `Showtime: ${film.showtime}`;
  filmDetails.appendChild(filmShowtime);

  const filmTicketsSold = document.createElement('p');
  filmTicketsSold.textContent = `Tickets Sold: ${film.tickets_sold}`;
  filmDetails.appendChild(filmTicketsSold);

  const filmDescription = document.createElement('p');
  filmDescription.textContent = film.description;
  filmDetails.appendChild(filmDescription);

  filmCard.appendChild(filmDetails);

  return filmCard;
}

function init() {
  displayFilms();
}

init();
