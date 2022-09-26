// Contenedor de productos
const products = document.querySelector(".product");
// El contenedor de las categorias
const categories = document.querySelector(".categories");
//Un htmlcollection de Botones de todas las categorias
const categoriesList = document.querySelectorAll(".category");
// Boton de ver mas
const btnLoad = document.querySelector(".product__btn");

// Renderizado de productos
// Funcion para renderizar html
const renderProduct = (product) => {
  const { id, name, price, productImg } = product;
  return `<div class="product">
    <div><img class="product__img" src= ${productImg} alt=${name} /> </div>
          <h3 class="product__title">${name}</h3>
        <div> <p>$<span class="product__price">${price}</span></p> </div>    
        <a href="" data-id=${id} class="btn-add-cart">Comprar</a>
       </div>`;
};

// Funcion para renderizar todos los productos. Recibe una categoria y un index.
// Si la categoria es todas va a renderizar todos los productos que esten en el array de arrays de 6 elementos, en el contendor de productos.
// En caso de que se reciba otra categoria, vamos a crear una constante donde vamos a guardar el filter por categoria que le pasemos. El filter se lo hacemos directamente al array de productos (El que tiene todos los productos) y despues renderizamos en el contenedor de productos
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

// Funcion que renderiza los productos al apretar alguno de los botones de filtro.
// Primero, si lo que clickeamos dentro del contenedor de categorias no contiene la clase category, retornamos sin hacer nada.
// Despues cambiamos el filtro activo en el html con la funcion que creamos arriba (changeFilterState)
// Si tiene la clase category y el dataset.category es igual a todas, vaciamos el innerHTML del contenedor y renderizamos los productos pasandole todas como categoria y un 0 como index para que agarre el primer array
// Si la categoria no es todas, renderizamos segun el e.target.dataset.category (Basicamente la categoria clickeada)
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

// Funcion para mostrar mas

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
