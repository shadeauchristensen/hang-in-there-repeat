// query selector variables go here 👇
// console.log("main.js is running!");
// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

let posterImg = document.querySelector('.poster-img')
let posterTitle = document.querySelector('.poster-title')
let posterQuote = document.querySelector('.poster-quote')
let showRandomBtn = document.querySelector('.show-random')
let showFormBtn = document.querySelector('.show-form')
let mainPosterSection = document.querySelector('.main-poster')
let formSection = document.querySelector('.poster-form')
let takeMeBackBtn = document.querySelector('.show-main')
let showPostersBtn = document.querySelector('.show-saved')
let savedPostersSection = document.querySelector('.saved-posters')
let makePosterBtn = document.querySelector('.make-poster')
let posterImageURL = document.querySelector('#poster-image-url')
let motivationalTitle = document.querySelector('#poster-title')
let motivationalQuote = document.querySelector('#poster-quote')
let savedPosterBtn = document.querySelector('.save-poster')
let savedPostersGrid = document.querySelector(".saved-posters-grid")
let backToMainBtn = document.querySelector(".back-to-main")


// event listeners go here 👇

window.addEventListener("load", showRandomPoster) // Here we are loading a newly generated poster every time that we load page

showRandomBtn.addEventListener('click', function() {
  showRandomPoster()
});

showFormBtn.addEventListener('click', function() {
  mainPosterSection.classList.add('hidden'); // Hide the main poster section
  formSection.classList.remove('hidden'); // Show the form section
});

takeMeBackBtn.addEventListener('click', function() {
  formSection.classList.add('hidden')
  mainPosterSection.classList.remove('hidden')
})

showPostersBtn.addEventListener('click', function() {
  mainPosterSection.classList.add('hidden')
  savedPostersSection.classList.remove('hidden')
})

makePosterBtn.addEventListener('click', function(event) {
  event.preventDefault()
  formSection.classList.add('hidden')
  mainPosterSection.classList.remove('hidden')
  updatePoster()
})

savedPosterBtn.addEventListener('click', function() {
  savePoster()
  savedPostersSection.classList.remove('hidden')
  mainPosterSection.classList.add('hidden')
})

backToMainBtn.addEventListener('click', function() {
  savedPostersSection.classList.add('hidden')
  mainPosterSection.classList.remove('hidden')
  showRandomPoster()
})



// functions and event handlers go here 👇
// (we've provided two to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
} 

function showRandomPoster() { 
  posterImg.src = images[getRandomIndex(images)];
  posterTitle.innerText = titles[getRandomIndex(titles)];
  posterQuote.innerText = quotes[getRandomIndex(quotes)];
}

function updatePoster() {
  const imageURL = posterImageURL.value
  const title = motivationalTitle.value
  const quote = motivationalQuote.value

  posterImg.src = imageURL
  posterTitle.innerText = title
  posterQuote.innerText = quote

  images.push(imageURL) // storing images on global, because its cooler, and i want to see posters i make again
  titles.push(title)
  quotes.push(quote)

  currentPoster = createPoster(imageURL, title, quote) // sets up current poster
}

function savePoster() {
  var newPoster = createPoster(posterImg.src, posterTitle.innerText, posterQuote.innerText);
  if (!savedPosters.some(poster => 
    poster.imageURL === newPoster.imageURL &&
    poster.title === newPoster.title &&
    poster.quote === newPoster.quote)) {
  }
  savedPosters.push(newPoster)
  displaySavedPosters()
}

function displaySavedPosters() {
  savedPostersGrid.innerHTML = ""  // Clear previous elements and is most useful for when im updating the saved posters grid

  savedPosters.forEach(poster => {
    let miniPoster = document.createElement("div")
    miniPoster.classList.add("mini-poster")

    miniPoster.innerHTML = `<img src="${poster.imageURL}" 
    alt="Saved Poster"><h2>${poster.title}</h2><h4>${poster.quote}</h4>`

    savedPostersGrid.appendChild(miniPoster)
  })
}


