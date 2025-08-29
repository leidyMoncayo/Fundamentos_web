const datosImagen = [
    {id:"img1", src:"../imgs/ropa1.png", alt:"ropa_hombre", width:"300"},
    {id:"img2", src:"../imgs/ropaMujer.png", alt:"ropa_mujer", width:"300"},
    {id:"img3", src:"../imgs/accesorios.png", alt:"accesorios", width:"300", width:"230"},
    {id:"img4", src:"../imgs/tarjetas.png", alt:"pack_tarjetas", width:"150"},
    {id:"img5", src:"../imgs/leggins.png", alt:"leggings_yoga", width:"150"},
    {id:"img6", src:"../imgs/zapatilla.png", alt:"zapatillas_running", width:"150"},
    {id:"img7", src:"../imgs/shorts.png", alt:"shorts.png", width:"150"}
];

function crearImagen(src, alt,width) { 
    return '<img src="${src}" alt="${alt}" width="${width}">';
}