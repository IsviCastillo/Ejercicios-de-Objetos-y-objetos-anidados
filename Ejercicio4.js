const producto = {
    detalles: {
        nombre: "Laptop",
        precio: 1200,
        categoria: "Computadoras"
    },
    inventario: {
        stock: 150,
        proveedor: "Dell",
        ubicacion: "Almacén X"
    },
    historial: {
        fechaIngreso: "2025-06-01",
        ultimaVenta: "2025-09-15",
        ventasTotales: 102
    }
}

console.log(".:Detalles del producto:.");
console.log(producto.detalles);

producto.inventario.stock += 50;
producto.detalles.categoria = "Electrónica"; 

const { nombre, precio } = producto.detalles; 
console.log(".:Objeto producto actualizado:.");
console.log("Nombre del producto:", nombre);
console.log("Precio del producto:", precio);

console.log(".:Objeto producto actualizado completo:.");
console.log(producto);