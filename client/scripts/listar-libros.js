const listaDeLibros = [
  {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    genero: 'Realismo mágico',
    año: 1967,
  },
  {
    titulo: 'Crónica de una muerte anunciada',
    autor: 'Gabriel García Márquez',
    genero: 'Ficción',
    año: 1981,
  },
  {
    titulo: 'El otoño del patriarca',
    autor: 'Gabriel García Márquez',
    genero: 'Realismo mágico',
    año: 1975,
  },
  {
    titulo: '1984',
    autor: 'George Orwell',
    genero: 'Ficción política',
    año: 1949,
  },
  {
    titulo: 'El señor de los anillos',
    autor: 'J.R.R. Tolkien',
    genero: 'Fantasía',
    año: 1954,
  },
  {
    titulo: 'The Name of the Wind',
    autor: 'Patrick Rothfuss',
    genero: 'Fantasía',
    año: 2007,
  },
  {
    titulo: 'To Kill a Mockingbird',
    autor: 'Harper Lee',
    genero: 'Novela social',
    año: 1960,
  },
  {
    titulo: 'La Odisea',
    autor: 'Homero',
    genero: 'Epopeya',
    año: -800,
  },
  {
    titulo: 'La isla del tesoro',
    autor: 'Robert Louis Stevenson',
    genero: 'Aventura',
    año: 1883,
  },
  {
    titulo: 'El conde de Montecristo',
    autor: 'Alejandro Dumas',
    genero: 'Aventura',
    año: 1844,
  },
  {
    titulo: 'El retrato de Dorian Gray',
    autor: 'Oscar Wilde',
    genero: 'Ficción gótica',
    año: 1890,
  },
  {
    titulo: 'Drácula',
    autor: 'Bram Stoker',
    genero: 'Ficción gótica',
    año: 1897,
  },
  {
    titulo: 'El guardián entre el centeno',
    autor: 'J.D. Salinger',
    genero: 'Novela de iniciación',
    año: 1951,
  },
  {
    titulo: 'Matar un ruiseñor',
    autor: 'Harper Lee',
    genero: 'Novela social',
    año: 1960,
  },
  {
    titulo: 'El gran Gatsby',
    autor: 'F. Scott Fitzgerald',
    genero: 'Novela de época',
    año: 1925,
  },
  {
    titulo: 'Moby Dick',
    autor: 'Herman Melville',
    genero: 'Novela de aventuras',
    año: 1851,
  },
  {
    titulo: 'La muerte de Artemio Cruz',
    autor: 'Carlos Fuentes',
    genero: 'Ficción',
    año: 1962,
  },
  {
    titulo: 'El coronel no tiene quien le escriba',
    autor: 'Gabriel García Márquez',
    genero: 'Realismo mágico',
    año: 1961,
  },
  {
    titulo: 'Los cuatro vientos',
    autor: 'Kristin Hannah',
    genero: 'Ficción histórica',
    año: 2021,
  },
  {
    titulo: 'La insoportable levedad del ser',
    autor: 'Milan Kundera',
    genero: 'Ficción',
    año: 1984,
  },
  {
    titulo: 'La naranja mecánica',
    autor: 'Anthony Burgess',
    genero: 'Ciencia ficción',
    año: 1962,
  },
  {
    titulo: 'El gran teatro del mundo',
    autor: 'Pedro Calderón de la Barca',
    genero: 'Teatro',
    año: 1655,
  },
  {
    titulo: 'El jardín de los cerezos',
    autor: 'Antón Chéjov',
    genero: 'Teatro',
    año: 1904,
  },
  {
    titulo: 'La muerte en Venecia',
    autor: 'Thomas Mann',
    genero: 'Ficción',
    año: 1912,
  },
  {
    titulo: 'El tango de la guardia vieja',
    autor: 'Arturo Pérez-Reverte',
    genero: 'Ficción',
    año: 2012,
  },
  {
    titulo: 'El nombre de la rosa',
    autor: 'Umberto Eco',
    genero: 'Ficción histórica',
    año: 1980,
  },
];

const cargarLibros = () => {
  let contenedor = document.getElementById('tblLibros');
  let tabla = '';

  listaDeLibros.forEach((libro) => {
    tabla += `<tr>
    <td>${libro.titulo}</td>
    <td>${libro.autor}</td>
    <td>${libro.genero}</td>
    <td>${libro.año}</td>
    </tr>
    `;
  });

  contenedor.innerHTML = tabla;
};

console.log(listaDeLibros);
cargarLibros();

let btnAutorLibros = document.getElementById('btnAutorLibros');
let btnLibrosViejos = document.getElementById('btnLibrosViejos');
let btnLibrosGenero = document.getElementById('btnLibrosGenero');
let btnModerno = document.getElementById('btnModerno');
let btnAntiguo = document.getElementById('btnAntiguo');
let btnGeneroMasEscrito = document.getElementById('btnGeneroMasEscrito');

const autorLibros = () => {
  alert('puto el que lee');
};
btnAutorLibros.addEventListener('click', autorLibros);

const librosViejos = () => {
  alert('puto el que lee');
};
btnLibrosViejos.addEventListener('click', librosViejos);

const librosGenero = () => {
  let genero = prompt('Ingrese el genero y le listaremos los libros que haya');
  let lista = '';

  listaDeLibros.forEach((libro) => {
    if (libro.genero.toUpperCase === genero.toUpperCase) {
      lista += libro.titulo + ' de ' + libro.autor + ' del ' + libro.año + '\n';
    }
  });

  lista === ''
    ? alert('No hay ningun libro de ' + genero)
    : alert('Libros de ' + genero + '\n' + lista);
};
btnLibrosGenero.addEventListener('click', librosGenero);

const moderno = () => {
  let masModerno = listaDeLibros[0];
  listaDeLibros.forEach((libro) => {
    if (libro.año > masModerno.año) {
      masModerno = libro;
    }
  });
  alert(
    'El libro mas moderno es ' +
      masModerno.titulo +
      ' de ' +
      masModerno.autor +
      ' del año ' +
      masModerno.año,
  );
};
btnModerno.addEventListener('click', moderno);

const antiguo = () => {
  let masAntiguo = listaDeLibros[0];
  listaDeLibros.forEach((libro) => {
    if (libro.año < masAntiguo.año) {
      masAntiguo = libro;
    }
  });
  alert(
    'El libro mas antiguo es ' +
      masAntiguo.titulo +
      ' de ' +
      masAntiguo.autor +
      ' del año ' +
      masAntiguo.año,
  );
};
btnAntiguo.addEventListener('click', antiguo);

const generoMasEscrito = () => {
  let genero = prompt('Ingrese el ');
};
btnGeneroMasEscrito.addEventListener('click', generoMasEscrito);
