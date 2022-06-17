// Recuperiamo dalla pagina gli elementi che ci servono
const weatherIcon = document.querySelector('.weather-icon');
const weatherLocation = document.querySelector('.weather-location');
const weatherTemperature = document.querySelector('.weather-temperature');
const suggestionParagraph = document.querySelector('.suggestion-meteo');
const weatherDescription = document.querySelector('.description-meteo');


// Questo è il tag <html>
const rootElement = document.querySelector('.js-loading');

// Cercare di recuperare la posizione
window.navigator.geolocation.getCurrentPosition(onSuccess, onError);


// Funzione da eseguire in caso di errore
function onError(error) {
  console.error(error);
  weatherLocation.innerText = 'Devi attivare la geolocalizazione';
}


// Funzione da eseguire in caso di successo
function onSuccess(position) {
  console.log(position);

  // Prepariamo i dati per l'API
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const apiKey = 'bd832622acc99b03e95f5648052a97cf';
  const language = 'en-US';
  const units = 'metric';
  const endpoint = 'https://api.openweathermap.org/data/2.5/weather';


  // Costruiamo l'indirizzo, comprensivo di query string!

  const apiUri = `${endpoint}?lon=${longitude}&lat=${latitude}&units=${units}&lang=${language}&appid=${apiKey}`;

  // Chiamiamo il nostro servizio esterno

  fetch(apiUri)
    .then(function (response) {
      // trasformo la mia risposta in un formato più snello e leggibile
      const data = response.json();
      return data;
    })
    .then(function (data) {
      console.log(data);

      // Estrapoliamo le informazioni di cui abbiamo bisogno
      const locationName = data.name;
      const temperature = Math.floor(data.main.temp);
      const iconCode = data.weather[0].icon;
      const description = data.weather[0].description;

      // Prepariamo il consiglio giusto.
      const suggestion = getSuggestion(iconCode);
     
      // Inseriamo questi dati dove vogliamo mostrarli
      weatherLocation.innerText = locationName;
      weatherTemperature.innerText = `${temperature}°`;
      weatherIcon.alt = description;
      weatherIcon.src = `meteo/images/${iconCode}.png`;
      suggestionParagraph.innerHTML = suggestion;
      weatherDescription.innerHTML = description;
      console.log(suggestionParagraph.innerHTML)
       // Rimuoviamo la classe 'js-loading'
       rootElement.classList.remove('js-loading');
      
    });
}



// Funzione per recuperare il suggerimento giusto
function getSuggestion(iconCode) {
  const suggestions = {
    '01d': 'Remember the sunscreen!',
    '01n': 'Goodnight!',
    '02d': 'Today the sun comes and goes ...',
    '02n': 'Beware of werewolves ...',
    '03d': 'Perfect light for taking pictures!',
    '03n': 'Sleep well :)',
    '04d': 'What a gray sky :(',
    '04n': 'You cannot even see the moon!',
    '09d': 'Take the umbrella',
    '09n': 'Cover up!',
    '10d': 'Take the umbrella',
    '10n': 'Cover up!',
    '11d': 'Watch out for lightning!',
    '11n': 'Lightning lights up the night!',
    '13d': 'Go out and make a snowman!',
    '13n': 'Perfect night to be under the duvet!',
    '50d': 'Turn on the fog lights!',
    '50n': 'Drive carefully!',
  }

  return suggestions[iconCode];
}