const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Running Shoes",
    price:749,
    colors: [
      {
        code: "green",
        img: "running1.png",
      },
      {
        code: "darkblue",
        img: "running2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Walking Shoes",
    price: 899,
    colors: [
      {
        code: "skyblue",
        img: "walking3.png",
      },
      {
        code: "brown",
        img: "walking4.png",
      },
    ],
  },
  {
    id: 3,
    title: "Casual Shoes",
    price: 1199,
    colors: [
      {
        code: "lightblue",
        img: "casual2.jpg",
      },
      {
        code: "black",
        img: "casual3.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Sports Shoes",
    price: 1499,
    colors: [
      {
        code: "lightblue",
        img: "sports1.png",
      },
      {
        code: "brown",
        img: "sports2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Sneakers",
    price: 1249,
    colors: [
      {
        code: "green",
        img: "sneaker2.jpg",
      },
      {
        code: "blue",
        img: "sneaker3.jpg",
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
    currentProductPrice.textContent = "₹" + choosenProduct.price;
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