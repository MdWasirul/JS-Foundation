document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ];

  let cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");
  // const removeBtn = document.getElementById("remove");

  products.forEach((product) => {
    //create a div element to append to product list.
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>`;

    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    // removeBtn.classList.remove("hidden");
    // console.log(e.target.tagName);
    if (e.target.tagName === "BUTTON") {
      // console.log("clicked");
      //  console.log(typeof e.target.getAttribute("data-id")); //  1. string
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      console.log(product);
      addtoCart(product);
    }
  });

  function addtoCart(product) {
    cart.push(product);
    console.log(cart);
    renderCart();
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");

      cart.forEach((item, index) => {
        totalPrice = item.price + totalPrice;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
       ${item.name} - $${item.price.toFixed(2)}
       `;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove");
        removeBtn.setAttribute("data-id", item.id);
        removeBtn.textContent = "REMOVE";
        cartItem.appendChild(removeBtn);
        cartItems.appendChild(cartItem);
        // console.log(cartItems);
        totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;

        removeBtn.addEventListener("click", (e) => removeCartItem(e));
      });
    } else {
      emptyCartMessage.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  //Remove Cart Item Button Function
  const removeCartItem = (e) => {
    console.log("button clicked");
    const productId = parseInt(e.target.getAttribute("data-id"));

    let indx = cart.findIndex((item) => item.id === productId);
    console.log(indx);
    if (indx != -1) {
      cart.splice(indx, 1); //splice take index ,delcount
    }
    console.log(cart);
    renderCart();

    // cart = cart.filter((item) => item.id != productId); //wirte alternate method to remove array element
    //   cart=cart.find((item) => item.id===productId);
    //  console.log(typeof cart);
    // removeBtn.remove();
    // // cartItem.innerText = "";
    // totalPrice = totalPrice - item.price;
    // totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
  };

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout Successfully");
    renderCart();
  });

  // assignment ---> To add remove Button
  // removeBtn.addEventListener("click", () => {
  //   console.log("removeBtn clicled");
  //   if (cart.length > 0) {
  //     let removeItem = cart.pop();
  //     // console.log(
  //     //   `RemovedItem:${removeItem.name}- Price:${removeItem.price.toFixed(2)}`
  //     // );
  //     let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  //     totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
  //   }
  //   if (cart.length == 0){
  //     console.log("Cart is empty");
  //     removeBtn.classList.add("hidden");

  //     totalPriceDisplay.textContent = `$0.00`; // Display zero if the cart is empty
  //   }
  //   renderCart();
  // });
});
