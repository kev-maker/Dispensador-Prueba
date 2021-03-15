// Get Products Buttons
const BuyToProduct = document.querySelectorAll(".BuyToProduct");
BuyToProduct.forEach((BuyProduct) => {
  BuyProduct.addEventListener("click", BuyProductClick);
});

const ItemProduct = document.querySelector(".YourOrder");

function BuyProductClick(event) {
  const button = event.target;
  const productSelected = button.closest(".productSelected");
// Get Image Product
  const imageProduct = productSelected.querySelector(".imageProduct").src;

  AddProduct(imageProduct);
}
//Creating Section Your Order
function AddProduct(imageProduct) {
  const YourOrder = document.createElement("div");
  const SeeYourOrder = `
  <div class="YourOrder">
        <img src=${imageProduct}>
    </div>
`;
//Showing Your Orders
  YourOrder.innerHTML = SeeYourOrder;
  ItemProduct.append(YourOrder);
}
