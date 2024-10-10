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

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

let totalPrice = 0;

//Calculate the final price
function calculatePrice(basePrice, glazingPrice, packPrice) {
  const finalPrice = (basePrice + glazingPrice) * packPrice;
  return finalPrice;
}

//create a new cart item
function createElement(item, index) {
  const template = document.querySelector('#item-template');
  const clone = template.content.cloneNode(true);
  item.element = clone.querySelector('.one-cart-item');
  
  const btnDelete = item.element.querySelector('.remove');
  btnDelete.setAttribute('data-idx', index);
  btnDelete.addEventListener('click', () => {
      deleteItem(item, index);
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

//Function to remove items from the cart
function deleteItem(item, index) {
  const calculatedPrice = calculatePrice(item.basePrice, 
                                         glazingOptions[item.glazing], 
                                         packSizeOptions[item.size]);
  totalPrice -= calculatedPrice;
  totalPrice = Math.abs(totalPrice); //prevent negative zeros

  // remove the item DOM object from the UI
  item.element.remove();
  // remove the actual item object from the cart set
  cart.splice(index, 1);

  saveToLocalStorage();
  updateTotalPrice();
}

//Function to save the current cart items into the local storage
function saveToLocalStorage() {
  const cartArray = Array.from(cart);
  const cartArrayString = JSON.stringify(cartArray);

  localStorage.setItem('storedItem', cartArrayString);

  console.log(JSON.parse(localStorage.getItem('storedItem')));
}

//Function to retrieve the cart from the local storage
function retrieveFromLocalStorage() {
  const cartArrayString = localStorage.getItem('storedItem');
  const cartArray = JSON.parse(cartArrayString);
  index = 0;
  for (const itemData of cartArray) {
    const item = new Roll(itemData.type, itemData.glazing,
      itemData.size, itemData.basePrice);
    createElement(item, index);
    index ++;
  }
}

if (localStorage.getItem('storedItem') != null) {
  retrieveFromLocalStorage();
}