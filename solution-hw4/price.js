const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

const headerElement = document.querySelector('#roll-header');
headerElement.innerText = rollType + " Cinnamon Roll"

const rollImage = document.querySelector('.productdetail-img');
rollImage.src = "../assets/products/" + rolls[rollType]["imageFile"];

const basePrice = rolls[rollType]["basePrice"];
document.querySelector(".footer-price").innerText = "$ " + basePrice;

//Price updates (HW3)
let glazingOptions = [
  {
    type: 'Keep original',
    price: 0.00
  },
  {
    type: 'Sugar milk',
    price: 0.00
  },
  {
    type: 'Vanilla milk',
    price: 0.50
  },
  {
    type: 'Double chocolate',
    price: 1.50
  }
];

let packSizeOptions = [
  {
    size: 1,
    multiplier: 1
  },
  {
    size: 3,
    multiplier: 3
  },
  {
    size: 6,
    multiplier: 5
  },
  {
    size: 12,
    multiplier: 10
  }
];

function populateOptions() {
  const glazingSelect = document.querySelector ("#glazing");
  const packSizeSelect = document.querySelector ("#packsize");

  for (let i = 0; i < glazingOptions.length; i++) {
    const option = document.createElement('option');
    option.text = glazingOptions[i].type;
    option.value = glazingOptions[i].price;
    glazingSelect.add(option);
  }

  for (let i = 0; i < packSizeOptions.length; i++) {
    const option = document.createElement('option');
    option.text = packSizeOptions[i].size;
    option.value = packSizeOptions[i].multiplier;
    packSizeSelect.add(option);
  }
}

function glazingChange(element) {
  const priceChange = +element.value;
  updatePrice(priceChange, +document.querySelector("#packsize").value);
}

function packSizeChange(element) {
  const sizeChange = +element.value;
  updatePrice(+document.querySelector("#glazing").value, sizeChange);
}

function updatePrice(glazingPrice, packPrice) {
  const finalPrice = (basePrice + glazingPrice) * packPrice;
  document.querySelector(".footer-price").innerText = 
      "$ " + finalPrice.toFixed(2);
}

populateOptions();


//Add to cart
const cart = [];

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

const btnAddToCart = document.querySelector("#add-to-cart");
btnAddToCart.onclick = function() {
  selectGlazing = document.querySelector("#glazing");
  selectPack = document.querySelector("#packsize");
  currentGlazing = selectGlazing.options[selectGlazing.selectedIndex].text;
  currentPack = selectPack.options[selectPack.selectedIndex].text;
  
  roll = new Roll(rollType, currentGlazing, currentPack, basePrice);
  cart.push(roll);
  console.log(cart);
}