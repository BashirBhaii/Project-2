
let cartCount = 0;

function addToCart(){

cartCount++;

document.getElementById("cart-count").innerText = cartCount;

alert("Item Added To Cart 🛒");

}


// SEARCH FEATURE

let search = document.getElementById("search");

search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let name = card.getAttribute("data-name");

if(name.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

})

})