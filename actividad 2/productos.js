//BD > empresa
//Coleccion > productos

//Insertar 10 productos distintos

db.productos.insertMany(
    [
        {
            nombre: "Laptop HP",
            precio: 550000,
            stock: 16,
            bodega: "Santiago",
            categoria: "Tecnologia"
        },
        {
            nombre: "Mouse Logitech",
            precio: 30000,
            stock: 26,
            bodega: "Santiago",
            categoria: "Tecnologia"
        },
        {
            nombre: "Teclado Lenovo",
            precio: 20000,
            stock: 12,
            bodega: "Concepcion",
            categoria: "Tecnologia"
        },
        {
            nombre: "Impresora Epson",
            precio: 40000,
            stock: 11,
            bodega: "Santiago",
            categoria: "Tecnologia"
        },
        {
            nombre: "Silla",
            precio: 60000,
            stock: 17,
            bodega: "Valparaíso",
            categoria: "Muebles"
        },
        {
            nombre: "Escritorio",
            precio: 80000,
            stock: 6,
            bodega: "Valparaíso",
            categoria: "Muebles"
        },
        {
            nombre: "Resma de papel",
            precio: 5000,
            stock: 46,
            bodega: "Valparaíso",
            categoria: "Libreria"
        },
        {
            nombre: "Cuaderno",
            precio: 2000,
            stock: 54,
            bodega: "Concepcion",
            categoria: "Libreria"
        },
        {
            nombre: "Sillon",
            precio: 150000,
            stock: 18,
            bodega: "Concepcion",
            categoria: "Muebles"
        },
        {
            nombre: "Foco",
            precio: 12000,
            stock: 5,
            bodega: "Concepcion",
            categoria: "Iluminacion"
        }
    ]
)

//Buscar prodcutos tock menor a 10
db.productos.find(
    {
        stock:{$lt:10}
    },
    {nombre:1,stock:1,_id:0}
)

//Mostrar productos bodega Santiago
db.productos.find(
    {
        bodega:"Santiago"
    },
    {nombre:1,bodega:1,_id:0}
)

//Mostrar productos precio menor 10000
db.productos.find(
    {
        precio:{$lt:10000}
    },
    {nombre:1,precio:1,_id:0}
)

//Mostrar productos de stock mayor o igual a 50
db.productos.find(
    {
        stock:{$gte:50}
    },
    {nombre:1,stock:1,_id:0}
)