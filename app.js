const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Jordan",
    price: "Rs.10,795.00",
    colors: [
      {
        code: "black",
        img: "Final.ecom/JORDAN.BLACK.png",
      },
      {
        code: "white",
        img: "Final.ecom/JORDAN.WHITE.png",
      },
      {
        code: "white",
        img: "Final.ecom/JORDAN.WHITE.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Force",
    price: "Rs.8,195.00",
    description:"hii",
  
    colors: [
      {
        code: "white",
        img: "Final.ecom/AIRFORCE.WHITE.png",
      },
      {
        code: "black",
        img: "Final.ecom/AIRFORCE.BLACK.png",
      },
    ],
  },
  {
    id: 3,
    title: "Cortez",
    price: "Rs.7,495.00",
    description: "hiii",
    colors: [
      {
        code: "white",
        img: "Final.ecom/CORTEZ.WHITE.png",
      },
      {
        code: "black",
        img: "Final.ecom/CORTEZ.BLACK.png",
      },
    ],
  },
  {
    id: 4,
    title: "Dunks",
    price: "Rs.8,295.00",
    colors: [
      {
        code: "blue",
        img: "Final.ecom/NIKE.DUNKS.BLUE.png",
      },
      {
        code: "red",
        img: "Final.ecom/NIKE.DUNKS.RED1.png",
      },
      {
        code: "green",
        img: "Final.ecom/NIKE.DUNKS.GREEN.png",
      },
    ],
  },
  {
    id: 5,
    title: "Air max",
    price: "Rs.13,995.00",
    colors: [
      {
        code: "black",
        img: "Final.ecom/NIKEAIRMAX.BLACK.png",
      },
      {
        code: "lightgray",
        img: "Final.ecom/NIKEAIRMAX.GRAY.png",
      },
      {
        code: "gray",
        img: "Final.ecom/NIKEAIRMAX.WHITE.png",
      },
    ],
  },
  {
    id: 6,
    title: "Pegasus",
    price: "Rs.11,895.00",
    colors: [
      {
        code: "white",
        img: "Final.ecom/PEGASUS.WHITE.png",
      },
      {
        code: "gold",
        img: "Final.ecom/PEGASUS.GOLD.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
const addToCartButtons = document.querySelectorAll(".addToCartButton");
const cartCount = document.getElementById("cartCount");

let itemCount = 0; // Initialize the item count to 0

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    itemCount++; // Increment the item count
    cartCount.textContent = itemCount; // Update the cart count displayed
  });
});



