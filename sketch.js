let giphySearch = 'sad';
let giphyapi = 'https://api.giphy.com/v1/gifs/search?api_key=rMXuwMjUUGR9Zdv2mmtdGWqAE0NOLUb0&q=';
let giphyLimit = '&limit=25&offset=0&rating=G&lang=en';
let giphyLink;
let input;
let weatherlink;

let city = 'seattle';
let weatherKey = '&APPID=5f7315f331181aa4ac6571d7f18b543a';
let weatherapi = 'http://api.openweathermap.org/data/2.5/weather?q=';
let weatherData;

function setup(){
input = createInput('manhattan'); 
let button = createButton('submit');

button.mousePressed(updateCity);
}

function updateCity(){
  console.log(input.value());
  city = input.value();
  let weatherlink = weatherapi + city +weatherKey ;
  loadJSON(weatherlink,gotWeatherData);
}

function gotWeatherData(data){
  console.log(data.weather[0].main);
  weatherData = data.weather[0].main
  giphysearch = weatherData;
  giphyLink = giphyapi+giphysearch+giphyLimit;
  loadJSON(giphyLink,gotGiphyData);
}

function gotGiphyData(giphy){
  giphydata = giphy.data[0].images.original.url;
  console.log(giphy.data[0].images.original.url);
  createImg(giphy.data[0].images.original.url);
}
