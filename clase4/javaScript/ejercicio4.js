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
    img: './imgs/ropa1.jpg',
    alt: 'Ropa para Mujer',
    link: 'mujeres.html',
    img:{id:"img1", src:"../imgs/ropa1.png", alt:"imagen 2", width:"300"}
  },
  {
    titulo: 'Accesorios',
    img: './imgs/ropa1.jpg',
    alt: 'Accesorios',
    link: 'accesorios.html',
    img:{id:"img1", src:"../imgs/ropa1.png", alt:"imagen 3", width:"300"}
  }
];

function crearArticulo({ titulo, img, alt, link, idImg }) {
  return `
    <article class="categoria">
      <h3>${titulo}</h3>
      <div id="${idImg}">
        <img src="${categorias.img.src}" alt="${categorias.img.alt}" width="${categorias.img.width}">
      </div>
      <a href="${link}">Ver más</a>
    </article>
  `;
}

