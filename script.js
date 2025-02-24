// put the date in the topnav

// get the element
let dateElement = document.getElementById('date');

// put the date in the element
dateElement.innerHTML = Date();

// hide the date
dateElement.hidden = true;

// Report it to the console
console.log('The date has been put into p#date but was hidden. To show, click the button');

// function to show the date
function showDate() {
    dateElement.hidden = false;
    let button = document.getElementById('showDateButton');
    button.hidden = true;
}
