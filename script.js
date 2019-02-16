var greatSpeeches = [
  {
    authorName: "Demosthenes",
    speechYear: "342",
    yearBce: "yes",
    historicalSpeech: "yes",
  },
  {
    authorName: "Churchill",
    speechYear: "1940",
    yearBce: "no",
    historicalSpeech: "yes",
  },
  {
    authorName: "Ghandi",
    speechYear: "1942",
    yearBce: "no",
    historicalSpeech: "yes",
  }
]

var yearDifference = (greatSpeeches[2].speechYear - greatSpeeches[1].speechYear);

var totalSpeeches = (greatSpeeches.length);

var demosthenesBce = (greatSpeeches[0].yearBce === greatSpeeches[0].historicalSpeech);

var churchillBce = (greatSpeeches[1].yearBce === greatSpeeches[1].historicalSpeech);

var ghandiBce = (greatSpeeches[2].yearBce === greatSpeeches[2].historicalSpeech);

console.log("Ghandi's speech and Churchill's speech are" + " " + yearDifference + " " + "years apart.");

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are" + " " + totalSpeeches + " " + "speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by" + " " + greatSpeeches[1].authorName + " " + "in" + " " + greatSpeeches[1].speechYear + "." + " " + "It is" + " " + churchillBce + " " + "that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log("This speech was written by" + " " + greatSpeeches[2].authorName + " " + "in" + " " + greatSpeeches[2].speechYear + "." + " " + "It is" + " " + ghandiBce + " " + "that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log("This speech was written by" + " " + greatSpeeches[0].authorName + " " + "in" + " " + greatSpeeches[0].speechYear + "." + " " + "It is" + " " + demosthenesBce + " " + "that this year is B.C.E.");
});