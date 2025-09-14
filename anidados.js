const estudiante={
    nombre:"Juan",
    apellido:"Sanchez",
    edad:24,
    direccion:{
        pais:"El Salvador",
        calle:"Calle 1",
        numeroCasa:13
    }
}

console.log(estudiante.direccion);
console.log(estudiante.direccion.pais);
console.log(estudiante.direccion['numeroCasa']);

estudiante.direccion.cpostal="503"; //agregar un nuevo valor al objeto anidado
console.log(estudiante.direccion);

estudiante.direccion.numeroCasa=30; //modificar un valor del objeto anidado
console.log(estudiante.direccion);

delete estudiante.direccion.cpostal; //eliminar un valor del objeto anidado
console.log(estudiante.direccion);