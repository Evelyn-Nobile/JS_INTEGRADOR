const productsData = [
  {
    id: 1,
    name: "Aceite Limpiador ACF By Dadatina",
    price: "2990",
    category: "limpieza",
    productImg:
      "assets/limpieza/-aceite1-dd36166c555e3d797016348408330441-640-0.jpg",
  },
  {
    id: 2,
    name: "Gel de Limpieza ACF By Dadatina",
    price: "2290",
    category: "limpieza",
    productImg:
      "assets/limpieza/dada-gel1-900c8553411fbce54116438217615816-320-0.jpg",
  },
  {
    id: 3,
    name: "Eco Pads x2 ACF By Dadatina",
    price: "1190",
    category: "limpieza",
    productImg:
      "assets/limpieza/pads_limpieza_render_051-bbde5ca1aafd4f4a5016505530234166-640-0.png",
  },

  {
    id: 4,
    name: "Gel Contorno de Ojos Biobellus",
    price: "1188",
    category: "contorno-de-ojos",
    productImg:
      "assets/contorno/img_07031-1304aaa39b718ae11215438454643121-640-0.jpg",
  },
  {
    id: 5,
    name: "Crema Hidratante Contorno de Ojos Dermaglós",
    price: "1350",
    category: "contorno-de-ojos",
    productImg: "assets/contorno/dermaglos.jpg",
  },
  {
    id: 6,
    name: "Serum Hialurónico Biobellus",
    price: "1665",
    category: "serum",
    productImg: "assets/serum/hialuronico.jpg",
  },
  {
    id: 7,
    name: "Serum Iluminador Biobellus",
    price: "1665",
    category: "serum",
    productImg: "assets/serum/iluminador.jpg",
  },
  {
    id: 8,
    name: "Serum Niacinamida Biobellus",
    price: "1665",
    category: "serum",
    productImg: "assets/serum/niacinamida.jpg",
  },
  {
    id: 9,
    name: "Tónico Hidro-Nutritivo con atomizador Biobellus",
    price: "755",
    category: "tonicos",
    productImg:
      "assets/tonico/biobellustomico1-14567e36f0a31f034416351935028794-480-0.png",
  },
  {
    id: 10,
    name: "Tónico Exfoliante ACF By Dadatina",
    price: "2990",
    category: "tonicos",
    productImg:
      "assets/tonico/dada-tonico-11-d2476aee80a8de546616377558860603-640-0.jpg",
  },
  {
    id: 11,
    name: "Tónico Hidratante Descongestivo Dermaglós",
    price: "1210",
    category: "tonicos",
    productImg:
      "assets/tonico/dermaglos_facial_tonico_hidratante_descongestivo_imagen1.jpg",
  },
  {
    id: 12,
    name: "Máscara Hidratante Reparadora ACF By Dadatina",
    price: "1890",
    category: "hidratantes",
    productImg:
      "assets/Hidratantes/acf_by-dadatina_mascara-nocturna_render-011-7c674442a15510e71216369925513710-640-0.png",
  },
  {
    id: 13,
    name: "Bruma Hidratante Hialurónico y Pantenol Biobellus",
    price: "1210",
    category: "hidratantes",
    productImg:
      "assets/tonico/dermaglos_facial_tonico_hidratante_descongestivo_imagen1.jpg",
  },
  {
    id: 14,
    name: "Máscara de Pepinos + Aloe + Menta",
    price: "1216",
    category: "hidratantes",
    productImg:
      "assets/Hidratantes/mascara-pepino1-c210fb00a57ad4826615536255455431-240-0.png",
  },

  {
    id: 15,
    name: "Amazing Black Mask Peel Off ACF",
    price: "470",
    category: "peel-off-exfoliantes",
    productImg:
      "assets/peel/amazingblack1-a11205673d15eac0ea16210042076113-640-0.jpg",
  },
  {
    id: 16,
    name: "Duo Mask Peel Off + Hydra Shock ACF",
    price: "490",
    category: "peel-off-exfoliantes",
    productImg:
      "assets/peel/duo-mask_exfoliante1-63f8bb1af6a49a4c9616246458332740-640-0.jpg",
  },
  {
    id: 17,
    name: "Duo Mask Exfoliante + Serum Hydra Shock ACF",
    price: "490",
    category: "peel-off-exfoliantes",
    productImg: "assets/peel/duo11-ea3ff1957a2c40498b16210041862124-640-0.jpg",
  },
  {
    id: 18,
    name: "Mascarilla After Fun: Vitamina E + Pepino + Aloe Vera x1 ACF",
    price: "450",
    category: "Máscaras Shock",
    productImg: "assets/shock/after fun.jpg",
  },
  {
    id: 19,
    name: "Bubble Mask x1 con carbón y burbujas de Oxígeno ACF",
    price: "490",
    category: "mascaras-shock",
    productImg: "assets/shock/bubble.jpg",
  },
  {
    id: 20,
    name: "Mascarilla Detox x1 ACF",
    price: "450",
    category: "mascaras-shock",
    productImg: "assets/shock/detox.jpg",
  },

  {
    id: 21,
    name: "Pantalla Solar Dermaglós con Color",
    price: "2175",
    category: "proteccion-solar",
    productImg: "assets/proteccion/dermaglos.jpg",
  },
  {
    id: 22,
    name: "Pantalla Solar Toque Seco ACF By Dadatina",
    price: "2990",
    category: "proteccion-solar",
    productImg: "assets/proteccion/dadatina.jpg",
  },
];

function splitProducts(size) {
  let chunk = [];

  for (let i = 0; i < productsData.length; i += size)
    chunk.push(productsData.slice(i, i + size));

  return chunk;
}

const allProducts = {
  productList: splitProducts(6),
  next: 1,
  limit: splitProducts(6).length,
};
