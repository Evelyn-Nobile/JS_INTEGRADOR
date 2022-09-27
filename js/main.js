const products = document.querySelector(".product");

const categories = document.querySelector(".categories");

const categoriesList = document.querySelectorAll(".category");

const btnLoad = document.querySelector(".product__btn");

const renderProduct = (product) => {
  const { id, name, price, productImg } = product;
  return `<div class="product">
    <div><img class="product__img" src= ${productImg} alt=${name} /> </div>
          <h3 class="product__title">${name}</h3>
        <div> <p>$<span class="product__price">${price}</span></p> </div>    
        <a href="" data-id=${id} class="btn-add-cart">Comprar</a>
       </div>`;
};

const renderProducts = (category, index) => {
  if (category === "todas") {
    products.innerHTML += allProducts.productList[index]
      .map(renderProduct)
      .join("");
    return;
  }
  const productList = productsData.filter((p) => p.category === category);
  products.innerHTML = productList.map(renderProduct).join("");
};

const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  const categories = [...categoriesList];
  categories.forEach((category) => {
    if (category.dataset.category !== selectedCategory) {
      category.classList.remove("active");
    } else {
      category.classList.add("active");
    }
  });
  if (selectedCategory !== "todas") {
    btnLoad.classList.add("hidden");
  } else {
    btnLoad.classList.remove("hidden");
  }
};

const filterProducts = (e) => {
  if (!e.target.classList.contains("category")) return;
  changeFilterState(e);
  if (e.target.dataset.category.toLowerCase() === "todas") {
    products.innerHTML = "";
    renderProducts("todas", 0);
  } else {
    renderProducts(e.target.dataset.category);
  }
};

const showMore = () => {
  renderProducts("todas", allProducts.next);
  allProducts.next++;
  if (allProducts.next === allProducts.limit) {
    btnLoad.classList.add("hidden");
  }
};

const init = () => {
  document.addEventListener("DOMContentLoaded", renderProducts("todas", 0));
  categories.addEventListener("click", filterProducts);
  btnLoad.addEventListener("click", showMore);
};

init();
