function leaveTestimonial() {
  let name = prompt("What's your name?");
  let nameCapitalized = name[0].toUpperCase() + name.slice(1).toLowerCase();

  if (name.length < 2) {
    alert("That's a very short name... Try again!");
  } else {
    let testimonial = prompt("How was your stay with Tere?");
    if (testimonial.length < 3) {
      alert("Please elaborate!");
    } else {
      let thankYouLine = document.querySelector(".testimonial-invitation");
      thankYouLine.innerHTML = `Thank you, ${nameCapitalized}! Your testimonial will be online soon! 😻`;
    }
  }
}

let button = document.querySelector("button");
button.addEventListener("click", leaveTestimonial);
