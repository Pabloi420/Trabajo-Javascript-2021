let categoriaPelicula = [ "Parasite", "El guason", "Historia de un matrimonio", "El irlandes", "Erase una vez"];
let categoriaDirector = [ "Bong Joon-ho", "Martin Scorsese", "Todd Phillips", "Sam Mendes", "Quentin Tarantino"];
let categoriaActrizPel = ["Renée Zellweger", "Cynthia Erivo", "Scarlett Johansson", "Saoirse Ronan", "Charlize Theron"];
let categoriaActorPel = ["Joaquin Phoenix", "Antonio Banderas", "Leonardo DiCaprio", "Adam Driver", "Jonathan Pryce"];
let categoriaReparto = ["Brad Pitt", "Tom Hanks", "Anthony Hopkins", "Al Pacino", "Joe Pesci"];

let categoria=[
    [],
    categoriaPelicula,
    categoriaDirector,
    categoriaActrizPel,
    categoriaActorPel,
    categoriaReparto,
];

let encabezado= [
    "Categoria de tu voto", "Candidato elegido", "Puntuación", "¿Recomienda ver la pelicula/performance?"
]


let atributos = {
    type: 'number',
    max: 10,
    min: 0,
    value: 0,
  };
  

let votos = [];
let botonesEli=[];
let rows=[];
let botonesEdi=[];
