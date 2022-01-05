// let mySymbol = Symbol();

// let person = {
//     name: "John",
//     age: 34,
//     partTime: false,
//     [mySymbol]: "secretInformation",
//     showInfo: function (realAge) {
//         showMessage(`${this.name} is ${realAge}`);
//     }
// };

// person.showInfo(44);

// // create new date
// let now = new Date();

// // convert it to string and display it with our showMessage
// showMessage(now.toDateString());

// const header = document.getElementById('message');

// header.style.color = "red";

// DETECTING BUTTON CLICKS
const button = document.getElementById("see-review");

button.addEventListener("click", function () {
    const review = document.getElementById("review");

    if (review.classList.contains("d-none")) {
        review.classList.remove("d-none");
        button.textContent = "CLOSE REVIEW";
    }
    else {
        review.classList.add("d-none");
        button.textContent = "SHOW REVIEW"
    }
});