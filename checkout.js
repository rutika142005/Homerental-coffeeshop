let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const orderList = document.getElementById("orderList");
const totalPrice = document.getElementById("totalPrice");

let total = 0;

if (cartItems.length === 0) {

    orderList.innerHTML = "<p>Your cart is empty.</p>";

} else {

    cartItems.forEach((item, index) => {

        orderList.innerHTML += `
            <div class="order-item">
                <h3>${index + 1}. ${item.name}</h3>
                <p>${item.price}</p>
            </div>
        `;

        total += Number(item.price.replace("₹", ""));

    });

}

totalPrice.textContent = "Total: ₹" + total;

document.getElementById("checkoutForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("🎉 Thank you! Your order has been placed.");

    localStorage.removeItem("cartItems");

    localStorage.removeItem("cartCount");

    window.location.href = "index.html";

});