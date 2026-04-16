db.pedidos.insertMany(
    [
        {
            id_pedido: "PED0001",
            fecha: "2026-04-15",
            total: 10000,
            cliente: {
                nombre: "Felipe Jara",
                telefono: "+56912345678",
                ciudad: "Temuco"
            },
            productos: [
                {
                    nombre_producto: "Pizza",
                    cantidad: 1,
                    precio: 10000
                }
            ]
        },
        {
            id_pedido: "PED0002",
            fecha: "2026-04-14",
            total: 25000,
            cliente: {
                nombre: "Juan Perez",
                telefono: "+56912345677",
                ciudad: "Temuco"
            },
            productos: [
                {
                    nombre_producto: "Pizza",
                    cantidad: 2,
                    precio: 20000
                },
                {
                    nombre_producto: "Palitos de ajo",
                    cantidad: 5,
                    precio: 5000
                }
            ]
        },
        {
            id_pedido: "PED0003",
            fecha: "2026-04-15",
            total: 30000,
            cliente: {
                nombre: "Maira Muñoz",
                telefono: "+56912345666",
                ciudad: "Santiago"
            },
            productos: [
                {
                    nombre_producto: "Churrasco",
                    cantidad: 5,
                    precio: 20000
                },
                {
                    nombre_producto: "Coca-Cola Lata",
                    cantidad: 10,
                    precio: 10000
                }
            ]
        },
        {
            id_pedido: "PED0004",
            fecha: "2026-04-12",
            total: 6000,
            cliente: {
                nombre: "Maximo Paillan",
                telefono: "+56912345766",
                ciudad: "Santiago"
            },
            productos: [
                {
                    nombre_producto: "Completo",
                    cantidad: 2,
                    precio: 6000
                }
            ]
        },
        {
            id_pedido: "PED0005",
            fecha: "2026-04-11",
            total: 50000,
            cliente: {
                nombre: "Natalia Morales",
                telefono: "+56912345236",
                ciudad: "Temuco"
            },
            productos: [
                {
                    nombre_producto: "Pizza",
                    cantidad: 3,
                    precio: 30000
                },
                {
                    nombre_producto: "Pepsi Botella",
                    cantidad: 10,
                    precio: 20000
                }
            ]
        },
        {
            id_pedido: "PED0006",
            fecha: "2026-04-13",
            total: 5000,
            cliente: {
                nombre: "Maria Jose",
                telefono: "+56912341236",
                ciudad: "Temuco"
            },
            productos: [
                {
                    nombre_producto: "Hamburguesa",
                    cantidad: 1,
                    precio: 3000
                },
                {
                    nombre_producto: "Pepsi Botella",
                    cantidad: 1,
                    precio: 2000
                }
            ]
        },
        {
            id_pedido: "PED0007",
            fecha: "2026-04-16",
            total: 10000,
            cliente: {
                nombre: "Alfredo Chodil",
                telefono: "+56912341238",
                ciudad: "Santiago"
            },
            productos: [
                {
                    nombre_producto: "Lasaña",
                    cantidad: 1,
                    precio: 6000
                },
                {
                    nombre_producto: "Coca-Cola Botella",
                    cantidad: 2,
                    precio: 2000
                }
            ]
        },
        {
            id_pedido: "PED0008",
            fecha: "2026-04-09",
            total: 34000,
            cliente: {
                nombre: "Estefania Cañulef",
                telefono: "+56912341458",
                ciudad: "Temuco"
            },
            productos: [
                {
                    nombre_producto: "Lomo Saltado",
                    cantidad: 2,
                    precio: 20000
                },
                {
                    nombre_producto: "Ensalada",
                    cantidad: 2,
                    precio: 6000
                },
                {
                    nombre_producto: "Tiramusi",
                    cantidad: 2,
                    precio: 8000
                }
            ]
        },
        {
            id_pedido: "PED0009",
            fecha: "2026-04-09",
            total: 8000,
            cliente: {
                nombre: "Pamela Calfuman",
                telefono: "+56912371458",
                ciudad: "Santiago"
            },
            productos: [
                {
                    nombre_producto: "Arroz",
                    cantidad: 1,
                    precio: 5000
                },
                {
                    nombre_producto: "Ketchup",
                    cantidad: 1,
                    precio: 3000
                }
            ]
        },
        {
            id_pedido: "PED0010",
            fecha: "2026-04-08",
            total: 7500,
            cliente: {
                nombre: "Hernan Manriquez",
                telefono: "+56913571458",
                ciudad: "Santiago"
            },
            productos: [
                {
                    nombre_producto: "Cazuela",
                    cantidad: 1,
                    precio: 6000
                },
                {
                    nombre_producto: "Pan",
                    cantidad: 2,
                    precio: 1500
                }
            ]
        },
        {
            id_pedido: "PED0011",
            fecha: "2026-04-07",
            total: 20000,
            cliente: {
                nombre: "Philips Ugarte",
                telefono: "+56913554458",
                ciudad: "Temuco"
            },
            productos: [
                {
                    nombre_producto: "Hamburguesa",
                    cantidad: 4,
                    precio: 12000
                },
                {
                    nombre_producto: "Fanta Botella",
                    cantidad: 4,
                    precio: 8000
                }
            ]
        }
    ]
)


//Consultas

//Mostrar pedidos con total mayor a 30.000
db.pedidos.find(
    {total: {$gt:30000}}
)

//Mostrar pedidos realizados por clientes de “Temuco"
db.pedidos.find(
    {"cliente.ciudad": "Temuco"}
)

//Mostrar pedidos que contengan el producto “Pizza”
db.pedidos.find(
    {"productos.nombre_producto": "Pizza"}
)

//Mostrar nombre del cliente y total del pedido
db.pedidos.find(
    {},
    {"cliente.nombre":1,total:1,_id:0}
)

//Mostrar pedidos realizados después de una fecha específica
db.pedidos.find(
    {fecha: {$gt:"2026-04-10"}}
)

//Mostrar pedidos donde:
//a. el cliente sea de “Santiago”
//b. y el total sea mayor a 20.000
db.pedidos.find(
    {$and: [
        {
            "cliente.ciudad": "Santiago"
        },
        {
            total: {$gt: 20000}
        }
    ]}
)

// Mostrar pedidos donde:
//a. el producto sea “Hamburguesa”
//b. el total sea menor a 15.000
db.pedidos.find(
    {$or: [
        {
            "productos.nombre_producto": "Hamburguesa"
        },
        {
            total: {$lt: 15000}
        }
    ]}
)

//Actualizar el teléfono de un cliente en un pedido
db.pedidos.updateOne(
    {id_pedido:"PED0001"},
    {$set: 
        {"cliente.telefono": "+56987654321"}
    }
)

// Eliminar un pedido específico
db.pedidos.deleteOne(
    {id_pedido: "PED0005"}
)

// Listar todos los pedidos
db.pedidos.find()