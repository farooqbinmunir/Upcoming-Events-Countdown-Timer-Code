// Replace this with your event information
var eventDate = new Date("2101-12-31T00:00:00").getTime();
// Get the current date and time
var now = new Date().getTime();

// Calculate the time remaining until the event
var timeRemaining = eventDate - now;

// Update the countdown timer every second
var countdownInterval = setInterval(function () {
    // Calculate the days, hours, minutes, and seconds remaining
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);



    // Display the countdown in the HTML elements
    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";

    // Update the time remaining
    timeRemaining -= 1000;

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "The event has already occurred!";
    }
}, 1000);