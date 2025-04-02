fetch('datos.json')
  .then(response => response.json())
  .then(data => {
    const sec1 = document.getElementById('sec1');
    const sec2 = document.getElementById('sec2');

    // Insertar ácidos
    data.acidos.forEach(acido => {
      const producto = `
        <div class="${acido.clase}">
          <div class="contenedorimg">
            <img class="imagenes" src="${acido.imagen}">
          </div>
          <div class="contenido_tt_con">
            <div class="titulo">${acido.nombre}</div>
            <div class="contenido">${acido.descripcion}</div>
          </div>
        </div>
      `;
      sec1.innerHTML += producto;
    });

    // Insertar bases
    data.bases.forEach(base => {
      const producto = `
        <div class="${base.clase}">
          <div class="contenedorimg">
            <img class="imagenes" src="${base.imagen}">
          </div>
          <div class="contenido_tt_con">
            <div class="titulo">${base.nombre}</div>
            <div class="contenido">${base.descripcion}</div>
          </div>
        </div>
      `;
      sec2.innerHTML += producto;
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });

  fetch('datos.json')
  .then(response => {
    console.log('Respuesta del servidor:', response);
    return response.json();
  })
  .then(data => {
    console.log('Contenido del JSON:', data);
    data.acidos.forEach(acido => console.log(acido));
    data.bases.forEach(base => console.log(base));
  })
  .catch(error => console.error('Error fetching JSON:', error));
