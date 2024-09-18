const basePrice = 2.49;

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
  document.querySelector(".footer-price").innerText = "$ " + finalPrice.toFixed(2);
}

populateOptions();
