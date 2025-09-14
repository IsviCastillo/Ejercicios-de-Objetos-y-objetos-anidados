const libro = {
    informacion: {
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Literatura infantil/Filosófica"
    },
    disponibilidad: {
        copias: 10,
        prestados: 3,
        ubicacion: "Estante F-25"
    },
    registro: {
        fechaPublicacion: "1943-04-06",
        fechaIngreso: "2020-01-15",
        ultimaRevision: "2024-06-10"
    }
};

console.log(".:Información del libro y Autor:.");
console.log(libro.informacion);

const disponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;
console.log("Copias disponibles:", disponibles);



const fechaActual = new Date().toISOString().split('T')[0]; 
libro.registro.ultimaRevision = fechaActual;
console.log(".:Fecha de ultima revisión actualizada:.");
console.log("Ultima revisión:", libro.registro.ultimaRevision);

libro.informacion.genero = "Fabula Filosofíca"; 
console.log(".:Genero actualizado:.");
console.log("Género:", libro.informacion.genero);


const { titulo } = libro.informacion;
const { ubicacion } = libro.disponibilidad;
console.log(".:Variables extraidas:.");
console.log("Título:", titulo);
console.log("Ubicación:", ubicacion);

console.log(".:Objeto libro actualizado completo:.");
console.log(libro);

