var user = 'Marquis';
var Salutations = 'Hello, ';
var greeting = Salutations + user + '! Here are reviews we found for the selected item.';
var greetingEl = document.getElementById('greeting')

greetingEl.textContent = greeting;

//-----------

var price =12,
    studentDiscount =.2,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);