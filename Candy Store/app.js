let product = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
let grid_prodcuts = document.getElementsByClassName("grid-prodcuts")[0];
let submit = document.getElementById("submit");

// The Container Of Cart In Page
let cartPlace = document.getElementsByClassName("cart")[0];

// The Count Of Cart
let count = document.querySelectorAll(".title")[1];

// Cart
let cart = [];
// To Show The Products
product.map((ele, i) => [
  (grid_prodcuts.innerHTML += `
     <div class="prodcuct-card">
            <!-- Start Image And Button -->
            <section class="stack-bto-img">
              <img
                class="desktop-image"
                src="${ele.image.desktop}"
                alt=""
              />
              <img
                class="mobile-image"
                src="${ele.image.mobile}"
                alt=""
              />
              <button>
                <!-- Add -->
                <div class="add">
                  <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                  <h3>Add To Cart</h3>
                </div>
                
                <!-- Edit -->
                <div class="edit hide">
                  <img
                  class="minus"
                    src="./assets/images/icon-decrement-quantity.svg"
                    alt=""
                  />
                  <h3 class="co">1</h3>
                  <img
                  class="increment"
                    src="./assets/images/icon-increment-quantity.svg"
                    alt=""
                  />
                </div>
              </button>

            </section>
            <!-- Start Image And Button -->

            <!-- Start Product Inforamtion -->
            <section class="product-inforamtion">

              <h3 class="category">${ele.category}</h3>
              <h2 class="name">${ele.name}</h2>
              <h2 class="price">$${ele.price}</h2>
              
            </section>
            <!-- End Product Inforamtion -->
          </div>
    `),
]);

// The Product Card In The Page
let products = document.querySelectorAll(".prodcuct-card");

// Add Button
let addButton = document.querySelectorAll(".add");
addButton.forEach((ele) => {
  ele.onclick = () => {
    ele.nextElementSibling.classList.toggle("hide");
    ele.classList.toggle("hide");
  };
});
// Edit Button
let add = document.querySelectorAll(".increment");
add.forEach((ele, i) => {
  // Check If The Product Is There
  ele.onclick = () => {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].id === i) {
        cart[index].count += 1;

        let co = document.querySelectorAll(".co");
        co[i].innerHTML = cart[index].count;

        UpdateCart();

        break;
      }
    }
  };
});

// Delete Count from cart
let minus = document.querySelectorAll(".minus");

minus.forEach((ele, i) => {
  ele.onclick = () => {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].id === i) {
        if (cart[index].count !== 0) {
          cart[index].count -= 1;
        } else {
          addButton.forEach((ele) => {
            ele.onclick = () => {
              ele.nextElementSibling.classList.toggle("hide");
              ele.classList.toggle("hide");
            };
          });
        }
        let co = document.querySelectorAll(".co");
        co[i].innerHTML = cart[index].count;
        UpdateCart();
        break;
      }
    }
  };
});

// Add Product To Cart
products.forEach((ele, i) => {
  let isThere = false; // nov or yes

  // Check If The Product Is There
  ele.onclick = () => {
    for (let index = 0; index < cart.length; index++) {
      if (cart[index].id === i) {
        isThere = true;
        break;
      }
    }

    // If The Product Is Not There Will Add It To Cart
    if (isThere === false) {
      cart.unshift({
        name: product[i].name,
        category: product[i].category,
        id: i,
        image: product[i].image.thumbnail,
        count: 1,
        price: product[i].price,
      });
    }

    // Updata The Page [Cart And Count]!
    UpdateCart();
  };
});

// Show The Content Of Cart

submit.onclick = () => {
  let parent = submit.parentElement.parentElement;
  parent.remove();
};

// Updata The Cart

function UpdateCart() {
  // Updata The Count
  let c = 0;
  cart.map((ele) => {
    c += ele.count;
  });
  count.innerHTML = `Your Cart (${c})`;

  // Update The Cart Content
  cartPlace.innerHTML = "";
  cart.map((ele) => {
    cartPlace.innerHTML += `
      <div class="item">
      <div>
      <h3>${ele.category}</h3>
      <h3><span>${ele.count}x</span> @ <span>$${ele.price}</span> <span>$${
      ele.price * ele.count
    }</span></h3>
      </div>
      <img
      class="remove-icon"
      src="./assets/images/icon-remove-item.svg"
      alt=""
      />
      </div>
      `;
  });

  // Updata Total
  let total = document.getElementById("order-total");
  let t = 0;
  cart.map((ele) => {
    t += ele.price * ele.count;
  });
  total.innerHTML = `$${t}`;
}
