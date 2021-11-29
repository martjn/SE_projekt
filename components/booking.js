var spanSuccess = document.getElementById("close-success");
var modelBookingSuccess = document.getElementById("booking-success");
var timeOfArrivalBooking = document.getElementById("time-of-arrival");


window.onclick = function(event) {
    if (event.target == modelBookingSuccess) {
        modelBookingSuccess.style.display = "none";
    }
}

spanSuccess.onclick = function() {
    modelBookingSuccess.style.display = "none";
}


class Booking extends HTMLElement {
    constructor() {
        super();

        this.validWeekdays = {
            1 : {"start": 9, "end": 21, "lang": "Esmaspäev"},
            2 : {"start": 9, "end": 21, "lang": "Teisipäev"},
            3 : {"start": 9, "end": 21, "lang": "Kolmapäev"},
            4 : {"start": 9, "end": 21, "lang": "Neljapäev"},
            5 : {"start": 9, "end": 21, "lang": "Reede"},
            6 : {"start": 9, "end": 21, "lang": "Laupäev"},
        }
        this.months = [
            "Jaanuar",
            "Veebruar",
            "Märts",
            "Aprill",
            "Mai",
            "Juuni",
            "Juuli",
            "August",
            "September",
            "Oktoober",
            "November",
            "Detsember"
        ]

        this.selectedMonth = new Date().getUTCMonth();
        this.generatedBookings = new Map();
        this.bookingTime = 2; // 2 tundi
        this.generateBookings()
    }

    checkIfCriteriaMatch(date) {
        const day = date.getDay();
        if (this.validWeekdays[day] == undefined) return false;
        const hours = date.getHours();
        if (hours < this.validWeekdays[day]["start"] || (hours + this.bookingTime) > this.validWeekdays[day]["end"]) return false;
        return true;
    }

    generateBookings() {
        var amountToGenerate = this.getAmountToGenerate();
        if (!this.generatedBookings.has(this.selectedMonth)) {
            var generatedArr = [];
            while (amountToGenerate > 0) {
                const generated = this.getRandomDayInMonth();
                if (this.checkIfCriteriaMatch(generated)) {
                    generatedArr.push(generated);
                    amountToGenerate -= 1;
                }
            } 
            generatedArr.sort();
            const textArr = generatedArr.map( (date, index) => {
                const hour = date.getHours();
                const day = date.getDay();
                const datenumb = date.getDate();
                return {
                    id: index,
                    isBooked: false,
                    text: `${datenumb}, ${this.validWeekdays[day].lang}, ${hour}:00-${hour+this.bookingTime}:00`
                }
            })
            this.generatedBookings.set(this.selectedMonth, textArr);
        }
    }

    getAmountToGenerate() {
        var date = new Date();
        if (this.selectedMonth  == new Date().getUTCMonth()) {
            var startDate = new Date();

        }
        else {
            var startDate = new Date(date.getFullYear(), this.selectedMonth, 1);
        }
        var endDate = new Date(date.getFullYear(), this.selectedMonth + 1, 0);
        const bookingsToGenerate = Math.ceil(
            (endDate.getTime() - startDate.getTime())/ (1000 * 3600 * 24 * 0.75)
        )
        return Math.min(20, bookingsToGenerate);
    }

    getRandomDayInMonth() {
        if (new Date().getUTCMonth() == this.selectedMonth) {
            const lastDayOfMonth = new Date();
            lastDayOfMonth.setMonth(lastDayOfMonth.getUTCMonth() + 1)
            lastDayOfMonth.setDate(0)
            return this.randomDateBetweenInterval(new Date(), lastDayOfMonth);
        }
        else {
            const date = new Date();
            var firstDay = new Date(date.getFullYear(), this.selectedMonth, 1);
            var lastDay = new Date(date.getFullYear(), this.selectedMonth + 1, 0);
            return this.randomDateBetweenInterval(firstDay, lastDay);
        }
    }


    randomDateBetweenInterval(start, end) {
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        randomDate.setMinutes(0);
        randomDate.setMilliseconds(0);
        randomDate.setSeconds(0);
        return randomDate;
    }


    getMonthString() {
        return this.months[this.selectedMonth]
    }


    incrementMonth(diff) {
        this.selectedMonth = (this.selectedMonth + diff) % 12;
        if (this.selectedMonth < 0) this.selectedMonth = 11
        this.generateBookings()
        this.connectedCallback();
    }

    bookDate(booking) {
        const array = this.generatedBookings.get(this.selectedMonth);
        array[booking.id].isBooked = true;
        this.connectedCallback();

        modelBookingSuccess.style.display = "block"
        const arrivalTime = booking.text;
        
        timeOfArrivalBooking.innerHTML = arrivalTime;
    }

    connectedCallback() {
        this.innerHTML = `
        <style> @import url("components/booking.css");</style>
        <div class="booking" id="Broneeri">
            <div class="booking-general-info">
                <h1>Broneerimine</h1>
                <p>Oleme avatud</p>
                <hr>
                <p>Esmaspäeviti 9:00 - 21:00</p>
                <p>Teisipäeviti 10:00 - 23:00</p>
                <p>Komapäeviti 10:00 - 23:00</p>
                <p>Neljapäeviti 10:00 - 23:00</p>
                <p>Reedeti 9:00 - 21:00</p>
                <p>Laupäeviti 11:00 - 20:00</p>
            </div>
            <div class="booking-system">
                <div class="booking-title">
                    <button class="month-button" id="previous-month">
                        &larr;
                    </button>
                    <h1 id="month">${this.getMonthString()}</h1>
                    <button class="month-button" id="next-month">
                        &rarr;
                    </button>
                </div>
                <hr>
                <div class="booking-dates">
                    ${
                        Array.from(this.generatedBookings.get(this.selectedMonth)).map(booking => {
                            if (booking.isBooked) {
                                return(` <div class="booked"><button><span>Broneeritud</span></button></div>`);
                            }
                            else {
                                return(`<div class="date" ><button id="${booking.id}"><span>${booking.text}</span></button></div>`);
                            }
                        }).join("\n")
                    }
                </div>
            </div>
        </div>
        `
        document.getElementById("previous-month").onclick = () => this.incrementMonth(-1);
        document.getElementById("next-month").onclick = () => this.incrementMonth(1)
        Array.from(this.generatedBookings.get(this.selectedMonth)).forEach(booking => {
            try {
                document.getElementById(booking.id).onclick = () => this.bookDate(booking);
                
            } catch (e) {
                //ingore if element isnt found
            }
        })
    }
}

customElements.define('booking-system', Booking)