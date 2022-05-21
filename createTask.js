var page = 0;
var array = [0,1,2,3,4,5,6,7,8,9,10,11];
var instructions = "After clicking 'play', 3 different game options will be displayed. "
instructions = instructions+ "Once you pick an option, the game will start. Twelve images will be displayed, "
instructions = instructions+ "along with a fun fact about one of the animals shown. "
instructions = instructions+ "After reading the fact, you must click on the animal you think the fact corresponds to. "
instructions = instructions+ "If you are correct, a point will be added to you score, and another fact will be displayed. "
instructions = instructions+ "If you are wrong, one of your lives will be lost, and you will be given another fact to match. "
instructions = instructions+ "This continues until you have lost all 3 of your lives. "
instructions = instructions+ "Once this happenss, you will be taken to another page "
instructions = instructions+"that displays your final score, and you will be given the option to play again. "

function home() {
  location.replace("index.html");
}

function turn(num) {
  qNum = localStorage.getItem("questionNumber");
  points = localStorage.getItem("points");
  if (num == qNum) {
    window.alert("CORRECT")
    fscore = localStorage.getItem("fScore");
    fscore++;
    var fscore = localStorage.setItem("fScore", fscore);
  }
  else {
    window.alert("You were incorrrect :(")
    points = points-1;
  }
  var qNum = localStorage.setItem("questionNumber", qNum);
  if (points == 0){
    var points = localStorage.setItem("points", points);
    fresh()
  }
  else  {
    var points = localStorage.setItem("points", points);
    reFresh()
  }
}

function fresh() {
  location.replace("Page4.html")
}

var catDogCard = new Array();
catDogCard[0] = "BengalCat.png";
catDogCard[1] = "SphinxCat.png";
catDogCard[2] = "MunchkinCat.png";
catDogCard[3] = "GreatDane.png";
catDogCard[4] = "Chihuhua.png";
catDogCard[5] = "Greyhound.png";
catDogCard[6] = "lagottoromagnolo.png";
catDogCard[7] = "catahoulaleopard.png";
catDogCard[8] = "redfox.png";
catDogCard[9] = "greywolf.png";
catDogCard[10] = "snowleapord.png";
catDogCard[11] = "cheetah.png";

var dcFacts = new Array();
dcFacts[0] = "These cats were created by combining wild Asian leopards with domestic cats"
dcFacts[1] = "This animal originates from Canada"
dcFacts[2] = "This is the smallest cat breed recorded"
dcFacts[3] = "These dogs are known for being extremely tall"
dcFacts[4] = "This breed is known to be a descendent of the Techichi, the companion dog of the ancient Toltecs"
dcFacts[5] = "This animal can reach speeds up to 45mph, and when running, they spend 75% of their time in the air"
dcFacts[6] = "This breed of dog is thought to have been around for over one thousand years"
dcFacts[7] = "These dogs have webbed feet"
dcFacts[8] = "This animal can run up to 31 mph and jump over 6 ft high fences"
dcFacts[9] = "These animals are the largest members of the dog family and are also known as 'Timber Wolves'"
dcFacts[10] = "This cat is the smallest of the large cat family"
dcFacts[11] = "This animal is the fastest mamal in the world, having has low stamina, but high speeds"

var landA = new Array();
landA[0] = "senecawhitedeer.png";
landA[1] = "okapi.png";
landA[2] = "deserthornedviper.png";
landA[3] = "blackmamba.png";
landA[4] = "capybara.png";
landA[5] = "giantAnteater.png";
landA[6] = "mongoose.png";
landA[7] = "hyena.png";
landA[8] = "reticulatedpython.png";
landA[9] = "meerkat.png";
landA[10] = "gorilla.png";
landA[11] = "rhino.png";

var laFacts = new Array();
laFacts[0] = "This animal is leucistic, meaning it lacks pigmentation in it's fur"
laFacts[1] = "This animal, despite having the features of many others, is part of the giraffe family"
laFacts[2] = "This animal evolved to have horns that serve to proteect its eyes from sand"
laFacts[3] = "These animals are known for their large size, quickness, and extremely potenet venom"
laFacts[4] = "This animals is the worlds largest rodent, and once fully grown, can weigh as much as a human"
laFacts[5] = "These animals have no teeth, and only prey on insects"
laFacts[6] = "These animals are noted for attacking highly venomous snakes such as king cobras"
laFacts[7] = "Despite being known for their 'laugh', only certain breeds of this animal have that ability"
laFacts[8] = "This animal is the worlds largest breed of snake"
laFacts[9] = "These animals have amazing vision, and can see things more than 1,000 feet away"
laFacts[10] = "Humans share over 90% of our DNA with these animals"
laFacts[11] = "These animals are noe of the heaviest land animals in the world"

