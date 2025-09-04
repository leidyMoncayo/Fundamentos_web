const categorias = [
  {
    titulo: 'Ropa para Hombre',
    img: './imgs/ropa1.jpg',
    alt: 'Ropa para Hombre',
    link: 'hombres.html',
    img:{id:"img1", src:"../imgs/ropa1.png", alt:"imagen 1", width:"300"}
  },
  {
    titulo: 'Ropa para Mujeres',
    img: './imgs/ropaMujer.jpg',
    alt: 'Ropa para Mujer',
    link: 'mujeres.html',
    img:{id:"img1", src:"../imgs/ropaMujer.png", alt:"imagen 2", width:"300"}
  },
  {
    titulo: 'Accesorios',
    img: './imgs/accesorios.jpg',
    alt: 'Accesorios',
    link: 'accesorios.html',
    img:{id:"img1", src:"../imgs/accesorios.png", alt:"imagen 3", width:"300"}
  }

];

const productosDestacados = [
  {
    titulo: 'Pack trajetas de regalo',
    img: './imgs/tarjetas.jpg',
    alt: 'Pack tarjetas de regalo',
    precio:'$84.99',
    link: 'producto1.html',
    img:{id:"img1", src:"../imgs/tarjetas.png", alt:"imagen 1", width:"150"}
  },

   {
    titulo: 'Leggings de Yoga',
    img: './imgs/leggins.jpg',
    alt: 'Leggings de Yoga',
    precio:'$39.99',
    link: 'producto2.html',
    img:{id:"img1", src:"../imgs/leggins.png", alt:"imagen 2", width:"150"}
  },

   {
    titulo: 'Zapatillas Running',
    img: './imgs/zapatillas.jpg',
    alt: 'Zapatillas Running',
    precio:'$149.99',
    link: 'producto3.html',
    img:{id:"img1", src:"../imgs/zapatillas.png", alt:"imagen 3", width:"150"}
  },

   {
    titulo: 'Shorts Deportivos',
    img: './imgs/shorts.jpg',
    alt: 'Shorts Deportivos',
    precio:'$24.99',
    link: 'producto3.html',
    img:{id:"img1", src:"../imgs/shorts.png", alt:"imagen 4", width:"150"}
  }
];

function crearArticulo({ titulo, img, alt, link }) {
  return `
    <article class="categorias">
      <h3>${titulo}</h3>
      <div id="${img.id}">
        <img src="${img.src}" alt="${img.alt}" width="${img.width}">
      </div>
      <a href="${link}">Ver más</a>
    </article>
  `;
}

function crearProducto({ titulo, img, precio, link }) {
  return `
    <article class="producto">
      <h3>${titulo}</h3>
      <div>
        <img src="${img.src}" alt="${img.alt}" width="${img.width}">
      </div>
      <p class="precio">${precio}</p>
      <a href="${link}">Ver detalles</a>
      <button>Añadir al carrito</button>
    </article>
  `;
}

