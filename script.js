```javascript
let selectedTourName = "";


/* ================= OPEN BOOKING ================= */

function openBooking(tourName) {

    selectedTourName = tourName;

    const tourElement = document.getElementById("selectedTour");
    const modal = document.getElementById("bookingModal");

    tourElement.textContent = tourName;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}


/* ================= CLOSE BOOKING ================= */

function closeBooking() {

    const modal = document.getElementById("bookingModal");

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}


/* ================= SEND BOOKING ================= */

document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const date =
        document.getElementById("bookingDate").value;

    const guests =
        document.getElementById("guests").value;

    const pickup =
        document.getElementById("pickup").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const whatsappMessage =
        "Hello Teti Tour 👋\n\n" +
        "I would like to make a booking.\n\n" +
        "Tour: " + selectedTourName + "\n" +
        "Name: " + name + "\n" +
        "WhatsApp: " + phone + "\n" +
        "Date: " + date + "\n" +
        "Guests: " + guests + "\n" +
        "Pickup: " + pickup + "\n" +
        "Additional Message: " + message;


    const whatsappNumber = "201117360020";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    /*
       الرقم الأساسي:
       00201117360020

       صيغة wa.me الصحيحة:
       201117360020
    */


    window.location.href = whatsappURL;

});


/* ================= CLOSE BY CLICKING OUTSIDE ================= */

document.getElementById("bookingModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeBooking();
    }

});
```