var seaCard = new Array();
// https://www.scientificamerican.com/article/see-iridescent-jellyfish-and-glowing-wonders-of-the-sea-in-world-oceans-day-photos/
seaCard[0] = "jellyfish.png";
// https://www.livescience.com/55399-clownfish.html
seaCard[1] = "clownfish.png";
// https://www.newportaquarium.com/Things-To-Do/Animals/Seahorses
seaCard[2] = "seahorse.png";
// https://www.timeforkids.com/g2/sea-turtle-discovery-zone/
seaCard[3] = "seaturtle.png";
//https://www.discovermagazine.com/environment/octopus-farms-could-become-a-reality-scientists-warn-this-isnt-a-good-idea
seaCard[4] = "octopus.png";
// https://www.thesprucepets.com/snowflake-eel-profile-2920906
seaCard[5] = "saltwatereel.png";
// https://unsplash.com/wallpapers/animals/dolphin
seaCard[6] = "dolphin.png";
// https://www.beyondpinkworld.com/news/top-news/science-just-discovered-the-fl-166
seaCard[7] = "pufferfish.png";
// https://www.4ocean.com/pages/hammerhead-shark-cause-of-the-month
seaCard[8] = "hammerhead.png";
// https://www.thegardenisland.com/2021/06/27/lifestyles/lilley-meet-remora-the-sharksucker/
seaCard[9] = "remora.png";
// https://animals.net/basking-shark/
seaCard[10] = "baskingshark.png";
// https://www.treehugger.com/stingray-facts-5179405
seaCard[11] = "stingray.png";

var sFacts = new Array();
sFacts[0] = "Some types of this animal can glow in the dark"
sFacts[1] = "These animals are hermaphrodites, meaning they are born male, but have to ability to become female"
sFacts[2] = "In this species, the male is the one that carries the children( gets pregnant)"
sFacts[3] = "These animals lay their eggs in the same, and once hatched, the babies must crawl into the water"
sFacts[4] = "These animals has three hearts"
sFacts[5] = "This animal's backbone is made up of over 100 vertebrae, making it extremely flexible"
sFacts[6] = "These animals can turn off half of their brain, allowing them to be aware of danger while sleeping"
sFacts[7] = "This animal is one of the most poisonous fish in the sea"
sFacts[8] = "The unique shape of it's head allows this animal to be able to see 360 degrees"
sFacts[9] = "This fish attaches itself onto sharks to eat the shark's 'left-overs'"
sFacts[10] = "This animal is a 'filter-feeder'; it allows water and microscopic animals to enter it's mouth and filters the water out"
sFacts[11] = "Scientists have discovered a fossil for this animal that dated at over 50 million years old"

var positions = new Array();
positions[0] = "r1c1";
positions[1] = "r1c2";
positions[2] = "r1c3";
positions[3] = "r1c4";

positions[4] = "r2c1";
positions[5] = "r2c2";
positions[6] = "r2c3";
positions[7] = "r2c4";

positions[8] = "r3c1";
positions[9] = "r3c2";
positions[10] = "r3c3";
positions[11] = "r3c4";

function score() {
  points = localStorage.getItem("points");
  document.write('<button class="score" >Lives: '+ points +'</button>')
  var points = localStorage.setItem("points", p);
}

function ran() {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function play() {
  location.replace("Choose.html");
}


function goHome() {
  var z = 'onclick="home()"';
  document.write('<button class="home" ' +z+ '>Home</button>')
}

function printIMGs() {
  document.write('<img class="fish" src="PinkFish.png">')
  document.write('<img class="ele" src="Elephant.png">')
  document.write('<img class="monkey" src="Monkey.png">')
  document.write('<img class="birds" src="Birds.png">')
}

function goPlay() {
  var z = 'onclick="play()"';
  document.write('<button class="play" ' +z+ '>Play</button>')
}

function playAgain() {
  var z = 'onclick="play()"';
  document.write('<button class="play" ' +z+ '>Play Again</button>')
}

function run(num, imgN, z) {
   document.write('<img class = '+ num + ' src='+imgN+' onclick='+z+'>');
}

function start2() {
  for (var x = 0; x < 12; x++) {
    var y = positions[x];
    var b =  landA[array[x]]
    var z = 'turn(array['+x+'])';
    run(y, b, z);
  }
}

function start1() {
  for (var x = 0; x < 12; x++) {
    var y = positions[x];
    var b =  catDogCard[array[x]]
    var z = 'turn(array['+x+'])';
    run(y, b, z);
  }
}

function start3(num) {
  for (var x = 0; x < 12; x++) {
    var y = positions[x];
    var b =  seaCard[array[x]]
    var z = 'turn(array['+x+'])';
    run(y, b, z);
  }
}

function question()  {
  var q = Math.floor(Math.random() * 11);
  questionCheck(q)
}
