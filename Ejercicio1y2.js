const animal = {
    raza: "Pastor Alemán",
    tamaño: "mediano",
    edad: 3,
    color: "Café"
}

console.log("Objeto completo:", animal);


console.log("Raza:", animal.raza);
console.log("Tamaño:", animal.tamaño);
console.log("Edad:", animal.edad);
console.log("Color:", animal.color);

animal.genero = "Macho"; 
console.log(animal);
delete animal.raza; 
console.log(animal);


