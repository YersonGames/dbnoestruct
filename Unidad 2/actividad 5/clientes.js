db.clientes.insertMany(
    [
        {
            nombre: "Jose",
            apellido: "Bravo",
            edad: 21,
            ciudad: "Temuco",
            cuentas: [
                {
                    tipo_cuenta: "Ahorro",
                    saldo:200000,
                    transferencias: [
                        {
                            destinatario: "Mario",
                            monto: 20000
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Maira",
            apellido: "Jara",
            edad: 24,
            ciudad: "Santiago",
            cuentas: [
                {
                    tipo_cuenta: "Corriente",
                    saldo: 120000,
                    transferencias: [
                        {
                            destinatario: "Martin",
                            monto: 3000
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Sebastian",
            apellido: "Paillan",
            edad: 26,
            ciudad: "Temuco",
            cuentas: [
                {
                    tipo_cuenta: "Ahorro",
                    saldo:500000,
                    transferencias: [
                        {
                            destinatario: "Fabiola",
                            monto: 50000
                        },
                        {
                            destinatario: "Ruben",
                            monto: 7000
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Bastian",
            apellido: "Lopez",
            edad: 19,
            ciudad: "Temuco",
            cuentas: [
                {
                    tipo_cuenta: "Corriente",
                    saldo:50000,
                    transferencias: [
                        {
                            destinatario: "Pedro",
                            monto: 10000
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Catalina",
            apellido: "Torres",
            edad: 32,
            ciudad: "Villarrica",
            cuentas: [
                {
                    tipo_cuenta: "Ahorro",
                    saldo:2300000,
                    transferencias: [
                        {
                            destinatario: "Marcos",
                            monto: 250000
                        },
                        {
                            destinatario: "Antonio",
                            monto: 10000
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Maria Jose",
            apellido: "Saravia",
            edad: 28,
            ciudad: "Concepcion",
            cuentas: [
                {
                    tipo_cuenta: "Corriente",
                    saldo:400000,
                    transferencias: [
                        {
                            destinatario: "Velentina",
                            monto: 15000
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Valentina",
            apellido: "Cid",
            edad: 25,
            ciudad: "Concepcion",
            cuentas: [
                {
                    tipo_cuenta: "Ahorro",
                    saldo:660000,
                    transferencias: [
                        {
                            destinatario: "Eduardo",
                            monto: 2000
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Felipe",
            apellido: "Gallardo",
            edad: 45,
            ciudad: "Villarrica",
            cuentas: [
                {
                    tipo_cuenta: "Ahorro",
                    saldo:6000000,
                    transferencias: [
                        {
                            destinatario: "Carolina",
                            monto: 60000
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Guillermo",
            apellido: "Torres",
            edad: 35,
            ciudad: "Santiago",
            cuentas: [
                {
                    tipo_cuenta: "Corriente",
                    saldo:400000,
                    transferencias: [
                        {
                            destinatario: "Jose",
                            monto: 40000
                        },
                        {
                            destinatario: "Pablo",
                            monto: 50000
                        }
                    ]
                }
            ]
        },
        {
            nombre: "Estefania",
            apellido: "Lara",
            edad: 20,
            ciudad: "Villarrica",
            cuentas: [
                {
                    tipo_cuenta: "Ahorro",
                    saldo:600000,
                    transferencias: [
                        {
                            destinatario: "German",
                            monto: 10000
                        },
                        {
                            destinatario: "Juan",
                            monto: 50000
                        }
                    ]
                }
            ]
        }
    ]
    
)

//Mostrar todos los clientes
db.clientes.find({},{nombre:1,apellido:1,_id:0})

//Mostrar todos los clientes con apellido Torres
db.clientes.find(
    {
        apellido: "Torres"
    }
)

//Mostrar las cuentas con un saldo mayor a 50000
db.clientes.find(
    {
        "cuentas.saldo": {$gt: 50000}
    }
)

//Mostrar los clientes con el tipo de cuenta Ahorro
db.clientes.find(
    {
        "cuentas.tipo_cuenta": "Ahorro"
    }
)

//Mostrar los clientes de la ciudad de Temuco y con saldo menor a 5000 en sus cuentas
db.clientes.find(
    {
    $and:
        [
            {
                ciudad: "Temuco"
            },
            {
                "cuentas.saldo": {$lt: 5000}
            }
        ]
    }
)

//Mostrar clientes de la ciudad de Temuco y Santiago
db.clientes.find(
    {
        $or: [
            {
                ciudad: "Temuco"
            },
            {
                ciudad: "Santiago"
            }
        ]
    }
)

//Mostrar los clientes de Santiago que tenga el tipo de cuenta Corriente y un saldo menor a 20000
db.clientes.find(
    {
        $and: [
            {
                ciudad: "Santiago"
            },
            {
                "cuentas.tipo_cuenta": "Corriente"
            },
            {
                "cuentas.saldo": {$lt: 20000}
            }
        ]
    }
)

//Actualizar el saldo de un cliente en 99999
db.clientes.updateOne(
    {
        $and: [
            {
                nombre: "Jose"
            },
            {
                apellido: "Bravo"
            }
        ]
    },
    {
        $set: {
            "cuentas.0.saldo": 99999
        }
    }
)

//Eliminar todos los clientes que sean de la ciudad de Santiago
db.clientes.deleteMany(
    {
        ciudad: "Santiago"
    }
)

//Cambiar el tipo de cienta a Premium cuando el sueldo sea mayor de 150000
db.clientes.updateMany(
    {
        "cuentas.saldo": {$gt: 150000}
    },
    {
        $set: {
            "cuentas.0.tipo_cuenta": "Premium"
        }
    }
)