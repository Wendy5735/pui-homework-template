//Price updates (HW3)
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

//Calculate the final price
function calculatePrice(basePrice, glazingPrice, packPrice) {
  const finalPrice = (basePrice + glazingPrice) * packPrice;
  return finalPrice;
}

//JS only for product detail page
if (window.location.pathname.includes('/product-detail.html')) {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const rollType = params.get("roll");

  const headerElement = document.querySelector('#roll-header');
  headerElement.innerText = rollType + " Cinnamon Roll"

  const rollImage = document.querySelector('.productdetail-img');
  rollImage.src = "../assets/products/" + rolls[rollType]["imageFile"];

  const basePrice = rolls[rollType]["basePrice"];
  document.querySelector(".footer-price").innerText = "$ " + basePrice;


  //Update the final price
  function updatePrice(glazingPrice, packPrice) {
    const basePrice = rolls[rollType]["basePrice"];
    const finalPrice = calculatePrice(basePrice, glazingPrice, packPrice);
    document.querySelector(".footer-price").innerText = 
        "$ " + finalPrice.toFixed(2);
  }

  populateOptions();

  const btnAddToCart = document.querySelector("#add-to-cart");
  //save all of the current product information
  btnAddToCart.onclick = function() {
    selectGlazing = document.querySelector("#glazing");
    selectPack = document.querySelector("#packsize");
    currentGlazing = selectGlazing.options[selectGlazing.selectedIndex].text;
    currentPack = selectPack.options[selectPack.selectedIndex].text;
    
    roll = new Roll(rollType, currentGlazing, currentPack, basePrice);
    cart.add(roll);
    console.log(cart);
  }
}


const cart = new Set();

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

//HW5
let totalPrice = 0;

//Add new roll to the shopping cart
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
  const roll = new Roll(rollType, rollGlazing, packSize, basePrice);
  cart.add(roll);

  return roll;
}

//create a new cart item
function createElement(item) {
  const template = document.querySelector('#item-template');
  const clone = template.content.cloneNode(true);
  item.element = clone.querySelector('.one-cart-item');
  
  const btnDelete = item.element.querySelector('.remove');
  btnDelete.addEventListener('click', () => {
      deleteItem(item);
  });

  const cartListElement = document.querySelector('.cartList');
  cartListElement.append(item.element);
  updateElement(item);
}

//Display the cart items to the shopping cart page
function updateElement(item) {
  const rollIMG = item.element.querySelector('.cart-img');
  const rollName = item.element.querySelector('.cartItem-name');
  const rollGlazing = item.element.querySelector('.cartItem-glazing');
  const rollPacksize = item.element.querySelector('.cartItem-packsize');
  const rollPrice = item.element.querySelector('.cartItem-price');
  
  const calculatedPrice = calculatePrice(item.basePrice, 
                                         glazingOptions[item.glazing], 
                                         packSizeOptions[item.size]);
  totalPrice += calculatedPrice //Add the item's price to the total price

  rollIMG.src = "../assets/products/" + rolls[item.type]["imageFile"];
  rollName.innerText = item.type;
  rollGlazing.innerText = item.glazing;
  rollPacksize.innerText = item.size;
  rollPrice.innerText = "$ " + calculatedPrice.toFixed(2);

  updateTotalPrice();
}

//Function to update the total price in the cart display
function updateTotalPrice() {
  const total = document.querySelector('.total-price');
  total.innerText = "$ " + totalPrice.toFixed(2);
}

function deleteItem(item) {
  const calculatedPrice = calculatePrice(item.basePrice, 
    glazingOptions[item.glazing], 
    packSizeOptions[item.size]);
  totalPrice -= calculatedPrice;
  totalPrice = Math.abs(totalPrice); //prevent negative zeros

  // remove the item DOM object from the UI
  item.element.remove();
  // remove the actual item object from the cart set
  cart.delete(item);

  updateTotalPrice();
}

const rollOne = addNewRoll("Original", "Sugar milk", "1", 2.49);

const rollTwo = addNewRoll("Walnut", "Vanilla milk", "12", 3.49);

const rollThree = addNewRoll("Raisin", "Sugar milk", "3", 2.99);

const rollFour = addNewRoll("Apple", "Keep original", "3", 3.49);

//create the pre-written four items in shopping cart
if (window.location.pathname.includes('/cart.html')) {
  for (const item of cart) {
    console.log(item);
    createElement(item);
  }
}
