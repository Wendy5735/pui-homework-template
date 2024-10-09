//try to retrieve the cart from the local storage
let cart = JSON.parse(localStorage.getItem('storedItem')) || [];

const glazingOptions = {
    'Keep original': 0.00,
    'Sugar milk': 0.00,
    'Vanilla milk': 0.50,
    'Double chocolate': 1.50
};

const packSizeOptions = {
    "1": 1,
    "3": 3,
    "6": 5,
    "12": 10
};

//Populate the options of the drop-down fields
function populateOptions() {
  const glazingSelect = document.querySelector ("#glazing");
  const packSizeSelect = document.querySelector ("#packsize");

  for (let oneOption in glazingOptions) {
    const option = document.createElement('option');
    option.text = oneOption;
    option.value = glazingOptions[oneOption];
    glazingSelect.add(option);
  }

  for (let oneOption in packSizeOptions) {
    const option = document.createElement('option');
    option.text = oneOption;
    option.value = packSizeOptions[oneOption];
    packSizeSelect.add(option);
  }
}

populateOptions();

//Change the price when user changes the glazing option
function glazingChange(element) {
  const priceChange = +element.value;
  updatePrice(priceChange, +document.querySelector("#packsize").value);
}

//Change the price when users changes the packsize option
function packSizeChange(element) {
  const sizeChange = +element.value;
  updatePrice(+document.querySelector("#glazing").value, sizeChange);
}

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

//Change product detail page details based on URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

const headerElement = document.querySelector('#roll-header');
headerElement.innerText = rollType + " Cinnamon Roll"

const rollImage = document.querySelector('.productdetail-img');
rollImage.src = "../assets/products/" + rolls[rollType]["imageFile"];

const basePrice = rolls[rollType]["basePrice"];
document.querySelector(".footer-price").innerText = "$ " + basePrice;


//Calculate the final price
function calculatePrice(basePrice, glazingPrice, packPrice) {
  const finalPrice = (basePrice + glazingPrice) * packPrice;
  return finalPrice;
}

//Update the final price
function updatePrice(glazingPrice, packPrice) {
  const basePrice = rolls[rollType]["basePrice"];
  const finalPrice = calculatePrice(basePrice, glazingPrice, packPrice);
  document.querySelector(".footer-price").innerText = 
      "$ " + finalPrice.toFixed(2);
}

//save the current cart items into the local storage
function saveToLocalStorage() {
  const cartArray = Array.from(cart);
  const cartArrayString = JSON.stringify(cartArray);

  localStorage.setItem('storedItem', cartArrayString);
  console.log(JSON.parse(localStorage.getItem('storedItem')));

}

const btnAddToCart = document.querySelector("#add-to-cart");
//add an item to the cart
btnAddToCart.onclick = function() {
  selectGlazing = document.querySelector("#glazing");
  selectPack = document.querySelector("#packsize");
  currentGlazing = selectGlazing.options[selectGlazing.selectedIndex].text;
  currentPack = selectPack.options[selectPack.selectedIndex].text;
  
  roll = new Roll(rollType, currentGlazing, currentPack, basePrice);
  cart.push(roll);
  saveToLocalStorage();
}
