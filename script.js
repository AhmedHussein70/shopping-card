let btn = document.querySelectorAll(".btn");
let shop = document.querySelector("#ShoppinCard");
let ahmed = document.querySelector(".ahmed");
let home = document.querySelector("#home");
let Contacts = document.querySelector("#home");
let About = document.querySelector("#home");
let Categories = document.querySelector("#home");

let shoppingCart = [];

let deploying = (btn)=>{

  btn.addEventListener("click", () => {
    alert("this Page under updtate")
  }
  
}

deploying(home)
deploying(Contacts)
deploying(About)
deploying(Categories)

function saveCardData() {
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

function updateCardUi() {
  ahmed.innerHTML = ""; // Clear the cart UI

  shoppingCart.forEach((item) => {
    let newItem = document.createElement("div");
    newItem.classList.add("product-shoppin-card");
    newItem.innerHTML = ` <img class='image-pro' src=${item.productImage} />
    <div> ${item.productName} ${item.productPrice}</div>
      <span>quantity ${item.quantity} </span>
      <button class="remove-btn" >Remove</button>
      `;
    ahmed.appendChild(newItem);
  });
  addRemoveListeners();
}
function removeItem(event) {
  const index = event.target.dataset.index;
  shoppingCart.splice(0, 1);
  updateCardUi();
  saveCardData();
}
function addRemoveListeners() {
  let removeBtn = document.querySelectorAll(".remove-btn");

  removeBtn.forEach((btn, i) => {
    btn.addEventListener("click", removeItem);
  });
}

if (localStorage.getItem("shoppingCart")) {
  shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
  updateCardUi();
}

btn.forEach((element, index) => {
  element.addEventListener("click", () => {
    let productImage = element.parentElement.firstElementChild.src;
    let productName = element.parentElement.querySelector("h2").innerHTML;
    let productPrice = element.parentElement.querySelector("h3").innerHTML;
    let existingItem = shoppingCart.find(
      (item) => item.productPrice === productPrice
    );
    if (existingItem) {
      // If the item already exists, increase its quantity
      existingItem.quantity++;
    } else {
      // If the item doesn't exist, add it to the shoppingCart array
      shoppingCart.push({
        productImage: productImage,
        productName: productName,
        productPrice: productPrice,
        quantity: 1,
      });
    }
    console.log(shoppingCart);
    updateCardUi();

    saveCardData();
  });
});

shop.addEventListener("click", () => {
  ahmed.classList.toggle("ttt");
});

