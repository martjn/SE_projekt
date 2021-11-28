var modalOrder = document.getElementById("ordering");
var buttonOrder = document.getElementById("order-now-button");
var spanOrder = document.getElementById("close-order");
var spanSuccess = document.getElementById("close-success");
var orderFinish = document.getElementById("order-complete")
var modelOrderSuccess = document.getElementById("order-success")
var ticketObj = document.getElementById("ticket")
var timeOfArrival = document.getElementById("time-of-arrival")

buttonOrder.onclick = function() {
    modalOrder.style.display = "block";
}

spanOrder.onclick = function() {
    modalOrder.style.display = "none";
}

spanSuccess.onclick = function() {
    modelOrderSuccess.style.display = "none";
}

window.onclick = function(event) {
    console.log(event.target)
  if (event.target == modalOrder) {
    modalOrder.style.display = "none";
  }
  else if (event.target == modelOrderSuccess) {
    modelOrderSuccess.style.display = "none";
  }
} 



orderFinish.onclick = function() {
    modalOrder.style.display = "none";
    modelOrderSuccess.style.display = "block"
    const pizzaTimeMinutes = getRandomInt(5) * 10 + 30;
    const arrivalTime = addMinutes(new Date(), pizzaTimeMinutes).toLocaleTimeString("et");
    timeOfArrival.innerHTML = arrivalTime;
    const ticketId = [0, 0, 0, 0, 0, 0].map(_ => {
        return getRandomInt(9);
    }).join("");
    console.log
    ticketObj.innerHTML = ticketId;

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}