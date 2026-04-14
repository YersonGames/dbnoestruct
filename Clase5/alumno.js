db.alumnos.insertMany(
    [
        {
            "rut": "222-2",
            "nombre": "Jose",
            "apellido": "Chodil",
            "seccion": "AP-120",
            "carrera": "Analista programador",
            "asignatura": { "nombre":"BD no estructurada",
                            "notas": {
                                "n1": 40,
                                "n2": 56,
                                "n3": 63
                            }
            }
        },
        {
            "rut": "333.3",
            "nombre": "Maira",
            "apellido": "Lopez",
            "seccion": "AP-120",
            "carrera": "Analista programador",
            "asignatura": { "nombre":"BD no estructurada",
                            "notas": {
                                "n1": 56,
                                "n2": 32,
                                "n3": 68
                            }
            }
        }
    ]
)

//Buscar un alumno especidico por nombre, mostrar su seccion y nombre
db.alumnos.find(
    {"nombre":"Maira"},
    {nombre:1,seccion:1,_id:0}
)

//Update actualizar edad de un estudiante
db.alumnos.updateOne(
    {nombre:"Maira"},
    {$set:{
        edad: 19
    }})

db.alumnos.updateOne(
    {nombre:"Jose"},
    {$set:{
        edad: 21
    }})

//Eliminar un estudiante
db.alumnos.deleteOne({nombre:"Maira"})

//Elminar mas de un estudiante
db.alumnos.deleteMany({asignatura:"BD no estructurada"})´


// > < >= <= not in or and

//gt -> mayor que
//gte -> mayor o igual
//lt -> menor que
//lte -> menor o igual
//eq -> igual que

//Buscar mayor a 20 edad
db.alumnos.find({
    edad: {$gt:20}
    },
    {edad:1,nombre:1,_id:0})

//And
db.alumnos.find(
    {$and:
        [
            {apellido:"Chodil"},
            {carrera: "Analista programador"}
        ]
    },
    {nombre:1,edad:1,_id:0}
)

//Or
db.alumnos.find(
    {$or:
        [
            {apellido:"Chodil"},
            {carrera: "Analista programador"}
        ]
    },
    {nombre:1,edad:1,carrera:1, _id:0}
)