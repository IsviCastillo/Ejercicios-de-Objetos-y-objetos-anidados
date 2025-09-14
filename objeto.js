// const nombre="Gissel";
// const edad="19";
// const altura="1.65";

const persona={  //grupo de llave valor
    nombre:"Gissel",
    edad:"19",
    altura:"1.65"
}

console.log(persona);
console.log(persona.nombre);
console.log(persona['edad']);

persona.ColorOjos="Cafes"; //agregar un nuevo valor al objeto
console.log(persona);

delete persona.altura; //eliminar un valor del objeto
console.log(persona);

persona.edad="20"; //modificar un valor del objeto
console.log(persona);

const nom= persona.nombre; //asignar un valor del objeto a una variable
console.log(nom);

// const {nombre}=persona; //desestructuracion
// const {edad}=persona; //desestructuracion
// console.log(nombre);
// console.log(edad);

const {nombre,edad}=persona; //desestructuracion
console.log(nombre,edad);