let products = {
  data: [
    {
      productName: "Goblin",
      category: "Vermelho",
      price: "20",
      image: "images/brian-mcgowan-SFfkzMb24d8-unsplash.jpg",
      date: '01/09/2022',
    },
    {
      productName: "Elfa",
      category: "Verde",
      price: "25",
      image: "images/cassiano-k-wehr-vZXiXnWRcPc-unsplash.jpg",
      date: '01/09/2022',
    },
    {
      productName: "Capturar mente",
      category: "Preto",
      price: "100",
      image: "images/robina-weermeijer-IHfOpAzzjHM-unsplash.jpg",
      date: '01/09/2022',
    },
    {
      productName: "Visualizar",
      category: "Azul",
      price: "10",
      image: "images/paul-skorupskas-7KLa-xLbSXA-unsplash.jpg",
      date: '01/09/2022',
    },
    {
      productName: "Exilar",
      category: "Branco",
      price: "50",
      image: "images/alevision-co-DtS7f_mgZqo-unsplash.jpg",
      date: '01/09/2022',
    },
  ],
};
for (let i of products.data) {

  let card = document.createElement("div");

  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "R$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);

  let date = document.createElement('h6');
  date.innerText = i.date;
  container.appendChild(date);
}

function filterProduct(value) {

  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {

    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");

  elements.forEach((element) => {

    if (value == "all") {
      element.classList.remove("hide");
    } else {

      if (element.classList.contains(value)) {

        element.classList.remove("hide");
      } else {

        element.classList.add("hide");
      }
    }
  });
}
document.getElementById("search").addEventListener("click", () => {

  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {

    if (element.innerText.includes(searchInput.toUpperCase())) {

      cards[index].classList.remove("hide");
    } else {

      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};