
async function loadTableData() {

  const tableBody = document.getElementById('table6BodyDataBasic');
  tableBody.innerHTML=" " ;
  const tableBodyData = await obtenerDatos(); //es un funcion asincrona

  tableBodyData.forEach(data => {
    const url_formProducto = 'form_productos.html?id=' + data.id;
    const row = document.createElement('tr');
    row.innerHTML =`
      <td>${data.id}</td>
      <td>${data.title}</td>
      <td>${data.category}</td>
      <td>
          <a href="${url_formProducto}" class="btn btn-primary">Edit</a>
          <a href="javascript:deleteProduct(${data.id})" class="btn btn-danger">Delete</a>
      </td>
      `;
    tableBody.appendChild(row);
  });
}

async function obtenerDatos() {
  try {
    // 1. Define la URL del endpoint de la API
    const url = 'https://fakestoreapi.com/products'; // Ejemplo de URL

    // 2. Realiza la petición GET usando fetch
    const respuesta = await fetch(url);

    // 3. Convierte la respuesta a formato JSON
    const datos = await respuesta.json();

    // 4. Utiliza los datos
  
    return datos; 
    // Aquí podrías actualizar la interfaz de usuario, por ejemplo
  } catch (error) {
    console.error('Error al consumir la API:', error);
  }
}


async function deleteProduct(id){
    try{
        const url = 'https://fakestoreapi.com/products/'+id;

        const respuesta = await fetch(url, {
            method: "DELETE"
        });

        const datos = await respuesta.json();
        alert("Producto borrado");
    } catch (error) {
        console.error('Error al consumir la API:', error);
        return null;
    }
}



