//business logic

function Ticket(movie, showtime, age) {
  this.movie = movie;
  this.showtime = showtime;
  this.age = age;
}

Ticket.prototype.calculatePrice = function() {
  let basePrice = 10;
  if (this.movie === "movie") {
    basePrice  += 5;
  }
  if (this.movie === "showtime") {
    basePrice -= 3;
  }
  if (this.movie === "age") {
    basePrice -= 1;
  }
  return basePrice
};

